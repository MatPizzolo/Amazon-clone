import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { ExistingUserDTO } from 'src/user/dtos/existing-user.dto copy';
import { NewUserDTO } from 'src/user/dtos/new-user.dto';
import { UserDetails } from 'src/user/user-details.interface';

import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
	constructor(private UserService: UserService, private jwtService: JwtService) { }

	async hashPassword(password: string): Promise<string> {
		return bcrypt.hash(password, 12);
	}

	async register(user: Readonly<NewUserDTO>): Promise<UserDetails | any> {
		const { name, email, password } = user;
		const existingUser = await this.UserService.findByEmail(email);
		if (existingUser)
			return "email taken"
		const hashedPassword = await this.hashPassword(password);
		const newUser = await this.UserService.create(name, email, hashedPassword);
		return this.UserService._getUserDetails(newUser);
	}

	async doesPasswordMatch(password: string, hashedPassword: string): Promise<boolean> {
		return bcrypt.compare(password, hashedPassword);
	}

	async validateUser(email: string, password: string): Promise<UserDetails | null> {
		const user = await this.UserService.findByEmail(email);
		const doesUserExist = !!user;
		if (!doesUserExist)
			return null;
		const doesPasswordMatch = await this.doesPasswordMatch(password, user.password);
		if (!doesPasswordMatch)
			return null;
		return this.UserService._getUserDetails(user);
	}

	async login(existingUser: ExistingUserDTO): Promise<{ token: string } | null> {
		const { email, password } = existingUser;
		const user = this.validateUser(email, password);
		if (!user)
			return null;
		const jwt = await this.jwtService.signAsync({user});
		return {token: jwt};
	}
}
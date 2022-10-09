import { Injectable } from '@nestjs/common';
import { SignupInput } from './dto/inputs/signup.input';
import { AuthResponse } from './types/auth-response.types';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {

    constructor(
        private readonly usersService: UsersService,
    ) {}

    async signup(signupInput: SignupInput): Promise<AuthResponse> { 

        //Todo: crear usuario
        const user = await this.usersService.create( signupInput )

        //Todo: crear JWT
        const token = 'ABC123';

        return {token, user}
               
    }
}

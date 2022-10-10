import { Injectable, BadRequestException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { SignupInput, LoginInput } from './dto/inputs';
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

    async login(loginInput: LoginInput): Promise<AuthResponse>{
        
        const {email, password} = loginInput;
        const user = await this.usersService.findOneByEmail( email );

        if( !bcrypt.compareSync( password, user.password) ){
            throw new BadRequestException('Email / Password do not match');
        }
        
        //TODO: JWT
        const token = 'ABC123';
        
        return {
            token,
            user
        }
    }
}

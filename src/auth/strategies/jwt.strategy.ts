import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { User } from '../../users/entities/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy( Strategy ){

    constructor(
        ConfigService: ConfigService
    ) {
        super({
            secretOrKey: ConfigService.get('JWT_SECRET'),
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        })
    }

    async validate( payload: any ): Promise<User> {
        
        console.log({ payload })

        throw new UnauthorizedException('Token not valid :(')
    }
}
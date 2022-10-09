import { Mutation, Resolver, Query } from '@nestjs/graphql';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService
  ) {}

  @Mutation(, {name: 'signup'})
  async signup(
    /** signupinput */
  ): Promise</** ??? */>{
    // return this.authService.signup(/** ??? */)
  }

  @Mutation(, {name: 'login'})
  async login(
    /** logininput */
  ): Promise</** ??? */>{
    // return this.authService.login(/** ??? */)
  }

  @Query(, {name: 'revalidate'})
  async revalidateToken(){
    // return this.authService.revalidateToken() /**??? */
  }
}

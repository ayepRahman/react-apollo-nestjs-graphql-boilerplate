import { Resolver, Mutation, Args } from '@nestjs/graphql';
import {
  Logger,
  UnauthorizedException,
  UseGuards,
  BadRequestException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { LoggedInUserDto } from 'src/users/dto/logged-in-user.dto';
import { ErrorMessage } from 'src/common/enums/error-message';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {}

  @Mutation(() => LoggedInUserDto)
  async login(
    @Args({ name: 'email', type: () => String }) email: string,
    @Args({ name: 'password', type: () => String }) password: string,
  ): Promise<LoggedInUserDto> {
    try {
      const user = await this.authService.validateUser(email, password);

      // Return empty object if user is unable to be validated
      if (!user) {
        throw new UnauthorizedException();
      }

      const accessToken = await this.authService.generateToken(
        user.email,
        user._id,
      );

      const loggedInUser = <LoggedInUserDto>{};
      loggedInUser._id = user._id;
      loggedInUser.username = user.username;
      loggedInUser.email = user.email;
      loggedInUser.accessToken = accessToken;

      return loggedInUser;
    } catch (error) {
      throw new BadRequestException(ErrorMessage.COMMON);
    }
  }

  // @UseGuards(GqlAuthGuard)
  // @Mutation(() => LoggedInUser, { name: 'resetUserPassword' })
  // async resetUserPassword(
  //   @UserDecorator() incomingUser: ResetPasswordUser,
  //   @Args({ name: 'password', type: () => String }) password: string,
  // ): Promise<LoggedInUser> {
  //   const user = await this.userService.setUserPassword(
  //     incomingUser.email,
  //     password,
  //     incomingUser.password,
  //   );

  //   if (user) {
  //     const accessToken = await this.authService.generateToken(
  //       user.email,
  //       user._id,
  //     );
  //     const loggedInUser = <LoggedInUser>{};
  //     loggedInUser._id = user._id;
  //     loggedInUser.email = user.email;
  //     loggedInUser.accessToken = accessToken;

  //     return loggedInUser;
  //   }

  //   throw new UnauthorizedException();
  // }

  // @Mutation(returns => Response, { name: 'requestResetPassword' })
  // async requestPasswordReset(
  //   @Args({ name: 'email', type: () => String }) email: string,
  // ): Promise<Response> {
  //   const isSent = await this.authService.requestPasswordReset(email);

  //   if (isSent) {
  //     return new Response(RequestStatus.Success);
  //   }

  //   return new Response(RequestStatus.UnknownError);
  // }
}

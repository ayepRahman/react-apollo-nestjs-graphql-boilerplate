import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
import { User } from '../users/users.schema';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService, // private readonly mailerService: MailerService,
  ) {}

  // @dev validate a user by checking if creds match
  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.usersService.findOneByEmail(email);
    if (user && (await compare(password, user.password))) {
      return user;
    }
    return null;
  }

  // @dev generate token from user details
  async generateToken(email: string, _id: string): Promise<string> {
    const payload = { email, _id };
    const accessToken = await this.jwtService.signAsync(payload);
    return accessToken;
  }

  // // @dev generate token from user details and old password
  // async generateTokenForReset(
  //   email: string,
  //   _id: string,
  //   password: string,
  // ): Promise<ResetPasswordUser> {
  //   const payload = { email, _id, password };
  //   const accessToken = await this.jwtService.signAsync(payload);
  //   return {
  //     _id,
  //     email,
  //     password,
  //     accessToken,
  //   };
  // }

  // // Method to request for password reset
  // async requestPasswordReset(email: string): Promise<boolean> {
  //   // Fetch user and make sure they exist
  //   const user = await this.userService.findOneByEmail(email);
  //   if (!user) {
  //     return null;
  //   }

  //   const resetUserPayload = await this.generateTokenForReset(
  //     user.email,
  //     user._id,
  //     user.password,
  //   );

  //   // Send email and do not wait for async response
  //   this.mailerService.sendMail({
  //     to: user.email,
  //     from: 'Synthesis Support <support@syn-the-sis.io>',
  //     subject: 'Reset Your Synthesis Account Password',
  //     html: resetPasswordTemplate(
  //       user.email,
  //       `${process.env.TREND_SERVICE_BASE_URL}/resetpassword?token=${resetUserPayload.accessToken}`,
  //     ),
  //   });

  //   return true;
  // }
}

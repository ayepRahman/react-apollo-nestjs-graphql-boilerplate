// Nestjs convention DTO (data transfer object) - https://docs.nestjs.com/controllers#request-payloads

import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class LoggedInUserDto {
  @Field({ nullable: true })
  _id: string;

  @Field({ nullable: true })
  username: string;

  @Field({ nullable: true })
  email: string;

  @Field(() => String)
  accessToken: string;
}

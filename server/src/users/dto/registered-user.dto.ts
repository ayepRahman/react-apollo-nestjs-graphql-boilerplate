// Nestjs convention DTO (data transfer object) - https://docs.nestjs.com/controllers#request-payloads

import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class RegisteredUserDto {
  @Field(() => ID)
  _id: string;

  @Field(() => String)
  email: string;
}

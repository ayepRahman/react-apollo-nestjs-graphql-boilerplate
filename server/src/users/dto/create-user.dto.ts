// Nestjs convention DTO (data transfer object) - https://docs.nestjs.com/controllers#request-payloads

import { InputType, Field, ObjectType } from '@nestjs/graphql';

@InputType()
export class CreateUserInputDto {
  @Field(() => String)
  username: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;
}

@ObjectType()
export class CreateUserResponseDto {
  @Field(() => Boolean)
  ok: boolean;
}

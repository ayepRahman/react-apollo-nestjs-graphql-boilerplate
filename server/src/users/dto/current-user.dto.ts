// Nestjs convention DTO (data transfer object) - https://docs.nestjs.com/controllers#request-payloads

import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class CurrentUserDto {
  @Field(() => String)
  _id: string;

  @Field(() => String)
  email: string;
}

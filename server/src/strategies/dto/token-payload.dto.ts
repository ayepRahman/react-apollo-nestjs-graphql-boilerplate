import { ObjectType, Field, ID } from '@nestjs/graphql';

ObjectType();
export class TokenPayloadDto {
  @Field(() => ID)
  _id: string;

  @Field(() => ID)
  email: string;

  @Field(() => ID)
  password: string;
}

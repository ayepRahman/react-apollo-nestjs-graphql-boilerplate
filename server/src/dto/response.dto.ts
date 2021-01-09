import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CommonResponseDto {
  @Field(() => Boolean)
  ok: boolean;
}

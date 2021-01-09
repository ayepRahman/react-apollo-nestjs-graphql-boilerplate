import { Field, InputType } from '@nestjs/graphql';
import {} from 'class-validator';

@InputType()
export class UserOneByIdInputDto {
  @Field()
  uid: string;
}

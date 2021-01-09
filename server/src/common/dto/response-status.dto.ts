import { ObjectType, Field } from '@nestjs/graphql';
import { ResponseStatusEnum } from '../enums/response-status';

@ObjectType()
export class ResponseStatus {
  @Field(() => ResponseStatusEnum)
  result: ResponseStatusEnum;
}

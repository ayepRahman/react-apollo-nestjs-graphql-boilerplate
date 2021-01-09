import { registerEnumType } from '@nestjs/graphql';

export enum ResponseStatusEnum {
  SUCCESS,
  FAILURE,
  UNKNOWN_ERROR,
}

registerEnumType(ResponseStatusEnum, {
  name: 'ResponseStatusEnum',
});

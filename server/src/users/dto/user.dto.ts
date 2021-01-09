import { Field, ObjectType, OmitType } from '@nestjs/graphql';
import { UserModel } from '../users.schema';

@ObjectType()
export class PublicUser extends OmitType(UserModel, ['password']) {}

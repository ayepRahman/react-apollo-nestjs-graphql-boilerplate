import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { hash } from 'bcryptjs';
import { Field, ObjectType } from '@nestjs/graphql';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  imgUrl: string;
}

@ObjectType()
export class UserModel {
  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  imgUrl: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre<User>('save', async function() {
  if (this.isModified('password')) {
    this.password = await hash(this.password, Number(process.env.SALT));
  }
});

// export const UserSchema = new mongoose.Schema({
//   username: { type: String, required: true },
//   email: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: function() {
//       const { googleAccount, facebookAccount } = this;
//       const isPasswordRequired =
//         !!googleAccount.accessToken || !!facebookAccount.accessToken;
//       return !isPasswordRequired;
//     },
//   },
//   imgUrl: String,
//   googleAccount: {
//     accessToken: { type: String },
//   },
//   facebookAccount: {
//     accessToken: { type: String },
//   },
// });

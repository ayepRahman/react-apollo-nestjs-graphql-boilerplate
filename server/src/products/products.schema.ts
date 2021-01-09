import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  imgUrl: string;
}

@ObjectType()
export class ProductModel {
  @Field()
  _id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  price: number;

  @Field()
  imgUrl: string;
}

export type ProductDocument = Product & Document;
export const ProductSchema = SchemaFactory.createForClass(Product);

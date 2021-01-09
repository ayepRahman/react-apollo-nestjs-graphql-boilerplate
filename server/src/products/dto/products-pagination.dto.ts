import { ObjectType, Field, Int } from '@nestjs/graphql';
import { ProductModel } from '../products.schema';

@ObjectType()
export class ProductListDto {
  @Field(() => Int)
  totalCounts: number;

  @Field(() => [ProductModel])
  products: ProductModel[];
}

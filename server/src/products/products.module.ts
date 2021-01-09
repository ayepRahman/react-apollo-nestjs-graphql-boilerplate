import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ProductSchema,
  ProductModel,
  ProductDocument,
} from './products.schema';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Products', schema: ProductSchema }]),
  ],
  providers: [ProductsResolver, ProductsService, ProductModel],
  exports: [ProductsService, ProductModel],
})
export class ProductsModule {}

/**
 * Service:
 * NestJs convention of injecting services e.g with Mongoose.
 */

import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ProductDocument } from './products.schema';
import { ErrorMessage } from 'src/common/enums/error-message';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Products') private productModel: Model<ProductDocument>,
  ) {}

  async getCountsBySearch(search: string) {
    return await this.productModel.count({
      name: new RegExp(search, 'i'),
    });
  }

  async getProducts(
    limit: number,
    offset: number,
    search: string,
  ): Promise<ProductDocument[]> {
    return await this.productModel.find(
      { name: new RegExp(search, 'i') },
      null,
      {
        limit,
        skip: offset,
      },
    );
  }

  getProductsByIds = async (productIds: string[]) => {
    return await this.productModel.find({ _id: { $in: productIds } });
  };
}

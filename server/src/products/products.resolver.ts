import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { ProductsService } from 'src/products/products.service';
import { ProductListDto } from './dto/products-pagination.dto';

@Resolver()
export class ProductsResolver {
  constructor(private productsService: ProductsService) {}

  @Query(() => ProductListDto)
  async productList(
    @Args('limit', { type: () => Int, nullable: true }) limit: number,
    @Args('offset', { type: () => Int, nullable: true }) offset: number,
    @Args('search', { type: () => String, nullable: true }) search: string,
  ): Promise<ProductListDto> {
    const totalCounts = await this.productsService.getCountsBySearch(search);
    const products = await this.productsService.getProducts(
      limit,
      offset,
      search,
    );

    await this.productsService.getProductsByIds([]);

    return {
      totalCounts,
      products,
    };
  }
}

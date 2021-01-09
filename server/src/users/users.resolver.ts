import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UsersService } from './users.service';
import {
  CreateUserInputDto,
  CreateUserResponseDto,
} from './dto/create-user.dto';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/graphql/graphql.guard';
import { CurrentUser } from './users.decorator';
import { CurrentUserDto } from './dto/current-user.dto';
import { PublicUser } from './dto/user.dto';

@Resolver()
export class UsersResolver {
  constructor(private userService: UsersService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => [PublicUser], { name: 'users' })
  async users() {
    return this.userService.findAll();
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => PublicUser)
  async userById(@CurrentUser() user: CurrentUserDto) {
    return this.userService.findOneById(user._id);
  }

  @Mutation(() => CreateUserResponseDto)
  async register(@Args('input') input: CreateUserInputDto) {
    await this.userService.create(input);
    return { ok: true };
  }
}

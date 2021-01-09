/**
 * To get the current authenticated user in your graphql resolver, you can define a @CurrentUser() decorator:
 * https://docs.nestjs.com/security/authentication#graphql
 */

import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    const req = ctx.getContext().req;
    return req.user;
  },
);

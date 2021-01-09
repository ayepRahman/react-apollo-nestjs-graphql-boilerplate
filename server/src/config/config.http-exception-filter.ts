import { Catch, HttpException, ArgumentsHost } from '@nestjs/common';
import { GqlExceptionFilter, GqlArgumentsHost } from '@nestjs/graphql';
import { APP_FILTER } from '@nestjs/core';

@Catch(HttpException)
class HttpExceptionFilter implements GqlExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const gqlHost = GqlArgumentsHost.create(host);
    return exception;
  }
}

const HttpExceptionFilterConfig = {
  provide: APP_FILTER,
  useClass: HttpExceptionFilter,
};

export default HttpExceptionFilterConfig;

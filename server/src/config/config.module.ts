import { Module } from '@nestjs/common';
import {
  ConfigModule as NestjsConfigModule,
  ConfigService,
} from '@nestjs/config';
import HttpExceptionFilterConfig from './config.http-exception-filter';
import LoggingInterceptorConfig from './config.logging-interceptor';

@Module({
  imports: [
    NestjsConfigModule.forRoot({
      envFilePath: ['.env.local', '.env.dev'],
      isGlobal: true,
    }),
  ],
  providers: [HttpExceptionFilterConfig, LoggingInterceptorConfig],
})
export class ConfigModule {}

import { GraphQLModule as NestjsGraphQlModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    NestjsGraphQlModule.forRoot({
      context: ({ req, res }) => ({ req, res }),
      autoSchemaFile: 'src/graphql/schema.gql',
      include: [],
      installSubscriptionHandlers: true,
      subscriptions: {
        keepAlive: 4000,
      },
    }),
  ],
})
export class GraphQLModule {}

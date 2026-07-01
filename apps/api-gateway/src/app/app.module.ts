import { PRODUCTS_PACKAGE_NAME } from '@nestjs-microservice/types/proto/products';
import { Module, Options } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { ProductController } from './product/product.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: PRODUCTS_PACKAGE_NAME,
        transport: Transport.GRPC,
        options: {
          package: PRODUCTS_PACKAGE_NAME,
          protoPath: join(__dirname, 'proto/products.proto'),
        },
      },
    ]),
  ],
  controllers: [AppController, ProductController],
  providers: [AppService],
})
export class AppModule {}

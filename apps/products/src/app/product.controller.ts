import { ProductRequest, ProductResponse, ProductServiceController, ProductServiceControllerMethods } from '@nestjs-microservice/types/proto/products';
import { Controller } from '@nestjs/common';
import { Observable } from 'rxjs';

@Controller('product')
@ProductServiceControllerMethods()
export class ProductController implements ProductServiceController{
  getProduct(request: ProductRequest): Promise<ProductResponse> | Observable<ProductResponse> | ProductResponse {
    return {
      productId: 12,
      name: 'Laptop',
      price: 1000,
    };
  }
}

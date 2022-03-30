import { Module } from '@nestjs/common';
import { ProductsModule } from 'src/products/products.module';
import { ProductsInventoryController } from './products-inventory.controller';
import { ProductsInventoryService } from './products-inventory.service';

@Module({
  imports: [ProductsModule],
  controllers: [ProductsInventoryController],
  providers: [ProductsInventoryService]
})
export class ProductsInventoryModule {}

import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { ProductsInventoryModule } from './products-inventory/products-inventory.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot ({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "postgres",
      database: "inventorycontrol",
      autoLoadEntities: true,
      synchronize: true,
  }), 
    ProductsModule, 
    ProductsInventoryModule, 
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

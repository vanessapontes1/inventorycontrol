import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductsDTO } from './dtos/createProducts.dto';
import { UpdateProductsDTO } from './dtos/updateProducts.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('products')
@UseGuards(AuthGuard('jwt'))
export class ProductsController {
  
  constructor(private productsService: ProductsService) {}

  @Get()
 
  getAllProducts() {
    return this.productsService.getAllProducts();
  }

  @Get("/:id")
  getProductsById(@Param('id') id) {
    return this.productsService.getProductsById(id);   
  }

  @Post()
  createProducts(@Body() createProductsDTO: CreateProductsDTO) {
    return this.productsService.createProducts(createProductsDTO);
  }

  // Alterar produtos
  @Put("/:id")
  updateProducts(@Param('id') id, @Body() updateProducstDTO: UpdateProductsDTO) {
    return this.productsService.updateProducts(id, updateProducstDTO);
  }

  @Delete("/:id")
  deleteProducts(@Param('id') id) {
    return this.productsService.deleteProducts(id);
  }
}

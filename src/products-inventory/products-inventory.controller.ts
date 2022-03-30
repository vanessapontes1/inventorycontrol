import { Controller, Get, Param, Post, UseGuards} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from "src/auth/get-user.decorator";
import { User } from 'src/auth/user.entity';
import { ProductsService } from 'src/products/products.service';
import { ProductsInventoryService } from './products-inventory.service';

@Controller('products-inventory')
@UseGuards(AuthGuard('jwt'))
export class ProductsInventoryController {

    constructor(private productsInventoryService: ProductsInventoryService, private productsService: ProductsService) {};

    @Post('/products/:id')
    startInventoryProduct(
        @Param('id') id,
        @GetUser() user: User
    ){
        return this.productsInventoryService.executeProduct(id, user) 
    }

    @Post('/products/:id/finish')
    finishInventoryProduct(
        @Param('id') id,
        @GetUser() user: User
    ){
        return this.productsInventoryService.finishProduct(id, user) 
    }

    @Get('/products/user/')
    getUserExecution(

        @GetUser() user: User
    ) {
        return this.productsInventoryService.getAllUser(user);
    }


}
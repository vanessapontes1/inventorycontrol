import { Injectable } from '@nestjs/common';
import { User } from 'src/auth/user.entity';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class ProductsInventoryService {


    constructor(private productsService: ProductsService) {}

    async executeProduct(id, user) {
        return this.productsService.setExecutor(id, user)

    }

    async finishProduct(id, user) {
        return this.productsService.finishExecutor(id, user);


    }

    getAllUser(user: User) {
        return this.productsService.getAllByUser(user);
        // throw new Error('Method not implemented.');
    }


}

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZhbmVzc2EiLCJpYXQiOjE2NDg2MDMwMTUsImV4cCI6MTY0ODYwNjYxNX0.sxU7SmNLHr_0tFtLO7UERNCBame4wIhESvPTs-3OKsE
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBvbnRlcyIsImlhdCI6MTY0ODYwMzA2NCwiZXhwIjoxNjQ4NjA2NjY0fQ.uASq6jCAm6aYZUYfrHgSumkIa2NpfbA2E_3iXAUWhn0
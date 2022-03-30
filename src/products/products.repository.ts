
import { Product } from "./product.entity";
import { CreateProductsDTO } from './dtos/createProducts.dto';
import { EntityRepository, Repository } from "typeorm";
import { UpdateProductsDTO } from "./dtos/updateProducts.dto";
import { NotFoundException } from "@nestjs/common";


@EntityRepository(Product)

export class ProductsRepository extends Repository<Product> {
    
    getAllProducts() {
        return this.createQueryBuilder('product').getMany();
    }
  
    getProductsById(id) {
        return this.findOne(id);
    }
    
    createProducts(createProductsDTO: CreateProductsDTO){
        const {name, quantity} = createProductsDTO;
        let product = this.create({
            name,
            quantity

        })
        return  this.save(product);
    
    }

    async updateProducts(id, updateProducstDTO: UpdateProductsDTO) {
        const {name, quantity} = updateProducstDTO;

        const product = await this.getProductsById(id);

        if(!product)
            throw new NotFoundException();

        product.name = name;
        product.quantity = quantity;

        return this.save(product);
   
    }
    
    deleteProducts(id) {
        return this.delete(id);

    }

}
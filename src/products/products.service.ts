import { ConflictException, Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { CreateProductsDTO } from './dtos/createProducts.dto';
import { UpdateProductsDTO } from './dtos/updateProducts.dto';
import { User } from 'src/auth/user.entity';


@Injectable()
export class ProductsService {

    constructor(private productsRepository: ProductsRepository) {}
    
    getAllProducts() {
      return this.productsRepository.getAllProducts();
    }

    getAllByUser(user: User) {
      return this.productsRepository.find({user});
    }

    getProductsById(id) {
      return this.productsRepository.getProductsById(id);
    }

    createProducts(createProductsDTO: CreateProductsDTO){
      return this.productsRepository.createProducts(createProductsDTO);
    }

    updateProducts(id, updateProductsDTO: UpdateProductsDTO) {
      return this.productsRepository.updateProducts(id, updateProductsDTO);
    }

    deleteProducts(id) {
      return this.productsRepository.deleteProducts(id);
    }

    async setExecutor(id, user) {
      const {affected} = await this.productsRepository.update({id: id, user:null}, {user:user});
      if(affected == 1) {
        return {success: true}
      } else {
        throw new ConflictException("Não pode executar essa alteração!");
      }
    }  
    async finishExecutor(id, user) {
      const {affected} = await this.productsRepository.update({id: id, user:user}, {finishedAt: new Date()});
      if(affected == 1) {
        return {success: true}
      } else {
        throw new ConflictException("Não pode terminar essa alteração!");
      }  
  }
}

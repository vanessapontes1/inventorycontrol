import { Test, TestingModule } from '@nestjs/testing';
import { ProductsInventoryService } from './products-inventory.service';

describe('ProductsInventoryService', () => {
  let service: ProductsInventoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsInventoryService],
    }).compile();

    service = module.get<ProductsInventoryService>(ProductsInventoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

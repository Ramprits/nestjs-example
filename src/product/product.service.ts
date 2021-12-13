import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { AbstractService } from "../common/abstract.service";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "./entities/product.entity";
import { Repository } from "typeorm";


@Injectable()
export class ProductService extends AbstractService {

  constructor(@InjectRepository(Product) private readonly productRepo: Repository<Product>) {
    super(productRepo);
  }
}

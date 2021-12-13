import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { OrderItem } from "./entities/order-item.entity";
import { AbstractService } from "../common/abstract.service";

@Injectable()
export class OrderItemService extends AbstractService {
  constructor(@InjectRepository(OrderItem) private readonly orderItemRepository: Repository<OrderItem>) {
    super(orderItemRepository);
  }
}

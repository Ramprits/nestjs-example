import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { CommonBaseEntity } from "../../shared/base-entity";
import { Order } from "../../order/entities/order.entity";

@Entity({ name: "order_items" })
export class OrderItem extends CommonBaseEntity {

  @Column()
  price: number;

  @Column()
  quantity: number;

  @ManyToOne(() => Order, o => o.orderItems)
  @JoinColumn({ name: "order_id" })
  order: Order;
}

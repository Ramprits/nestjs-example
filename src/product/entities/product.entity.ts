import { Column, Entity, OneToMany } from "typeorm";
import { CommonBaseEntity } from "../../shared/base-entity";
import { Order } from "../../order/entities/order.entity";

@Entity({ name: "products" })
export class Product extends CommonBaseEntity {

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  image: string;

  @Column({ type: "numeric" })
  price: number;

  @OneToMany(() => Order, o => o.product)
  orders: Order[];
}

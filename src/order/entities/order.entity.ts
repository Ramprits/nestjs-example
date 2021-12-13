import { Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Expose } from "class-transformer";
import { CommonBaseEntity } from "../../shared/base-entity";
import { Product } from "../../product/entities/product.entity";
import { OrderItem } from "../../order-item/entities/order-item.entity";
import { UserEntity } from "../../user/models/user.entity";

@Entity({ name: "orders" })
export class Order extends CommonBaseEntity {

  @ManyToOne(() => Product, p => p.orders)
  @JoinColumn({ name: "product_id" })
  product: Product;


  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: "user_id" })
  user: UserEntity;


  @OneToMany(() => OrderItem, oi => oi.order)
  orderItems: OrderItem[];

  @Expose()
  get total() {
    return this.orderItems.reduce((acc, item) => {
      return  acc + item.price * item.quantity;
    }, 0);
  }

}

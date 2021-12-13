import {
  BeforeInsert, BeforeUpdate,
  Column,
  Entity, JoinColumn, ManyToOne, OneToMany
} from "typeorm";
import { hashSync } from "bcrypt";
import { Exclude } from "class-transformer";
import { Role } from "../../role/entities/role.entity";
import { CommonBaseEntity } from "../../shared/base-entity";
import { OrderItem } from "../../order-item/entities/order-item.entity";
import { Order } from "../../order/entities/order.entity";

@Entity({ name: "users" })
export class UserEntity extends CommonBaseEntity {

  @Column({ type: "varchar", nullable: true })
  first_name: string;

  @Column({ type: "varchar", nullable: true })
  last_name: string;

  @Column({ type: "varchar", unique: true })
  email: string;

  @Column({ type: "varchar", select: false })
  @Exclude()
  password: string;

  @ManyToOne(() => Role)
  @JoinColumn({ name: "role_id" })
  role: Role;


  @OneToMany(() => Order, u => u.user)
  orders: Order[];


  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }


}
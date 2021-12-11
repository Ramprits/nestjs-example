import {
  BaseEntity,
  BeforeInsert, BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity, JoinColumn, ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { hashSync } from "bcrypt";
import { Exclude } from "class-transformer";
import { Role } from "../../role/entities/role.entity";

@Entity({ name: "users" })
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", nullable: true })
  first_name: string;

  @Column({ type: "varchar", nullable: true })
  last_name: string;

  @Column({ type: "varchar", unique: true })
  email: string;

  @Column({ type: "varchar", select: false })
  @Exclude()
  password: string;

  @DeleteDateColumn()
  is_deleted: Date;

  @ManyToOne(() => Role)
  @JoinColumn({ name: "role_id" })
  role: Role;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }


}
import { BaseEntity, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class CommonBaseEntity extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @DeleteDateColumn()
  is_deleted: Date;


  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
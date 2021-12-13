import {
  Column,
  Entity, JoinTable,
  ManyToMany
} from "typeorm";
import { Permission } from "../../permission/entities/permission.entity";
import { CommonBaseEntity } from "../../shared/base-entity";

@Entity("roles")
export class Role extends CommonBaseEntity {

  @Column({ type: "varchar" })
  name: string;

  @ManyToMany(() => Permission, { cascade: true, eager: true })
  @JoinTable({
    name: "role_permissions",
    joinColumn: { name: "role_id", referencedColumnName: "id" },
    inverseJoinColumn: { name: "permission_id", referencedColumnName: "id" }
  })
  permissions: Permission[];

}

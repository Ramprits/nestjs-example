import { UserEntity } from "../models/user.entity";

export interface PaginateResponse{
  data:UserEntity[],
  meta:{
    totalUsers:number,
    page:number,
    last_page:number
  }
}
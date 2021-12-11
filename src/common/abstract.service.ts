import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { CommonPaginationResponse } from "./interface/pagination-response.";

@Injectable()
export abstract class AbstractService {
  protected constructor(protected readonly repository: Repository<any>) {
  }

  async findAll(): Promise<any[]> {
    return await this.repository.find();
  }

  async paginate(page: number): Promise<CommonPaginationResponse> {
    const take = 10;
    const [data, total] = await this.repository.findAndCount({
      take,
      skip: (page - 1) * take
    });
    return {
      data: data, meta: {
        total,
        page,
        last_page: Math.ceil(total / take)
      }
    };
  }

  async create(data): Promise<any> {
    return await this.repository.save(data);
  }

  findOne(id: number, config?:any) {
    return this.repository.findOne(id, config);
  }

  async update(id: number, data) {
    return await this.repository.update(id, data);
  }

  async remove(id: number) {
    return await this.repository.delete(id);
  }

}

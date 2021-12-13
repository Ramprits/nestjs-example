import { Injectable, NotFoundException } from "@nestjs/common";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { CommonPaginationResponse } from "./interface/pagination-response.";

@Injectable()
export abstract class AbstractService {
  protected constructor(protected readonly repository: Repository<any>) {
  }

  async findAll(relations = []): Promise<any[]> {
    return await this.repository.find({ relations });
  }

  async paginate(page: number = 1, relations = []): Promise<CommonPaginationResponse> {
    const take = 10;
    const [data, total] = await this.repository.findAndCount({
      take,
      skip: (page - 1) * take,
      relations
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

  async findOne(id: number, relations = []) {
    return await this.repository.findOne({ id }, { relations });
    ;
  }

  async update(id: number, data): Promise<UpdateResult> {
    return await this.repository.update(id, data);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.repository.delete(id);
  }
}

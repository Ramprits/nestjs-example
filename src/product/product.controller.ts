import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query } from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { HasPermission } from "../permission/has-permission.decorator";

@Controller("products")
export class ProductController {
  constructor(private readonly productService: ProductService) {
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll(@Query("page") page: number = 1) {
    return this.productService.paginate(page, ["orders"]);
  }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.productService.findOne(id, ["orders"]);
  }

  @Patch(":id")
  update(@Param("id", ParseIntPipe) id: number, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(":id")
  remove(@Param("id", ParseIntPipe) id: number) {
    return this.productService.remove(id);
  }
}

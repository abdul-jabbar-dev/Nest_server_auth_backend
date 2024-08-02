/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from "@nestjs/common";
import { UsersService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private readonly UserService: UsersService) {}

  @Post('login')
  async login(@Body() data: any) {  
    return this.UserService.loginUser(data.email, data.password);
  }

  @Post('create')
  async create(@Body() data: any) {
    return this.UserService.createUser(data);
  }

  @Get()
  async findAll() {
    return this.UserService.getAllUsers();
  }

  @Get(":id")
  async findOne(@Param("id") id: number) {
    return this.UserService.getUserById(id);
  }

  @Put(":id")
  async update(@Param("id") id: number, @Body() data: any) {
    return this.UserService.updateUser(id, data);
  }

  @Delete(":id")
  async remove(@Param("id") id: number) {
    return this.UserService.deleteUser(id);
  }
  
}

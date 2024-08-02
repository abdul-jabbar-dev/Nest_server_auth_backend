import { JwtModule } from '@nestjs/jwt';
import { UserController } from "./user.controller";
/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { UsersService } from "./user.service";
import { KnexService } from "../db/knex.service";

@Module({
  imports: [
    JwtModule.register({
      secret: 'your-secret-key', 
      signOptions: { expiresIn: '6D' }, 
    })],
  providers: [UsersService, KnexService],
  controllers: [UserController],
})
export class UserModule {}

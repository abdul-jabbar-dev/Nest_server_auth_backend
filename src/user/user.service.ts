import { JwtService } from "@nestjs/jwt";
/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { KnexService } from "../db/knex.service";

@Injectable()
export class UsersService {
  constructor(
    private readonly knexService: KnexService,
    private jwtService: JwtService
  ) {}

  async createUser(data: any) {
    const exist = await this.knexService
      .getKnex()("Users")
      .where("email", data.email)
      .first();
    if (exist && Object.keys(exist).length > 0) {
      return { err: "This user already exist try to login" };
    } else {
      let user = await this.knexService
        .getKnex()("Users")
        .insert(data)
        .returning("*");

      const payload = { id: user.id, email: user.email };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    }
  }

  async loginUser(
    email: string,
    pass: string
  ): Promise<{ access_token: string }> {
    const user = await this.knexService
      .getKnex()("Users")
      .where("email", email)
      .first();
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { id: user.id, email: user.email };
    console.log(payload);
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async getAllUsers() {
    return this.knexService.getKnex()("Users").select("*");
  }

  async getUserById(id: number) {
    return this.knexService.getKnex()("Users").where("id", id).first();
  }

  async updateUser(id: number, data: any) {
    return this.knexService
      .getKnex()("Users")
      .where("id", id)
      .update(data)
      .returning("*");
  }

  async deleteUser(id: number) {
    return this.knexService.getKnex()("Users").where("id", id).del();
  }
  async findOne(email: string) {
    return this.knexService.getKnex()("Users").where("email", email).first();
  }
}

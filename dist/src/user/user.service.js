"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const jwt_1 = require("@nestjs/jwt");
const common_1 = require("@nestjs/common");
const knex_service_1 = require("../db/knex.service");
let UsersService = class UsersService {
    constructor(knexService, jwtService) {
        this.knexService = knexService;
        this.jwtService = jwtService;
    }
    async createUser(data) {
        const exist = await this.knexService
            .getKnex()("Users")
            .where("email", data.email)
            .first();
        if (exist && Object.keys(exist).length > 0) {
            return { err: "This user already exist try to login" };
        }
        else {
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
    async loginUser(email, pass) {
        const user = await this.knexService
            .getKnex()("Users")
            .where("email", email)
            .first();
        if (user?.password !== pass) {
            throw new common_1.UnauthorizedException();
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
    async getUserById(id) {
        return this.knexService.getKnex()("Users").where("id", id).first();
    }
    async updateUser(id, data) {
        return this.knexService
            .getKnex()("Users")
            .where("id", id)
            .update(data)
            .returning("*");
    }
    async deleteUser(id) {
        return this.knexService.getKnex()("Users").where("id", id).del();
    }
    async findOne(email) {
        return this.knexService.getKnex()("Users").where("email", email).first();
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [knex_service_1.KnexService,
        jwt_1.JwtService])
], UsersService);
//# sourceMappingURL=user.service.js.map
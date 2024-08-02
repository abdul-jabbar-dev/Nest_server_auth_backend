import { JwtService } from "@nestjs/jwt";
import { KnexService } from "../db/knex.service";
export declare class UsersService {
    private readonly knexService;
    private jwtService;
    constructor(knexService: KnexService, jwtService: JwtService);
    createUser(data: any): Promise<{
        err: string;
        access_token?: undefined;
    } | {
        access_token: string;
        err?: undefined;
    }>;
    loginUser(email: string, pass: string): Promise<{
        access_token: string;
    }>;
    getAllUsers(): Promise<any>;
    getUserById(id: number): Promise<any>;
    updateUser(id: number, data: any): Promise<any>;
    deleteUser(id: number): Promise<any>;
    findOne(email: string): Promise<any>;
}

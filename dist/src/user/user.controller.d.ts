import { UsersService } from "./user.service";
export declare class UserController {
    private readonly UserService;
    constructor(UserService: UsersService);
    login(data: any): Promise<{
        access_token: string;
    }>;
    create(data: any): Promise<{
        err: string;
        access_token?: undefined;
    } | {
        access_token: string;
        err?: undefined;
    }>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, data: any): Promise<any>;
    remove(id: number): Promise<any>;
}

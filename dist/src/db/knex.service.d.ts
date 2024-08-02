import { OnModuleInit, OnModuleDestroy } from "@nestjs/common";
declare const knexConfig: {
    client: string;
    connection: {
        user: string;
        password: string;
        host: string;
        port: number;
        database: string;
        ssl: {
            rejectUnauthorized: boolean;
            ca: string;
        };
    };
};
export default knexConfig;
export declare class KnexService implements OnModuleInit, OnModuleDestroy {
    private knexInstance;
    onModuleInit(): void;
    onModuleDestroy(): void;
    getKnex(): any;
}

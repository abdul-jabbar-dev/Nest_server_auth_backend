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

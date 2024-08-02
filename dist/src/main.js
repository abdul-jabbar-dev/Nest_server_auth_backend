"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const user_module_1 = require("./user/user.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(user_module_1.UserModule);
    app.enableCors({
        origin: "https://funny-peony-17f202.netlify.app",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        allowedHeaders: "Content-Type, Authorization",
    });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map
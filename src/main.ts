/* eslint-disable prettier/prettier */
import { NestFactory } from "@nestjs/core";
import { UserModule } from "./user/user.module";

async function bootstrap() {
  const app = await NestFactory.create(UserModule);
 app.enableCors({
        origin: 'https://funny-peony-17f202.netlify.app', 
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
        allowedHeaders: 'Content-Type, Authorization', 
    });

  await app.listen(3000);
}
bootstrap();

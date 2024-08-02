/* eslint-disable prettier/prettier */
import { NestFactory } from "@nestjs/core";
import { UserModule } from "./user/user.module";
import * as cors from "cors";
async function bootstrap() {
  const app = await NestFactory.create(UserModule);

  app.use(
    cors({
      origin: "*",  
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
      allowedHeaders: "Content-Type, Accept",
    })
  );

  await app.listen(process.env.PORT||3000);
}
bootstrap();

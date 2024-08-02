/* eslint-disable prettier/prettier */
import { NestFactory } from "@nestjs/core";
import { UserModule } from "./user/user.module";
import * as cors from "cors";
async function bootstrap() {
  const app = await NestFactory.create(UserModule);
 
  app.use(
    cors({
      origin: "https://funny-peony-17f202.netlify.app",  
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
      allowedHeaders: "Content-Type, Accept",
    })
  );

  await app.listen(3000);
}
bootstrap();

/* eslint-disable prettier/prettier */
import { NestFactory } from "@nestjs/core";
import { UserModule } from "./user/user.module";
import * as cors from "cors";
async function bootstrap() {
  const app = await NestFactory.create(UserModule);

app.use(
  cors({
    origin: (origin, callback) => {
      const allowedOrigins = ['https://funny-peony-17f202.netlify.app', 'https://funny-peony-17f202.netlify.app/login','https://funny-peony-17f202.netlify.app/registration',origin,'*'];
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    allowedHeaders: "Content-Type, Accept",
  })
);
  await app.listen(process.env.PORT||3000);
}
bootstrap();

/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SendGridModule } from "./app/sendGrid/sendGrid.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MailModule } from "./app/mail/mail.module";

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypeOrmModule.forRoot({
			type: "postgres",
			host: process.env.DB_HOST,
			port: Number(process.env.DB_PORT),
			database: process.env.DB_DATABASE,
			username: process.env.DB_USERNAME,
			password: process.env.DB_PASSWORD,
			// em produção não pode.
			entities: [__dirname + "/**/*.entity{.js, .ts}"],
			synchronize: true,
		}),
		SendGridModule,
		MailModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}

/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SendGridModule } from "./app/sendGrid/sendGrid.module";

@Module({
	imports: [ConfigModule.forRoot(), SendGridModule],
	controllers: [],
	providers: [],
})
export class AppModule {}

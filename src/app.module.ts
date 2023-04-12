/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { SendGridModule } from "./app/sendGrid/sendGrid.module";
import { SendGridService } from "./app/sendGrid/service/sendGrid.service";

@Module({
	imports: [SendGridModule],
	controllers: [],
	providers: [SendGridService],
})
export class AppModule {}

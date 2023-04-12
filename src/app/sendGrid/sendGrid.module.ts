/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";
import { SendGridService } from "./service/sendGrid.service";

@Module({})
export class SendGridModule {
	imports: [HttpModule];
	providers: [SendGridService];
}

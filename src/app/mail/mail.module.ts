/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { MailService } from "./service/mail.service";
import { MailEntity } from "./mail.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MailController } from "./controller/mail.controller";

@Module({
	imports: [TypeOrmModule.forFeature([MailEntity])],
	providers: [MailService],
	controllers: [MailController],
})
export class MailModule {}

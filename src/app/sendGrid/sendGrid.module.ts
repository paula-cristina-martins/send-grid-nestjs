/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";
import { SendGridService } from "./service/sendGrid.service";
import { SendGridController } from "./controller/send-grid.controller";

@Module({ imports: [HttpModule], providers: [SendGridService], controllers: [SendGridController] })
export class SendGridModule {}

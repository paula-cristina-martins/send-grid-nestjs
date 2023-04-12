import { Body, Controller, Post } from "@nestjs/common";
import { SendGridService } from "../service/sendGrid.service";
import { SendEmailInterface } from "../interface/send-email.interface";

@Controller("sendGrid")
export class SendGridController {
	constructor(private readonly sendGridService: SendGridService) {}

	@Post()
	async sendEmail(@Body() body: SendEmailInterface) {
		return this.sendGridService.sendEmail(body);
	}
}

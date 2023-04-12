/* eslint-disable prettier/prettier */
import { HttpService } from "@nestjs/axios";
import { HttpStatus, Injectable } from "@nestjs/common";
import { lastValueFrom } from "rxjs";
import { SendEmailInterface } from "../interface/send-email.interface";

@Injectable()
export class SendGridService {
	constructor(private readonly httpService: HttpService) {}

	async sendEmail(data: SendEmailInterface): Promise<boolean> {
		const url = "https://api.sendgrid.com/v3/mail/send";
		const config = {
			headers: {
				Authorization: "Bearer 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",
			},
		};

		const response = lastValueFrom(this.httpService.post(url, data, config));
		console.log((await response).data);

		return (await response).status === HttpStatus.ACCEPTED;
	}
}

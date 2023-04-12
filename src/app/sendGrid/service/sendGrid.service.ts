/* eslint-disable prettier/prettier */
import { HttpService } from "@nestjs/axios";
import { HttpStatus, Injectable } from "@nestjs/common";
import { lastValueFrom } from "rxjs";
import { SendEmailInterface } from "../interface/send-email.interface";

@Injectable()
export class SendGridService {
	private readonly SEND_GRID_API_URL = process.env.SEND_GRID_API_URL;
	private readonly SEND_GRID_API_KEY = process.env.SEND_GRID_API_KEY;

	constructor(private readonly httpService: HttpService) {}

	async sendEmail(data: SendEmailInterface): Promise<boolean> {
		try {
			const url = `${this.SEND_GRID_API_URL}mail/send`;
			const config = {
				headers: {
					Authorization: `Bearer ${this.SEND_GRID_API_KEY}`,
				},
			};

			const response = await lastValueFrom(this.httpService.post(url, data, config));
			return response.status === HttpStatus.ACCEPTED;
		} catch (error) {}
	}
}

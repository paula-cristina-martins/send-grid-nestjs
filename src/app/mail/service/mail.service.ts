/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MailEntity } from "../mail.entity";
import { Repository } from "typeorm";
import { SaveMailDto } from "../dto/save-mail.dto";

@Injectable()
export class MailService {
	constructor(
		@InjectRepository(MailEntity)
		private readonly mailRepository: Repository<MailEntity>
	) {}

	async save(data: SaveMailDto): Promise<MailEntity> {
		return this.mailRepository.save(this.mailRepository.create(data));
	}
}

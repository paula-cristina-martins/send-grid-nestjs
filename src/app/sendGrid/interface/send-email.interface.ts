/* eslint-disable prettier/prettier */
export interface SendEmailInterface {
	personalizations: Personalization[];
	content: Content[];
	from: From;
	reply_to: ReplyTo;
}

interface Personalization {
	to: To[];
	subject?: string;
}

interface To {
	email: string;
	name: string;
}

interface Content {
	type: string;
	value: string;
}

interface From {
	email: string;
	name: string;
}

interface ReplyTo {
	email: string;
	name: string;
}

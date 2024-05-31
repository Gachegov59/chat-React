export interface IUser {
	id: string;
	name: string;
	surname: string;
	status: boolean;
	middleName?: string;
	chats?: [];
	role?: string;
	photoId?: string;
	account?: string;
}

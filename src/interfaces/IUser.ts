export interface IUser {
	id: string;
	firstName: string;
	lastName: string;
	status: boolean;
	middleName?: string;
	chats?: [];
	role?: string;
	photoId?: string;
	// account?: string;
}

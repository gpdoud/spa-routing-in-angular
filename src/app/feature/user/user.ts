export class User {
	ID: number;
	UserName: string;
	Password: string;
	FirstName: string;
	LastName: string;
	Phone: string;
	Email: string;
	IsReviewer: boolean;
	IsAdmin: boolean;

	constructor() {
		this.ID = 0;
		this.IsReviewer = false;
		this.IsAdmin = false;
	}
}

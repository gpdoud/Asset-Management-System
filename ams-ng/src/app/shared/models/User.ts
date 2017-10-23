export class User {
	
	Id: number;
	Username: string;
	Password: string,
	FirstName: string;
	LastName: string;
	Email: string;
	AdminLevel: number;
	IsActive: boolean;

	constructor(
		Id: number,
		Username: string,
		Password: string,
		FirstName: string,
		LastName: string,
		Email: string,
		AdminLevel: number,
		IsActive: boolean
	) {
		this.Id = Id;
		this.Username = Username;
		this.Password = Password;
		this.FirstName = FirstName;
		this.LastName = LastName;
		this.Email = Email;
		this.AdminLevel = AdminLevel;
		this.IsActive = IsActive;
	}
}
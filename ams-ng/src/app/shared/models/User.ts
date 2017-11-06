export class User {
	
	Id: number;
	// Location: string;
	// Department: string;
	//What is the Username?
	Username: string;
	//What is the User's Password?
	Password: string;
	//What is the User's first name?
	FirstName: string;
	//What is the User's last name?
	LastName: string;
	//What is the User's email address?
	Email: string;
	//What level of administrative rights does the User have?
	AdminLevel: number;
	//Is this an active user account?
	IsActive: boolean;

	constructor(
		Id: number,
		// Location: string,
		// Department: string,
		Username: string,
		Password: string,
		FirstName: string,
		LastName: string,
		Email: string,
		AdminLevel: number,
		IsActive: boolean
	) {
		this.Id = Id;
		// this.Location = Location;
		// this.Department = Department;
		this.Username = Username;
		this.Password = Password;
		this.FirstName = FirstName;
		this.LastName = LastName;
		this.Email = Email;
		this.AdminLevel = AdminLevel;
		this.IsActive = IsActive;
	}
}

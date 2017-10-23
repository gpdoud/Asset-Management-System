export class User {
	
	Id: number;
	Name: string;
	Address: string;
	Phone: string;


	constructor(
		Id: number,
		Name: string,
		Address: string,
		Phone: string
	) {
		this.Id = Id;
		this.Name = Name;
		this.Address = Address;
		this.Phone = Address;
	}
}
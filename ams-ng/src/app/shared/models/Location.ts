export class Location {
	
	//The Location's primary key
	Id: number;
	//The name of the Location.
	Name: string;
	//The department within the Location.
	Department: string;
	//The Location's address.
	Address: string;
	//The Location's city.
	City: string;
	//The Location's state.
	State: string;
	//The Location's phone number.
	Phone: string;


	constructor(
		Id: number,
		Name: string,
		Department: string,
		Address: string,
		City: string,
		State: string,
		Phone: string
	) {
		this.Id = Id;
		this.Name = Name;
		this.Department = Department;
		this.Address = Address;
		this.City = City;
		this.State = State;
		this.Phone = Address;
	}
}

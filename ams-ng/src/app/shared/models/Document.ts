export class Document {

	Id: number;
	Name: string;
	Type: string;
	Photo: string;
	Data: string;	
	
	constructor(
		Id: number,
		Name: string,
		Type: string,
		Photo: string,
		Data: string
		
	) {
		this.Id = Id;
		this.Name = Name;
		this.Type = Type;
		this.Photo = Photo;
		this.Data = Data;
	}
}
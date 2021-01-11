export class Message {

	constructor(public text :string, public sender: string, public receiver: string, public inbox:boolean=true, public time : Date = new Date(), read: boolean = false) {

	}
}

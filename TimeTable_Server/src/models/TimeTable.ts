export default class TimeTable {
	private period: string | number;
	private date: string;
	private subject: string;
	private day: number;

	constructor(period: string | number, date: string, subject: string) {
		this.period = period;
		this.date = date;
		this.subject = subject;
		this.day = this.setDay();
	}

	public getPeriod(): string | number {
		return this.period;
	};
	public getDate(): string {
		return this.date;
	};
	public getSubject(): string {
		return this.subject;
	}
	public getDay(): number {
		return this.day
	}

	private setDay() {
		let year: string;
		let month: string;
		let date: string;
		year = this.date.substring(0, 4);
		month = this.date.substring(4, 6);
		date = this.date.substring(6, 8);

		return (new Date(parseInt(year), parseInt(month) - 1, parseInt(date))).getDay();
	}
}

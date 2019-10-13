export default class DateSetting {
	private date: Date;

	constructor(date: Date) {
		this.date = date;
	}

	public getDate(): Date {
		return this.date;
	}
	public setDate(newDate: Date): void {
		this.date = newDate;
	}

	public getYYYYMMDD(): string {
		let year: string | number = this.date.getFullYear();
		let month: string | number = this.date.getMonth() + 1;
		let date: string | number = this.date.getDate();

		month = this.convertNumber(month.toString());
		date = this.convertNumber(date.toString());

		return `${year}${month}${date}`;
	}

	private convertNumber(convertData: string): string { //m 혹은 d를 mm, dd형식으로 변환
		const convertNum: number = parseInt(convertData);
		if (convertNum < 10) {
			return `0${convertNum}`;
		}
		return `${convertNum}`;
	}
}
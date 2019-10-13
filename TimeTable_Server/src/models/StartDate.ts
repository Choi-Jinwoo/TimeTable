import DateSetting from './DateSetting';

export default class StartDate extends DateSetting {

	constructor(date: Date) {
		super(date);
		this.getMonDate();
	}

	private getMonDate(): void {
		const today = super.getDate();
		const monday: number = 1; //월요일.getday() = 1
		const day: number = today.getDay();
		today.setDate(today.getDate() + (monday - day));
		super.setDate(today);
	}
}
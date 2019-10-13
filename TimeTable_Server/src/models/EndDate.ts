import DateSetting from './DateSetting';

export default class EndDate extends DateSetting {

	constructor(date: Date) {
		super(date);
		this.getFriDate();
	}

	private getFriDate(): void {
		const today = super.getDate();
		const friday: number = 5; //금요일.getday() = 5
		const day: number = today.getDay();
		today.setDate(today.getDate() + (friday - day))
		super.setDate(today);
	}
}
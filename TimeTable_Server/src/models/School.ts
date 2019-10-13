import school from '../../config/school';
import neis from '../../config/neis';

export default class Neis {
	private key: string;
	private schoolCode: string;
	private officeCode: string;
	private schoolGrade: number;
	private schoolClass: number;
	private semester: number;

	constructor() {
		this.key = neis.NEIS_KEY!;
		this.schoolCode = school.schoolCode;
		this.officeCode = school.officeCode;
		this.schoolGrade = school.schoolGrade;
		this.schoolClass = school.schoolClass;
		this.semester = (new Date().getMonth() + 1) >= 3 && (new Date().getMonth() + 1) <= 7 ? 1 : 2;
	}

	public getKey() {
		return this.key;
	}
	public getSchoolCode() {
		return this.schoolCode;
	}
	public getOfficeCode() {
		return this.officeCode;
	}
	public getSchoolGrade() {
		return this.schoolGrade;
	}
	public getSchoolClass() {
		return this.schoolClass;
	}
	public getSemester() {
		return this.semester;
	}
}
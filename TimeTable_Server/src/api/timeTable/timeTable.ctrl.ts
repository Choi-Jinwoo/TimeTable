import request from 'request';
import express from 'express';
import { School } from '../../models';
import { StartDate } from '../../models';
import { EndDate } from '../../models';
import { TimeTable } from '../../models';
import { start } from 'repl';

const getTimeTable = async (req: express.Request, res: express.Response) => {
	const school: School = new School();
	let startDate: StartDate;
	let endDate: EndDate;

	if (!(req.query.date)) {
		startDate = new StartDate(new Date());
		endDate = new EndDate(new Date());
	} else {
		const date: string = req.query.date;
		const y: number = Number(date.substr(0, 4));
		const m: number = Number(date.substr(4, 2)) - 1;
		const d: number = Number(date.substr(6, 2));

		const reqStartDate: Date = new Date(y, m, d);
		const reqEndDate: Date = new Date(y, m, d);
		startDate = new StartDate(reqStartDate);
		endDate = new EndDate(reqEndDate);
	}
	const url: string = `http://open.neis.go.kr/hub/hisTimetable?ATPT_OFCDC_SC_CODE=${school.getOfficeCode()}&SD_SCHUL_CODE=${school.getSchoolCode()}&SEM=2&GRADE=${school.getSchoolGrade()}&CLRM_NM=${school.getSchoolClass()}&TI_FROM_YMD=${startDate.getYYYYMMDD()}&TI_TO_YMD=${endDate.getYYYYMMDD()}&SEM=${school.getSemester()}&type=json&KEY=${school.getKey()}`;
	try {
		await request(url, (err, response, timeTableData) => {
			if (err) {
				console.log(err.message);
				return res.status(500).json({ message: '서버 오류' });
			}

			timeTableData = JSON.parse(timeTableData);
			if (timeTableData.RESULT) {
				if (timeTableData.RESULT.CODE === 'INFO-200') {
					console.log('시간표 정보가 없음')
					return res.status(400).json({ message: '시간표 정보가 없음' });
				}
			}
			const timeTables: TimeTable[] = [];

			for (let i = 0; i < timeTableData.hisTimetable[1].row.length; i++) {
				const timeTable = new TimeTable(timeTableData.hisTimetable[1].row[i].PERIO, timeTableData.hisTimetable[1].row[i].ALL_TI_YMD, timeTableData.hisTimetable[1].row[i].ITRT_CNTNT);
				timeTables[i] = timeTable;
			}

			return res.status(200).json({ message: '시간표 정보', data: timeTables })
		});
	} catch (err) {
		return res.status(500).json({ message: '서버 오류' });
	}
}

export {
	getTimeTable,
}
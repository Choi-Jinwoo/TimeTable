import express from 'express';
import * as timeTable from './timeTable';

const router: express.Router = express.Router();

router.use('/time-table', timeTable.getTimeTable);

export default router;
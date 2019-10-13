require('dotenv');
import express from 'express';
import { App } from './models'

const PORT: number = Number(process.env.PORT) || 3000;
const app: express.Application = new App().app;

app.listen(PORT, () => {
	console.log(`TS server is running at port ${PORT}`);
});
import express from 'express';
import api from '../api';

export default class App {
	public app: express.Application;

	constructor() {
		this.app = express();
		this.app.use('/', api);
	}
}
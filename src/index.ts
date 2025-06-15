import { Hono } from 'hono';
import { searchRoute } from './app/search';

const app = new Hono();
app.route('/api', searchRoute);

export default app;

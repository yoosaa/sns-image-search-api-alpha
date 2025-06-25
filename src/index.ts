import { Hono } from 'hono';
import { searchRoute } from './app/search';
import { registerRoute } from './app/register';
import { unsplashRegisterRoute } from './app/unsplash-register';

const app = new Hono<{}>();
app.route('/api', searchRoute);
app.route('/api', registerRoute);
app.route('/api', unsplashRegisterRoute);

export default app;

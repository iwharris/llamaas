import express from 'express';
import * as middleware from './middleware';
import views from './routes/views';
import api from './routes/api';

const app = express();

// Configure the view engine
app.set('view engine', 'pug');

// Serve static assets
app.use(express.static('public'));

// View routes
app.use(views);

// API routes
app.use('/api', api);

// Handles requests that don't match a route
app.use(middleware.notFoundMiddleware);

// Error handler of last resort
app.use(middleware.errorCatcherMiddleware);

export default app;

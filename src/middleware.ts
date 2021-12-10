import { RequestHandler, ErrorRequestHandler } from 'express';
import { getPageMetadata } from './services/renderer';

/**
 * Handles unmatched routes
 */
export const notFoundMiddleware: RequestHandler = (req, res): void => {
    res.status(404);
    if (req.accepts('html')) {
        res.render('404', getPageMetadata());
    } else if (req.accepts('json')) {
        res.json({ error: 'not found' });
    } else {
        res.type('txt').send('Not found');
    }
};

/**
 * Error handler of last resort
 */
export const errorCatcherMiddleware: ErrorRequestHandler = (err, req, res) => {
    res.status(500);
    console.error('Something went wrong:', err);
    if (req.accepts('html')) {
        res.render('500', getPageMetadata());
    } else if (req.accepts('json')) {
        res.json({ error: 'server error' });
    } else {
        res.type('txt').send('Server error');
    }
};

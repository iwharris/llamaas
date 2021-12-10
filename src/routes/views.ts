import express from 'express';

import { getPageMetadata } from '../services/renderer';

const router = express.Router();

router.get('/', (req, res) => res.render('index', getPageMetadata()));

export default router;

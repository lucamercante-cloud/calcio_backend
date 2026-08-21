import { Router } from 'express';
import { listCl } from './club.controller';

const router = Router();

router.get('/', listCl);

export default router;
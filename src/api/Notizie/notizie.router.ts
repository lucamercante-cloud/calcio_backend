import { Router } from 'express';
import { listNw } from './notizie.controller';

const router = Router();

router.get('/', listNw);

export default router;
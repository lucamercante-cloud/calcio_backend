import { Router } from 'express';
import { listSp } from './sponsor.controller';

const router = Router();

router.get('/', listSp);

export default router;
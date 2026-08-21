import { Router } from 'express';
import { listPl, listPlByCategory } from './players.controller';

const router = Router();

router.get('/', listPl);
router.get('/category/:categoria', listPlByCategory);

export default router;
import { Router } from 'express';
import { listCat } from './category.controller';

const router = Router();

router.get('/', listCat);

export default router;
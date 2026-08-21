import { Router } from 'express';
import { listOrg } from './organigramma.controller';

const router = Router();

router.get('/', listOrg);

export default router;
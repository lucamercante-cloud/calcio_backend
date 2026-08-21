import { Router } from "express";
import categoryRouter from './Category/category.router'
import clubRouter from './Club/club.router'
import playersRouter from './Players/players.router'
import sponsorRouter from "./Sponsor/sponsor.router";
import notizieRouter from "./Notizie/notizie.router";
import organigrammaRouter from "./Organigramma/organigramma.router";

const router = Router();

router.use('/category', categoryRouter);
router.use('/clubs', clubRouter);
router.use('/players', playersRouter);
router.use('/sponsor', sponsorRouter);
router.use('/news', notizieRouter);
router.use('/organigramma', organigrammaRouter )

export default router;

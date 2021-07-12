import { Router } from 'express';

import fotocontroller from '../controllers/FotoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, fotocontroller.store);

export default router;

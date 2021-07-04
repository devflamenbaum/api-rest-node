import { Router } from 'express';
import homecontroller from '../controllers/HomeController';

const router = new Router();

router.get('/', (req, res) => {
  homecontroller.index(req, res);
});

export default router;

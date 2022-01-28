import express from 'express';
import controller from '../controllers/brackets';
const router = express.Router();

router.post('/bracket', controller.Bracket);

export = router
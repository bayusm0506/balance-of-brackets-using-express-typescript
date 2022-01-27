import express from 'express';
import controller from '../controllers/brackets';
const router = express.Router();

router.post('/api/bracket', controller.Bracket);

export = router
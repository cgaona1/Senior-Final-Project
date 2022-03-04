import express from 'express';

const router = express.Router();

router.route('/')
    .get(function(req,res){
        res.send('Get route works!');
    });

export default router;
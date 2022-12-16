import  express  from "express";

const router = express.Router();

router.get('', (req,res)=>{
    res.send("holla auth")
})

router.get('/register', (req, res) => {
    res.send("holla register")
})

export default router
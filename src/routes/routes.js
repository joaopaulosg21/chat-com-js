import { Router } from "express";
import { resolve } from "path";
const router = Router();

router.get("/",(req,res)=>{
    res.sendFile(resolve("src/views/index.html"));
});


export { router };
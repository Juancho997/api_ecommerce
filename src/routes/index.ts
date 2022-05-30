import {Router} from "express";

import user from "./Users";
import product from "./Products";
import category from "./Categories";
import token_confirmed from "./Token_confirm";
import order from './Orders';



const router = Router() ;

router.use("/users", user) //CRUD de usuario - ADMIN lee y borra => implementar ban y permaban?
router.use('/auth/tokenConfirmed', token_confirmed)   
router.use("/products", product) //CRUD - User y Admin
router.use("/categories",category) // CRUD - Admin
router.use("/orders", order) 




export default router
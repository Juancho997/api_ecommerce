import {Router} from "express";

import user from "./Users";
import product from "./Products";
import category from "./Categories";
import token_confirmed from "./Token_confirm";
import order from './Orders';



const route=Router() ;

route.use("/users", user) //CRUD de usuario - ADMIN lee y borra => implementar ban y permaban?
route.use('/auth/tokenConfirmed', token_confirmed)   
route.use("/products", product) //CRUD - User y Admin
route.use("/categories",category) // CRUD - Admin
route.use("/orders", order) 




export default route
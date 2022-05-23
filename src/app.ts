import express from "express";
import morgan from "morgan";
import router from "./routes/index"
import {createRoles} from './controllers/initialSetUp';

const app = express();

createRoles();


app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.use((req:any, res:any, next:any) => {
    const error: any = new Error("Not found");
    error.status = 404;
    next(error);
  }
  );
  
  app.use((error: any, req: any, res: any, next: any) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message,
      },
    });
  })
export default app;

import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { routes } from "./routes";
import "express-async-errors";
import "reflect-metadata";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use((err: Error, req: Request, res: Response, next: NextFunction)=>{
    if(err instanceof Error){
        return res.status(400).json({
            error: err.message,
        });
    }
    return res.status(500).json({
        status: "error",
        message: "Internal Server Error"
    });
});

app.listen(3010);
import { Request, Response } from "express";

import { CreateExcelService } from "../services/CreateExcelService";

class CreateExcelController {
    handle(req: Request, res: Response){
        const { nameFile, name, email, fone, geslag, functions } = req.body;
        const createExcelService = new CreateExcelService();
        try{
            createExcelService.execute({nameFile, email, fone, name, geslag, functions});
            return res.json({ mesage: "Create Excel Table!" });
        } catch(err){
            return res.status(400).json({error: "Fail to Create Excel Table"});
        }
    }
}

export { CreateExcelController };
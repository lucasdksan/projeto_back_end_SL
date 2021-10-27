import ExcelJs from "exceljs";

import { ExcelTestType } from "../types/ExcelTestType";

class CreateExcelService {
    execute({ email, fone, name, functions, geslag, nameFile }:ExcelTestType){
        const workbook = new ExcelJs.Workbook();
        const sheet = workbook.addWorksheet("Primeira Aba");

        sheet.columns = [
            {header: "name", key: "name"},
            {header: "email", key: "email"},
            {header: "fone", key: "fone"},
            {header: "functions", key: "functions"},
            {header: "geslag", key: "geslag"}
        ];
        sheet.addRow({
            name: `${name}`,
            email: `${email}`,
            fone: `${fone}`,
            geslag: `${geslag}`,
            functions: `${functions}`,
        });
        sheet.getRow(1).font = {
            bold: true,
            color: {
                argb: "FFCCCCCC"
            }
        };
        sheet.getRow(1).fill = {
            type: "pattern",
            pattern: "solid",
            bgColor: { 
                argb: "FF000000"
            }
        }
        sheet.workbook.xlsx.writeFile(`${nameFile}.xlsx`);
    }
}

export { CreateExcelService };
import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { TypeExcelEnum } from '@shared/models/enum/type-excel.enum';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

@Injectable()
export class HttpUtilsService {

    /**
     * Metodo para mapear um objeto qualquer para um HttpParams, com base nos atributos.
     * @param objeto Objeto para mapeamento
     */
    httpParamsByObjeto(objeto: Object): {
        [param: string]: string | string[]
    } {
        const httpParams: {
            [param: string]: string | string[];
        } = {};
        if (objeto != null) {
            // tslint:disable-next-line:forin
            for (const key in objeto) {
                const parametro = objeto[key];
                if (parametro != null) {
                    if (String(parametro).trim()) {
                        httpParams[key] = String(objeto[key]);
                    }
                }
            }
        }
        return httpParams;
    }


    public exportAsExcelFile(json: any[], excelFileName: string, titulos: string[], type: TypeExcelEnum): void {
        const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
        if (!worksheet['!cols']) {
            worksheet['!cols'] = [];
        }
        if (!worksheet['!cols'][0]) {
            worksheet['!cols'][0] = {};
        }
        worksheet['!cols'][0].hidden = true;
        XLSX.utils.sheet_add_aoa(worksheet, [titulos], { origin: 0 });
        const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = XLSX.write(workbook, { bookType: type, type: 'array' });
        this.saveAsExcelFile(excelBuffer, excelFileName, type);
    }
    private saveAsExcelFile(buffer: any, fileName: string, type: TypeExcelEnum): void {
        const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
        FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + '.' + type);
    }

}

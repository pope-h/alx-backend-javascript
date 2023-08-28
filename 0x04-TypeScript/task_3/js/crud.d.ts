import { RowID, RowElement } from './interface'

export function insertRow(row: RowElement): number;
export function deleteRow(rowId: RowID): undefined;
export function updateRow(rowId: RowID, row: RowElement): number;

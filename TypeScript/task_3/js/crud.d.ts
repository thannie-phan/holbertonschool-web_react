// ambient declaration file. TypeScript doesn’t know the types of crud.js functions by default. 
// Ambient declaration file(.d.ts) tells TypeScript the types. 

import { RowID, RowElement } from "./interface";

// type declarations for each CRUD function
export function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;

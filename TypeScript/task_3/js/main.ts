// look at crud.d.ts for types.

/// <reference path="crud.d.ts" />

import { RowID, RowElement } from "./interface";
// actually import everything from crud.js as CRUD
import * as CRUD from './crud';

// create the row object
const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva"
}

// insert row
const newRowID: RowID = CRUD.insertRow(row);


// update row
const updatedRow: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva",
    age: 23
}

CRUD.updateRow(newRowID, updatedRow);

// delete row
CRUD.deleteRow(newRowID);
/*
Action types
*/

export const ADD_ROW = "ADD_ROW"
export const MODIFY_ROW = "MODIFY_ROW"

/*
Action creators
*/

export function addRow( row ) {
    return {type:ADD_ROW, row}
}

export function modifyRow( row ) {
    return {type:MODIFY_ROW, row}
}

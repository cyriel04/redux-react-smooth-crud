export const START = "START";
export const ADD = "ADD";
export const EDIT = "EDIT";
export const DELETE = "DELETE";

export function startApp(data) {
  return { type: START, data };
}

export function addItem(data) {
  return { type: ADD, data };
}

export function editItem(data) {
  return { type: EDIT, data };
}

export function deleteItem(data) {
  return { type: DELETE, data };
}

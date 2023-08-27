import { browser } from "$app/environment";
import { writable } from "svelte/store";

const defaultValue = {};
const initialValue = browser
  ? JSON.parse(window.localStorage.getItem("inventoryDB")) ?? defaultValue
  : defaultValue;

const db = writable<Record<string, string>>(initialValue);

db.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem("inventoryDB", JSON.stringify(value));
  }
});

export default db;

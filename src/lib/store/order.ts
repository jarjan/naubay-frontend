import { browser } from "$app/environment";
import { writable } from "svelte/store";

const defaultValue = {};
const initialValue = browser
  ? JSON.parse(window.localStorage.getItem("orderDB")) ?? defaultValue
  : defaultValue;

type DBType = Record<
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday",
  Record<string, number>
>;

const db = writable<DBType>(initialValue);

db.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem("orderDB", JSON.stringify(value));
  }
});

export default db;

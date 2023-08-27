import { dev } from "$app/environment";

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

export const prerender = true;

// export async function load({ fetch, url }) {
//   let state = "loading";
//   let products = [];
//   await fetch(`https://naubay.onrender.com/products`)
//     .then((res) => res.json())
//     .then((data) => {
//       products = data;
//       state = "loaded";
//     })
//     .catch(() => {
//       state = "error";
//     });

//   return {
//     state,
//     products,
//   };
// }
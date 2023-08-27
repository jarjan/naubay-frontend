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

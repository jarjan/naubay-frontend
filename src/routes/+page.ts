import {redirect} from '@sveltejs/kit';

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
export const ssr = false;

export async function load({ fetch, url }) {
  throw redirect('/order');
  // let state = "loading";
  // let products = [];
  // await fetch(`https://naubay.onrender.com/products`)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     products = data;
  //     state = "loaded";
  //   })
  //   .catch(() => {
  //     state = "error";
  //   });

  // return {
  //   state,
  //   products,
  // };
}

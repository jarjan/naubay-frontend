// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export async function load({ fetch, url }) {
  let content = "Loading...";

  const path = url.searchParams.get("q") || "";

  await fetch(`https://naubay.onrender.com/${path}`)
    .then((res) => res.json())
    .then((data) => {
      content = data.kez;
    })
    .catch(() => {
      content = "Failed to load data";
    });

  return {
    content,
  };
}

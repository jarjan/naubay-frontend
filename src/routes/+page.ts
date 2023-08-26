// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export async function load({ params }) {
  let content = "Loading...";

  await fetch("https://naubay.onrender.com/")
    // .then((res) => res.json())
    .then((res) => res.json())
    .then((data) => {
      content = data;
      console.log({ data });
    })
    .catch(() => {
      content = "Failed to load data";
      console.log({ content });
    });

  return {
    content,
  };
}

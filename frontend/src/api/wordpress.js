const BASE = "http://ro.uvt.ri.test/wp-json/wp/v2";

export async function getPosts() {
  const res = await fetch(`${BASE}/posts`);
  return res.json();
}

export async function getPost(slug) {
  const res = await fetch(`${BASE}/posts?slug=${slug}`);
  const data = await res.json();
  return data[0];
}
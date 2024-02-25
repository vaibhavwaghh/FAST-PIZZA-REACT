const GEO_CODING_URL = import.meta.env.VITE_GEO_CODING_URL;
export async function getAddress({ latitude, longitude }) {
  const res = await fetch(
    `${GEO_CODING_URL}?latitude=${latitude}&longitude=${longitude}`
  );
  if (!res.ok) throw Error("Failed getting address");

  const data = await res.json();
  return data;
}

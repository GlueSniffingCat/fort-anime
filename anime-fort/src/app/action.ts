"use server";
const basePath = "https://kitsu.io/api/edge";
export const fetchAnime = async () => {
	const response = await fetch(`${basePath}/anime`);
	const data = await response.json();
	return data;
};

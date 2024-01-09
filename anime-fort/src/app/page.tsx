import { fetchAnime } from "./action";
import Navbar from "../components/Navbar";
import MediaCard from "../components/MediaCard";
export default async function Home() {
	//const data = await fetchAnime();
	return (
		<main className="xl:py-[2rem] xl:px-[10.125rem] lg:py-[1.5rem] lg:px-[5rem] py-[2.5rem] px-[1rem] text-lg">
			<Navbar />
		</main>
	);
}

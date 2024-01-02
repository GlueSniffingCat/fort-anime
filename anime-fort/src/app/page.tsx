import { fetchAnime } from "./action";
import MediaCard from "../components/MediaCard";
export default async function Home() {
	const data = await fetchAnime();
	return (
		<main className="">
			{data.data.map((item: any) => {
				return (
					<MediaCard
						key={item.id}
						id={item.id}
						type={item.type}
						links={item.links}
						attributes={item.attributes}
					/>
				);
			})}
		</main>
	);
}

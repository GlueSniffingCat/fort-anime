import Image from "next/image";
interface Props {
	id: number;
	type: string;
	links: any;
	attributes: any;
}

const MediaCard = ({ id, type, links, attributes }: Props) => {
	return (
		<div className="max-w-[25%]">
			<div className="relative min-h-64">
				<Image
					layout="fill"
					objectFit="cover"
					src="https://media.kitsu.io/anime/poster_images/1/large.jpg"
					alt="Cowboy Bebop"
				/>
			</div>
			<div className="bg-[]">
				<div>
					<h2>Cowboy Bebop</h2>
					<p>
						<span>R</span> - <span>17+ violence & profanity</span>/
						<span>1998-04-03</span>,
					</p>
				</div>
				<div>
					<div>
						<h3>Summary</h3>
						<p>96</p>
					</div>
					<p>
						In the year 2071, humanity has colonized several of the
						planets and moons of the solar system leaving the now
						uninhabitable surface of planet Earth behind. The Inter
						Solar System Police attempts to keep peace in the
						galaxy, aided in part by outlaw bounty hunters, referred
						to as "Cowboys". The ragtag team aboard the spaceship
						Bebop are two such individuals. Mellow and carefree
						Spike Spiegel is balanced by his boisterous, pragmatic
						partner Jet Black as the pair makes a living chasing
						bounties and collecting rewards. Thrown off course by
						the addition of new members that they meet in their
						travels—Ein, a genetically engineered, highly
						intelligent Welsh Corgi; femme fatale Faye Valentine, an
						enigmatic trickster with memory loss; and the strange
						computer whiz kid Edward Wong—the crew embarks on
						thrilling adventures that unravel each member's dark and
						mysterious past little by little. Well-balanced with
						high density action and light-hearted comedy, Cowboy
						Bebop is a space Western classic and an homage to the
						smooth and improvised music it is named after.
					</p>
				</div>
				<div></div>
			</div>
			{/* render links and attributes */}
		</div>
	);
};

export default MediaCard;

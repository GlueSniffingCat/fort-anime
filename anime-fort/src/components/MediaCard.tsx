interface Props {
	id: number;
	type: string;
	links: any;
	attributes: any;
}

const MediaCard = ({ id, type, links, attributes }: Props) => {
	return (
		<div>
			<img src={attributes.posterImage.original} alt="poster" />
			<p>{id}</p>
			<p>{type}</p>
			<p>{links.self}</p>
			<p>{attributes.titles.en}</p>
			<p>{attributes.description}</p>
			{/* render links and attributes */}
		</div>
	);
};

export default MediaCard;

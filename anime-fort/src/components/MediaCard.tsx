import Image from "next/image";
interface Props {
	id: number;
	type: string;
	links: any;
	attributes: any;
}

const MediaCard = ({ id, type, links, attributes }: Props) => {
	return (
		<div>
			<div className="relative h-64">
				<Image
					layout="fill"
					objectFit="cover"
					src={attributes.coverImage?.tiny}
					alt={attributes.canonicalTitle}
				/>
			</div>
			<div>
				<div>
					<h2>{attributes.canonicalTitle}</h2>
					<p>
						{attributes.ageRating}-{attributes.ageRatingGuide}/
						{attributes.startDate}/{},
					</p>
				</div>
				<div>
					<div>
						<h3>Summary</h3>
						<p>{}</p>
					</div>
					<p>{attributes.synopsis}</p>
				</div>
				<div></div>
			</div>
			{/* render links and attributes */}
		</div>
	);
};

export default MediaCard;

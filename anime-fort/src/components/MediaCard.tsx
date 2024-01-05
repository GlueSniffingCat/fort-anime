import Image from "next/image";
interface Props {
	id: number;
	type: string;
	links: any;
	attributes: any;
}

const MediaCard = ({ id, type, links, attributes }: Props) => {
	return <div className="">{/* render links and attributes */}</div>;
};

export default MediaCard;

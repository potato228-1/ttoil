import pic from "../../public/slider/pic2.png";

interface Slide {
	subtitle: string;
	title: string;
	description: string;
	picture: any;
}

export default function getSlides() {
	let slides: Slide[] = [
		{
			subtitle: `WHAT CAN WE DO FOR YOU?`,
			title: `Hedging`,
			description:
				`As a part of TTOIL’s commitment to our partners, the company offers a range of hedge services intended to mitigate the effects of the inherent commodity trading risks by maintaining a diversified portfolio of physical and paper instruments geared to protect the company’s and our client’s capital.`,
			picture: pic,
		},
		{
			subtitle: `WHAT CAN WE DO FOR YOU?`,
			title: `Hedging`,
			description:
				`As a part of TTOIL’s commitment to our partners, the company offers a range of hedge services intended to mitigate the effects of the inherent commodity trading risks by maintaining a diversified portfolio of physical and paper instruments geared to protect the company’s and our client’s capital.`,
			picture: pic,
		},
		{
			subtitle: `WHAT CAN WE DO FOR YOU?`,
			title: `Hedging`,
			description:
				`As a part of TTOIL’s commitment to our partners, the company offers a range of hedge services intended to mitigate the effects of the inherent commodity trading risks by maintaining a diversified portfolio of physical and paper instruments geared to protect the company’s and our client’s capital.`,
			picture: pic,
		},
		{
			subtitle: `WHAT CAN WE DO FOR YOU?`,
			title: `Hedging`,
			description:
				`As a part of TTOIL’s commitment to our partners, the company offers a range of hedge services intended to mitigate the effects of the inherent commodity trading risks by maintaining a diversified portfolio of physical and paper instruments geared to protect the company’s and our client’s capital.`,
			picture: pic,
		},
	];

	return slides;
}
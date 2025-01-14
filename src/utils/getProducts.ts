import productPic1 from "@/../public/products/products_pic1.png";
import productPic2 from "@/../public/products/products_pic2.png";
import productPic3 from "@/../public/products/products_pic3.png";
import productPic4 from "@/../public/products/products_pic4.png";
import productPic5 from "@/../public/products/products_pic5.png";
import productPic6 from "@/../public/products/products_pic6.png";
import productPic7 from "@/../public/products/products_pic7.png";
import productPic8 from "@/../public/products/products_pic8.png";

export default function getProducts() {
	let products = [
		{
			title: `Fuel Oil & Vacuum Gasoil`,
			description: `
                TTOIL started out as a fuel oil and a VGO trader, and this is what we are really good at. Every month we move over 1 million tons of heavy feedstocks. Half of this is used by refineries to supplement their incoming crude streams, andthe other half as blendstock for bunker fuel.

                Our fuel oil trading geography is extensive. We source fuel oil and VGO from Russia, Kazakhstan, Turkmenistan, Algeria, West Africa and take it to major trading hubs including Rotterdam, Fujairah, Singapore, Turkey or directly to refineries. We serve marine bunker    markets through long term partnerships with fleet owners and bunkering companies. We add value by carefully selecting incoming streams, using our extensive terminal network to store and blend them where required, maintaining the quality throughout.
            `,
			image: productPic1,
		},
		{
			title: `Middle Distillates`,
			description: `
                Middle distillates form the core of commercial road transport, industrial and marine fuels. TTOIL’s middle distillates portfolio serves industrial customers and retail operators in many countries, ranging from Europe to Americas and Asia Pacific.

                We cover the whole range of generic and special fuels – road diesel, jet fuel, low and high sulphur gasoil for marine and industrial applications.

                TTOIL serve industrial customers and distributors delivery middle distillate fuels and components with perfect timing, execution, and customer service.
            `,
			image: productPic2,
		},
		{
			title: `Naptha`,
			description: `
                We are a major naphtha supplier to refineries, petrochemical producers and other industrial users all over the globe. Our naphtha turnover has been showing consistent growth, reaching millions of tons annually.

                The product is sourced in the Former Soviet Union and from major Med producers and is taken to customers worldwide – from Europe to     Asia Pacific. Our strategic partnerships with naphtha users in Turkey make us one of the largest suppliers of this feedstock to Turkish refineries and petrochemical companies.
            `,
			image: productPic3,
		},
		{
			title: `Crude`,
			description: `
                TTOIL is a firmly established crude trader, with offtake agreements and regular purchases from major producers in Russia, Kazakhstan, the Middle East, North Sea, US Gulf Coast and Latin America supplying refineries in Europe, the Med and Asia Pacific.

                We are very serious about our crude book, and we are constantly working to source new grades and to serve more refiners with the grades and blends they require.
            `,
			image: productPic4,
		},
		{
			title: `Gasoline`,
			description: `
                Our gasoline book has been consistently growing over the years. We supply customers in Europe and Central Asia with grades appropriate for their jurisdictions.

                TTOIL’s motor gasoline book is underpinned by our extensive naphtha and component trading operation, strategically positioned storage and strong logistics.
            `,
			image: productPic5,
		},
		{
			title: `Energy of the Future`,
			description: `
                As a responsible participant of the energy market, TTOIL is moving forward to make sure our energy becomes cleaner, more affordable, and widely vailable.

                AZOIL is invested in renewable power generation with a firm view to expand this commitment both geographically and financially.

                We take an active part in industry discussions for assessment and deployment of blue and green hydrogen solutions as key fuels of the future. Meeting the global need for clean hydrogen is fundamental to TTOIL’s vision of a cleaner world with zero carbon emissions. We are engaging and will continue to engage with a broad range of stakeholders cross the industry in Europe, Middle East and the Former Soviet Union to make the hydrogen fuelled world a reality.
            `,
			image: productPic6,
		},
		{
			title: `Petrochemical Products`,
			description: ``,
			image: productPic7,
		},
		{
			title: `Dry Bulk`,
			description: `
                AZOIL’s comprehensive and innovative approach to commodity markets is not limited to liquid hydrocarbons.
            `,
			image: productPic8,
		},
	];

    return products
}
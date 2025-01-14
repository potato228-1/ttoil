interface FeatureItem {
	subtitle: string;
	title: string;
	description: string;
}

export function getAbout() {
	let about: FeatureItem = {
		subtitle: `ABOUT OUR COMPANY`,
		title: `
                With access to major suppliers and manufacturers around the globe.
            `,
		description: `
                TTOIL Trading and Commerce Agency trades several of crude oil and refined petroleum products in global energy market.
                
                TTOIL operates in UAE, Turkey, Azerbaijan, Russia, Ukraine, Georgia, Kazakhstan, Turkmenistan and other CIS and Central Asian Countries.
                
                OUR MISSION is to provide first-class quality and services to all our valuable customers and to always be innovative and alert in the marketplace we serve.
            `,
	};

	return about;
}

export function getServices() {
	let services: FeatureItem = {
		subtitle: `SERVICES`,
		title: `Our Services`,
		description: `
            As a professional company, we are specialized to provide you the following services:

            Trading crude oil and refined petroleum products:
            Our team is ready support your company to realize your trading and commerce businesses in crude oil and refined petroleum products. Crude oil and refined petroleum products (such as gasoline, jet fuel and diesel) are some of the most widely used and traded commodities in the world. Thus, as TTOIL Trading and Commerce Agency we are involved in the exploration, extraction, refining and marketing and transporting of these commodities worldwide. As a professional company, we are specialized to support to realize your trading and commerce businesses in crude oil and refined petroleum products.
        `,
	};

    return services
}

export function getLocations(){
    let locations: FeatureItem = {
        subtitle: `LOCATIONS`,
        title: `Countries in which we operate`,
        description: `We operate on almost all continents. We have offices in Azerbaijan, Turkey, Georgia, Ukraine, Russia, UAE, Kazakhstan, Turkmenistan and other countries.`,
    }

    return locations
}
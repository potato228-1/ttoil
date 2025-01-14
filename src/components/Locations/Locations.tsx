import styles from './Locations.module.css'

import Feature from '../UI/feature/Feature'
import { getLocations } from '@/utils/getFeature'
import locations_image from '../../../public/locations/locations.png'
import locations_imageMobile from '../../../public/locations/locations_mobile.png'
import Image from 'next/image'

export default function Locations() {
    let locations_data = getLocations()
    let locations_list = [
        'AZERBAIJAN',
        '·',
        'TURKEY',
        '·',
        'GEORGIA',
        '·',
        'UKRAINE',
        '·',
        'UAE',
        '·',
        'RUS',
    ]

  return (
    <div className={styles.locations}>
        <Feature feature={locations_data} />

        <Image src={locations_image} alt='' className={[styles.locationsImage, styles.locationsImage_desk].join(' ')} />
        <Image src={locations_imageMobile} alt='' className={[styles.locationsImage, styles.locationsImage_mobile].join(' ')} />

        <div className={styles.locationsList}>
            {locations_list.map((location: string, index) => (
                <p className={location == '·' ? styles.text_middleDot : styles.location_item} key={index}>
                    {location}
                </p>
            ))}
        </div>
    </div>
  )
}

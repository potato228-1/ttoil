"use client";

import styles from "./Slider.module.css";

import { useState } from "react";
import Image from "next/image";
import Subtitle from "../subtitle/Subtitle";
import arrow_left from '../../../../public/slider/arrow_left.png'
import arrow_right from '../../../../public/slider/arrow_right.png'

interface Slide {
	subtitle: string;
	title: string;
	description: string;
	picture: any;
}

interface SliderProps {
	sliderData: Slide[];
}

export default function Slider({ sliderData }: SliderProps) {
	let [currentPage, setCurrentPage] = useState(0);

    function nextSlide(){
        if(currentPage !== sliderData.length - 1){
            setCurrentPage(currentPage + 1)
        } else{
            setCurrentPage(0)
        }
    }

    function previousSlide(){
        if(currentPage !== 0){
            setCurrentPage(currentPage - 1)
        } else{
            setCurrentPage(sliderData.length - 1)
        }
    }

	return (
		<div className={styles.slider_container}>
			<div
				className={styles.slider_inner}
				style={{ 
                    backgroundImage: `url(${sliderData[currentPage].picture.src})`, 
                }}
			>
				<div className={styles.text_container}>
					<Subtitle text={sliderData[currentPage].subtitle} />

					<p className={styles.slide_title}>
						{sliderData[currentPage].title}
					</p>

					<p className={styles.slide_description}>
						{sliderData[currentPage].description}
					</p>
				</div>
			</div>

            <div className={styles.btns_container}>
                <button className={styles.slider_btn} onClick={() => previousSlide()}>
                    <Image src={arrow_left} alt="Previous slide" className={styles.btn_icon} />
                </button>

                <button className={styles.slider_btn} onClick={() => nextSlide()}>
                    <Image src={arrow_right} alt="Next slide" className={styles.btn_icon} />
                </button>
            </div>

			<div className={styles.numbers_container}>
				{sliderData.map((_, index) => (
					<span
						key={index}
						className={
                            index == currentPage ? [styles.orderItem, styles.current].join(' ') : styles.orderItem
                        }
						onClick={() => setCurrentPage(index)}
					></span>
				))}
			</div>
		</div>
	);
}

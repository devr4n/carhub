"use client";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";

const Hero = () => {

    const handleScroll = () => {

    }


    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                {/*<h1 className="hero__title">*/}
                {/*    Find, book or rent a car -- quickly and easily!*/}
                {/*</h1>*/}

                <p className="hero__subtitle">
                    Araç kiralama işlemlerinizi hızlı ve kolay bir şekilde yapın.
                </p>

                <CustomButton
                    title="Araçlara Göz At"
                    btnType="button"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10 px-8 py-3 "
                    handleClick={handleScroll}
                />
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src="/hero.png" alt="Hero Image" fill className="object-contain" />
                </div>
                    <div className="hero__image-overlay"></div>
            </div>
        </div>
    );
}

export default Hero;
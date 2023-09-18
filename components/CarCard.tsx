"use client"
import {CarProps} from "@/types";
import {calculateCarRent, generateCarImageUrl} from "@/utils";
import Image from "next/image";
import React, {useState} from "react";
import {BaseButton, CarDetails} from "@/components/index";

interface CarCardProps {
    car: CarProps
}

const CarCard = ({car}: CarCardProps) => {
    const [open, setIsOpen] = useState(false);
    const {city_mpg, year, make, model, transmission, drive} = car;

    const handleModalOpen = (value: boolean) => {
        setIsOpen(value);
    }

    const carRentPrice = calculateCarRent(city_mpg, year);
    return (
        <div className="car-card group">
            <div className="card-card__content">
                <h2 className="car-card__content-title"><span className="uppercase">{make}</span> {model}</h2>
            </div>

            <p className="flex mt-6 text-[32px] font-extrabold">
                <span className="self-start text-[14px] font-semibold">
                    $
                </span>
                {carRentPrice}
                <span className="self-end text-[14px] font-medium">
                    /day
                </span>
            </p>

            <div className="relative w-full h-40 my-3 object-contain">
                <Image src={generateCarImageUrl(car)} alt={'CarModel'} fill priority className="object-contain"/>
            </div>

            <div className="relative flex w-full mt-2">
                <div className="flex group-hover:invisible w-full justify-between text-gray">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src="/steering-wheel.svg" width={20} height={20} alt={"Steering wheel"} />
                        <p className="text-[14px]">{transmission === 'a' ? 'Automatic' : 'Manual'}</p>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src="/tire.svg" width={20} height={20} alt={"Tire"} />
                        <p className="text-[14px]">{drive.toUpperCase()}</p>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src="/gas.svg" width={20} height={20} alt={"City MPG"} />
                        <p className="text-[14px]">{city_mpg} MPG</p>
                    </div>
                </div>

                <div className="car-card__btn-container">
                    <BaseButton title={"View more"}
                                textStyles="text-white text-[14px] leading-[17px] font-bold"
                                rightIcon="/right-arrow.svg"
                                handleClick={() => handleModalOpen(true)}
                                containerStyles="w-full py-[16px] rounded-full bg-primary-blue" />
                </div>
            </div>

            <CarDetails isOpen={open} closeModal={() => handleModalOpen(false)} car={car} />
        </div>
    )
}

export default CarCard
'use client';
import { CarProps } from '@/types';
import { calculateCarRent, generateCarImageUrl } from '@/utils';
import Image from 'next/image';
import React, { useState } from 'react';
import { BaseButton, CarDetails } from '@/components/index';
import { upperFirst } from 'es-toolkit/string';

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const [open, setIsOpen] = useState(false);
  const {
    city_mpg,
    year,
    make,
    fuel_type,
    cylinders,
    displacement,
    model,
    transmission,
    drive,
  } = car;

  console.log(car);

  const handleModalOpen = (value: boolean) => {
    setIsOpen(value);
  };

  const carRentPrice = calculateCarRent(city_mpg, year);
  return (
    <div className='car-card'>
      <div className='flex w-full justify-between'>
        <div className='car-card__content'>
          <h2 className='car-card__content-title'>
            <span className='uppercase'>{make}</span> {model}
          </h2>

          <p className='flex text-[32px] font-extrabold'>
            <span className='self-start text-[14px] font-semibold'>$</span>
            {carRentPrice}
            <span className='self-end text-[14px] font-medium'>/day</span>
          </p>
        </div>
        <div>
          <Image
            src={'/bookmark.svg'}
            alt={'Bookmark'}
            width={20}
            height={20}
            priority
            className='object-contain cursor-pointer'
          />
        </div>
      </div>

      <div className='flex w-full justify-between'>
        <div className='relative w-60 h-40 my-3 object-contain'>
          <Image
            src={generateCarImageUrl(car)}
            alt={'CarModel'}
            fill
            priority
            className='object-contain'
          />
        </div>

        <div className='flex justify-center flex-col'>
          <div className='flex flex-col h-40 justify-between text-gray'>
            <div className='flex justify-start items-center gap-2'>
              <Image
                src='/steering-wheel.svg'
                width={30}
                height={30}
                alt={'Steering wheel'}
              />
              <p className='text-[16px]'>
                {transmission === 'a' ? 'Automatic' : 'Manual'}
              </p>
            </div>

            <div className='flex justify-start items-center gap-2'>
              <Image src='/tire.svg' width={30} height={30} alt={'Tire'} />
              <p className='text-[16px]'>{drive.toUpperCase()}</p>
            </div>

            <div className='flex justify-start items-center gap-2'>
              <Image src='/gas.svg' width={30} height={30} alt={'City MPG'} />
              <p className='text-[16px]'>{city_mpg} MPG</p>
            </div>
          </div>
        </div>

        <div className='flex justify-center flex-col'>
          <div className='flex flex-col h-40 justify-between text-gray'>
            <div className='flex justify-start items-center gap-2'>
              <Image
                src='/fuel.svg'
                width={30}
                height={30}
                alt={'Steering wheel'}
              />
              <p className='text-[16px]'>{upperFirst(fuel_type)}</p>
            </div>

            <div className='flex justify-start items-center gap-2'>
              <Image src='/calendar.svg' width={30} height={30} alt={'Tire'} />
              <p className='text-[16px]'>{year}</p>
            </div>

            {fuel_type != 'electricity' && (
              <div className='flex justify-start items-center gap-2'>
                <Image
                  src='/engine.svg'
                  width={30}
                  height={30}
                  alt={'City MPG'}
                />
                <p className='text-[16px]'>
                  {cylinders} cylinders, {displacement} litres{' '}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className='car-card__btn-container'>
          <BaseButton
            title={'View more'}
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleClick={() => handleModalOpen(true)}
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
          />
        </div>
      </div>
      <CarDetails
        isOpen={open}
        closeModal={() => handleModalOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;

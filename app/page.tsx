import React from 'react';
import Hero from '../components/Hero';
import { CarCard, CustomFilter, SearchBar, ShowMore } from '@/components';
import { fetchCars } from '@/utils';
import { HomeProps } from '@/types';
import { fuels, yearsOfProduction } from '@/constants/constants';

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || 'BMW',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 7,
    model: searchParams.model || '5',
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className='overflow-hidden'>
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard
                  key={`${car?.make}${car?.model}${car?.year}`}
                  car={car}
                />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 7) / 7}
              isNext={(searchParams.limit || 7) > allCars.length}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>No results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}

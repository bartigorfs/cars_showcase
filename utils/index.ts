import { CarProps, FilterProps } from '@/types';

export async function fetchCars(filter: FilterProps) {
  const headers = {
    'X-RapidAPI-Key': 'cfaccc7d53mshf71264710c66107p14aff9jsncef5806d4ad1',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${filter.manufacturer}&model=${filter.model}&limit=${filter.limit}&fuel_type=${filter.fuel}`,
    { headers: headers }
  );
  const result = await response.json();

  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;
  const milleageFactor = 0.1;
  const ageFactor = 0.05;

  const milleageRate = city_mpg * milleageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + milleageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL('https://cdn.imagin.studio/getimage');
  const { make, year, model } = car;

  url.searchParams.append('customer', 'hrjavascript-mastery');

  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(' ')[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
};

export const handleUpdateParamsUtil = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  if (type && value) {
    searchParams.set(type, value);
  } else {
    searchParams.delete(type);
  }

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

import { FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
    const { manufacturer, year, model, limit, fuel } = filters;
  
    // Set the required headers for the API request
    const headers: HeadersInit = {
        'X-RapidAPI-Key': '0c28c8ca46msh98d97a85db308fcp10809bjsn259998690e40',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    };
  
    // Set the required headers for the API request
    const response = await fetch(
      `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
      {
        headers: headers,
      }
    );
  
    // Parse the response as JSON
    const result = await response.json();
  
    return result;
  }

  export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };
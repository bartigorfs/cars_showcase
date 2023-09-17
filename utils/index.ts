const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'cfaccc7d53mshf71264710c66107p14aff9jsncef5806d4ad1',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
};

try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
} catch (error) {
    console.error(error);
}
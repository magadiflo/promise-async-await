//* Task 4: get the neigher countries of Columbia

const fetchCountry = async (alpha3Code) => {
  try {
    const res = await fetch(`https://restcountries.com/v2/alpha//${alpha3Code}`);

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchCountryAndNeigbors = async () => {
  const colombia = await fetchCountry('col');
  const neighbors = await Promise.all(colombia.borders.map(border => fetchCountry(border))); //* Para manejar un arreglo de promesas
  console.log(neighbors);
}

fetchCountryAndNeigbors();
//* Task 3: using https://restcountries.com/v2/alpha/pe API,
//* Obtener detalles del país con código: pe

const fetchData = async () => {
    const res = await fetch('https://restcountries.com/v2/alpha/pe');
    const country = await res.json(); //* También es una promesa por lo que también debemos esperar (await)

    console.log(country);
}

fetchData();
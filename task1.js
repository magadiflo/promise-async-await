//* Task 1: Translate the story into code.

//* ***************** PROMISE ***********************
//* *************************************************

/**
 * * Historia
 * * ********
 * * Kayo promete hacer una o varias tortas para el cumpleaños
 * * de su amigo. Su cumpleaños será en 2 semanas (lo simularemos por 2 segundos).
 * * Si para se momento Kayo está bien, le hará 5 tortas. En caso contrario,
 * * Cayo se enferma, no le hará ninguna torta. Finalmente, así 
 * * le haga torta o no, la fiesta siempre se realizará.
 * * 
 */

//* Escribiendo la función
const onMyBirthday = (isKayoSick) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!isKayoSick) {
                resolve(5); //* le mandamos 5 tortas
            } else {
                //* Cuando se rechaza se puede pasar cualquier argumento,
                //* similar a los argumentos que le pasamos en el resolve()
                //* pero como estamos en un rechazo, lo recomendable es pasar
                //* un objeto de error
                reject(new Error("Estoy enfermo!"));
            }
        }, 2000);
    });
};

//* Ejecutando función
let isSick = true;

onMyBirthday(isSick)
.then((result) => { //* Cuando se resuelve la promesa
    console.log(`Tengo ${result} torta(s)`);
})
.catch((error) => { //* Cuando se rechaza la promesa
    console.log(error.message);
})
.finally(() => { //* Una vez se resuelva o rechace se ejecuta este finally
    console.log("Igual hay Fiesta");
});
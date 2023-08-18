import { respHotels } from "./hotels.js";

const buttonConsult = document.getElementById("consult");
const main = document.querySelector("main");

buttonConsult.addEventListener("click", async () => {
    const esperar = await respHotels();
    const jason = await esperar.json();
    console.log(jason);

    // aqui empieza el DOM!!

    jason.forEach((prueboHotel) => {
        //simplemente le di un cualquier nombre a cada elemento del arreglo "prueboHotel"

        const cardHotel = document.createElement("div");
        cardHotel.className = "card";
        main.appendChild(cardHotel);
        //crear div para cada card... cada div tiene: 1.imagen del hotel. 2h2-nombre hotel. 3.div-pais para contener la bandera y el nombre del pais. 4.div-$$$$ para contener # de habitaciones y precio $$$$

        const imgHotel = document.createElement("img");
        imgHotel.setAttribute("src", prueboHotel.photo);
        imgHotel.setAttribute("alt", prueboHotel.name);
        cardHotel.appendChild(imgHotel);

        const nombre = document.createElement("h2");
        nombre.innerText = prueboHotel.name;
        nombre.className = "nombre_hotel";
        cardHotel.appendChild(nombre);

        //3.div-pais para contener la bandera y el nombre del pais.
        const pais = document.createElement("div");
        pais.className = "pais";
        cardHotel.appendChild(pais);

        /*         const imgflag = document.createElement("img");
        imgflag.setAttribute("src", prueboHotel.photo);
        imgflag.setAttribute("alt", prueboHotel.name);
        pais.appendChild(imgflag); */

        const nombreP = document.createElement("p");
        nombreP.innerText = prueboHotel.country;
        nombreP.className = "nombre_pais";
        pais.appendChild(nombreP);

        //4.div-$$$$ para contener # de habitaciones y precio $$$$
        const habit_precio = document.createElement("div");
        habit_precio.className = "habit_precio";
        cardHotel.appendChild(habit_precio);

        const camas = document.createElement("p");
        camas.innerText = prueboHotel.rooms;
        camas.className = "habitaciones";
        habit_precio.appendChild(camas);

        const precio = document.createElement("p");
        precio.innerText = prueboHotel.price;
        precio.className = "precio";
        habit_precio.appendChild(precio);

        //tengo contenedor, imagen y titulo para cada card asi que esto lo voy a repetir con cada hotel.forEach....mejor jason.forEach
    });
});

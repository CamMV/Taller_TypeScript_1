import { series } from "./data.js";
import { Serie } from "./serie.js";

let seriesTBody: HTMLElement = document.getElementById('series')!;
let promedioT: HTMLElement = document.getElementById('promedio')!;

//Llamado a la función renderSeries
renderSeries(series);
function renderSeries(series: Serie[]): void {
    console.log("Rendering series . . . ");
    let num_series = series.length;
    let num_temp = 0;
    series.forEach((serie) => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${serie.id}</td>
            <td>${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
        seriesTBody.appendChild(row);
        num_temp += serie.seasons;
    });
    console.log("Series rendered.");
    let promedio = num_temp / num_series;
    promedioT.innerHTML = `${promedio}`;
};

//Añade el resto de información de las series
//<td>${serie.description}</td>
//<td><a href="${serie.link}">Enlace</a></td>
//<td><img src="${serie.image}" alt="${serie.name}" width="100"></td>
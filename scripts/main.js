import { series } from "./data.js";
var seriesTBody = document.getElementById('series');
var promedioT = document.getElementById('promedio');
//Llamado a la función renderSeries
renderSeries(series);
function renderSeries(series) {
    console.log("Rendering series . . . ");
    var num_series = series.length;
    var num_temp = 0;
    series.forEach(function (serie) {
        var row = document.createElement('tr');
        row.innerHTML = "\n            <td>".concat(serie.id, "</td>\n            <td>").concat(serie.name, "</td>\n            <td>").concat(serie.channel, "</td>\n            <td>").concat(serie.seasons, "</td>\n        ");
        seriesTBody.appendChild(row);
        num_temp += serie.seasons;
    });
    console.log("Series rendered.");
    var promedio = num_temp / num_series;
    promedioT.innerHTML = "".concat(promedio);
}
;
//Añade el resto de información de las series
//<td>${serie.description}</td>
//<td><a href="${serie.link}">Enlace</a></td>
//<td><img src="${serie.image}" alt="${serie.name}" width="100"></td>

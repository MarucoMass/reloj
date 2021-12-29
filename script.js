var reloj = document.getElementById("hora__tiempo");
var dia = document.getElementById("fecha__dia");
var dia2 = document.getElementById("fecha__dia2");

fecha();
function fecha(){
    //FECHAS//  DIA DE LA SEMANA        
    let date = new Date();
    switch (date.getDay()) {
        case 0:
            dia.innerHTML = "Domingo"
            break;
        case 1:
            dia.innerHTML = "Lunes"
            break;
        case 2:
            dia.innerHTML = "Martes"
            break;
        case 3:
            dia.innerHTML = "Miércoles"
            break;
        case 4:
            dia.innerHTML = "Jueves"
            break;
        case 5:
            dia.innerHTML = "Viernes"
            break;
        case 6:
            dia.innerHTML = "Sábado"
            break;
        default:
            break;
        }
    //FECHA DEL AÑO//
    fecha = date.getDate();
    anio = date.getFullYear();
    mes = date.getMonth();
    switch (date.getMonth()) {
        case 0:
            dia2.innerHTML = fecha+" de "+" Diciembre "+" de "+anio;
            break;
        case 1:
            dia2.innerHTML = fecha+" de "+" Enero "+" de "+anio;
            break;
        case 2:
            dia2.innerHTML = fecha+" de "+" Febrero "+" de "+anio;
            break;
        case 3:
            dia2.innerHTML = fecha+" de "+" Marzo "+" de "+anio;
            break;
        case 4:
            dia2.innerHTML = fecha+" de "+" Abril "+" de "+anio;
            break;
        case 5:
            dia2.innerHTML = fecha+" de "+" Mayo "+" de "+anio;
            break;
        case 6:
            dia2.innerHTML = fecha+" de "+" Junio "+" de "+anio;
            break;
        case 7:
            dia2.innerHTML = fecha+" de "+" Julio "+" de "+anio;
            break;
        case 8:
            dia2.innerHTML = fecha+" de "+" Diciembre "+" de "+anio;
            break;
        case 9:
            dia2.innerHTML = fecha+" de "+" Agosto "+" de "+anio;
            break;
        case 10:
            dia2.innerHTML = fecha+" de "+" Septiembre "+" de "+anio;
            break;
        case 11:
            dia2.innerHTML = fecha+" de "+" Octubre "+" de "+anio;
            break;
        case 12:
            dia2.innerHTML = fecha+" de "+" Noviembre "+" de "+anio;
            break;
    
        default:
            break;
    }
    //RELOJ//
    setInterval(() => {
        let tiempo = new Date();
    
        reloj.innerHTML = tiempo.toLocaleTimeString() +" hs ";
    }, 1000);
}


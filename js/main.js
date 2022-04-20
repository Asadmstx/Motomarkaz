let i = 0;
let txt = 'техосмотра и технического обслуживания автомобилей.';
let speed = 50;

function typer() {
    if (i < txt.length) {
        document.getElementById("typeEffect").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typer, speed);
    }
}

typer();
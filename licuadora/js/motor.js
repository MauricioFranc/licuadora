var estadolicuadora = "apagada";
var sonidolicuadora = document.getElementById("blender-audio");
var botonlicuadora = document.getElementById("blender-button-audio");
var licuadora = document.getElementById("blender")

function controlarlicuadora() {
    if (estadolicuadora == "apagada"){
        estadolicuadora = "encendido";
        hacerBrrBrr();
        licuadora.classList.add("active");
        /*console.log("me prendiste");*/
    } else{
        estadolicuadora = "apagada"
        hacerBrrBrr();
        licuadora.classList.remove("active");
        /*console.log("me apagaste");*/
    }
}

function hacerBrrBrr(){
    if(sonidolicuadora.paused ) {
         botonlicuadora.play();
         sonidolicuadora.play();
    } else {
        botonlicuadora.play();
        sonidolicuadora.pause();
        sonidolicuadora.currentTime = 0;
    }
}
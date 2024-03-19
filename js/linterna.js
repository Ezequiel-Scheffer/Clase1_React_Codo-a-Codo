let estado_linterna = false;

/* capturo el sonido */
let sonido_batman = document.querySelector("#bati_encendido");
let sonido_click = document.querySelector("#bati_click");

let batman = document.querySelector(".batman");
let bati_boton = document.querySelector(".bati_boton");

/* evento by Ezequiel*/

bati_boton.addEventListener("click", () =>{
  !estado_linterna
  ?(
    estado_linterna = true,
    sonido(),
    batman.classList.toggle("batman_activo"))
  :(
    estado_linterna = false,
    sonido(),
    batman.classList.toggle("batman_activo")
  )
});

function sonido() {
  sonido_batman.paused
  ? (sonido_click.play(),
    sonido_batman.play())
  : (sonido_click.play(),
    sonido_batman.pause())
  }

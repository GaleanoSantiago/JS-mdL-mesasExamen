let alumnos=[{
    nombre:"Dolor Suffering",
    email: "dolor@pain.com",
    materia:"Fisica 3"
},{
    nombre:"Karina Guerrera",
    email: "kar@pain.com",
    materia:"Literatura"
},{
    nombre:"Jorge Ramirez",
    email: "the_george@pain.com",
    materia:"Matematica"
},{
    nombre:"Facundo Roberto",
    email: "facu@pain.com",
    materia:"Programacion II"
},{
    nombre:"Iron Melnicovid",
    email: "hierro@pain.com",
    materia:"Educacion fisica"
}];

const botonConfirmar = document.querySelector(".boton-confirmar");
const contenedor = document.querySelector(".grid-container")

let htmlCode="";

for (alumno in alumnos){
    // console.log(alumnos[alumno]);
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    htmlCode += `
    <div class="grid-item nombre">${nombre}</div>
        <div class="grid-item email">${email}</div>
        <div class="grid-item materia">${materia}</div>
        <div class="grid-item semana">
        <select class="semana-elegida">
            <option value="Semana 1">Semana 1</option>
            <option value="Semana 2">Semana 2</option>
        </select>
    </div>`;

}
contenedor.innerHTML=htmlCode;


botonConfirmar.addEventListener("click",()=>{
    let confirmar = confirm("¿Realmente quieres confirmar las mesas?");

    if(confirmar){
        document.body.removeChild(botonConfirmar);          //Para eliminar un elemento del body 
    let elementos = document.querySelectorAll(".semana");
    let semanasElegidas = document.querySelectorAll(".semana-elegida");
    for(elemento in elementos){
        semana=elementos[elemento];
        semana.innerHTML=semanasElegidas[elemento].value;
    }
    }
})

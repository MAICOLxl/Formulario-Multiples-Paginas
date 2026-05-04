
let formulario = JSON.parse(localStorage.getItem("formulario")) || {
  datosPersonales: {},
  familiares: [],
  condiciones: [],
  internamientos: []
};

function siguiente(p) {
  if (p === 2) guardarDatosPersonales();
  if (p === 5) mostrarResumen();

  cambiarPagina(p);
}

function anterior(p) {
  cambiarPagina(p);
}

function cambiarPagina(p) {
  document.querySelectorAll(".pagina").forEach(x => x.classList.remove("activa"));
  document.getElementById("p" + p).classList.add("activa");
}

function guardarDatosPersonales() {
  formulario.datosPersonales = {
    nombre: document.getElementById("nombre").value,
    cedula: document.getElementById("cedula").value,
    edad: parseInt(document.getElementById("edad").value)
  };
}

function agregarFamiliar() {
  let f = {
    nombre: document.getElementById("famNombre").value,
    parentesco: document.getElementById("parentesco").value,
    edad: parseInt(document.getElementById("famEdad").value)
  };

  formulario.familiares.push(f);
  renderFamiliares();
}

function renderFamiliares() {
  document.getElementById("listaFamiliares").innerHTML =
    formulario.familiares
      .map(f => `${f.nombre} - ${f.parentesco} - ${f.edad}`)
      .join("<br>");
}

function agregarCondicion() {
  let c = {
    enfermedad: document.getElementById("enfermedad").value,
    tiempo: document.getElementById("tiempo").value
  };

  formulario.condiciones.push(c);
  renderCondiciones();
}

function renderCondiciones() {
  document.getElementById("listaCondiciones").innerHTML =
    formulario.condiciones
      .map(c => `${c.enfermedad} - ${c.tiempo}`)
      .join("<br>");
}

function agregarInternamiento() {
  let i = {
    fecha: document.getElementById("fecha").value,
    centro: document.getElementById("centro").value,
    diagnostico: document.getElementById("diagnostico").value
  };

  formulario.internamientos.push(i);
  renderInternamientos();
}

function renderInternamientos() {
  document.getElementById("listaInternamientos").innerHTML =
    formulario.internamientos
      .map(i => `${i.fecha} - ${i.centro} - ${i.diagnostico}`)
      .join("<br>");
}

function mostrarResumen() {
  document.getElementById("resultado").textContent =
    JSON.stringify(formulario, null, 2);
}

function guardar() {
  localStorage.setItem("formulario", JSON.stringify(formulario));
  alert("Datos guardados correctamente");
}

renderFamiliares();
renderCondiciones();
renderInternamientos();
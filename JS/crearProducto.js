// Importar la API de productos
import { productosAPI } from "../JS/productosAPI.js";

// Seleccionar el formulario y el botón de limpiar
const formulario = document.querySelector("[data-formulario]");
const borrar = document.querySelector(".btn-clear");

// Función para crear un producto
async function crearProducto(evento) {
  evento.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
  const nombre = document.querySelector("[data-nombre]").value; // Obtener el valor del nombre
  const precio = document.querySelector("[data-precio]").value; // Obtener el valor del precio
  const imagen = document.querySelector("[data-imagen]").value; // Obtener el valor de la imagen

  // Crear el producto usando la API
  await productosAPI.crearProducto(nombre, precio, imagen);
}

// Añadir evento de envío al formulario
formulario.addEventListener("submit", (evento) => crearProducto(evento));

// Función para borrar el formulario
function borrarForm() {
  document.querySelector("[data-nombre]").value = ""; // Vaciar el campo de nombre
  document.querySelector("[data-precio]").value = ""; // Vaciar el campo de precio
  document.querySelector("[data-imagen]").value = ""; // Vaciar el campo de imagen
}

// Añadir evento de clic al botón de limpiar
borrar.addEventListener("click", (e) => {
  e.preventDefault(); // Prevenir el comportamiento predeterminado del botón
  borrarForm(); // Llamar a la función para borrar el formulario
});

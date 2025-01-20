// Importar la API de productos
import { productosAPI } from "../JS/productosAPI.js";

// Seleccionar el contenedor de las tarjetas de productos
const productsCard = document.querySelector("[data-card]");

// Función para crear una tarjeta de producto
export default function crearCard(imagen, nombre, precio, id) {
  // Crear el elemento de lista para la tarjeta de producto
  const imagenProduct = document.createElement("li");
  imagenProduct.classList.add("target_cards");

  // Agregar contenido HTML a la tarjeta de producto
  imagenProduct.innerHTML = `
    <img src="${imagen}" alt="imagen_producto" class="img_product">
    <p class="text_product">${nombre}</p>
    <p class="price_product">$${precio}</p>
    <button class="material-symbols-outlined" data-id="${id}">delete</button>`;

  // Seleccionar el botón de borrar dentro de la tarjeta de producto
  const iconBorrar = imagenProduct.querySelector("[data-id]");

  // Añadir evento de clic al botón de borrar
  iconBorrar.addEventListener("click", (e) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del botón
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await productosAPI.eliminarProducto(id); // Eliminar el producto usando la API
        imagenProduct.remove(); // Eliminar la tarjeta de producto del DOM
        Swal.fire("Deleted!", "Your file has been deleted.", "success"); // Mostrar mensaje de confirmación
      }
    });
  });

  return imagenProduct; // Devolver la tarjeta de producto
}

// Función para listar productos
async function listarProductos() {
  const listApi = await productosAPI.listarProductos(); // Obtener la lista de productos de la API
  listApi.forEach((card) => {
    productsCard.appendChild(
      crearCard(card.imagen, card.nombre, card.precio, card.id)
    ); // Crear y añadir cada tarjeta de producto al DOM
  });
}

// Llamar a la función para listar productos al cargar la página
listarProductos();

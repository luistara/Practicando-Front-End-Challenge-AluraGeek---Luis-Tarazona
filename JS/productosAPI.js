// SOLICITUD AL ENDPOINT, PARA RECIBIR DATOS Y CONVERTIRLOS A JSON PARA DESPUÉS SER DEVUELTOS
async function listarProductos() {
  const conexion = await fetch(
    "https://fake-api-umber-ten.vercel.app/productos",
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }
  );
  const conexionConvertida = await conexion.json(); // Convertir la respuesta a JSON

  return conexionConvertida; // Devolver los datos convertidos
}

// FUNCIÓN PARA CREAR UN PRODUCTO
async function crearProducto(nombre, precio, imagen) {
  const conexion = await fetch(
    "https://fake-api-umber-ten.vercel.app/productos",
    {
      method: "POST", // ENVIAR DATOS AL SERVIDOR
      headers: {
        "content-type": "application/json", // CONVERSIÓN DE UN OBJETO JS A UNA CADENA JSON
      },
      body: JSON.stringify({
        // CONVERSIÓN DE UN OBJETO JS A CADENA JSON
        nombre: nombre,
        precio: `${precio} USD`,
        imagen: imagen,
      }),
    }
  );
  const conexionConvertida = await conexion.json(); // Convertir la respuesta a JSON

  return conexionConvertida; // Devolver los datos convertidos
}

// FUNCIÓN PARA BORRAR EL PRODUCTO DE LA UI Y DEL JSON
async function eliminarProducto(id) {
  try {
    const conexion = await fetch(
      `https://fake-api-umber-ten.vercel.app/productos/${id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json", // CONVERSIÓN DE UN OBJETO JS A UNA CADENA JSON
        },
      }
    );
    if (!conexion.ok) {
      // Comprobar si la solicitud fue exitosa
      throw new Error("Error en la solicitud"); // Lanzar error si la solicitud no fue exitosa
    }
  } catch (error) {
    console.error("Error al eliminar el producto del servidor: ", error); // Mostrar error en consola
  }
}

// Exportar las funciones de la API de productos
export const productosAPI = {
  listarProductos,
  crearProducto,
  eliminarProducto,
};

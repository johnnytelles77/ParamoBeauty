

function calcularPrecioTotal() {
    let precioTotal = 0;
    let codigoDescuento = "";
    let impuestos = 0.07; // 7% de impuestos de Etados Unidos.
  
    let producto = prompt("Ingresa el nombre del producto (o escribe 'salir' para finalizar la compra):");
  
    if (producto.toLowerCase() === "salir") {
      alert("Gracias por visitarnos.");
      return;
    }
  
    while (true) {
      let precioProducto;
  
      switch (producto.toLowerCase()) {
        case "labial":
          precioProducto = 9.99;
          break;
        case "paleta":
          precioProducto = 25.99;
          break;
        case "kit de brochas":
          precioProducto = 35.99;
          break;
        default:
          alert("Producto no reconocido.");
          break;
      }
  
      precioTotal += precioProducto;
  
      let agregarOtro = prompt("¿Deseas agregar otro producto? (Escribe 'sí' o 'no'):");
  
      if (agregarOtro.toLowerCase() === "no") {
        break;
      }
  
      producto = prompt("Ingresa el nombre del siguiente producto:");
    }
  
    codigoDescuento = prompt("¿Tienes un código de descuento? (Escribe 'BEAUTY10' para obtener un 10% de descuento):");
  
    if (codigoDescuento === "BEAUTY10") {
      precioTotal *= 0.9; // Aplicar un 10% de descuento si el código es BEAUTY10
      alert("¡Descuento aplicado! Tu precio total con descuento es: $" + precioTotal.toFixed(2));
    }
  
    let precioConImpuestos = precioTotal * (1 + impuestos);
  
    alert("El precio total de tu compra (con impuestos) es: $" + precioConImpuestos.toFixed(2) + "\nGracias por tu compra!");
  }
  
  calcularPrecioTotal();
  
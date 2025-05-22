function validarStockAlimentos() {
    const stockAdulto = 50;
    const cantidadAdulto = document.getElementById('cantidadAdulto').value;
    const stockCrias = 50;
    const cantidadCrias = document.getElementById('cantidadCrias').value;
    let mensaje = '';

    if (cantidadAdulto < stockAdulto) {
        mensaje += '¡Atención! Stock de balanceado adulto bajo. ';
      }
      if (cantidadCrias < stockCrias) {
        mensaje += '¡Atención! Stock de balanceado crías bajo.';
      }
      if (!mensaje) mensaje = 'Stock dentro de los parámetros normales.';
    
    document.getElementById('alertaStock').textContent = mensaje;
    }

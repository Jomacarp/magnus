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

 function agregarVacunas(){
  const corral = document.getElementById('corral1').value;
  const cantidad = document.getElementById('cantidad').value;
  const fecha = document.getElementById('fecha').value;
  if(!corral||!cantidad||!fecha){
    alert('Faltan datos')
    return;
  }
  const tabla =document.getElementById('Tabla-Vacunacion').getElementsByTagName('tbody')[0];
  const nuevafila =tabla.insertRow();
  nuevafila.insertCell(0).textContent= corral;
  nuevafila.insertCell(1).textContent= cantidad;
  nuevafila.insertCell(2).textContent= fecha;
  
  document.getElementById('corral1').selectedIndex =0;
  document.getElementById('cantidad').value= '';
  document.getElementById('fecha').value= '';
 }
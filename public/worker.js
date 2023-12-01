self.addEventListener('message', (event) => {
  const url = event.data;

  // Hacer la petición fetch
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      // Enviar la respuesta al hilo principal
      console.log('Respuesta de la petición fetch:', data);
    })
    .catch((error) => {
      console.error('Error en la petición fetch:', error);
    });
  });
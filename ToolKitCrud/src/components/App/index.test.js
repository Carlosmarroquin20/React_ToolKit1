import React from 'react';
// Importa la función `render` desde `@testing-library/react` para renderizar componentes en pruebas
import { render } from '@testing-library/react';
// Importa el componente `App` que se va a probar
import App from '.';

// Define una prueba llamada 'renders without crashing'
test('renders without crashing', () => {
  // Renderiza el componente `App` usando `render` de `@testing-library/react`
  // El resultado de `render` se destruye (unmount) al final de la prueba para limpiar el DOM
  const { unmount } = render(<App />);
  
  // Desmonta el componente `App` para limpiar el DOM después de la prueba
  unmount();
});

import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { useCallback } from 'react';
import { Outlet } from "react-router-dom";
import { Provider } from 'react-redux';

import { store } from './store/store';

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'theme',
    defaultValue: 'dark',
  });

  const toggleColorScheme = useCallback(
    (value?: ColorScheme) => {
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    },
    [colorScheme, setColorScheme]
  );

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider 
        theme={{
          colorScheme: colorScheme
        }}
        withGlobalStyles 
        withNormalizeCSS
      >
        <Provider store={store}>
          <Outlet />
        </Provider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App

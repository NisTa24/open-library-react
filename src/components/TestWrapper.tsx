import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from '../store/store';

interface TestWrapperProps {
    children?: React.ReactNode;
}

export const TestWrapper = ({ children }: TestWrapperProps) => {
    return (
        <BrowserRouter>
            <ColorSchemeProvider colorScheme="dark" toggleColorScheme={() => 'dark'}>
                <MantineProvider>
                    <Provider store={store}>
                        {children}
                    </Provider>
                </MantineProvider>
            </ColorSchemeProvider>
        </BrowserRouter>
    );
};

import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
// import the theme file

const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider theme={/* import for theme */}>{children}</ThemeProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };

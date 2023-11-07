import { MantineProvider, createTheme } from '@mantine/core';
import App from './components/App';

const theme = createTheme({});

export default function Providers() {
  return (
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  );
}
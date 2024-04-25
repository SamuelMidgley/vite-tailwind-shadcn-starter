import App from "./App";
import { ThemeProvider } from "./components/theme-provider";

export const WrappedApp = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
  );
};

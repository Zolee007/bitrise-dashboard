import React from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import { ThemeProvider } from "styled-components";

import Router from "routes/Router";
import theme from "themes/custom";

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <SkeletonTheme color={theme.colors.skeleton}>
        <Router />
      </SkeletonTheme>
    </ThemeProvider>
  );
};

export default App;

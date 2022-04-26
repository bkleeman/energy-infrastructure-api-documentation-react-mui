import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './Components/App/App';
import Introduction from './routes/introduction'
import CodeExamples from './routes/code-examples'
import Endpoints from './routes/endpoints'
import Schema from './routes/schema'
import Coverage from './routes/coverage'
import UsEnergyInfrastructureVisualization from './routes/us-energy-infrastructure-visualization'
import theme from './theme';
// import * as serviceWorker from './serviceWorker';
ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/code-examples" element={<CodeExamples />} />
        <Route path="/endpoints" element={<Endpoints />} />
        <Route path="/schema" element={<Schema />} />
        <Route path="/coverage" element={<Coverage />} />
        <Route path="/us-energy-infrastructure-visualization" element={<UsEnergyInfrastructureVisualization />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root'),
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
import React from 'react';
import AppRouter from './AppRouter';
import ErrorBoundary from './errorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  );
}

export default App;

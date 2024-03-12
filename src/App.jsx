import { lazy, Suspense } from 'react';
import './App.css'

const render = (moduleName) => {
  const LazyComponent = lazy(() => import(`./modules/${moduleName}/index.jsx`));

  const WrappedComponent = (props) => (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent {...props} />
    </Suspense>
  );

  return WrappedComponent;
}

function App({ moduleName }) {
  const LazyComponent = render(moduleName);
  return <LazyComponent />
}

export default App

import React from 'react';
import ProblemComponent from '../components/ProblemComponent';
import ErrorBoundary from '../components/ErrorBoundary';
import OtherComponent from '../components/OtherComponent';
import BrokenSidebar from '../components/BrokenSidebar';

const DemonstrateErrorBoundaries = () => (
  <div>
    <h1>Error Boundary examples: (open up console)</h1>
    {/* Declarative version of try/catch */}
    <hr />
    <ErrorBoundary>
      <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
      <OtherComponent />
      <ProblemComponent willThrow="no" url="https://swapi.co/api/planets/1" />
      <ProblemComponent willThrow="yup" url="https://swapi.co/api/pasdfasdfasdf/1314" />
    </ErrorBoundary>

    <hr />

    <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>

    <p>#3: Below will NOT throw (calls <a href="https://swapi.co/api/planets/1">https://swapi.co/api/planets/1</a>)</p>
    <ErrorBoundary><ProblemComponent willThrow="no" url="https://swapi.co/api/planets/1" /></ErrorBoundary>
    <p>#4: Below will throw (gets 404 calling <a href="https://swapi.co/api/pasdfasdfasdf/1314">https://swapi.co/api/pasdfasdfasdf/1314</a>), but doesn't affect #3</p>
    <ErrorBoundary><ProblemComponent willThrow="yup" url="https://swapi.co/api/pasdfasdfasdf/1314" /></ErrorBoundary>

    {/* <BrokenSidebar /> */}

  </div>
)

export default DemonstrateErrorBoundaries;

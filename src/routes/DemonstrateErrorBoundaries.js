import React from 'react';
import ProblemComponent from '../components/ProblemComponent';
import ErrorBoundary from '../components/ErrorBoundary';
import BrokenSidebar from '../components/BrokenSidebar';

const DemonstrateErrorBoundaries = () => (
  <div>
    {/* Declarative version of try/catch */}
    <hr />
    <ErrorBoundary>
      <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
      {/* <OtherComponent /> */}
      <ProblemComponent />
      <ProblemComponent />
    </ErrorBoundary>
    <hr />
    <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
    <ErrorBoundary><ProblemComponent /></ErrorBoundary>
    <ErrorBoundary><ProblemComponent /></ErrorBoundary>

    {/* <BrokenSidebar /> */}

  </div>
)

export default DemonstrateErrorBoundaries;

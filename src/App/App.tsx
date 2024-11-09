import React from 'react';

import {Routes} from '@/presentation/routes/index.routes';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();
function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  );
}

export default App;

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { version } from '@/package.json';
import { Provider } from '@/src/generic/provider/Provider.tsx';
import App from '@/src/generic/app/App.tsx';
import '@/src/generic/i18n';

createRoot(document.getElementById('_clips_3mma_0')!).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>
);

console.log(
  `%c[clips]%c${version}%c@jff`,
  'padding: 4px 3px 3px; background: #000; font-weight: bold; color: #ff0;',
  'padding: 4px 3px 3px; background: #ff0; font-weight: bold; color: #000;',
  'padding: 4px 3px 3px; background: #000; font-weight: bold; color: #ff0;'
);

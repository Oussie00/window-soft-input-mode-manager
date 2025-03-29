import { registerPlugin } from '@capacitor/core';

import type { WindowSoftInputModeManagerPlugin } from './definitions';

const WindowSoftInputModeManager = registerPlugin<WindowSoftInputModeManagerPlugin>('WindowSoftInputModeManager', {
  web: () => import('./web').then(m => new m.WindowSoftInputModeManagerWeb()),
});

export * from './definitions';
export { WindowSoftInputModeManager };

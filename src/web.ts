import { WebPlugin } from '@capacitor/core';

import type { WindowSoftInputModeManagerPlugin } from './definitions';

export class WindowSoftInputModeManagerWeb extends WebPlugin implements WindowSoftInputModeManagerPlugin {
  setMode(_: { mode: 'adjustPan' | 'adjustResize' | 'adjustNothing'; }): Promise<void> {
    throw new Error('Method not implemented on WEB.');
  }

}

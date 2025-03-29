import { WebPlugin } from '@capacitor/core';
import type { WindowSoftInputModeManagerPlugin } from './definitions';

export class WindowSoftInputModeManagerWeb extends WebPlugin implements WindowSoftInputModeManagerPlugin {
  setWindowSoftInputMode(_: { mode: 'adjustPan' | 'adjustResize' | 'adjustNothing'; }): Promise<void> {
    console.error("This plugin is only available for android");
    return Promise.resolve();
  }

}

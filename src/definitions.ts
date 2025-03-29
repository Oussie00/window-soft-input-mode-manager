import { Plugin } from "@capacitor/core";

export interface WindowSoftInputModeManagerPlugin extends Plugin {
  setWindowSoftInputMode(options: { mode: 'adjustPan' | 'adjustResize' | 'adjustNothing' }): Promise<void>;
}
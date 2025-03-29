export interface WindowSoftInputModeManagerPlugin {
  setMode(options: { mode: 'adjustPan' | 'adjustResize' | 'adjustNothing' }): Promise<void>;
}

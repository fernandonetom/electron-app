import { ElectronHandler } from 'main/preload';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    electron: ElectronHandler;
    // eslint-disable-next-line no-unused-vars
    teste(path: string): string;
  }
}

export {};

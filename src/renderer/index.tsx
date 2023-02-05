import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<App />);

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
// window.electron.ipcRenderer.on('teste-resposa', (args) => {
//   console.log(args);
// });
window.electron.teste('meuv-valor');
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);

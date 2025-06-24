import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
document.querySelectorAll('#lovable-badge').forEach(el => el.remove());
createRoot(document.getElementById("root")!).render(<App />);

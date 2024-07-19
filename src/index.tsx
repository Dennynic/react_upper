import { createRoot } from 'react-dom/client';
import { BrowserRouter, createBrowserRouter } from 'react-router-dom';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <App/>
        </BrowserRouter>
    );

import { Main } from './components/main';
import { createRoot } from 'react-dom/client';

function main() {
    const root = createRoot(document.getElementById('root'));
    root.render(<Main />);
}

main();

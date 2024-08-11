import './App.css';
import SideMenu from './components/side-menu';

import { ListItem } from './types';

const data: ListItem[] = [
    { name: '1', url: '/private/loans' },
    { name: '2', url: '/private/cards' },
    { name: '3', url: '/private/deposits' },
    { name: '4', url: '/private/services' },
    { name: '5', url: '/private/services' },
    { name: '6', url: '/private/services' },
    { name: '7', url: '/private/services' },
];

function App() {
    return (
        <>
            <SideMenu overlayColor="#303030" data={data} width={300} />
        </>
    );
}

export default App;

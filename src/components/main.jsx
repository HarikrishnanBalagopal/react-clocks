import { Clock } from "./clock";
import '../styles/main.css';

export const Main = () => (
    <div>
        <h1>Clocks</h1>
        <div className="my-grid">
            <Clock/>
            <Clock offset={+5.5}/>
            <Clock offset={-5}/>
            <Clock offset={-3}/>
        </div>
    </div>
);

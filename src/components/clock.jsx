import { useEffect, useState } from "react";
const STEP = 2 * Math.PI / 60;
const STEP_HOURS = 2 * Math.PI / 12;
const SCALE = .4;
const OFFSET = Math.PI / 2;

export const Clock = ({ offset }) => {
    const [time, setTime] = useState(Date.now());
    useEffect(() => {
        const id = setInterval(() => setTime(Date.now()), 1000);
        return () => { clearInterval(id); };
    }, []);
    const date = new Date(time + (offset ? offset * 1000 * 60 * 60 : 0));
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hourAng = hours * STEP_HOURS - OFFSET;
    const hourX = Math.cos(hourAng) * SCALE;
    const hourY = Math.sin(hourAng) * SCALE;

    const minAng = minutes * STEP - OFFSET;
    const minX = Math.cos(minAng) * SCALE * 1.4;
    const minY = Math.sin(minAng) * SCALE * 1.4;

    const secAng = seconds * STEP - OFFSET;
    const secX = Math.cos(secAng) * SCALE * 1.6;
    const secY = Math.sin(secAng) * SCALE * 1.6;

    return (
        <div>
            <div>The time{offset ? ` with an offset of ${offset} hours` : ''} is: {date.toLocaleTimeString()}</div>
            <svg viewBox="-1 -1 2 2" xmlns="http://www.w3.org/2000/svg">
                <circle r=".8" cx="0" cy="0" fill="none" stroke="black" strokeWidth={.1}></circle>
                <path d={`M 0 0 L ${hourX} ${hourY}`} fill="none" stroke="black" strokeWidth={.075} strokeLinecap="round" />
                <path d={`M 0 0 L ${minX} ${minY}`} fill="none" stroke="black" strokeWidth={.05} strokeLinecap="round" />
                <path d={`M 0 0 L ${secX} ${secY}`} fill="none" stroke="red" strokeWidth={.04} strokeLinecap="round" />
                <path id="clock-bottom" fill="none" stroke="none" strokeWidth={.075} d="M -.7 0 A .5 .5 0 1 0 .7 0" />
                <text fontFamily="monospace" fontSize={.1}>
                    <textPath href="#clock-bottom" textLength='100%'>
                        9 8 7 6 5 4 3
                    </textPath>
                </text>
                <path id="clock-top" fill="none" stroke="none" strokeWidth={.075} d="M .7 0 A .5 .5 0 1 0 -.7 0" />
                <text fontFamily="monospace" fontSize={.1}>
                    <textPath href="#clock-top" textLength='70%' startOffset='15%'>
                        2 1 0 1 X
                    </textPath>
                </text>
            </svg>
        </div>
    );
};
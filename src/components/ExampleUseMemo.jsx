import { useState, useCallback } from "react";
import Lists from "./Lists";

const ExampleUseMemo = () => {
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);


    // const doubleNumber = useMemo(() => {
    //     return slowFunction(number);
    // }, [number]);

    const themeStyles = {
        backgroundColor: dark ? '#333' : '#fff',
        color: dark ? '#fff' : '#333',
        height: '100px'
    }

    const getItems = useCallback(() => {
        return [number, number + 1, number + 2]
    }, [number]);

    // function slowFunction(num) {
    //     console.log('Slow funksiya ishlashni boshladi');
    //     for (let index = 0; index < 1000000000; index++) { }
    //     num * 2;
    // }


    return (
        <div>
            <input type='number' value={number} onChange={(e) => setNumber(e.target.value)} />
            <button onClick={() => setDark(prevDark => !prevDark)}>Change theme</button>

            <div style={themeStyles}>
                <Lists getItems={getItems} />
            </div>
        </div>
    )
}

export default ExampleUseMemo
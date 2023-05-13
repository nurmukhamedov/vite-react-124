import { useState, useEffect } from "react";

const Lists = ({ getItems }) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(getItems());
        console.log('Updating items');
    }, [getItems]);

    return (
        <div>
            {items.map((item) => <div key={item}>{item}</div>)}
        </div>
    )
}

export default Lists
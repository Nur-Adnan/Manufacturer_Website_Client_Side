import { useEffect, useState } from 'react';

const useTool = (id) => {
    const [part, setPart] = useState([]);
    useEffect(() => {

        const url = `https://intense-everglades-32006.herokuapp.com/tools/${id}`
        fetch(url)
            .then(response => response.json())
            .then(data => setPart(data))
    }, [id, part])
    return { part, setPart }
};

export default useTool;
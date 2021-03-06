import { useEffect, useState } from "react";

const useTools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch("https://intense-everglades-32006.herokuapp.com/tools")
            .then(res => res.json())
            .then(data => setTools(data))
    }, [tools])
    return [tools, setTools];
};

export default useTools;
import { useEffect, useState } from 'react';
const useToken = (user, userName) => {
    const [token, setToken] = useState('')
    useEffect(() => {

        const getToken = async () => {

            const email = user?.email;
            const displayName = await userName || user?.displayName;
            const currentUser = { email: email, displayName: displayName, photoURL: user?.photoURL }
            if (email) {
                fetch(`https://intense-everglades-32006.herokuapp.com/user/${email}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        setToken(data.getToken);
                        localStorage.setItem('token', data.getToken);
                    })

            }

        }
        getToken()
    }, [user, userName])
    return [token]
};

export default useToken;
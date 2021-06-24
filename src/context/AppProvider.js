import React, { useState } from 'react';
import AppContext from '../context';

const Provider = ({ children }) => {
    const [context, setContext] = useState({
        data: [],
        isLoading: false,
        imdbID: '',
    });

    return (
        <AppContext.Provider value={[context, setContext]}>
            {children}
        </AppContext.Provider>
    )
}

export default Provider;
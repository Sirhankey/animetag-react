import React, { createContext, useState, useContext } from 'react';

const LoadingContext = createContext();
LoadingContext.displayName = 'Loading';

export const useLoadingContext = () => {
    const { isLoading, setIsLoading } = useContext(LoadingContext);
    return { isLoading, setIsLoading };
};

export const LoadingProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </LoadingContext.Provider>
    );
};

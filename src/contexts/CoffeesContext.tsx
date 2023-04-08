import { ReactNode, createContext } from "react";

interface CoffeesContextProviderProps{
    children: ReactNode;
}

export const CoffeesContext = createContext({});

export function CoffeesContextProvider({ children }: CoffeesContextProviderProps) {
    return(
        <CoffeesContext.Provider value={{}}>
            {children}
        </CoffeesContext.Provider>
    );
}
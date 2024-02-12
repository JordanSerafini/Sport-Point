// Supprimez les importations inutilisées de `useState` et `useMemo`
import { createContext } from 'react';
import { toast, ToastContainer } from 'react-toastify'; 

const mainContext = createContext();

export const MainProvider = ({ children }) => {
    const showToast = (msg, options = {}) => {
        toast(msg, options);
    };

    return (
        <mainContext.Provider value={{ showToast }}>
            {children}
            <ToastContainer /> {/* Maintenant `ToastContainer` est défini */}
        </mainContext.Provider>
    );
}

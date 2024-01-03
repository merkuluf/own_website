import { useCallback } from "react";

function useRedirect() {
    const redirect = useCallback((url) => {
        setTimeout(() => {
            window.open(url, '_blank'); 
        })
    }, []);

    return redirect;
}

export default useRedirect;

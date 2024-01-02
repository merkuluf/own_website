import { useCallback } from "react";

function useRedirect() {
    const redirect = useCallback((url) => {
        window.location.href = url
    }, [])

    return redirect;
}

export default useRedirect;
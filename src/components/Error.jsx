import React, { useState, useEffect } from "react";

function Error(props) {
    const [hasError, setErrors] = useState(false);

    useEffect(() => {
        const handleError = () => {
            setErrors(true);
        };
        window.addEventListener("error", handleError);
        return () => window.removeEventListener("error", handleError);
    }, []);

  return hasError ? ( <h1>Ooops Something went wrong, That's not good</h1> ) : ( <div>{props.children}</div> );
}















export default Error;
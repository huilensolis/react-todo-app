import { useState } from "react"

function ErrorHandler(){
    const [error, setError] = useState(false);

    function setErrorState(error){
        setError(error)
    }
    function getError(){
        return error
    }
    return [getError, setErrorState]
}
export {ErrorHandler}
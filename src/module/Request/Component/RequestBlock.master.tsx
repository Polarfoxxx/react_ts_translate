import "../style/RequestBlock.master.style.css"
import { useEffect, useState } from "react";

import { servicestypeLanguage } from "../../API";

import { typesLanguagefromAPI } from "../../API/types";
import { typesObjectLanguagefromAPI } from "../../API/types";


function RequestBlock(): JSX.Element {
const [ allLaugues, setAllLaugues ] = useState()


    useEffect(() => {
        servicestypeLanguage.typeLanguage()
        .then(data => {setAllLaugues(data)})

        .catch(err => console.log(err))
    }, []) 
    

    return (
        <div className="requestBlock">
            <div className="reqInputBlock">
                <select>
                    {
                        allLaugues !== undefined ? 
                    allLaugues.map((option : typesLanguagefromAPI) => (
                        <option>{option.language}</option>
                    )) : ""
                
                
                }
                </select>
            </div>
        </div>
    )
}
export default RequestBlock
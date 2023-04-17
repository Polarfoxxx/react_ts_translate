import "../style/ResponzeBlock.master.style.css"
import { useEffect, useState } from "react";

import { servicestypeLanguage } from "../../API";

import { typesLanguagefromAPI } from "../../API/types";
import { typesObjectLanguagefromAPI } from "../../API/types";


function ResponzeBlock(): JSX.Element {
    const [allLaugues, setAllLaugues] = useState<typesObjectLanguagefromAPI | undefined>([])

    useEffect(() => {
        servicestypeLanguage.typeLanguage()
            .then(data => { setAllLaugues(data) })
            .catch(err => console.log(err))
    }, [])

    const handleLanguage = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        const buttonIdent = e.target.value;;
        console.log(buttonIdent);
    }

    return (
        <div className="responzeBlock">
            <div className="resSelectorBlock">
                <select onChange={(e) => handleLanguage(e)}>
                    {
                        allLaugues !== undefined ?
                            allLaugues.map((option: typesLanguagefromAPI, key: number) => (
                                <option key={key}>
                                    {option.language}
                                </option>
                            )) : ""
                    }
                </select>
            </div>
            <div className="resTextarrBlock">
                <textarea 
                    name="txt" 
                    id="">
                </textarea>
            </div>
        </div>
    )
}
export default ResponzeBlock
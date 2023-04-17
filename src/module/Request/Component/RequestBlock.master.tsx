import "../style/RequestBlock.master.style.css"
import { useEffect, useState } from "react";

import { servicestypeLanguage } from "../../API";

import { typesLanguagefromAPI } from "../../API/types";
import { typesObjectLanguagefromAPI } from "../../API/types";


function RequestBlock(): JSX.Element {
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
        <div className="requestBlock">
            <div className="reqSelectorBlock">
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
            <div className="reqTextarrBlock">
                <textarea 
                    name="txt" 
                    id=""
                    placeholder="What you need to translate...">
                </textarea>
            </div>
        </div>
    )
}
export default RequestBlock
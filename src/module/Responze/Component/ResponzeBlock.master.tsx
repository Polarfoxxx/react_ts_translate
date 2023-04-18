import "../style/ResponzeBlock.master.style.css"
import { useEffect, useState, useContext } from "react";

import { servicestypeLanguage } from "../../API";
import { servicesTranslate } from "../../API";

import { typesLanguagefromAPI } from "../../API/types";
import { typesObjectLanguagefromAPI } from "../../API/types";

import ContainerTranslate from "../../Container/Component/Container.master";
import { log } from "console";


function ResponzeBlock(): JSX.Element {
    const [allLaugues, setAllLaugues] = useState<typesObjectLanguagefromAPI | undefined>([])
    const { translate, setTranslate } = useContext(ContainerTranslate.Context)

    useEffect(() => {
        servicestypeLanguage.typeLanguage()
            .then(data => { setAllLaugues(data) })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        if (translate) {
            const reqLang = sessionStorage.getItem("reqLang")
            console.log(reqLang);
            const reqText = sessionStorage.getItem("reqText")
            console.log(reqText);
        }
        setTranslate(false)
    }, [translate])



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
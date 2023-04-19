import "../style/ResponzeBlock.master.style.css"
import { useEffect, useState, useContext } from "react";

import { servicestypeLanguage } from "../../API";
import { servicesTranslate } from "../../API";

import { typesLanguagefromAPI } from "../../API/types";
import { typesObjectLanguagefromAPI } from "../../API/types";
import { typeFineTranslate } from "../../API/types";

import ContainerTranslate from "../../Container/Component/Container.master";


function ResponzeBlock(): JSX.Element {
    const [allLaugues, setAllLaugues] = useState<typesObjectLanguagefromAPI | undefined>([])
    const { translate, setTranslate } = useContext(ContainerTranslate.Context)
    const [resLang, setResLang] = useState("")
    const [finalTranslate, setFinalTranslate] = useState<typeFineTranslate>()

    useEffect(() => {
        servicestypeLanguage.typeLanguage()
            .then(data => { setAllLaugues(data) })
            .catch(err => console.log(err)) 
    }, [])

    useEffect(() => {
        if (translate) {
            const reqLang = sessionStorage.getItem("reqLang") ? sessionStorage.getItem("reqLang") : "en"
            const reqText = sessionStorage.getItem("reqText") ? sessionStorage.getItem("reqText") : "undefined" 

            servicesTranslate.translateAPI(reqText, resLang, reqLang)
                .then((data) => {setFinalTranslate(data)})
                .catch((err) => console.error(err))
        }
        setTranslate(false)
    }, [translate])



    const handleLanguage = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        const resLang = e.target.value
        setResLang(resLang)
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
                    value={finalTranslate?.translatedText}>
                </textarea>
            </div>
        </div>
    )
}
export default ResponzeBlock
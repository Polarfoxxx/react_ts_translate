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
    const { translate, setTranslate, responseLang, setResponseLang, requestLang } = useContext(ContainerTranslate.Context)
    const [finalTranslate, setFinalTranslate] = useState<typeFineTranslate>()

    /* nahrahtie vsetkych dostupnch jazykov do selectoru */
    useEffect(() => {
        servicestypeLanguage.typeLanguage()
            .then(data => { setAllLaugues(data) })
            .catch(err => console.log(err))
    }, [])

    /* nacitanie textu na preklad a spustenie prekladu*/
    useEffect(() => {
        if (translate) {
            const text = sessionStorage.getItem("reqText") || ""
            servicesTranslate.translateAPI(text, responseLang, requestLang)
                .then((data) => { setFinalTranslate(data) })
                .catch((err) => console.error(err))
        }
        setTranslate(false)
    }, [translate])

    /* nastavenie pozadovaneho jazyka */
    const handleLanguage = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        const resLang = e.target.value
        setResponseLang(resLang)
    }


    return (
        <div className="responzeBlock">
            <div className="resSelectorBlock">
                <select
                    onChange={(e) => handleLanguage(e)}
                    value={responseLang}>
                    {
                        allLaugues !== undefined ?
                            allLaugues.map((option: typesLanguagefromAPI, key: number) => (
                                <option key={key} value={option.language}>
                                    {option.name}
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
import "../style/RequestBlock.master.style.css"
import { useEffect, useState, useContext } from "react";

import { servicestypeLanguage } from "../../API";

import { typesLanguagefromAPI } from "../../API/types";
import { typesObjectLanguagefromAPI } from "../../API/types";

import ContainerTranslate from "../../Container/Component/Container.master";


function RequestBlock(): JSX.Element {
    const [allLaugues, setAllLaugues] = useState<typesObjectLanguagefromAPI | undefined>([])
    const { translate, requestLang, setRequestLang } = useContext(ContainerTranslate.Context)
    const [requestText, setRequestText] = useState("")

    /* nahrahtie vsetkych dostupnch jazykov do selectoru */
    useEffect(() => {
        servicestypeLanguage.typeLanguage()
            .then(data => { setAllLaugues(data) })
            .catch(err => console.log(err))
    }, [])

    /* nastavenie povodneho stavu jazyka */
    const handleLanguage = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        const reqLang = e.target.value
        setRequestLang(reqLang)
    }
    /* ulozenie prekladaneho textu do localUloziska */
    const handleAreaText = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        const reqText = e.currentTarget.value
        sessionStorage.setItem("reqText", reqText)
        setRequestText(reqText)
    }

    /* vymazanie textArea po preklade */
    useEffect(() => {
        setRequestText("")
    }, [translate])

    return (
        <div className="requestBlock">
            <div className="reqSelectorBlock">
                <select
                    onChange={(e) => handleLanguage(e)}
                    value={requestLang}>
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
            <div className="reqTextarrBlock">
                <textarea
                    onChange={handleAreaText}
                    name="txt"
                    placeholder="What you need to translate..."
                    value={requestText}
                >
                </textarea>
            </div>
        </div>
    )
}
export default RequestBlock
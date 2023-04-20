import { createContext, useState } from "react"

import "../style/Container.master.style.css"

import { typeContext } from "../types"
import { Props } from "../types"


const Context = createContext<typeContext>({
    translate: false,
    setTranslate: () => { },
    requestLang: "",
    setRequestLang: () => { },
    responseLang: "",
    setResponseLang: () => { }
})

/* const Container: React.FC<Props> = ({ children }) => { */
/* const Container = ( props : Props) => {  */

function Provider({ children }: Props): JSX.Element {
    const [translate, setTranslate] = useState(false)
    const [requestLang, setRequestLang] = useState("en")
    const [responseLang, setResponseLang] = useState("sk")

    return (
        <div className="container">
            <Context.Provider value={{ translate, setTranslate, requestLang, setRequestLang, responseLang, setResponseLang }}>
                {children}
            </Context.Provider>
        </div>
    )
}

const ContainerTranslate = {
    Context,
    Provider
}

export default ContainerTranslate




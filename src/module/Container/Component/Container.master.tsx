import { createContext, useEffect, useState } from "react"

import "../style/Container.master.style.css"

import { typeContext } from "../types"
import { Props } from "../types"


const Context = createContext<typeContext>({
    translate: false,
    setTranslate: () => { }
})

/* const Container: React.FC<Props> = ({ children }) => { */
/* const Container = ( props : Props) => {  */

function Provider({ children }: Props): JSX.Element {
    const [translate, setTranslate] = useState(false)

    return (
        <div className="container">
            <Context.Provider value={{ translate, setTranslate }}>
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




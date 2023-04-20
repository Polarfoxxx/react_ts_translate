import { Dispatch, SetStateAction } from "react"

export type typeContext = {
    translate: boolean,
    setTranslate: Dispatch<SetStateAction<boolean>>
    requestLang: string,
    setRequestLang: Dispatch<SetStateAction<string>>,
    responseLang: string,
    setResponseLang:Dispatch<SetStateAction<string>>
}

export type Props = {
    children: JSX.Element | JSX.Element[]
}

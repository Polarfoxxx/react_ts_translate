import { Dispatch, SetStateAction } from "react"

export type typeContext = {
    translate: boolean,
    setTranslate: Dispatch<SetStateAction<boolean>>
}

export type Props = {
    children: JSX.Element | JSX.Element[]
}

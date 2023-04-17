import React from "react"
import "../style/BtnTranslate.master.style.css"

function BtnTranslate(): JSX.Element {

const handleTranslate = (e: React.MouseEvent<HTMLButtonElement>): void => {
        console.log(e.currentTarget);
}

    return(
        <div className="btnBlock">
            <button onClick={handleTranslate}>Translate</button>
        </div>
    )
}
export default BtnTranslate
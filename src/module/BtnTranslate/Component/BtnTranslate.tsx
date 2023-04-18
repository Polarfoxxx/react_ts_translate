import { useContext } from "react";
import "../style/BtnTranslate.master.style.css"
import ContainerTranslate from "../../Container/Component/Container.master";

function BtnTranslate(): JSX.Element {
const { setTranslate } = useContext(ContainerTranslate.Context)

const handleTranslate = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setTranslate(true)
}
    return(
        <div className="btnBlock">
            <button onClick={handleTranslate}>Translate</button>
        </div>
    )
}
export default BtnTranslate
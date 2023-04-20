import { useContext } from "react";
import "../style/BtnTranslate.master.style.css"
import ContainerTranslate from "../../Container/Component/Container.master";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotate } from '@fortawesome/free-solid-svg-icons'

import { servicesRotationLang } from "../../Request/services";


function BtnTranslate(): JSX.Element {
    const { setTranslate } = useContext(ContainerTranslate.Context)

    /* spustenie prekladu */
    const handleTranslate = (e: React.MouseEvent<HTMLButtonElement>): void => {
        setTranslate(true)
    }
    
    /* rotacia jazykov */
    const handleRotateLang = (): void => {
     
            
    }



    return (
        <div className="btnBlock">
            <button onClick={handleTranslate}>Translate</button>
            <div className="rotateLang">
                <button
                    onClick={handleRotateLang}>
                    <FontAwesomeIcon icon={faRotate} size="lg" />
                </button>
            </div>
        </div>
    )
}
export default BtnTranslate
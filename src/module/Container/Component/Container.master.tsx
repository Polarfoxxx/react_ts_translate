import "../style/Container.master.style.css"

type Props = {
    children: JSX.Element | JSX.Element[]
}

/* const Container: React.FC<Props> = ({ children }) => { */
/* const Container = ( props : Props) => {  */
function Container({children} : Props ): JSX.Element { 

    return(
        <div className="container">
            { children }
        </div>
    )
}

export default Container




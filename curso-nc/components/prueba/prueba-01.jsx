import Logo from './assets/img/twiter-azul.svg'

// Styles
import Styles from './assets/css/prueba-01.module.css'

function Prueba01() {
    return (
        <div className={Styles.div}>
            <div className={Styles.div__contImg}>
                <img className={Styles.div__img} src={Logo} alt=""/>
            </div>

            <div className={Styles.cont__texto}>
                <h2> Esto es un componente en next </h2>
            </div>

        </div>
    )
}

export default Prueba01


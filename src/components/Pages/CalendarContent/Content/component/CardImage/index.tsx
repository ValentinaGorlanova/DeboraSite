import styles from "./styles.module.scss"

import Image from "next/image"
import ImageCalendarPNG from "@/../public/calendario_image.png"

export default function CardImage() {
    return (
        <div className={ styles.messageCard }>
            <div className={ styles.imageContainer }>
                <Image src={ ImageCalendarPNG } width={ 146 } height={ 143 } layout="responsive" /> 
            </div>

            <div className={ styles.textContainer }>
                <h3>Você ainda não tem nenhuma consulta agendada para esse dia!</h3>
                <p>
                    Adicione consultas no calendario ao lado.
                </p>
            </div>
        </div>
    )
}

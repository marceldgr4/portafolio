import React  from 'react';
import { getImageUrl } from '../../utils';
import styles from "./transp.module.css"; 




export const Transport=()=>{
    return(
      <div>
       <section className={styles.container} id="Trans">
        <h1 className={styles.title}>APP TRANSPOTER DE SMR</h1>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img src={getImageUrl("Iphone/iphone1.png")} alt="iPhone 1" className={styles.img} />
          </div>
          <div className={styles.imageContainer}>
            <img src={getImageUrl("Iphone/iphone2.png")} alt="iPhone 2" className={styles.img} />
          </div>
          <div className={styles.imageContainer}>
            <img src={getImageUrl("Iphone/iphone3.png")} alt="iPhone 3" className={styles.img} />
          </div>
          <div className={styles.textContainer}>
            <h2 className={styles.subtitle}>TransApp</h2>
            <p className={styles.text}>
              La app de transporte SMR para la ciudad de Santa Marta facilita a los usuarios el uso de buses locales,
              permitiéndoles planificar y optimizar sus viajes por la ciudad. La aplicación ofrece información en tiempo real
              sobre la ubicación de los buses, rutas disponibles, paradas y horarios estimados de llegada, ayudando a los
              pasajeros a elegir la mejor opción de transporte. Además, la app permite la gestión de pagos para hacer los
              viajes más cómodos, brindando a los usuarios la posibilidad de consultar sus compras en línea o en terminales
              físicos.
            </p>
          </div>
        </div>
      </section>
      </div>

    );

}

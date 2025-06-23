import styles from "./Instrucciones.module.css";
import docotora from "../../assets/docotorafisio.jpeg"
import testpadres from "../../assets/testpadres.jpg"
import papaybebe from "../../assets/papaybebe.jpg"

import Header from "../../components/HeaderComponent/Header";
import Footer from "../../components/FooterComponent/Footer";

export default function Instrucciones() {
  return (
    <>
      <Header />

      <div className={styles.instructionscontainer}>
        <div className={styles.cardswrapper}>
          <div className={styles.card}>
            <h3>🧠 Comprendiendo la Evaluación</h3>
            <p>
              El sistema está diseñado para registrar y monitorear el desarrollo físico, cognitivo y emocional del bebé. A través de formularios y tablas interactivas, los padres podrán detectar posibles alteraciones y dar seguimiento personalizado al crecimiento de sus hijos.
            </p>
            <img src={docotora} alt="Doctora" className={styles.docotora}/>
          </div>

          <div className={styles.card}>
            <h3>📄 ¿Qué puedes esperar?</h3>
            <p>
              Encontrarás preguntas organizadas por etapas: prenatales, perinatales y postnatales, así como evaluaciones mensuales del desarrollo. También se incluyen secciones para registrar talla, peso, reflejos y habilidades motoras según la edad del bebé.
            </p>
            <img src={testpadres} alt="Padres respondiendo test" className={styles.testpadres} />
          </div>

          <div className={styles.card}>
            <h3>✅ Guía para responder</h3>
            <p>
              Responde de forma honesta y precisa. La información que proporciones será clave para obtener un seguimiento confiable. Este sistema no sustituye a un especialista, pero te ayudará a identificar signos tempranos y promover el bienestar de tu bebé.
            </p>
            <img src={papaybebe} alt="Cabeza con preguntas" className={styles.papaybebe}/>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}


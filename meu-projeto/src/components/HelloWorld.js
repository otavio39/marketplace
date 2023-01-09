import styles from './HelloWorld.module.css'

function HellWorld({nome, valor, desc, foto, alt}) {
    return (
        <div className={styles.global}>
            <div className={styles.helloWorldglob}>
            <div>
                <img className={styles.foto} src={foto} alt={alt}/>
            </div>
            <div className={styles.helloWorldcontainer}>
                <div className={styles.helloWorldContent}>
                    <p className={styles.nome}>{nome}</p>
                    <p className={styles.valor}>{valor}</p>
                </div>
                    <p className={styles.desc}>{desc}</p>
            </div>
        </div>
        </div>
    )
}

export default HellWorld
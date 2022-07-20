import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.scss"
import BaseClean from "../components/BaseClean"
import DeepClean from "../components/DeepClean"
import MovingClean from "../components/MovingClean"
import AdditionalItems from "../components/AdditionalItems"
import Modal from "../components/Modal"
import { useContext } from "react"
import { AppContext } from "../context/Context"

export default function Home() {
    const { isSubmitted } = useContext(AppContext)

    return (
        <div>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div className={styles.main__container}>
                <div className={styles.main__logo}>
                    <img src="/logo.png" alt="Main Logo" />
                </div>
                <div className={styles.cleans__container}>
                    <BaseClean />
                    <DeepClean />
                    <MovingClean />
                    <AdditionalItems />
                </div>
                {isSubmitted && <Modal />}
            </div>
        </div>
    )
}

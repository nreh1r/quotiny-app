import React, { useState, useContext } from "react"
import styles from "./BaseClean.module.scss"
import { motion } from "framer-motion"
import { AppContext } from "../context/Context"

const MovingClean = () => {
    const { isPackageChosen, choosePackage } = useContext(AppContext)
    let mainCardStyles = {
        backgroundColor: "rgba(170, 248, 107, 0.229)",
        border: "1px solid rgba(76, 131, 31, 0.5)",
    }

    return (
        <motion.div
            className={styles.cleans__base}
            whileHover={{ scale: [1, 1.05] }}
            transition={{ duration: 0.5 }}
            onClick={() => choosePackage("movingClean")}
            style={isPackageChosen.movingClean ? mainCardStyles : {}}
        >
            <div className={styles.checkBox}>
                {isPackageChosen.movingClean && (
                    <h1 className={styles.checkmark}>&#10003;</h1>
                )}
            </div>
            <h2 className={styles.headers}>Move In/Out Clean</h2>
            <h3 className={styles.subtext}>
                Everything Included in the Base Clean and the Deep Clean Plus:
            </h3>
            <div className={styles.list__container}>
                <div className={styles.list__sub_container}>
                    <h3 className={styles.subHeaders}>Kitchen</h3>
                    <ul className={styles.cleans__list}>
                        <li>Oven Hood & Hood Fan Vents</li>
                        <li>Inside Oven</li>
                        <li>Inside Fridge</li>
                        <li>Pullout Appliances</li>
                    </ul>
                </div>
                <div className={styles.list__sub_container}>
                    <h3 className={styles.subHeaders}>Bathrooms</h3>
                    <ul className={styles.cleans__list}>
                        <li>Inside Cabinets & Drawers</li>
                        <li>Vacuum & Wipe Pumbing Appliances</li>
                    </ul>
                </div>
                <div className={styles.list__sub_container}>
                    <h3 className={styles.subHeaders}>Living Rooms</h3>
                    <ul className={styles.cleans__list}>
                        <li>Clean Baseboards & Trim</li>
                        <li>Window Tracks & Trim</li>
                    </ul>
                </div>
                <div className={styles.list__sub_container}>
                    <h3 className={styles.subHeaders}>Bedrooms</h3>
                    <ul className={styles.cleans__list}>
                        <li>Clean Baseboards & Trim</li>
                        <li>Window Tracks & Trim</li>
                    </ul>
                </div>
            </div>
        </motion.div>
    )
}

export default MovingClean

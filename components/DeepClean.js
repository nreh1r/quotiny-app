import React, { useState, useContext } from "react"
import styles from "./BaseClean.module.scss"
import { motion } from "framer-motion"
import { AppContext } from "../context/Context"

const DeepClean = () => {
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
            onClick={() => choosePackage("deepClean")}
            style={isPackageChosen.deepClean ? mainCardStyles : {}}
        >
            <div className={styles.checkBox}>
                {isPackageChosen.deepClean && (
                    <h1 className={styles.checkmark}>&#10003;</h1>
                )}
            </div>
            <h2 className={styles.headers}>Deep Clean</h2>
            <h3 className={styles.subtext}>
                Everything Included In The Base Clean Plus:
            </h3>
            <div className={styles.list__container}>
                <div className={styles.list__sub_container}>
                    <h3 className={styles.subHeaders}>Kitchen</h3>
                    <ul className={styles.cleans__list}>
                        <li>Cupboard Doors & Handles</li>
                        <li>Small Appliances</li>
                        <li>Disinfect Light Switches & Knobs</li>
                        <li>Dust & Sweep Pantry</li>
                        <li>Trim & Baseboards</li>
                        <li>Window Sills & Tracks</li>
                    </ul>
                </div>
                <div className={styles.list__sub_container}>
                    <h3 className={styles.subHeaders}>Bathrooms</h3>
                    <ul className={styles.cleans__list}>
                        <li>Vacuum Vents</li>
                    </ul>
                </div>
                <div className={styles.list__sub_container}>
                    <h3 className={styles.subHeaders}>Living Rooms</h3>
                    <ul className={styles.cleans__list}>
                        <li>Move Large Furniture</li>
                        <li>Organize & Clean Cabinets</li>
                        <li>Vacuum Vents & Cold Air Return</li>
                        <li>Dust Ceiling Fans</li>
                    </ul>
                </div>
                <div className={styles.list__sub_container}>
                    <h3 className={styles.subHeaders}>Bedrooms</h3>
                    <ul className={styles.cleans__list}>
                        <li>Switch Bedding/Make Beds</li>
                        <li>Organize & Clean Cabinets & Closets</li>
                        <li>Vacuum Vents & Cold Air Return</li>
                        <li>Dust Ceiling Fans</li>
                    </ul>
                </div>
            </div>
        </motion.div>
    )
}

export default DeepClean

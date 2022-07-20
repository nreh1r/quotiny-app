import { createContext, useState } from "react"

export const AppContext = createContext()

export function Context(props) {
    const [isPackageChosen, setIsPackageChosen] = useState({
        baseClean: false,
        deepClean: false,
        movingClean: false,
    })

    const [isSubmitted, setIsSubmitted] = useState(false)

    /* 
        Function sets the state for which package is chosen 
        it first checks if the item has already been selected 
        and then checks if any other item has been checked and resets the state 
        so only one package can be chosen at a time 
        if no packages have been chosen it simply just sets the state for 
        that chosen package
    */
    function choosePackage(name) {
        const names = ["baseClean", "deepClean", "movingClean"]
        const nonNames = names.filter((arrayName) => arrayName !== name)

        if (isPackageChosen[name]) {
            setIsPackageChosen((prevState) => ({
                ...prevState,
                [name]: !prevState[name],
            }))
        } else if (
            !isPackageChosen[name] &&
            (isPackageChosen[nonNames[0]] || isPackageChosen[nonNames[1]])
        ) {
            setIsPackageChosen({
                baseClean: false,
                deepClean: false,
                movingClean: false,
            })
            setIsPackageChosen((prevState) => ({
                ...prevState,
                [name]: !prevState[name],
            }))
        } else {
            setIsPackageChosen((prevState) => ({
                ...prevState,
                [name]: !prevState[name],
            }))
        }
    }

    function openModal() {
        setIsSubmitted((prev) => !prev)
    }

    return (
        <AppContext.Provider
            value={{ isPackageChosen, choosePackage, isSubmitted, openModal }}
        >
            {props.children}
        </AppContext.Provider>
    )
}

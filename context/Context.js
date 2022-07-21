import { createContext, useState } from "react"

export const AppContext = createContext()

export function Context(props) {
    const [requestStatus, setRequestStatus] = useState("")
    const [requestError, setRequestError] = useState("")
    const [isPackageChosen, setIsPackageChosen] = useState({
        baseClean: false,
        deepClean: false,
        movingClean: false,
    })

    const [isSubmitted, setIsSubmitted] = useState(false)

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        baseClean: false,
        deepClean: false,
        movingClean: false,
        size: "",
        rooms: "",
        pets: "",
        basement: false,
        kitchen: false,
        den: false,
        laundry: false,
        oven: false,
        fridge: false,
        trimBase: false,
        bottles: false,
        dishes: false,
        blinds: false,
    })

    function handleChange(event) {
        const { name, value, checked, type } = event.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

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
            setFormData((prevData) => ({
                ...prevData,
                [name]: !prevData[name],
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
            setFormData((prevData) => ({
                ...prevData,
                baseClean: false,
                deepClean: false,
                movingClean: false,
            }))
            setIsPackageChosen((prevState) => ({
                ...prevState,
                [name]: !prevState[name],
            }))
            setFormData((prevData) => ({
                ...prevData,
                [name]: !prevData[name],
            }))
        } else {
            setIsPackageChosen((prevState) => ({
                ...prevState,
                [name]: !prevState[name],
            }))
            setFormData((prevData) => ({
                ...prevData,
                [name]: !prevData[name],
            }))
        }
    }

    function openModal() {
        setIsSubmitted((prev) => !prev)
        if (requestStatus === "success" || requestStatus === "error") {
            setRequestStatus("")
        }
    }

    async function submitHandler(event) {
        event.preventDefault()
        setRequestStatus("pending")
        try {
            await sendContactData({
                name: formData.name,
                email: formData.email,
            })
            await sendQuoteData(formData)
            setRequestStatus("success")
            setFormData((prevData) => ({
                name: "",
                email: "",
                baseClean: false,
                deepClean: false,
                movingClean: false,
                size: "",
                rooms: "",
                pets: "",
                basement: false,
                kitchen: false,
                den: false,
                laundry: false,
                oven: false,
                fridge: false,
                trimBase: false,
                bottles: false,
                dishes: false,
                blinds: false,
            }))
        } catch (error) {
            setRequestStatus("error")
            setRequestError(error.message)
        }
    }

    async function sendContactData(contact) {
        const response = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(contact),
            headers: {
                "Content-Type": "application/json",
            },
        })

        const data = await response.json()

        if (!response.ok) {
            throw new Error(data.message || "Something went wrong")
        }
    }

    async function sendQuoteData(quote) {
        const response = await fetch("/api/quote", {
            method: "POST",
            body: JSON.stringify(quote),
            headers: {
                "Content-Type": "application/json",
            },
        })

        const data = await response.json()

        if (!response.ok) {
            throw new Error(data.message || "Something went wrong")
        }
    }

    return (
        <AppContext.Provider
            value={{
                isPackageChosen,
                choosePackage,
                isSubmitted,
                openModal,
                formData,
                handleChange,
                submitHandler,
                requestStatus,
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}

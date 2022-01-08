// what to do

const IncNumber = () => {
    return {
        type: "INCREMENT"
    }
}
const DecNumber = () => {
    return {
        type: "DECREMENT"
    }
}

const Multi = () => {
    return {
        type: "MULTIPLICATION"
    }
}
const Devi = () => {
    return {
        type: "DIVISION"
    }
}

export { IncNumber, DecNumber, Multi, Devi };
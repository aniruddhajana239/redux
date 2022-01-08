const ChangeNumber = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT": return state + 1;
        case "DECREMENT": return state - 1;
        default: return state;
    }
}
const ChangeNumber2 = (state = 5, action) => {
    switch (action.type) {
        case "MULTIPLICATION": return state * 5;
        case "DIVISION": return state / 5;
        default: return state;
    }
}

export {ChangeNumber,ChangeNumber2};
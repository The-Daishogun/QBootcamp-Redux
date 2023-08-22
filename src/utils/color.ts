export const getNumberColor = (num: number) => {
    let color = "white";
    if (num > 0) {
        color = "green"
    } else if (num < 0) {
        color = "red"
    }
    return color
}
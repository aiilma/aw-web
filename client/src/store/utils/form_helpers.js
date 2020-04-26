export function checkOnMax(value, limit) {
    if (value.length > 0 && value.length > limit) return false
    return true
}


export function checkOnMin(value, limit) {
    if (value.length > 0 && value.length < limit) return false
    return true
}


export function checkOnRequired(value) {
    if (!value) return false
    return true
}
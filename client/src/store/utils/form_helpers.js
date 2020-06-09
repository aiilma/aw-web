
function checkOnMax(value, limit) {
    if (value.length > 0 && value.length > limit) return false;
    return true
}

function checkOnMin(value, limit) {
    if (value.length > 0 && value.length < limit) return false;
    return true
}

function checkOnRequired(value) {
    if (!value) return false;
    return true
}

export {checkOnMax, checkOnMin, checkOnRequired}
export const generateKey = (pre, ...optionals) => {
    const now = new Date().getTime()
    const randomNum = Math.floor(Math.random() * now)
    return `${pre}_${now}_${randomNum}_${optionals.join('_')}`;
}

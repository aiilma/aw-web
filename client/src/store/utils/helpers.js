// const generateKey = (pre, ...optionals) => {
//     const now = new Date().getTime()
//     const randomNum = Math.floor(Math.random() * now)
//     return `${pre}_${now}_${randomNum}_${optionals.join('_')}`;
// }

// helper
const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
};

export {generateKey}
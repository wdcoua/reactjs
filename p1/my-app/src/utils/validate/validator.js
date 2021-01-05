export const required = value => {
    if(value && value.length > 0) {
        //console.log(value.length)
        return undefined;
    }
    return 'required field';
}



export const maxLenCreator = (maxLen) => (value) => {
    if(value.length <= maxLen) return undefined;
    return `max length ${maxLen} symbols`;
}

export const minLenCreator = (minLen) => value => {
    if(value.length >= minLen) return undefined;
    return `min length ${minLen} symbols`;
}

export const onlyNumbers = () => value => {
    if(value.match(/[0-9]/)) return undefined;
    return `i accept only numbers `;
}


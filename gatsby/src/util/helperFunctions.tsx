export const toTitleCase = (phrase:string) => {
    const str =  phrase
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    return str[0].toUpperCase() + str.substring(1)
  }
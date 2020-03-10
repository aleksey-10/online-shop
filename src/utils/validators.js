export const required = value => !value && "This field is required"

export const minLength = len => value =>
    (value && value.length < len) && `Min length is ${len} symbols`

export const checkMail = value => {
    return (value && (!value.includes("@") || !value.split("@")[0] || !value.split("@")[1]))
        && "Email is not valid"
}
export const required = value => value? undefined : "Field is required!"

export const maxLength = length => value => 
    value && value.length > length? `max lenght is ${length} symbols!` : undefined

export const isFilled = value => value? undefined : "not filled"
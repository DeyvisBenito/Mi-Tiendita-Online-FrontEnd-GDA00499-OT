export const addError = (error) => (error ?  true  :  false );

export const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export const validTel = /^(\+?\(?\+?\d{1,3}\)?[\s\-]?)?(\(?\d{1,4}\)?[\s\-]?\d{1,4}[\s\-]?\d{1,4}|\d{7,10})$/;

export const validYear = (value) =>{
    const currentYear = new Date().getFullYear()

    const year = parseInt(value.split('-')[0]);

    if(year >= 1900 && year <= currentYear){
        return true
    }

    return false
}









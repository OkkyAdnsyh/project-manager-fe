export interface IFormProps{
    method : string,
    actions : (FormData : FormData) => void
}


export interface ILogin {
    email : string,
    password : string
}
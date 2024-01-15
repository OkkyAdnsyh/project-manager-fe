"use server";

export const loginAuth : (FormData : FormData) => void = async (FormData) => {
    const res = await fetch('http://localhost:3000/api/user-login', {
        method : "POST",
        body : JSON.stringify(FormData)
    })
    .then(res => res.json())
    .then(data => {return data})
}
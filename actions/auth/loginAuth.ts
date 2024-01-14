export const loginAuth : (FormData : FormData) => void = async (FormData) => {
    "use server";
    
    const formData = {
        name : FormData.get('email'),
        pass : FormData.get('password')
    }

    console.log(formData)
}
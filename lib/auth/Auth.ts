import { cookies } from "next/headers"

export const checkUserRole = () => {
    const cookiesStore = cookies();
    const userRole = cookiesStore.get('role');

    return userRole?.value
}
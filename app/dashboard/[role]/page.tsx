import React from 'react'
import { cookies } from 'next/headers'

const generateStaticParams = async () => {
  const cookiesStore = cookies();
  const role = cookiesStore.get("role");

  return {role : role}
}

const page = ({params} : {params : {role : string}}) => {
  const {role} = params 
  return (
    <div>this is {role} page</div>
  )
}

export default page
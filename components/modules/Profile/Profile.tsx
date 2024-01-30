import Greeter from '@/components/elements/Greeter/Greeter';
import React from 'react'

const Profile = ({props} : {props : {username : string}}) => {
  const {username} = props;

  return (
    <>
      <Greeter />
    </>
  )
}

export default Profile
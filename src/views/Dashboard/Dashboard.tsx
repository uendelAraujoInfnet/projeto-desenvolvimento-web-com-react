import React from 'react'
import AvatarManager from '../../components/managerComponents/AvatarManager'
import CustomButton from '../../components/Button'
import AlertManager from '../../components/managerComponents/AlertManager'

const Dashboard = () => {
  return (
    <div>
      <h1>Bem-vindo ao Dashboard</h1>
      <AlertManager/>
      <br />
      <AvatarManager />
      <br />
      <CustomButton label="Go To Home Page" navigateTo='/'/>
    </div>
    
  )
}

export default Dashboard
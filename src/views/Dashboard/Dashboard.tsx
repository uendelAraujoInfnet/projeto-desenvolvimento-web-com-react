import React from 'react'
import AvatarManager from '../../components/managerComponents/AvatarManager'
import CustomButton from '../../components/Button'
import AlertManager from '../../components/managerComponents/AlertManager'
import BoxManager from '../../components/managerComponents/BoxManager'
import CardManager from '../../components/managerComponents/CardManager'
import CheckboxManager from '../../components/managerComponents/CheckboxManager'


const Dashboard = () => {
  return (
    <div style={{padding: 20}}>
      
      <CustomButton label="Go To Home Page" navigateTo='/'/>
      <h1>Bem-vindo ao Dashboard</h1>
      <AlertManager/>
      <br />
      <AvatarManager />
      <br />
      <BoxManager />
      <br />
      <CardManager />
      <br />
      <CheckboxManager/>
      <br />
      <CustomButton label="Go To Home Page" navigateTo='/'/>
    </div>
    
  )
}

export default Dashboard
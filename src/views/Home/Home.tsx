import React from 'react'
import "./Home.scss"
import CustomButton from '../../components/Button'
import AlertManager from '../../components/managerComponents/AlertManager'


const Home = () => {
  return (
    <>
      <div className='HomeContainer'>
        Home
        <CustomButton label="Go To Dashboard Page" navigateTo='./dashboard'/>
        
        <div style={{fontSize:"18px", marginTop: "25px"}}>
          Para evitar uma grande poluição de informações somente na tela principal, os outros itens encontram-se na página DASHBOARD
        </div>
      </div>
    </>
  )
}

export default Home
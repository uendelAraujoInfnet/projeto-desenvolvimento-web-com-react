import React from 'react'
import "./Home.scss"
import CustomButton from '../../components/Button'

const Home = () => {
  return (
    <>
      <div className='HomeContainer'>
        Home
        <CustomButton label="Botão Teste" />
      </div>
    </>
  )
}

export default Home
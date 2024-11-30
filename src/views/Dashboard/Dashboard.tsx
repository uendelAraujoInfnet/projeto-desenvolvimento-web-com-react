import React from 'react'
import AvatarManager from '../../components/managerComponents/AvatarManager'
import CustomButton from '../../components/buttonComponent/Button'
import AlertManager from '../../components/managerComponents/AlertManager'
import BoxManager from '../../components/managerComponents/BoxManager'
import CardManager from '../../components/managerComponents/CardManager'
import CheckboxManager from '../../components/managerComponents/CheckboxManager'
import ContainerManager from '../../components/managerComponents/ContainerManager'
import DatePickersManager from '../../components/managerComponents/DatePickersManager'
import FabManager from '../../components/managerComponents/FabManager'
import GridManager from '../../components/managerComponents/GridManager'
import IconButtonManager from '../../components/managerComponents/IconButtonManager'
import SnackBarManager from '../../components/managerComponents/SnackBarManager'
import SwitchManager from '../../components/managerComponents/SwitchManager'
import TabManager from '../../components/managerComponents/TabManager'
import TextFieldManager from '../../components/managerComponents/TextFieldManager'
import TypographyManager from '../../components/managerComponents/TypographyManager'


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
      <ContainerManager/>
      <br />
      <DatePickersManager/>
      <br />
      <FabManager/>
      <br />
      <GridManager/>
      <br />
      <IconButtonManager/>
      <br />
      <SnackBarManager/>
      <br />
      <SwitchManager/>
      <br />
      <TabManager/>
      <br />
      <TextFieldManager/>
      <br />
      <TypographyManager/>
      <br />
      <CustomButton label="Go To Home Page" navigateTo='/'/>
    </div>
    
  )
}

export default Dashboard
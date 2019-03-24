import React from 'react'
import MainContainer from '../../containers/MainContainer'
import ScreenHeader from '../../components/ScreenHeader'

export default ({ navigation }) => {
  return (
    <MainContainer>
      <ScreenHeader
        title="Current Week"
        onClick={() => navigation.push('AllMonths')}
      />
    </MainContainer>
  )
}

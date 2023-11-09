import React from 'react'
import { CssVarsProvider } from '@mui/joy/styles'
import Sheet from "@mui/joy/Sheet"
import Stack from "@mui/joy/Stack"
import TopBar from './Containers/TopBar'
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme } from "@mui/material/styles"
import FootageContainer from './Containers/FootageContainer'
import Card from "@mui/joy/Card"
import AfterPageContainer from './Containers/AfterPageContainer'

function App() {
  const theme = useTheme()
  const isDesktopLayout = useMediaQuery(theme.breakpoints.up("sm"))
  const [isWarningVisible, setIsWarningVisible] = React.useState(true)
  const [fundraisersTransitionStage, setFundraisersTransitionStage] = React.useState(0)
  const startFundraiserTransition = () => {
    setTimeout(() => {setFundraisersTransitionStage(1)}, 1000)
    setTimeout(() => {setFundraisersTransitionStage(2)}, 3000)
    setTimeout(() => {setFundraisersTransitionStage(3)}, 5000)
    setTimeout(() => {setFundraisersTransitionStage(4)}, 7000)
    setTimeout(() => {setFundraisersTransitionStage(5)}, 9000)
  }
  const [isShowingFootage, setIsShowingFootage] = React.useState(true)
  const [isShowingFundraisers, setIsShowingFundraisers] = React.useState(false)
  const stopShowingFootage = () => {
    setIsShowingFootage(false)
    setTimeout(() => {setIsShowingFundraisers(true); startFundraiserTransition()}, 400)
  }
  const [isShareTooltipVisible, setIsShareTooltipVisible] = React.useState(false)
  return (
    <CssVarsProvider defaultMode='dark'>
      <Sheet sx={{minHeight: "100vh", height: "fit-content", maxWidth: "100vw"}}>
        <Stack width="100%" height="100%" spacing={3} alignItems="center">
          <TopBar isDesktopLayout={isDesktopLayout}/>
          <Card variant="soft" sx={{ width: isDesktopLayout ? "70%" : "90%", height: "80%"}}>
          {isShowingFundraisers ? 
          (<AfterPageContainer transitionStage={fundraisersTransitionStage}
            isShareTooltipVisible={isShareTooltipVisible} setIsShareTooltipVisible={setIsShareTooltipVisible} 
            isDesktopLayout={isDesktopLayout}/>) : 
          (<FootageContainer isDesktopLayout={isDesktopLayout} isShowingWarning={isWarningVisible}
          closeWarning={()=>{setIsWarningVisible(false)}} isShowingFootage={isShowingFootage} 
          stopShowingFootage={stopShowingFootage} />)}
          </Card>
        </Stack>
      </Sheet>
    </CssVarsProvider>
  )
}

export default App;

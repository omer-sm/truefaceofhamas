import React from 'react'
import { CssVarsProvider } from '@mui/joy/styles'
import Sheet from "@mui/joy/Sheet"
import Stack from "@mui/joy/Stack"
import TopBar from './Containers/TopBar'
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme } from "@mui/material/styles"
import Card from "@mui/joy/Card"

function App() {
  const theme = useTheme()
  const isDesktopLayout = useMediaQuery(theme.breakpoints.up("sm"))
  return (
    <CssVarsProvider defaultMode='dark'>
      <Sheet sx={{height: "100%"}}>
        <Stack width="100%" height="100%" spacing={3} alignItems="center">
          <TopBar isDesktopLayout={isDesktopLayout}/>
          
        </Stack>
      </Sheet>
    </CssVarsProvider>
  )
}

export default App;

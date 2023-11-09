import React from "react"
import Sheet from "@mui/joy/Sheet"
import Typography from "@mui/joy/Typography"
import bg from "../Resources/bloodsplatter.png"

export default function TopBar({isDesktopLayout}: {isDesktopLayout: boolean}) {
    return (
        <Sheet sx={{width: "100%", height: "10%",
        backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", 
        backgroundPositionY: "95%", backgroundPositionX: isDesktopLayout ? "130%" : "0"}}>
           <Typography level="h2" textTransform="uppercase" m={0.5}>True Face Of Hamas</Typography> 
        </Sheet>
    )
}
import React from "react"
import Sheet from "@mui/joy/Sheet"
import Typography from "@mui/joy/Typography"
import bg from "../Resources/bloodsplatter.png"
import Divider from "@mui/material/Divider"

export default function TopBar({isDesktopLayout}: {isDesktopLayout: boolean}) {
    return (
        <Sheet sx={{width: "100%", height: "fit-content", minHeight: "10%",
        backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", 
        backgroundPositionY: "95%", backgroundPositionX: isDesktopLayout ? "130%" : "0"}} variant="soft">
           <Typography level="h2" textTransform="uppercase" my={0.5} mx={2}>True Face Of Hamas</Typography> 
           <Typography level="title-md" my={1} mx={2} maxWidth="80rem">Like every war in the conflict, this one too started after a palestinian terror attack.
                    Hamas took over civilian towns, commiting some of the most horrifying atrocities of the 21st century.</Typography>
        <Divider />
        </Sheet>
    )
}
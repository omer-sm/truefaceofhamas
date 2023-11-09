import React from "react"
import Typography from "@mui/joy/Typography"
import Button from "@mui/joy/Button"
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded'
import Stack from "@mui/joy/Stack"
import Card from "@mui/joy/Card"
import Divider from "@mui/joy/Divider"

interface IWarning {
    isDesktopLayout: boolean,
    closeWarning: Function,
}

export default function Warning({ isDesktopLayout, closeWarning }: IWarning) {
    return (
        <Card variant="soft" sx={{ width: isDesktopLayout ? "50%" : "80%", 
        position: "absolute", top: "30%", left: isDesktopLayout ? "25%" : "5%", right: isDesktopLayout ? "25%" : "5%", zIndex: "1" }}>
            <Stack alignItems="center" spacing={2}>
                <WarningAmberRoundedIcon sx={{fontSize: "5rem"}} color="warning" />
                <Typography level="title-lg" textTransform="uppercase" color="warning" textAlign="center">Content warning: extreme violence & disturbing imagery </Typography>
                <Divider />
                <Button color="warning" onClick={()=>{closeWarning()}}>
                    <Typography level="body-lg" textTransform="uppercase">I understand, show anyways</Typography>
                </Button>
            </Stack>
        </Card>
    )
}
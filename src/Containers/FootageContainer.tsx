import React from "react"
import Typography from "@mui/joy/Typography"
import Divider from "@mui/joy/Divider"
import Button from "@mui/joy/Button"
import Stack from "@mui/joy/Stack"
import AspectRatio from "@mui/joy/AspectRatio"
import CardOverflow from "@mui/joy/CardOverflow"
import Warning from "../Components/Warning"

interface IFootageContainer {
    isDesktopLayout: boolean,
    isShowingWarning: boolean,
    closeWarning: Function,
    isShowingFootage: boolean,
    stopShowingFootage: Function,
}

export default function FootageContainer({ isDesktopLayout, isShowingWarning, closeWarning, isShowingFootage, stopShowingFootage }: IFootageContainer ) {
    return (
        <div style={{ opacity: isShowingFootage ? "100%" : "0", transition: "opacity 400ms ease-in" }}>
            <Stack spacing={1}>
                <Typography level="h4" textTransform="uppercase">Footage will get progressively more graphic.</Typography>
                <Divider />
                {isShowingWarning && <Warning isDesktopLayout={isDesktopLayout} closeWarning={closeWarning} />}
                <CardOverflow sx={{ filter: isShowingWarning ? "blur(1rem)" : "" }}>
                    <Stack spacing={1.5} mb={1}>
                        <AspectRatio sx={{ width: isDesktopLayout ? "50vw" : "100vw", alignSelf: "center" }} objectFit="contain">
                            <img src="https://media.reshet.tv/image/upload/t_og_image/v1696178117/uploads/2023/903730705.png"
                                alt="footage from the 7.10 massacres" />
                        </AspectRatio>
                        <Typography level="body-lg" textTransform="uppercase">Footage description</Typography>
                        <Divider />
                        <Stack spacing={2} justifyContent="center" direction="row">
                            <Button color="danger" sx={{ width: "15rem" }} disabled={isShowingWarning}>
                                <Typography level="body-lg" textTransform="uppercase">Witness more</Typography>
                            </Button>
                            <Divider orientation="vertical" />
                            <Button color="success" sx={{ width: "15rem" }} disabled={isShowingWarning} onClick={() => { stopShowingFootage() }}>
                                <Typography level="body-lg" textTransform="uppercase">Stop watching</Typography>
                            </Button>
                        </Stack>
                    </Stack>
                </CardOverflow>
            </Stack>
        </div>
    )
}
import React from "react"
import Typography from "@mui/joy/Typography"
import Divider from "@mui/joy/Divider"
import Button from "@mui/joy/Button"
import Stack from "@mui/joy/Stack"
import AspectRatio from "@mui/joy/AspectRatio"
import CardOverflow from "@mui/joy/CardOverflow"
import Warning from "../Components/Warning"
import { gallery, makeElementForContent } from "../galleryManager"

interface IFootageContainer {
    isDesktopLayout: boolean,
    isShowingWarning: boolean,
    closeWarning: Function,
    isShowingFootage: boolean,
    stopShowingFootage: Function,
    footageID: [number, number], //[level, footage number]
    nextFootage: Function,
    element: React.ReactNode,
}

export default function FootageContainer({ isDesktopLayout, isShowingWarning,
    closeWarning, isShowingFootage, stopShowingFootage, footageID, nextFootage, element }: IFootageContainer) {
    const [nextButtonDebouncing, setNextButtonDebouncing] = React.useState(false)
    const debounceNextButton = () => {
        setNextButtonDebouncing(true)
        setTimeout(() => {setNextButtonDebouncing(false)}, 2000)
    }
    return (
        <div style={{ opacity: isShowingFootage ? "100%" : "0", transition: "opacity 400ms ease-in" }}>
            <Stack spacing={1}>
                <Typography level="h4" textTransform="uppercase">Footage will get progressively more graphic.</Typography>
                <Divider />
                {isShowingWarning && <Warning isDesktopLayout={isDesktopLayout} closeWarning={closeWarning} />}
                <CardOverflow sx={{ filter: isShowingWarning ? "blur(1rem)" : "" }}>
                    <Stack spacing={1.5} mb={1}>
                        <AspectRatio sx={{ width: isDesktopLayout ? "50vw" : "100vw", alignSelf: "center" }} objectFit="contain">
                            {element}
                        </AspectRatio>
                        <Typography level="title-lg" textTransform="uppercase">{gallery[footageID[0]][footageID[1]].details}</Typography>
                        <Divider />
                        <Stack spacing={2} justifyContent="center" direction="row">
                            <Button color="danger" sx={{ width: "15rem" }} disabled={isShowingWarning || nextButtonDebouncing} 
                            onClick={() => { nextFootage(); debounceNextButton() }}>
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
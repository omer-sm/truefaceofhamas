import React from "react"
import Stack from "@mui/joy/Stack"
import Typography from "@mui/joy/Typography"
import Divider from "@mui/joy/Divider"
import ShareButton from "../Components/ShareButton"
import FundraisersContainer from "./FundraisersContainer"

interface IAfterPageContainerProps {
    transitionStage: number,
    isDesktopLayout: boolean,
    isShareTooltipVisible: boolean,
    setIsShareTooltipVisible: Function,
}



export default function AfterPageContainer({ transitionStage, isDesktopLayout,
    isShareTooltipVisible, setIsShareTooltipVisible }: IAfterPageContainerProps) {
    const share = () => {
        if (typeof navigator.canShare === "function") {
            const shareData = {
                title: 'True Face of Hamas',
                text: 'Today I learned how the war in Gaza started - the whole world must see what the Hamas did there.',
                url: 'truefaceofhamas.com',
            }
            if (navigator.canShare(shareData) && !isDesktopLayout) {
                navigator.share(shareData)
            }
        } else {
            setIsShareTooltipVisible((p: boolean) => !p)
        }
    }
    return (
        <Stack spacing={1.5}>
            <Typography level="title-lg" sx={{
                opacity: transitionStage > 0 ? "100%" : "0",
                transition: "opacity 600ms ease-in"
            }}>You decided to stop. <Typography color="danger"
                sx={{ opacity: transitionStage > 1 ? "100%" : "0", transition: "opacity 800ms ease-in" }}
            >The civilians of southern israel could not.</Typography></Typography>
            <Typography level="title-lg" sx={{
                opacity: transitionStage > 2 ? "100%" : "0",
                transition: "opacity 600ms ease-in"
            }}>They had to <Typography color="danger">watch</Typography> these horrors.</Typography>
            <Typography level="title-lg" sx={{
                opacity: transitionStage > 3 ? "100%" : "0",
                transition: "opacity 1000ms ease-in"
            }}>They had to <Typography color="danger">live</Typography> these horrors.</Typography>
            <Stack sx={{
                opacity: transitionStage > 4 ? "100%" : "0",
                transition: "opacity 1000ms ease-in",
            }} spacing={1.5}>
                <Divider />
                <Typography level="h2" pb={1}>What can <Typography color="primary">YOU</Typography> do?</Typography>
                <Typography level="body-lg" pl={1}> - Support Israel online by using hashtags such as
                    <Typography color="danger" level="title-lg"> #TrueFaceOfHamas #HamasIsISIS.</Typography></Typography>
                <Typography level="body-lg" pl={1}><ShareButton share={share} isShareTooltipVisible={isShareTooltipVisible} /> this website to show the world who Hamas's
                    <Typography color="danger" textTransform="uppercase" level="title-lg"> "freedom fighters" </Typography>
                    <Typography level="title-lg">actually</Typography> are.
                </Typography>
                <Typography level="body-lg" pl={1}> - Watch <Typography component="a"
                    href="https://www.prageru.com/video/why-isnt-there-a-palestinian-state" color="primary">videos about the conflict</Typography> and
                    how the palestinian leadership is harming both sides.</Typography>
                <Typography level="body-lg" pl={1}> - Stay vigilant. If <Typography level="title-lg" textTransform="uppercase">any</Typography> media
                group does not call Hamas a <Typography color="danger" level="title-lg" textTransform="uppercase">terrorist organization, </Typography>
                it is biased and is spreading <Typography color="warning">misinformation.</Typography></Typography>
                <Typography level="body-lg" pl={1}> - Check on your jewish friends. Antisemitism has been rising greatly,
                and as a such many jewish people would appreciate knowing you're here for them.</Typography>
                <Typography level="body-lg" pl={1}> - Donate to fundraisers supporting the survivors and the IDF:</Typography>
                <FundraisersContainer />
            </Stack>
        </Stack>
    )
}
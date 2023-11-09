import React from "react"
import Divider from "@mui/joy/Divider"
import ButtonGroup from "@mui/joy/ButtonGroup"
import Button from "@mui/joy/Button"
import Grid from "@mui/joy/Grid"
import Typography from "@mui/joy/Typography"

export default function FundraisersContainer() {
    return (
        <Grid container pl={2} spacing={2} >
            <Grid xs={12} md={3}>
                <Typography level="title-md" mb={1}>Hospitals and medical centers</Typography>
                <ButtonGroup variant="soft" color="primary" buttonFlex={1} orientation="vertical">
                    <Button component="a" target="_blank" href="https://www.bmc.gov.il/?CategoryID=511">Barzilai Hospital</Button>
                    <Button component="a" target="_blank" href="https://hadassah.gospringboard.com/">Hadassah Hospital</Button>
                    <Button component="a" target="_blank" href="https://www.soroka.org/donate/">Soroka Medical Center</Button>
                    <Button component="a" target="_blank" href="https://give.afsmc.org/give/409953/#!/donation/checkout">Sheba Medical Center</Button>
                </ButtonGroup>
            </Grid>
            <Grid xs={12} md={3}>
                <Typography level="title-md" mb={1}>Emergency services</Typography>
                <ButtonGroup variant="soft" color="primary" buttonFlex={1} orientation="vertical">
                    <Button component="a" target="_blank" href="https://www.mdais.org/en/donation">Magen David Adom</Button>
                    <Button component="a" target="_blank" href="https://israelrescue.org/">United Hatzalah</Button>
                    <Button component="a" target="_blank" href="https://give.zakaworld.org/">Zaka</Button>
                </ButtonGroup>
            </Grid>
            <Grid xs={12} md={3}>
                <Typography level="title-md" mb={1}>Soldiers and families</Typography>
                <ButtonGroup variant="soft" color="primary" buttonFlex={1} orientation="vertical">
                    <Button component="a" target="_blank" href="https://belevechad.nyc/who-we-are/">Belev Echad</Button>
                    <Button component="a" target="_blank" href="https://www.fidf.org/">Friends of the IDF</Button>
                    <Button component="a" target="_blank" href="https://www.latet.org.il/en/">Latet</Button>
                </ButtonGroup>
            </Grid>
            <Grid xs={12} md={3}>
                <Typography level="title-md" mb={1}>Mental health centers</Typography>
                <ButtonGroup variant="soft" color="primary" buttonFlex={1} orientation="vertical">
                    <Button component="a" target="_blank" href="https://www.afnatal.org/">AFNatal</Button>
                    <Button component="a" target="_blank" href="https://en.eran.org.il/">ERAN Emotional First Aid</Button>
                    <Button component="a" target="_blank" href="https://onefamilyfundus.org/">One Family Fund</Button>
                    <Button component="a" target="_blank" href="https://www.bayit-cham.org.il/en/a-warm-house-%f0%9f%92%97-brightens-the-heart/">A Warm House</Button>
                    <Button component="a" target="_blank" href="https://www.israaid.org/">IsraAID</Button>
                </ButtonGroup>
            </Grid>
        </Grid>
    )
}
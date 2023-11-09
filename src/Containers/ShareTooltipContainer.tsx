import React from "react"
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, WhatsappIcon, TwitterIcon, FacebookIcon } from "react-share"
import Stack from "@mui/joy/Stack"

export default function ShareTooltipContainer() {
    return (
        <Stack direction="row">
            <FacebookShareButton
                        url={"https://truefaceofhamas.com/"}
                        quote={"Learn more about how Hamas Is Isis!"}
                        hashtag={"#TRUEFACEOFHAMAS"}
                    >
                        <FacebookIcon round size={48}/>
                    </FacebookShareButton>
                    <TwitterShareButton
                        title={"The true face of Hamas"}
                        url={"https://truefaceofhamas.com/"}
                        hashtags={["TRUEFACEOFPALESTINE", "HAMASisISIS"]}
                    >
                       <TwitterIcon round size={48}/>
                    </TwitterShareButton>
                    <WhatsappShareButton
                        title={"The true face of Hamas"}
                        url={"https://truefaceofhamas.com/"}
                    >
                        <WhatsappIcon round size={48}/>
                    </WhatsappShareButton>
        </Stack>
    )
}
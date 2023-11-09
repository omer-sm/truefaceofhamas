import React from "react"
import Button from "@mui/joy/Button"
import ShareRoundedIcon from '@mui/icons-material/ShareRounded'
import Tooltip from "@mui/joy/Tooltip"
import ShareTooltipContainer from "../Containers/ShareTooltipContainer"

interface IShareButtonProps {
    share: Function,
    isShareTooltipVisible: boolean,
}

export default function ShareButton({ share, isShareTooltipVisible }: IShareButtonProps) {
    return (
        <Tooltip title={<ShareTooltipContainer />} open={isShareTooltipVisible} variant="soft" 
        placement="bottom-start" arrow>
            <Button startDecorator={<ShareRoundedIcon />} onClick={() => { share() }} size="sm"
                sx={{ width: "fit-content", display: "inline-flex", flexDirection: "row", py: 1 }}>Share</Button>
        </Tooltip>
    )
}
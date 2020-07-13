import React from "react";
import {ProfileItemLinks, ResponsiveCountLinkArea, RightColWrapper} from "../ui/rightcol";

const RightCol = ({images, ...props}) => {

    return <RightColWrapper>
        <ResponsiveCountLinkArea>
            <ProfileItemLinks>
                {/*<ProfileCountLink label={`Games`} count={`5`} handler={() => {}}/>*/}
            </ProfileItemLinks>
        </ResponsiveCountLinkArea>
    </RightColWrapper>
}

export default RightCol
import React from "react";
import {ProfileItemLinks, ResponsiveCountLinkArea, RightColWrapper} from "../ui/rightcol";
import {Clear} from "../ui";

const RightCol = ({images, ...props}) => {

    return <RightColWrapper>
        <ResponsiveCountLinkArea>
            <ProfileItemLinks>
                {/*<ProfileCountLink label={`Games`} count={`5`} handler={() => {}}/>*/}

                <Clear where={`left`}/>
            </ProfileItemLinks>
        </ResponsiveCountLinkArea>
    </RightColWrapper>
}

export default RightCol
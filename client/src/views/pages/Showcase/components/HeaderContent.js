import React from "react";
import {
    BadgeInfo,
    BadgeInfoActions,
    BadgeInfoArea,
    HeaderSummary,
    PlayerAvatarAutoSizeInner,
    PlayerAvatarHeaderSize,
    ProfileHeaderBadgeInfo,
    ProfileHeaderCenteredPersona,
    ProfileHeaderContent,
    ProfileSummary,
    UserNameSpacer
} from "../ui/header";

const HeaderContent = ({userName, avatar, ...props}) => {

    return <ProfileHeaderContent>

        <ProfileHeaderCenteredPersona userName={userName}/>

        <PlayerAvatarHeaderSize>
            <PlayerAvatarAutoSizeInner>
                <img src={avatar} alt={`Avatar`}/>
            </PlayerAvatarAutoSizeInner>
        </PlayerAvatarHeaderSize>

        <BadgeInfo>
            <BadgeInfoArea>
                <ProfileHeaderBadgeInfo/>
            </BadgeInfoArea>
            <BadgeInfoActions>
                {/*<BtnProfileAction*/}
                {/*    caption={`touch me babe`} size={`medium`}*/}
                {/*    handler={(e) => console.log('ok')}*/}
                {/*/>*/}
            </BadgeInfoActions>
        </BadgeInfo>

        <HeaderSummary>
            <UserNameSpacer/>
            <ProfileSummary noexpand>
            {/*some summary text*/}
            </ProfileSummary>
        </HeaderSummary>

    </ProfileHeaderContent>
}

export default HeaderContent
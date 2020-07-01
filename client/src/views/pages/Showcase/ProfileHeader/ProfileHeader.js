import React from 'react'
import styled from "styled-components";

const BgWrapper = styled.div`
    position: relative;
    max-width: 1018px;
    min-height: 224px;
    padding-bottom: 16px;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-position: center bottom;
`

const Bg = styled.div`
    max-width: 976px;
    min-height: 224px;
    margin: 0 auto;
    background-image: url('https://steamcommunity-a.akamaihd.net/public/images/profile/profile_header_bg_texture.jpg');
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: 0 0 11px 2px black;
`

const CenteredContent = styled.div`
    position: relative;
    max-width: 926px;
    margin: 0 auto;
    padding-top: 24px;
`

const Content = styled.div`
    position: relative;
    padding-top: 8px;
    color: #898989;
    font-size: 13px;
`

const CenteredPersona = styled.div`
    position: absolute;
    left: 186px;
    right: 268px;
    white-space: nowrap;
`

const PersonaName = styled.div`
    line-height: 40px;
    font-size: 24px;
    color: #ffffff;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-weight: 200;
`

const PlayerAvatarWrapper = styled.div`
    border-radius: 0;
    padding: 1px;
    background-color: #57cbde;
    background: linear-gradient( to bottom, rgba(83,164,196,1) 5%, rgba(69,128,151,1) 95%);
    filter: none;
    position: relative;
    width: 166px;
    height: 166px;
    float: left;
    margin-right: 18px;
`

const PlayerAvatarInner = styled.div`
    position: absolute;
    top: 2px;
    right: 2px;
    bottom: 2px;
    left: 2px;
`

const PlayerAvatar = styled.img`
    background: none;
    filter: none;
    display: block;
    padding: 0;
    width: 100%;
    height: 100%;
`

const Summary = styled.div`
    overflow: hidden;
    padding-right: 18px;
`

const ProfileHeader = ({userInfo, ...props}) => {
    const {username, avatar} = userInfo
    return (
        <BgWrapper>
            <Bg>
                <CenteredContent>
                    <Content>
                        <CenteredPersona>
                            <PersonaName>
                                <span>{username}</span>
                            </PersonaName>
                        </CenteredPersona>
                        <PlayerAvatarWrapper>
                            <PlayerAvatarInner>
                                <PlayerAvatar src={avatar}/>
                            </PlayerAvatarInner>
                        </PlayerAvatarWrapper>
                        <Summary>
                            <PersonaName>
                                <span>&nbsp;</span>
                            </PersonaName>
                        </Summary>
                    </Content>
                </CenteredContent>
            </Bg>
        </BgWrapper>
    )
}

export default ProfileHeader
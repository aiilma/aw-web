import React from 'react'
import styled from "styled-components";
import Showcase from "./Showcase";


const ContentWrapper = styled.div`
    position: relative;
    padding: 0 12px 64px 12px;
    width: 926px;
    margin: 0 auto;
    font-size: 13px;
    background: rgba(23, 23, 23, 0.85);
    margin-top: -16px;
    overflow: hidden;
    padding-top: 16px;
`

const Content = styled.div`
    position: relative;
`

const RightCol = styled.div`
    width: 268px;
    float: right;
`

const LeftCol = styled.div`
    width: 636px;
    float: left;
`

const CustomizationArea = styled.div`
`


const ProfileContent = ({images, ...props}) => {
    return (
        <ContentWrapper>
            <Content>
                <RightCol/>
                <LeftCol>
                    <CustomizationArea>
                        <Showcase images={images}/>
                    </CustomizationArea>
                </LeftCol>
                <div style={{clear: 'both'}}/>
            </Content>
        </ContentWrapper>
    )
}

export default ProfileContent
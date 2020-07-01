import React from 'react'
import styled from "styled-components";

const Customization = styled.div`
    position: relative;
    background-image: url('https://steamcommunity-a.akamaihd.net/public/images/profile/showcase_bg.png');
    background-position: top left;
    background-repeat: no-repeat;
    background-color: #141414;
    border-radius: 3px;
    padding: 0 10px 11px 10px;
    margin-bottom: 12px;
    font-size: 13px;
    overflow: hidden;
`

const CustomizationHeader = styled.div`
    font-weight: 200;
    color: #5491cf;
    font-size: 20px;
    line-height: 30px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

const CustomizationBlock = styled.div`
`

const ShowcaseContainer = styled.div`
`

const SlotWrapper = styled.div`
    float: left;
    position: relative;
    display: block;
`

const Primary = styled(SlotWrapper)`
    max-width: 83%;
    width: 508px;
`

const Secondary = styled.div`
    float: right;
    max-width: 17%;
    width: 102px;
    text-align: center;
`

const SlotItem = styled(SlotWrapper)`
    margin-bottom: 11px;
    float: none;
`

const SlotLink = styled.span`
    cursor: pointer;
    border: 1px solid #000000;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    
    &:hover {
        border: 1px solid #97C0E3;    
    }
    
    ${({primary}) => primary && `margin-bottom: 4px;`}
`

const SlotImage = styled.img`
    display: block;
    max-width: ${({type}) => type === "secondary" ? "100px" : "506px"};
    width: 100%;
`

const Showcase = ({images, ...props}) => {

    const secondaryNodes = images.secondaries.map((imageUrl, index) => (
        <SlotItem key={index}>
            <SlotLink>
                <SlotImage type="secondary"
                           src={imageUrl}/>
            </SlotLink>
        </SlotItem>
    ))

    return (
        <Customization>
            <CustomizationHeader>Витрина иллюстраций</CustomizationHeader>
            <CustomizationBlock>
                <ShowcaseContainer>
                    <Primary>
                        <SlotLink primary>
                            <SlotImage
                                src={images.primary}/>
                        </SlotLink>
                    </Primary>
                    <Secondary>
                        {secondaryNodes}
                    </Secondary>
                    <div style={{clear: 'both'}}/>
                </ShowcaseContainer>
            </CustomizationBlock>
        </Customization>
    )
}

export default Showcase
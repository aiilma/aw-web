import {
    LeftColWrapper,
    ProfileCustomizationArea,
    ProfileCustomizationBlock,
    ProfileCustomizationHeader,
    ProfileCustomizationMyArt,
    ScShowCase,
    ScShowCasePrimaryScSlot,
    ScShowCaseRightCol,
    ScShowCaseSc,
    ScShowCaseSmallScSlot
} from "../ui/leftcol";
import React from "react";

const LeftCol = ({type, link, ...props}) => {
    const baseUrlComp = `/storage/images/comps/${link}`
    let imgSecondaries = []

    switch (type) {
        case `long`:
            imgSecondaries = [`_ass2.gif`]
            break
        case `short`:
            imgSecondaries = [`_ass2.gif`, `_ass3.gif`, `_ass4.gif`]
            break
        default:
            imgSecondaries = []
            break
    }

    const secondaryNodes = imgSecondaries.map((imageUrl, index) => (
        <ScShowCaseSmallScSlot key={index}>
            <ScShowCaseSc src={`${baseUrlComp}/${imageUrl}`}/>
        </ScShowCaseSmallScSlot>
    ))

    return <LeftColWrapper>
        <ProfileCustomizationArea>
            <ProfileCustomizationMyArt>

                <ProfileCustomizationHeader label={`Artwork Showcase`}/>

                <ProfileCustomizationBlock>
                    <ScShowCase>
                        <ScShowCasePrimaryScSlot>
                            <ScShowCaseSc src={`${baseUrlComp}/_ass1.gif`}/>
                            {/*<ScShowcaseItemName desc={''} />*/}
                            {/*<ScShowcaseStats>*/}
                            {/*    <ScShowcaseStatsItem src={IconRate} count={0} />*/}
                            {/*    <ScShowcaseStatsItem src={IconBtnComment} count={0}/>*/}
                            {/*</ScShowcaseStats>*/}
                        </ScShowCasePrimaryScSlot>
                        <ScShowCaseRightCol>
                            {secondaryNodes}
                        </ScShowCaseRightCol>
                    </ScShowCase>
                </ProfileCustomizationBlock>

            </ProfileCustomizationMyArt>
        </ProfileCustomizationArea>
    </LeftColWrapper>
}

export default LeftCol
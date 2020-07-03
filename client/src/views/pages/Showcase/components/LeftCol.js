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
import {Clear} from "../ui";
import React from "react";

const LeftCol = ({images, ...props}) => {

    const secondaryNodes = images.secondaries.map((imageUrl, index) => (
        <ScShowCaseSmallScSlot key={index}>
            <ScShowCaseSc src={imageUrl}/>
        </ScShowCaseSmallScSlot>
    ))

    return <LeftColWrapper>
        <ProfileCustomizationArea>
            <ProfileCustomizationMyArt>

                <ProfileCustomizationHeader label={`Artwork Showcase`}/>

                <ProfileCustomizationBlock>
                    <ScShowCase>
                        <ScShowCasePrimaryScSlot>
                            <ScShowCaseSc src={images.primary}/>
                            {/*<ScShowcaseItemName desc={''} />*/}
                            {/*<ScShowcaseStats>*/}
                            {/*    <ScShowcaseStatsItem src={IconRate} count={0} />*/}
                            {/*    <ScShowcaseStatsItem src={IconBtnComment} count={0}/>*/}
                            {/*</ScShowcaseStats>*/}
                        </ScShowCasePrimaryScSlot>
                        <ScShowCaseRightCol>
                            {secondaryNodes}
                        </ScShowCaseRightCol>
                        <Clear where={`both`}/>
                    </ScShowCase>
                </ProfileCustomizationBlock>

            </ProfileCustomizationMyArt>
        </ProfileCustomizationArea>
    </LeftColWrapper>
}

export default LeftCol
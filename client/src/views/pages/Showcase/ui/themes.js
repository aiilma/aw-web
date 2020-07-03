import React from "react";
import styled from "styled-components";
import {HasProfileBg} from "./index";

const SteamTheme = styled(HasProfileBg)`
    --gradient-right: rgba(${({gRight}) => gRight});
    --gradient-left: rgba(${({gLeft}) => gLeft});
    --gradient-background: rgba(${({gBg}) => gBg});
    --gradient-background-right: rgba(${({gBgRight}) => gBgRight});
    --gradient-background-left: rgba(${({gBgLeft}) => gBgLeft});
    --color-showcase-header: rgba(${({colorScHeader}) => colorScHeader});
    --gradient-showcase-header-left: rgba(${({gScHeaderLeft}) => gScHeaderLeft});
    --btn-background: rgba(${({btnBg}) => btnBg});
    --btn-background-hover: rgb(${({btnBgHover}) => btnBgHover});
    --btn-outline: rgb(${({btnOutline}) => btnOutline});
    
    & * {
        box-sizing: initial;
    }
`


const DefaultTheme = styled(({children, className, ...props}) => {
    return <SteamTheme
        className={className}
        gRight={`109, 38, 44, 0.301`}
        gLeft={`50, 255, 193, 0.103`}
        gBg={`34, 35, 48, 0.93`}
        gBgRight={`109, 38, 44, 0`}
        gBgLeft={`50, 255, 193, 0.103`}
        colorScHeader={`43, 45, 68, 0.93`}
        gScHeaderLeft={`115, 173, 184, 0.247`}
        btnBg={`43, 52, 68, 1`}
        btnBgHover={`53, 62, 78`}
        btnOutline={`93, 102, 118`}
    >
        {children}
    </SteamTheme>
})`
`
const CosmicTheme = styled(({children, className, ...props}) => {
    return <SteamTheme
        className={className}
        gRight={`248, 70, 180, 0.301`}
        gLeft={`9, 243, 99, 0.247`}
        gBg={`46, 13, 36, 0.93`}
        gBgRight={`70, 227, 248, 0`}
        gBgLeft={`239, 243, 9, 0.13`}
        colorScHeader={`57, 24, 61, 0.93`}
        gScHeaderLeft={`20, 60, 68, 0.93`}
        btnBg={`90, 40, 92`}
        btnBgHover={`100, 50, 102`}
        btnOutline={`140, 90, 142, 1`}
    >
        {children}
    </SteamTheme>
})`
`
const SummerTheme = styled(({children, className, ...props}) => {
    return <SteamTheme
        className={className}
        gRight={`252, 197, 16, 0.301`}
        gLeft={`9, 243, 153, 0.247`}
        gBg={`51, 27, 16, 0.93`}
        gBgRight={`252, 197, 16, 0`}
        gBgLeft={`48, 243, 9, 0.13`}
        colorScHeader={`70, 53, 31, 0.93`}
        gScHeaderLeft={`33, 78, 76, 0.93`}
        btnBg={`95, 76, 39`}
        btnBgHover={`105, 86, 49`}
        btnOutline={`145, 126, 89`}
    >
        {children}
    </SteamTheme>
})`
`
const MidnightTheme = styled(({children, className, ...props}) => {
    return <SteamTheme
        className={className}
        gRight={`51, 54, 253, 0.233`}
        gLeft={`12, 85, 241, 0.37`}
        gBg={`10, 14, 32, 0.93`}
        gBgRight={`51, 54, 253, 0`}
        gBgLeft={`12, 85, 241, 0.13`}
        colorScHeader={`34, 32, 61, 0.93`}
        gScHeaderLeft={`20, 33, 68, 0.93`}
        btnBg={`38, 36, 68`}
        btnBgHover={`48, 46, 78`}
        btnOutline={`88, 86, 108`}
    >
        {children}
    </SteamTheme>
})`
`
const DarkModeTheme = styled(({children, className, ...props}) => {
    return <SteamTheme
        className={className}
        gRight={`49, 49, 49, 0.233`}
        gLeft={`51, 51, 51, 0.37`}
        gBg={`24, 24, 24, 0.93`}
        gBgRight={`34, 34, 34, 0`}
        gBgLeft={`32, 32, 32, 0.13`}
        colorScHeader={`0, 0, 0, 0.5`}
        gScHeaderLeft={`0, 0, 0, 0.5`}
        btnBg={`0, 0, 0, 0.5`}
        btnBgHover={`40, 40, 40, 1`}
        btnOutline={`20, 20, 20`}
    >
        {children}
    </SteamTheme>
})`
`
const SteelTheme = styled(({children, className, ...props}) => {
    return <SteamTheme
        className={className}
        gRight={`70, 106, 128, 0.233`}
        gLeft={`86, 120, 134, 0.37`}
        gBg={`41, 46, 51, 0.93`}
        gBgRight={`17, 24, 29, 0`}
        gBgLeft={`19, 27, 31, 0`}
        colorScHeader={`55, 62, 76, 0.93`}
        gScHeaderLeft={`68, 83, 93, 0.93`}
        btnBg={`66, 76, 92`}
        btnBgHover={`76, 86, 102`}
        btnOutline={`106, 126, 142`}
    >
        {children}
    </SteamTheme>
})`
`
const GoldenProfileDebutTheme = styled(({children, className, ...props}) => {
    return <SteamTheme
        className={className}
        gRight={`156, 66, 17, 0.18`}
        gLeft={`213, 172, 81, 0.62`}
        gBg={`61, 47, 20, 0.6`}
        gBgRight={`0, 0, 0, 0`}
        gBgLeft={`243, 200, 9, 0.13`}
        colorScHeader={`95, 72, 33, 0.82`}
        gScHeaderLeft={`155, 122, 54, 0.9`}
        btnBg={`125, 98, 44`}
        btnBgHover={`135, 108, 54`}
        btnOutline={`175, 148, 94`}
    >
        {children}
    </SteamTheme>
})`
`

export {
    DefaultTheme, CosmicTheme, SummerTheme, MidnightTheme, DarkModeTheme, SteelTheme, GoldenProfileDebutTheme
}
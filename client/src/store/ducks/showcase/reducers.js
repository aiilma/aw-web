import * as types from "./types";
import RShortBg from "../../../views/pages/Showcase/assets/short_bg.jpg";
import RLongBg from "../../../views/pages/Showcase/assets/long_bg.jpg";

import RShortPrimary from "../../../views/pages/Showcase/assets/short_primary.jpg";
import RLongPrimaryImage from "../../../views/pages/Showcase/assets/long_primary.gif";

import RShortSecondaryOne from "../../../views/pages/Showcase/assets/short_secondary1.jpg";
import RShortSecondaryTwo from "../../../views/pages/Showcase/assets/short_secondary2.jpg";
import RShortSecondaryTree from "../../../views/pages/Showcase/assets/short_secondary3.jpg";

import RLongSecondary from "../../../views/pages/Showcase/assets/long_secondary.jpg";

const project = {
    // link: null,
    // bg: {resource:null},
    // images: {
    //     primary: null,
    //     secondaries: [],
    // },
    // type: null,


    // link: null,


    link: null,
    type: null,
    bg: {
        resource: RLongBg
    },
    images: {
        primary: RLongPrimaryImage,
        secondaries: [RLongSecondary],
    },
    // bg: {
    //     resource: RShortBg
    // },
    // images: {
    //     primary: RShortPrimary,
    //     secondaries: [RShortSecondaryOne, RShortSecondaryTwo, RShortSecondaryTree,],
    // }
}

const initialState = {
    project,
    isLoading: false,
    isError: null
};

export default function scReducer(state = initialState, {type, payload = null}) {
    switch (type) {
        case types.FETCH_COMP:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case types.FETCH_COMP_COMPLETED:
            return {
                ...state,
                isLoading: false,
                isError: false,
            };
        case types.FETCH_COMP_FAILED:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        default:
            return state;
    }
};
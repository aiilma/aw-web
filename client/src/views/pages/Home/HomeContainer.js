import React, {useEffect} from 'react';

import PrimaryLayout from "../../common/layout/user/PrimaryLayout";
import BoxList from "./BoxList";
import {login} from "../../../store/ducks/auth/operations";
import {connect} from "react-redux";

function HomeContainer(props) {
    const {login} = props
    const params = props.history.location.search;

    useEffect(() => {
        login(params)
    }, [params, login]);

    const images = [
        {
            url: 'aw_ae_workflow.png',
            title: 'Make a suggestion',
            rotate: '4',
            to: '/suggest',
        },
        {
            url: 'aw_steam_profile.png',
            title: 'View compositions',
            width: '50%',
            rotate: '-9',
            to: '/compositions',
        },
    ];

    return (
        <PrimaryLayout>
            <BoxList images={images}/>
        </PrimaryLayout>
    );
}


export default connect(null, {login})(HomeContainer)

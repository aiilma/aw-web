import React, {Component} from 'react';

import PrimaryLayout from "../../common/layout/user/PrimaryLayout";
import BoxList from "./BoxList";

class HomeContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            images: [
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
            ]
        }
    }

    render() {
        const {images} = this.state

        return (
            <PrimaryLayout>
                <BoxList images={images}/>
            </PrimaryLayout>
        );
    }
}


export default HomeContainer

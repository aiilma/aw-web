import React from 'react'
import styled from 'styled-components'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const CompCardIconsList = styled(List)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-content: flex-start;
    padding: 0;
    height: 100%;
`

const CompCardListItem = styled(ListItem)`
    width: auto;
    padding: 4px;
    padding-left: 0;
    padding-right: 0;
`

const CompCardIcon = styled(ListItemIcon)`
    min-width: auto;
`

function CompCardBadgeList({badges, ...props}) {

    return (
        <CompCardIconsList>
            {
                badges.length !== 0 ? badges.map((b, index) => (
                    <CompCardListItem key={index}>
                        <CompCardIcon>
                            <div>{b.name}</div>
                        </CompCardIcon>
                    </CompCardListItem>
                )) : null
            }
        </CompCardIconsList>
    )
}

export default CompCardBadgeList
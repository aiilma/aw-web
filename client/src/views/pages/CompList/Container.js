import React from 'react'
import {withRouter} from "react-router-dom";
import CompList from "./CompList";
import {connect} from "react-redux";
import SecondaryLayout from "../../common/layout/user/SecondaryLayout";
import {getCompList} from "../../../store/ducks/comp-list/operations";
import {ContentWrapper, PageCaption, Pagination, Preloader} from "../../ui/layout";
import Alert from "@material-ui/lab/Alert";
import queryString from 'query-string'

class CompositionsContainer extends React.Component {

    componentDidMount() {
        const {currentPage, total, getCompList, location} = this.props;

        let startPage = 1

        // если в урле указана стартовая страница
        const search = queryString.parse(location.search)
        if (!!search.page) startPage = search.page

        if (total === 0 || currentPage > startPage) {
            getCompList(startPage).then((res) => res)
        }
    }

    render() {
        const {
            currentPage, total, compositions, countPages,
            isFetching, isError,
            getCompList
        } = this.props;

        const pagerNode = <Pagination count={countPages} page={currentPage} onChange={(e, to) => getCompList(to)}/>

        const hasData = !(isError || isFetching);
        const errorMessage = isError ? <Alert severity="error">{`Something has gone wrong`}</Alert> : null;
        const loader = isFetching ? <Preloader/> : null;
        const content = !hasData ?
            null : total > 0 ?
                <CompList compositions={compositions}/> :
                <Alert severity="info">List is empty</Alert>;

        return (
            <SecondaryLayout>
                <PageCaption title="Compositions"/>

                <ContentWrapper>
                    {pagerNode}

                    {errorMessage}
                    {loader}
                    {content}

                    {pagerNode}
                </ContentWrapper>
            </SecondaryLayout>
        )
    }
}

const mapStateToProps = store => ({
    isFetching: store.compList.isFetching,
    currentPage: store.compList.currentPage,
    total: store.compList.total,
    compositions: store.compList.compositions,
    countPages: store.compList.countPages,
    isError: store.compList.isError,
})

export default connect(mapStateToProps, {getCompList})(withRouter(CompositionsContainer))

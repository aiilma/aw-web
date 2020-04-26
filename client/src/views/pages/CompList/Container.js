import React, {Component} from 'react'
import {withRouter} from "react-router-dom";
import CompList from "./CompList";
import {connect} from "react-redux";
import SecondaryLayout from "../../common/layout/user/SecondaryLayout";
import {fetchList, clearList} from "../../../store/ducks/comp-list/operations";
import queryString from 'query-string'
import {ContentWrapper, PageCaption, Pagination, Preloader} from "../../ui/layout";
import {handleHTTPError, resetHTTPError} from "../../../store/ducks/error/operations";
import Alert from "@material-ui/lab/Alert";


class CompositionsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: null,
            total: null,
            perPage: null,
            countPages: null,
        }
        this.loadCompositions = this.loadCompositions.bind(this)
    }

    componentDidMount() {
        const {compositions, location} = this.props

        if (compositions.length === 0) {
            const search = queryString.parse(location.search)
            if (!(+search.page > 0)) search.page = 1
            this.loadCompositions(null, search.page)

            // const uri = queryString.stringifyUrl({url: location.pathname, query: search});
            // console.log(uri)
        }
    }

    componentWillUnmount() {
        if (this.props.compositions.length > 0) {
            this.props.clearList()
        }

        this.props.resetHTTPError()
    }

    loadCompositions(e, to) {
        const {location, fetchList, handleHTTPError} = this.props

        const uri = queryString.stringifyUrl({
            url: location.pathname, query: {
                page: to,
            }
        });

        return fetchList(uri).then(res => {
            const {current_page, per_page, total} = res;

            this.setState({
                ...this.state,
                currentPage: current_page,
                perPage: per_page,
                total: total,
                countPages: Math.ceil(total / per_page)
            })
        }).catch(err => handleHTTPError(err))
    };

    render() {
        const {countPages, currentPage} = this.state

        const pagerNode = <Pagination
            countPages={countPages}
            count={countPages}
            onChange={this.loadCompositions}
            page={currentPage}
        />

        return (
            <SecondaryLayout>
                <PageCaption title="Compositions"/>

                <ContentWrapper>
                    {pagerNode}
                    {
                        this.props.error.isError ? <Alert severity="error">{this.props.error.message}</Alert> :
                            this.props.isFetching ?
                                <Preloader/> : this.props.compositions.length > 0 ?
                                <CompList compositions={this.props.compositions}/> :
                                <Alert severity="info">List is empty</Alert>
                    }
                    {pagerNode}
                </ContentWrapper>
            </SecondaryLayout>
        )
    }
}

const mapStateToProps = (state) => ({
    compositions: state.compList.compositions,
    isFetching: state.compList.isFetching,
    error: state.error,
})

export default connect(mapStateToProps, {fetchList, clearList, handleHTTPError, resetHTTPError})(withRouter(CompositionsContainer))

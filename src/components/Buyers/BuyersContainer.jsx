import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {withAuthRedirect} from '../../hoc/redirect';
import {Buyers} from "./Buyers";
import {getBuyerPage} from "../../redux/buyersReducer";

export const BuyersContainer = (props) => {
    return (
    <Buyers
    getBuyerPage={props.getBuyerPage}
    buyers={props.buyers}
    />)
}

const mapStateToProps = (state) => {
    return {
    buyers: state.buyers.buyers
    }
}

export default compose(
    connect(mapStateToProps, {getBuyerPage}),
    withAuthRedirect
)(BuyersContainer)
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {withAuthRedirect} from '../../hoc/redirect';
import {getBuyerData} from "../../redux/selectors";
import {Buyer} from "./Buyer";

export const BuyerContainer = (props) => {
    return (
        <Buyer
            buyer={props.buyer}
        />)
}

const mapStateToProps = (state) => {
    return {
        buyer: getBuyerData(state)
    }
}

export default compose(
    connect(mapStateToProps, {}),
    withAuthRedirect
)(BuyerContainer)
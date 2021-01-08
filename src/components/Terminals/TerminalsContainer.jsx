import React from 'react';
import { connect } from 'react-redux';
import {withAuthRedirect} from '../../hoc/redirect';
import { compose } from 'redux';
import {Terminals} from "./Terminals";

const mapStateToProps = (state) => {
    return {

    }
}

export default compose(
    connect(mapStateToProps, {}),
    withAuthRedirect
)(Terminals)
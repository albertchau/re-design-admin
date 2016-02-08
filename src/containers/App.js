import React, {
    Component,
    PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HeaderWrapperComponent from '../components/header/HeaderWrapperComponent';
import { Router, Route /*, IndexRoute, Redirect, Link, IndexLink */} from 'react-router';


class App extends Component {
    render() {
        //const {actions} = this.props;
        return (
            <Router>
                <Route path="/" component={HeaderWrapperComponent}/>
            </Router>
        );
    }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = {
    actions: PropTypes.object.isRequired
};
function mapStateToProps(state) {
    const props = state;
    return props;
}
function mapDispatchToProps(dispatch) {
    /* Populated by react-webpack-redux:action */
    const actions = {};
    const actionMap = {actions: bindActionCreators(actions, dispatch)};
    return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

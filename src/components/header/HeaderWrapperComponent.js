'use strict';

import React from 'react';

require('styles/header/HeaderWrapper.scss');

class HeaderWrapperComponent extends React.Component {
    constructor(props) {
        super(props);
        this.getBottomPart = this.getBottomPart.bind(this);
    }

    render() {
        return (
            <header className='header-wrapper'>
                <div className="wrapper">
                    <div className="top-header-wrapper">
                        <div className="logo">
                            <img className="logo-icon" src="/styles/sera-logo.png"></img>
                            <img className="logo-text" src="/styles/sera-text.png"></img>
                        </div>
                        <div className="title">
                            Jobs
                        </div>
                        <div className="avatar">
                            <div className="avatar-text">
                            </div>
                            <div className="avatar-icon">
                            </div>
                        </div>
                    </div>
                    <div className="bottom-header-wrapper">
                        {this.getBottomPart()}
                    </div>

                </div>
            </header>
        );
    }

    getBottomPart() {
        var tabs = this.props.tabs;
        return tabs.map((tab, i) => ((<div key={i} className="header-tab"> <div className="header-tab-button">{tab}</div></div>)));
    }
}

HeaderWrapperComponent.displayName = 'HeaderHeaderWrapperComponent';

HeaderWrapperComponent.defaultProps = {
    tabs: ['Dashboard', 'Jobs', 'Templates', 'Team']
};

export default HeaderWrapperComponent;

require('normalize.css');
require('styles/App.css');
import ReactDOM from 'react-dom';
import React from 'react';

class AppComponent extends React.Component {
    constructor(props) {
        super(props);
        this.getSVG = this.getSVG.bind(this);
        this.animate = this.animate.bind(this)
    }

    animate(path) {
        path.animate({
            stroke: '#f00',
            d: 'M28.516,14L6,2.75C5.344,2.453,4.672,2,4,2C2.922,2,2,2.906,2,4v24c0,1.094,0.922,2,2,2c0.672,0,1.344-0.453,2-0.75  L28.516,18C29.063,17.734,30,17.188,30,16S29.063,14.266,28.516,14z M6,24.778V7.222L23.568,16L6,24.778z'
        }, 5000);
    }

    getSVG() {
        //let snap;
        //try {
        //    snap = require('imports?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js');
        //} catch (e) {
        //    snap = require('snapsvg');
        //}
        //let morphShape = ReactDOM.findDOMNode(this, 'bm-morph-shape');
        //let s = snap(morphShape);
        //
        //var path = s.select('path');
        //console.log(path);
        //this.animate(path);
        return 'asdasda';
    }

    render() {
        return (
            <div className='bm-morph-shape' onClick={this.getSVG}>
                <svg width="120px" height="120px">
                    <path className="outer-path" stroke="#fff"
                          d="M 60 60 m 0 -50 a 50 50 0 1 1 0 100 a 50 50 0 1 1 0 -100"></path>
                </svg>
            </div>
        );
    }
}

AppComponent.defaultProps = {
    pathInitial: 'M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z'
};

export default AppComponent;

import React from 'react';
import '../styling/topNav.css';

export default class TopNavigation extends React.Component {
    render = () => {
        return (
            <div id="top-nav">
                <div id="top-nav-title">
                    <b>Minesweeper (Blue Edition)</b>
                </div>
            </div>
        )
    }
}
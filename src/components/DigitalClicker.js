// Code DigitalClicker Component Here
import React, { Component } from 'react'

export class DigitalClicker extends Component {
    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    handlePointsIncrement = () => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    }

    render() {
        return (
            <div>
                <h4></h4>
                <button onClick={this.handlePointsIncrement}>{this.state.timesClicked}</button>
            </div>
        )
    }
}

export default DigitalClicker

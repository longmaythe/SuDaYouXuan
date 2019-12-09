import React, { Component } from 'react'
import Class from './classify'
import Bann from "./banner"
import Activity from './activity'

export default class content extends Component {
    render() {
        return (
            <div>
                <Bann></Bann>
                <Activity></Activity>
                <Class></Class>
            </div>
        )
    }
}

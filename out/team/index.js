import React, { Component } from 'react'
import Header from './components/Header'
import '../../assets/css/team.css'
import Content from './components/Content'
class Team extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Content/>
            </div>
        )
    }
}
export default Team

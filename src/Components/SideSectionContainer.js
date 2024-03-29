import React from 'react'
import TechnicalSkills from './TechnicalSkills'
import SoftSkills from './SoftSkills'
import WorkExperience from './WorkExperience'
import Activities from './Activities'
import Coursework from './Coursework'

class SideSectionContainer extends React.Component {
    render() {
        return (
            <div style={{  
            margin: '0 0 0 4%',
            width: '25%',
            position: 'absolute',
            top: '23%',
            background: 'none'}}>
                <TechnicalSkills/>
                <SoftSkills/>
                <Coursework/>
                <Activities/>
            </div>
        )
    }
}

export default SideSectionContainer
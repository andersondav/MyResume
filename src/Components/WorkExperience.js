import React from 'react'
import myInfo from '../myInfo'
import {styles} from '../styles'

class WorkExperience extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ...myInfo
        }
    }

    render() {
        return (
            <div style={{margin: '0 0 1% 0',
            background: 'none'}}>
            <h1 style={{margin: '0 0'}}>Work Experience</h1>
                {
                    this.state.workExperience.map((exp, index, arr) => {
                        let li;
                        if (exp.location) {
                            li = <li style={{margin: '0 0 0 0'}}>{exp.date} in {exp.location}</li>;
                        }
                        else {
                            li = <li style={{margin: '0 0 0 0'}}>{exp.date}</li>;
                        }
                        return (
                            <div style={{margin: '0 0',
                                padding: '0 0', background: 'none'}}>
                                <p style={{margin: '0 0 0 0', textDecoration: 'underline'}}>{exp.company}</p>
                                <ul style={{margin: '0 0', padding: '0 0 0 5%'}}>
                                    {li}
                                    {typeof exp.desc === 'string' ? (<li style={{margin: '0 0 0 0'}}>{exp.desc}</li>) :
                                        exp.desc.map((desc) => <li style={{margin: '0 0 0 0'}}>{desc}</li>)
                                    }
                                        
                                </ul>
                            </div>)
                    })
                }
                <style>{styles}</style>
            </div>
        )
    }
}

export default WorkExperience
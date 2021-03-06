import React, { Component } from 'react'
import ProjectItem from './projects/ProjectItem'
import CreateProjectButton from './projects/CreateProjectButton'

export default class Dashboard extends Component {
    render() {
        return (
            <div className="projects">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-4 text-center">Projects</h1>
                        <br />
                       <CreateProjectButton />
                        <br />
                        <hr />
    
                     <ProjectItem />  
                    </div>
                </div>
            </div>
        </div>
        ) ;
    }
}













































































































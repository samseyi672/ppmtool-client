import React, { Component } from 'react' ;
import PropTypes from 'prop-types' ;
import {connect} from 'react-redux' ;
import { createProject } from '../../actions/ProjectActions';

 class AddProject extends Component {
    constructor(props){
        super(props) ;
        this.state  ={ 
              projectName:"",
              projectIdentifier:"",
              description:"",
              start_date:"",
              end_date:"",
              errors:{},
        } ;
        this.onchange  =  this.onchange.bind(this) ;
        this.onSubmit =  this.onSubmit.bind(this) ;
    }
//  apply  life  cycle hooks
componentWillReceiveProps(newProps){
//    if(newProps.errors){
//    this.setState({errors:nextProps.errors});
//      }
}
    onchange(event){
     this.setState({[event.target.name]:event.target.value}) //note this approach 
    }
   onSubmit(e){
    e.preventdefault() ;
  const newproject  = {
    projectName:this.state.projectName,
    projectIdentifier:this.state.projectIdentifier,
    description:this.state.description,
    start_date:this.state.start_date,
    end_date:this.state.end_date,  
        };
  console.log(newproject) ;
  //calling the action creator 
  this.props.createProject(newproject,this.props.history) ;
   }
    render() {
        const errors = this.state ;  // es6 destructuring
        return (
            <div className="project">
                
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Create Project form</h5>
                            <hr />
                            <form>
                                <div className="form-group" onSubmit={this.onSubmit}>
                                    <input type="text" className="form-control form-control-lg " 
                                    placeholder="Project Name" 
                                    name="projectName"
                                    value={this.state.projectName}
                                    onChange={this.onchange}
                                    />
                                    <p>{errors.projectName}</p>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg" 
                                    placeholder="Unique Project ID"
                                    name="projectIdentifier"
                                    value={this.state.projectIdentifier}
                                    onChange={this.onchange}
                                    />
                                      <p>{errors.projectIdentifier}</p>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control form-control-lg" 
                                    placeholder="Project Description"
                                    name="description"
                                    value={this.state.description}
                                    onChange={this.onchange}
                                    />
                               <p>{errors.description}</p>
                                </div>
                                <h6>Start Date</h6>
                                <div className="form-group">
                                    <input type="date" className="form-control form-control-lg"
                                     name="start_date"
                                     value={this.state.start_date}
                                     onChange={this.onchange}
                                     />
                                       <p>{errors.start_date}</p>
                                </div>
                                <h6>Estimated End Date</h6>
                                <div className="form-group">
                                    <input type="date" className="form-control form-control-lg"
                                     name="end_date" 
                                     value={this.state.end_date}
                                     onChange={this.onchange}
                                     />
                                  <p>{errors.end_date}</p>
                                </div>
        
                                <input type="submit" className="btn btn-primary btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

AddProject.propTypes  ={
    createProject:PropTypes.func.isRequired,
     errors:PropTypes.object.isRequired,  
}

const mapStateToProps = (state) => ({
    errors:state.errors,
})

const mapDispatchToProps = {
    
}


export default connect(mapStateToProps,{createProject:createProject})(AddProject) ;








































































































































































































































































































































































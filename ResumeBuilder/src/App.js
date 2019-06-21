import React, {Component} from 'react';
import resume from './resume.json'
import './App.css';
import Experience from './Experience';
import Project from './Project';
import Skill from './Skill';
import Education from './Education';
import Languages from './Languages';

class App extends Component{


  resumeExperiences() {
    let resArray = [];
    resume.experiences.map((item, i) => {
      resArray.push(<Experience item={item} key={i} />);
    });
    return resArray;
  }

  resumeProject() {
    let resArray = [];
    resume.projects.map((item, i) => {
      resArray.push(<Project item={item} key={i} />);
    });
    return resArray;
  }
 
 resumeSkill() {
  let resArray = [];
  resume.skills.map((item, i) => { 
    resArray.push(<Skill item={item} key={i} />);
  });
  return resArray;

 }

 resumeEducation() {
  let resArray = [];
  resume.education.map((item, i) => { 
    resArray.push(<Education item={item} key={i} />);
  });
  return resArray;

 }
 resumeLanguages() {
  let resArray = [];
  resume.languages.map((item, i) => { 
    resArray.push(<Languages item={item} key={i} />);
  });
  return resArray;
 }

 resumeInterests() {
  let resArray = [];
  resume.interests.map((item, i) => { 
    resArray.push(<li key={i}>{item}</li>);
  });
  return resArray;
 }

  render(){
     console.log(resume);
  return (
   <div className="wrapper">
        <div className="sidebar-wrapper">
            <div className="profile-container">
                <img className="profile" src={resume.image} alt="" />
                <h2 className="name">{resume.name}</h2>
                <h3 className="tagline">Student</h3>
            </div>
            <div className="contact-container container-block">
                <ul className="list-unstyled contact-list">
                    <li className="email"><i className="fas fa-envelope"></i><a href="mailto: ankushunair@email.com">{resume.email}</a></li>
                    <li className="phone"><i className="fas fa-phone"></i><a href="tel:9794727610">{resume.phone}</a></li>
                    <li className="website"><i className="fas fa-globe"></i><a href="">{resume.address}</a></li>
                </ul>
            </div>
            <div className="education-container container-block">
              <h2 className="container-block-title">Education</h2>
            {this.resumeEducation()}
            </div>  
            <div className="languages-container container-block">
                <h2 className="container-block-title">Languages</h2>
                {this.resumeLanguages()}
            </div>
            
            <div className="interests-container container-block">
                <h2 className="container-block-title">Interests</h2>
                <ul className="list-unstyled interests-list">
                    {this.resumeInterests()}
                </ul>
            </div>            
            
        </div>
        
        <div className="main-wrapper">
            
            <section className="section summary-section">
                <h2 className="section-title"><span className="icon-holder"><i className="fas fa-user"></i></span>Career Profile</h2>
                <div className="summary">
                    <p>Engineering student in CSE branch from VTU affiliated college, Nitte Meenakshi Institute of Technology. </p>
                </div>
            </section>
            
            <section className="section experiences-section">
                <h2 className="section-title"><span className="icon-holder"><i className="fas fa-briefcase"></i></span>Experiences</h2>
                
                {this.resumeExperiences()}
                
            </section>
            
            <section className="section projects-section">
                <h2 className="section-title"><span className="icon-holder"><i className="fas fa-archive"></i></span>Projects</h2>
                <div className="intro">
                </div>

                {this.resumeProject()}
               
            </section>
            
            <section className="skills-section section">
                <h2 className="section-title"><span className="icon-holder"><i className="fas fa-rocket"></i></span>Skills &amp; Proficiency</h2>
                <div className="skillset">        
                
                {this.resumeSkill()}  
              
                </div>  
            </section>
            
        </div> 
    </div> 
  );
}
}

export default App;

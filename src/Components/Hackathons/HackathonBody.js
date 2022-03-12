import React, { Component } from 'react';
import "./CSS/HackathonBody.css"
import HackData from './HackData';


const hackathonData = [
  {
    title: "Pubmatic Hackathon",
    description:
      "A hackathon is a design sprint-like event, in which often computer programmers and others involved in software development, including graphic designers, interface designers, product managers, project managers, domain experts, and others collaborate intensively on software projects.",
    duration: "2 Days",
    date: "March 15, 2022 to March 16, 2022",
    location: "San Francisco",
    posterUrl:
      "https://mir-s3-cdn-cf.behance.net/project_modules/fs/f35ee593213265.5e5f0394bc88b.jpg",
  },
  {
    title: "NYUAD Hackathon",
    description:
      "We are excited to announce the 10th annual NYUAD Hackathon for Social Good which will focus on one of the most promising technologies of our time, Quantum Computing (QC). We will form cross-disciplinary global teams building solutions to challenging problems we are facing today using Quantum Computing technologies.",
    duration: "6 Days",
    date: "April 21, 2022 to March 26, 2022",
    location: "Boston",
    posterUrl: "https://pbs.twimg.com/media/EVqzx6bX0AAKGmj.jpg",
  },
  {
    title: "Code Hackathon",
    description:
      "A hackathon is a design sprint-like event, in which often computer programmers and others involved in software development, including graphic designers, interface designers, product managers, project managers, domain experts, and others collaborate intensively on software projects.",
    duration: "1 Day",
    date: "May 5, 2022 to May 6, 2022",
    location: "Atlanta",
    posterUrl:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/code-hackathon-event-poster-design-template-d7c8ddfd12e11fd2b9c6b70241626091_screen.jpg?ts=1567076214",
  },
];
export default class HackathonBody extends Component {

  onRegister(index){
    let data =  hackathonData[index];
    alert("Thank you for registering for: " + data.title);
  }

  constructor(props){
    super(props);
    this.onRegister = this.onRegister.bind(this);

    let hackathonData = JSON.parse(localStorage.getItem("hackathon-data"));

    this.state={
      hackathonData
    }
  }
    render() {
      let arr = this.state.hackathonData.filter(elem => elem.location === this.props.city);
        return (
          <div>
            {
             arr.length > 0 ? arr.map((e, index) => {
                const {title, description, duration, posterUrl, date, location} =  e;
                // let ind = index;
                return (
                  <div className="hack-body">
                    <div className="hackathon-image-block">
                      <img src={posterUrl} alt="new" className="hack-poster" />
                    </div>

                    <div className="hackathon-description">
                      <div>
                        <p className="hackathon-title">{title}</p>
                        <p className="hackathon-description-text">
                          {description}
                        </p>  

                        <HackData
                          data={{ label: "Duration:", value: duration }}
                        />

                        <HackData
                          data={{ label: "Location:", value: location }}
                        />

                        <HackData
                          data={{
                            label: "Date:",
                            value: date,
                          }}
                        />

                        <button 
                        className="register-btn"
                        onClick={() => this.onRegister(index)}
                        >Register</button>
                      </div>
                    </div>
                  </div>
                );
              }) : <h4 style={{textAlign: 'center', marginTop: "3rem"}}>No Hackathons Found</h4>
            }

          </div>
        );
    }
}
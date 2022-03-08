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
      "A hackathon is a design sprint-like event, in which often computer programmers and others involved in software development, including graphic designers, interface designers, product managers, project managers, domain experts, and others collaborate intensively on software projects.",
    duration: "2 Days",
    date: "March 15, 2022 to March 16, 2022",
    location: "San Francisco",
    posterUrl:
      "https://mir-s3-cdn-cf.behance.net/project_modules/fs/f35ee593213265.5e5f0394bc88b.jpg",
  },
  {
    title: "NEU Hackathon",
    description:
      "A hackathon is a design sprint-like event, in which often computer programmers and others involved in software development, including graphic designers, interface designers, product managers, project managers, domain experts, and others collaborate intensively on software projects.",
    duration: "2 Days",
    date: "March 15, 2022 to March 16, 2022",
    location: "San Francisco",
    posterUrl:
      "https://mir-s3-cdn-cf.behance.net/project_modules/fs/f35ee593213265.5e5f0394bc88b.jpg",
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
  }
    render() {
        return (
          <div>
            {
              hackathonData.map((e, index) => {
                
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
              })
            }

          </div>
        );
    }
}
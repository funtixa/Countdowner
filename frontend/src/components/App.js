import React, { Component } from "react";
import { render } from "react-dom";
import DateCountdown from "react-date-countdown-timer";
// import DOMPurify from 'dompurify'
import parse from 'html-react-parser';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

  componentDidMount() {
    fetch("api/lead")
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(data => {
        this.setState(() => {
          return {
            data,
            loaded: true
          };
        });
      });
  }

  render() {
    return (
      <div className="container_field">
        {this.state.data.map(contact => {
          return (
            <div className="App" >
              <div key={contact.id}>
                <h1 className="company_header">{contact.company}</h1>
                <h4 className="company_title">{contact.title}</h4>
                <p className="overview_field">{contact.overview}</p>
                <iframe width="560" height="315" src={contact.video_link} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
{/* ## Properties
* dateTo(string)(required): target date to countdown
* callback(function): function to run after the countdown is completed (default null)
* mostSignificantFigure(string): most significant figure to show about the remaining time (default 'none')
* numberOfFigures(number): number of figures to show from mostSignificantFigure (default 6)
* locales(array(string)): locales strings for units (default ['year','month','day','hour','minute','second'])
* locales_plural(array(string)): locales strings for units' plural form (default ['years','months','days','hours','minutes','seconds']) */}
              <div className="timer">
                <DateCountdown
                  mostSignificantFigure={contact.mostSignificantFigure}
                  numberOfFigures={contact.numberOfFigures}
                  dateTo={contact.event_date}
                  callback={() => console.log("Expired")}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);

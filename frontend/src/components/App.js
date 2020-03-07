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
                <iframe width="300" height="200" src={contact.video_link}/>
              </div>
              <div className="timer">
                <DateCountdown
                  dateTo={contact.event_date}
                  callback={() => alert("Expired")}
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

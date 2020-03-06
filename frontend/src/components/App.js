import React, { Component } from "react";
import { render } from "react-dom";
import DateCountdown from "react-date-countdown-timer";

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
      <ul>
        {this.state.data.map(contact => {
          return (
            <div className="App">


              <div key={contact.id}>
                <h1>{contact.company}</h1>
                <h4>{contact.title}</h4>
                <p>{contact.overview}</p>
                <p>{contact.event_date}</p>
                
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
      </ul>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);

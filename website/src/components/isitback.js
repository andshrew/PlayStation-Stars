// Parse the JSON response from the PS App config into a HTML table of countries
import React, { Component } from 'react';
import styles from '@site/src/css/collectibles.modules.css';

class IsStarsBack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      display: 'block',
      errorState: 'none',
    };
  }

  async componentDidMount() {
    try {
      // Load countries data
      var countries = require('@site/static/countries.json');
      var enabledCountries = []
      const STATUS_URL = 'https://gist.githubusercontent.com/NemesisWantsStars/f918417540cd2bbab44e14c6bf4da05d/raw/staaaaaaars.json'
      // Load PS App config
      await fetch(STATUS_URL, { cache: "no-store" })
      .then(response => response.json())
      .then(data => {
        for (const [key, value] of Object.entries(data.errorState)) {
          if (value === false) {
            var location = countries.findIndex(i => i.alpha2 === key)
            if (location > -1) {
              enabledCountries.push(countries[location])
            }
          }
        }
      })
      if (enabledCountries.length > 0) {
        enabledCountries.sort((a, b) => a.name > b.name ? 1 : -1);
        this.setState({ data: enabledCountries });
      }
    }
    catch (error) {
      console.log("Unexpected error:");
      console.error(error.message);
      this.setState({ display: 'none' });
      this.setState({ errorState: 'block' });
    }
  }

  render() {
    return (
        <div>
          <div id='displayTable' style={{
            display: this.state.display,
          }}>
            <table className={styles['main-table']}>
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Country</th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.alpha2}</td>
                    <td >{item.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div id='errorMessage' style={{
            display: this.state.errorState,
          }}>
            <h2>Opps! Something went wrong. Try again, I guess.</h2><br/>
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/t3otBjVZzT0?si=brqOIj59WBn1osMY&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
    );
  }
}

export default IsStarsBack;
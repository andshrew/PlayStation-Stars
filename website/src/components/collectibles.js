// Generates a HTML table from a JSON data file for the collectibles reference page
import React, { Component } from 'react';

class CollectiblesTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      sortDateAsc: true,
      sortRarityAsc: true,
    };
    this.handleClick = this.handleClick.bind(this);
    this.sortName = this.sortName.bind(this);
    this.sortDate = this.sortDate.bind(this);
    this.sortRarity = this.sortRarity.bind(this);
  }

  componentDidMount() {
    // Load collectible JSON and sort by name
    var collectibles = require('@site/static/collectibles.json');
    collectibles.sort((a, b) => a.name > b.name ? 1 : -1);
    this.setState({ data: collectibles } );
  }

  handleClick(event) {
    // Add collectible description on click
  }

  sortName() {
    const data = this.state.data;
    data.sort((a, b) => a.name > b.name ? 1 : -1);
    this.setState({ data });
  }

  sortDate() {
    const data = this.state.data;
    if (this.state.sortDateAsc) {
      data.sort((a, b) => a.releaseDate > b.releaseDate ? 1 : -1 || a.name.localeCompare(b.name));
    }
    else {
      data.sort((a, b) => a.releaseDate > b.releaseDate ? -1 : 1 || a.name.localeCompare(b.name));
    }
    this.setState({ data });
    this.setState({ sortDateAsc: !this.state.sortDateAsc })
  }

  sortRarity() {
    const data = this.state.data;
    if (this.state.sortRarityAsc) {
      data.sort((a, b) => a.rarity > b.rarity ? 1 : -1 || a.name.localeCompare(b.name));
    }
    else {
      data.sort((a, b) => a.rarity > b.rarity ? -1 : 1 || a.name.localeCompare(b.name));
    }
    this.setState({ data });
    this.setState({ sortRarityAsc: !this.state.sortRarityAsc })
  }

  render() {
    return (
        <div style={{
          display: 'flex',
        }}>
          <div id={"displayTable"} style={{
            display: 'block'
          }}>
            <button onClick={this.sortDate}>Sort Date</button>
            <button onClick={this.sortName}>Sort Name</button>
            <button onClick={this.sortRarity}>Sort Rarity</button>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Rarity</th>
                  <th>Release Date</th>
                  <th>Media</th>
                  <th>Media</th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map((item, index) => (
                  <tr key={index} onClick={this.handleClick}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.rarity}</td>
                    <td>{new Date(item.releaseDate).toLocaleDateString(navigator.language)}</td>
                    {item.media.map((mediaItem, mediaIndex) => (
                      <td key={mediaIndex}><a href={mediaItem.url} target={"_blank"}>{mediaItem.type}</a></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    );
  }
}

export default CollectiblesTable;
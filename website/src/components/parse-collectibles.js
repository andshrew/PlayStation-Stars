// Parse the JSON response from the 'User Earned Collectibles' endpoint into a HTML table
// Additionally can compare the list of user submitted collectibles to those indexed on the site
import React, { Component } from 'react';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      originalData: [],
      sortRarityAsc: true,
    };
    this.sortName = this.sortName.bind(this);
    this.sortRarity = this.sortRarity.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.findNewCollectibles = this.findNewCollectibles.bind(this);
    this.copyNewCollectibles = this.copyNewCollectibles.bind(this);
    this.resetView = this.resetView.bind(this);
  }

  handleChange(event) {
    var input;
    try {
      input = JSON.parse(event.target.value);
      input = input.data.loyaltyUserCollectiblesRetrieve;
    }
    catch {
      // Not the JSON we're looking for
      return;
    }

    input.sort((a, b) => a.name > b.name ? 1 : -1);
    this.setState({ data: input });
    // Hide data entry and display the table
    document.getElementById("dataEntry").style.display = "none";
    document.getElementById("displayTable").style.display = "block";
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  sortName() {
    const data = this.state.data;
    data.sort((a, b) => a.name > b.name ? 1 : -1);
    this.setState({ data });
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

  findNewCollectibles = async() => {
    const req = await fetch('/collectibles-id.json');
    const knownCollectibles = await req.json();
    
    if (this.state.data.length > 0) {
      const collectibles = this.state.data;
      var newCollectibles = []

      collectibles.forEach((value, index, object) => {
        var isFound;
        const location = knownCollectibles.indexOf(value.id)
        if (location >= 0) {
          isFound = true;
        }

        if (isFound) {
          // Collectible is already known
        }

        if (! isFound) {
          newCollectibles.push(value);
        }
      })

      if (newCollectibles.length > 0) {
        this.setState({ originalData: collectibles });
        this.setState({ data: newCollectibles });
        document.getElementById("newCollectibles").style.display = "block";
      }
      else {
        alert("All of your collectibles are already indexed on this site.")
      }
    }
  }

  copyNewCollectibles() {
    if (this.state.data.length > 0) {
      navigator.clipboard.writeText(JSON.stringify(this.state.data.map(item => item.id)));
    }
  }

  resetView() {
    if (this.state.originalData.length > 0) {
      this.setState({ data: this.state.originalData });
      this.setState({ originalData: [] })
      document.getElementById("newCollectibles").style.display = "none";
    }
  }

  render() {
    return (
        <div style={{
          display: 'flex',
          flexWrap: 'wrap'
        }}>
          <div id={"newCollectibles"} style={{display: 'none'}}>
            <h2>New Collectibles found!</h2>
            You have {this.state.data.length} collectibles which have not been indexed by this site.
            The table view has been filtered to only display these collectibles.
            <br/>
            Please consider submitting these.
            You can click the button below to copy the collectible ids to your clipboard, and
            share them by submitting them <a href={"https://github.com/andshrew/PlayStation-Stars/issues/1"} target={"_blank"}>on GitHub by clicking here</a>.
            <br/>
            <button onClick={this.copyNewCollectibles}>Copy Ids to Clipboard</button>
            <button onClick={this.resetView}>Reset View</button>
          </div>
          <form onSubmit={this.handleSubmit}>
          <div id={"dataEntry"}>
            <label>
              Paste User Earned Collectibles JSON data:<br />
              <textarea rows={3} cols={50} onChange={this.handleChange} />
            </label>
          </div>
            <br/>
            <div id={"displayTable"} style={{
              display: 'none'
            }}>
              <button onClick={this.sortName}>Sort Name</button>
              <button onClick={this.sortRarity}>Sort Rarity</button>
              <button onClick={this.findNewCollectibles}>Check Collectibles</button>
              <div style={{
                display: 'block',
              }}>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Rarity</th>
                    <th>Media</th>
                    <th>Media</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.rarity}</td>
                      {item.assets.map((mediaItem, mediaIndex) => (
                        <td key={mediaIndex}><a href={mediaItem.url} target={"_blank"}>{mediaItem.type}</a></td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
            </div>
          </form>
        </div>
    );
  }
}

export default Table;
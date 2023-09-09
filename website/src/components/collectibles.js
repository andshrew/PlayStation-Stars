// Generates a HTML table from a JSON data file for the collectibles reference page
import React, { Component } from 'react';
import styles from '@site/src/css/collectibles.modules.css';


class CollectiblesTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      sortDateAsc: true,
      sortRarityAsc: true,
    };
    this.handleDialogClick = this.handleDialogClick.bind(this);
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

  handleDialogClick(event, index) {
    // Display a dialog for an individual collectible
    var collectible = this.state.data[index]
    var dialog = document.getElementById('displayDialog');

    var description = collectible.description.find((c) => c.type == 'LONG')
    document.getElementById('dialogDesc').textContent = description.value;
    document.getElementById('dialogName').textContent = collectible.name;
    document.getElementById('dialogRelease').textContent = new Date(collectible.releaseDate).toLocaleDateString(navigator.language);
    document.getElementById('dialogRarity').textContent = collectible.rarity;
    var imageUrl = collectible.media.find((c) => c.type == 'IMAGE')
    document.getElementById('dialogImage').src = imageUrl.url;
    document.getElementById('dialogImage').setAttribute('collectible-rarity', collectible.rarity.toLowerCase());
    
    dialog.showModal();
  }

  handleDialogClose() {
    var dialog = document.getElementById("displayDialog");
    document.getElementById('dialogImage').src = '';
    dialog.close();
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
          display: 'block',
        }}>
          <div id='displayTable'>
            <button onClick={this.sortDate}>Sort Release Date</button>&nbsp;
            <button onClick={this.sortName}>Sort Name</button>&nbsp;
            <button onClick={this.sortRarity}>Sort Rarity</button>
            <table class={styles['main-table']}>
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
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td onClick={((e) => this.handleDialogClick(e, index))}>{item.name}</td>
                    <td onClick={((e) => this.handleDialogClick(e, index))}>{item.rarity}</td>
                    <td onClick={((e) => this.handleDialogClick(e, index))}>{new Date(item.releaseDate).toLocaleDateString(navigator.language)}</td>
                    {item.media.map((mediaItem, mediaIndex) => (
                      <td key={mediaIndex}><a href={mediaItem.url} target={"_blank"}>{mediaItem.type}</a></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <dialog id='displayDialog' class={styles.dialog}>
            <span onClick={this.handleDialogClose} class={styles['close-button']}>&times;</span>
            <center><b><p id='dialogName'></p></b></center>
            <p class={styles['text-stretch']} id='dialogDesc'></p>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <table class={styles['dialog-table']}>
                <thead>
                  <tr>
                    <th>Release Date</th>
                    <th>Rarity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td id='dialogRelease'></td>
                    <td id='dialogRarity'></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <span id='dialogImageSpan' style={{
              display: 'block',
            }}>
              <p><center>
                <img id='dialogImage' class={styles['collectible-image']} loading='lazy'></img>
              </center></p>
            </span>
            <center><button id='dialogClose' onClick={this.handleDialogClose}>Close</button></center>
          </dialog>
        </div>
    );
  }
}

export default CollectiblesTable;
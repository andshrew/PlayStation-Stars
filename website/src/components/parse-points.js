// Parse the JSON response from the 'User Points History' endpoint into a HTML table
import React, { Component } from 'react';

class PointsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pointsCurrent: 0,
      pointsCampaign: 0,
      pointsPurchase: 0,
      pointsWallet: 0,
      pointsCollectible: 0,
      pointsTotal: 0,
      originalData: [],
    };
    this.filterNegative = this.filterNegative.bind(this);
    this.filterType = this.filterType.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetView = this.resetView.bind(this);
  }

  handleChange(event) {
    var input;
    try {
      input = JSON.parse(event.target.value);
      input = input.data.loyaltyPointHistoryRetrieve;
    }
    catch {
      // Not the JSON we're looking for
      return;
    }

    this.setState({ data: input });
    // Current points
    let pCurrent = Object.values(input).reduce((a, item) => a + item.points, 0);
    this.setState({ pointsCurrent: pCurrent });
    // Earned from Campaigns
    let pCampaign = input.filter(({eventType}) => eventType === 'CAMPAIGN').reduce((a, item) => a + item.points, 0);
    this.setState({ pointsCampaign: pCampaign });
    // Earned from Purchases
    let pPurchase = input.filter(({eventType}) => eventType === 'PURCHASE').reduce((a, item) => a + item.points, 0);
    this.setState({ pointsPurchase: pPurchase });
    // Total Earned
    let pTotal = pCampaign + pPurchase;
    this.setState({ pointsTotal: pTotal });
    // Spent on Wallet Credit
    let pWallet = input.filter(({eventType}) => eventType === 'WALLET_CREDIT').reduce((a, item) => a + item.points, 0);
    pWallet = Math.abs(pWallet) // Make the negative number positive
    this.setState({ pointsWallet: pWallet });
    // Spent on Collectibles
    let pCollectible = input.filter(({eventType}) => eventType === 'COLLECTIBLE').reduce((a, item) => a + item.points, 0);
    this.setState({ pointsCollectible: pCollectible });
    
    // Hide data entry and display the table
    document.getElementById("dataEntry").style.display = "none";
    document.getElementById("summaryTable").style.display = "block";
    document.getElementById("displayTable").style.display = "block";
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  filterNegative() {
    let data = this.state.data;
    if (this.state.originalData.length === 0) {
      this.setState({ originalData: this.state.data });
    }

    data = data.filter(({points}) => points < 0);
    this.setState({ data });
  }

  filterType(event) {
    let data = this.state.data;
    if (this.state.originalData.length === 0) {
      this.setState({ originalData: this.state.data });
    }
    
    let type = event.target.name;
    data = data.filter(({eventType}) => eventType === type);
    this.setState({ data });
  }

  resetView() {
    if (this.state.originalData.length > 0) {
      this.setState({ data: this.state.originalData });
      this.setState({ originalData: [] });
    }
  }

  render() {
    return (
        <div style={{
          display: 'flex',
          flexWrap: 'wrap'
        }}>
          <form onSubmit={this.handleSubmit}>
          <div id={"dataEntry"}>
            <label>
              Paste User Points History JSON data:<br />
              <textarea rows={3} cols={50} onChange={this.handleChange} />
            </label>
          </div>
            <br/>
            <div id={"summaryTable"} style={{
              display: 'none'
            }}>
              <div style={{
                display: 'block',
              }}>
              <table>
                <thead>
                  <tr>
                    <th>Summary</th>
                    <th>Points</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Current Total</td>
                    <td>{this.state.pointsCurrent}</td>
                  </tr>
                  <tr>
                    <td>Total Earned</td>
                    <td>{this.state.pointsTotal}</td>
                  </tr>
                  <tr>
                    <td>Earned from Campaigns</td>
                    <td>{this.state.pointsCampaign}</td>
                  </tr>
                  <tr>
                    <td>Earned from Purchases</td>
                    <td>{this.state.pointsPurchase}</td>
                  </tr>
                  <tr>
                    <td>Spent on Wallet Credit</td>
                    <td>{this.state.pointsWallet}</td>
                  </tr>
                  <tr>
                    <td>Spent on Collectibles</td>
                    <td>{this.state.pointsCollectible}</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>
            <div id={"displayTable"} style={{
              display: 'none'
            }}>
              <button onClick={this.resetView}>Reset View</button>&nbsp;
              <button onClick={this.filterNegative}>Negative Entrys Only</button><br/>
              Filter:&nbsp;
              <button name="CAMPAIGN" onClick={this.filterType}>Campaign</button>&nbsp;
              <button name="PURCHASE" onClick={this.filterType}>Purchase</button>&nbsp;
              <button name="WALLET_CREDIT" onClick={this.filterType}>Wallet Credit</button>&nbsp;
              <button name="COLLECTIBLE" onClick={this.filterType}>Collectible</button>&nbsp;
              <div style={{
                display: 'block',
              }}>
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Points</th>
                    <th>PS Store Transaction ID<br/><i>or</i> Campaign ID</th>
                    <th>Campaign Name<br/><i>or</i> Collectible Name</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.data.map((item, index) => (
                    <tr key={index}>
                      <td>{new Date(item.eventDateTime).toLocaleDateString(navigator.language)}</td>
                      <td>{item.eventType}</td>
                      <td>{item.points}</td>
                      <td>{item.referenceData.id}</td>
                      <td>{item.referenceData.name}</td>
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

export default PointsTable;
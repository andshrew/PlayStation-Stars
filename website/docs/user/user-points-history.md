---
sidebar_position: 2
title: User Points History
description: Retrieve a summary of points earned and redeemed
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# User Points History

## Overview

Requests to this endpoint will retrieve a summary of the reward points which a user has earned from service. It includes points which have been earned from the completion of campaigns or from purchases from the PlayStation Store, and points which have been redeemed either on collectibles or rewards like PlayStation Store credit and games.

The endpoint can query the authenticating account only.

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetPointsHistory

:::info

If you query with an account which has not enrolled with PlayStation Stars then the API will return a successful but empty response.

<details><summary>Click to view full response</summary>

```json
{
  "data": {
    "loyaltyPointHistoryRetrieve": []
  }
}
```

</details>

:::

## Input Parameters

| Parameter | Value |
| --- | --- |
| operationName | metGetPointsHistory |
| variables | `{}` |
| extensions | `{"persistedQuery":{"version":1,"sha256Hash":"302481c4156ec3f64332bf4b76251597eb30825a79e2736641737bc3af77755c"}}` |

## Output JSON Response

A JSON response is returned. The following are returned under the `data` attribute.

| Attribute | Type | Example Value | Description |
| --- | --- |--- | --- | 
| loyaltyPointHistoryRetrieve | [JSON object<br/>`LoyaltyPointHistoryRecord`](#m-json-object-LoyaltyPointHistoryRecord) | | Contains a collection of objects which detail each time the account has earned or redeemed points

### LoyaltyPointHistoryRecord JSON object {#m-json-object-LoyaltyPointHistoryRecord}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `LoyaltyPointHistoryRecord` |
| displayPoints | String | `700`<br/>`-1,250` | Points earned or redeemed (string formatted)
| eventDateTime | Date (UTC) | `2022-11-02T20:21:28.891Z` | Date of the transaction
| eventType | String | `PURCHASE`<br/>`CAMPAIGN`<br/>`WALLET_CREDIT` | Type of transaction
| points | Numeric | `700`<br/>`-1250` | Points earned or redeemed
| referenceData | [JSON object<br/>`LoyaltyRewardRecord`](#m-json-object-LoyaltyRewardRecord)<br/>[JSON object<br/>`LoyaltyPurchaseRecord`](#m-json-object-LoyaltyPurchaseRecord) | | Data associated with how the points were earned or redeemed

### LoyaltyRewardRecord JSON object {#m-json-object-LoyaltyRewardRecord}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `LoyaltyRewardRecord` |
| id | String | `8fc3abdc-bf5b-5f7f-8a44-a9c2c50837b7` | GUID of the campaign associated with the points
| name | String | `Play Wherever` | Name of the campaign

### LoyaltyPurchaseRecord JSON object {#m-json-object-LoyaltyPurchaseRecord}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `LoyaltyPurchaseRecord` |
| id | String | `000000000000` | PlayStation Store transaction number associated with the points
| name | String | `God of War Ragnarök`<br/>`null` | Name of the PlayStation Store product


## Examples with Responses

### Example 1 - Retrieve points history for the authenticating account

<Tabs>
<TabItem value="example1-encoded-url" label="Encoded URL">

_See [using a Web Browser to query the API](../query-api#web-browser)_

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetPointsHistory&variables=%7B%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22302481c4156ec3f64332bf4b76251597eb30825a79e2736641737bc3af77755c%22%7D%7D

</TabItem>

<TabItem value="example1-raw-url" label="Raw URL">

_See [using a Web Browser to query the API](../query-api#web-browser)_

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetPointsHistory&variables={}&extensions={"persistedQuery":{"version":1,"sha256Hash":"302481c4156ec3f64332bf4b76251597eb30825a79e2736641737bc3af77755c"}}

</TabItem>

<TabItem value="example1-raw-pwsh" label="PowerShell">

_See [using PowerShell to query the API](../query-api#powershell-7)_

```powershell
Invoke-RestMethod -Uri 'https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetPointsHistory&variables={}&extensions={"persistedQuery":{"version":1,"sha256Hash":"302481c4156ec3f64332bf4b76251597eb30825a79e2736641737bc3af77755c"}}' -Authentication Bearer -Token $token
```

</TabItem>

</Tabs>

<details><summary>Click to view full JSON response</summary>

```json
{
  "data": {
    "loyaltyPointHistoryRetrieve": [
      {
        "__typename": "LoyaltyPointHistoryRecord",
        "displayPoints": "700",
        "eventDateTime": "2022-10-18T16:20:08.672Z",
        "eventType": "PURCHASE",
        "points": 700,
        "referenceData": {
          "__typename": "LoyaltyPurchaseRecord",
          "id": "000000000000",
          "name": "Call of Duty®: Modern Warfare® II - Cross-Gen Bundle"
        }
      },
      {
        "__typename": "LoyaltyPointHistoryRecord",
        "displayPoints": "75",
        "eventDateTime": "2022-11-01T13:45:05.822851Z",
        "eventType": "CAMPAIGN",
        "points": 75,
        "referenceData": {
          "__typename": "LoyaltyRewardRecord",
          "id": "8fc3abdc-bf5b-5f7f-8a44-a9c2c50837b7",
          "name": "Play wherever"
        }
      },
      {
        "__typename": "LoyaltyPointHistoryRecord",
        "displayPoints": "700",
        "eventDateTime": "2022-11-02T20:21:28.891Z",
        "eventType": "PURCHASE",
        "points": 700,
        "referenceData": {
          "__typename": "LoyaltyPurchaseRecord",
          "id": "000000000000",
          "name": "God of War Ragnarök"
        }
      },
      {
        "__typename": "LoyaltyPointHistoryRecord",
        "displayPoints": "-1,250",
        "eventDateTime": "2022-11-02T22:24:08.201225Z",
        "eventType": "WALLET_CREDIT",
        "points": -1250,
        "referenceData": {
          "__typename": "LoyaltyPurchaseRecord",
          "id": "000000000000",
          "name": null
        }
      }
    ]
  }
}
```

</details>
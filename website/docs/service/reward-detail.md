---
sidebar_position: 3.5
title: Reward Detail
description: Retrieve detail of a specific reward
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Reward Detail

## Overview

Requests to this endpoint will retrieve the details of a specific reward.

The endpoint can only query the collectible and wallet credit rewards. Product rewards (ie. full games) are directed to the PlayStation Store's API which is beyond the scope of this documentation.

The endpoint can query the authenticating account only.

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyRewardbyId


:::info

If you query with an account which has not enrolled with PlayStation Stars then the API will return a successful response with an error object contained within.

<details><summary>Click to view full response</summary>

```json
{
  "errors": [
    {
      "message": "User is not enrolled inside the program!",
      "type": "NimbusNormalizedError",
      "error": {
        "reason": "BadRequest",
        "source": "-1",
        "code": -1,
        "message": "User is not enrolled inside the program!",
        "referenceId": "aa8f9436-259b-402d-b9c1-c2a0a34c74b4"
      },
      "statusCode": 400,
      "errorCode": -1,
      "humanReadableCode": "",
      "humanReadableValidationErrors": [],
      "apiName": "getRewardById"
    }
  ],
  "data": {
    "loyaltyRewardbyIdRetrieve": null
  }
}
```

</details>

:::

## Input Parameters

| Parameter | Value |
| --- | --- |
| operationName | metLoyaltyRewardbyId |
| variables | `{"id":"85bc1d70-a9ee-55e7-a97d-905ee2d82a48"}` |
| extensions | `{"persistedQuery":{"version":1,"sha256Hash":"ce95956c322a6a6a83def21efd4471cf1f617a2259c1e9c52b4a2c2109005cdd"}}` |

| Property | Parent Parameter | Type | Example Values | Description | Required |
| --- | --- | --- | --- | --- | --- |
| id | variables | String | `85bc1d70-a9ee-55e7-a97d-905ee2d82a48` | GUID of the reward to retrieve | Yes |

## Output JSON Response

A JSON response is returned. The following are returned under the `data` attribute.

| Attribute | Type | Example Value | Description |
| --- | --- |--- | --- | 
| loyaltyRewardbyIdRetrieve | [JSON object<br/>`LoyaltyRewardCollectible`](#m-json-object-LoyaltyRewardCollectible)<br/>[JSON object<br/>`LoyaltyRewardWalletCredit`](#m-json-object-LoyaltyRewardWalletCredit) | | Contains the reward details

### LoyaltyRewardCollectible JSON object {#m-json-object-LoyaltyRewardCollectible}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `LoyaltyUserCollectible` |
| assets | [JSON object<br/>`Media`](#m-json-object-Media-collectible) | | Media associated with the collectible (images, video)
| descriptions | [JSON object<br/>`Description`](#m-json-object-Description-collectible) | | Description associated with the collectible
| displayName | String | `Pink Monkey Diorama` | Name of the collectible
| displayPoints | String | `200` | Cost of the reward (string formatted)
| id | String | `85bc1d70-a9ee-55e7-a97d-905ee2d82a48` | GUID for the collectible
| name | String | `Pink Monkey Diorama` | Name of the collectible
| offerEndDate | Date (UTC) | `2022-11-15T23:59:00.000000Z` | Date the collectible removed from the reward store
| offerStartDate | Date (UTC) | `2022-09-13T21:24:00.000000Z` | Date the collectible added to the reward store
| points | Numeric | `200` | Cost of the reward
| rarity | String | `COMMON`<br/>`UNCOMMON`<br/>`RARE`<br/>`HEROIC`<br/>`LEGENDARY` | Rarity of the collectible
| releaseDate | Date (UTC) | `2022-09-13T00:00:00.000000Z` | Date the collectible became available
| rewardType | String | `COLLECTIBLE` | Type of reward
| unlockedDate | Date (UTC) | `2022-10-01T13:06:01.004772Z`<br/>`null` | Date the user earned the collectible<br/>`null` if not earned

### Media (Collectible) JSON object {#m-json-object-Media-collectible}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `Media` |
| type | String | `IMAGE`<br/>`VIDEO` | The media type
| url | String | `https://sky-assets.api.playstation.com/sky/p1-np/collectible/image/masterImage_png_418_1664306106337.png`<br/>`https://sky-assets.api.playstation.com/sky/p1-np/collectible/video/video_mp4_418_1662589943734.mp4` | URL for the media

### Description (Collectible) JSON object {#m-json-object-Description-collectible}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `Description` |
| type | String | `LEGAL`<br/>`LONG` | The description type
| url | String | `null`<br/>`Escape the ape that's in you with the help of this totally stable aspiring pop star.` | Description text

### LoyaltyRewardWalletCredit JSON object {#m-json-object-LoyaltyRewardWalletCredit}

:::tip

Wallet credit rewards appear to be listed as generic dollar values (ie. $5, $20) with the `monetaryValue` attribute displaying the actual localised value of the credit.

:::

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `LoyaltyRewardWalletCredit` |
| assets | [JSON object<br/>`Media`](#m-json-object-Media-wallet) | | Media associated with the wallet credit (images, video)
| descriptions | [JSON object<br/>`Description`](#m-json-object-Description-wallet) | | Description associated with the wallet credit
| displayName | String | `Wallet Credit - $20` | Name of the wallet credit
| displayPoints | String | `4,000` | Cost of the reward (string formatted)
| id | String | `18747538-8dce-569c-91b8-3d46bc1c7296` | GUID for the collectible
| localizedProductClassifications | Array<br/>String | `null` | Type of product
| monetaryValue | String | `HK$160.00` | Value of the wallet credit
| name | String | `Wallet Credit - $20` | Name of the wallet credit
| offerEndDate | Date (UTC) | `2023-12-31T23:59:00.000000Z` | Date the wallet credit removed from the reward store
| offerStartDate | Date (UTC) | `2022-09-27T01:51:00.000000Z` | Date the wallet credit added to the reward store
| points | Numeric | `4000` | Cost of the reward
| rewardType | String | `COLLECTIBLE` | Type of reward

### Media (Wallet) JSON object {#m-json-object-Media-wallet}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `Media` |
| role | String | `IMAGE`<br/>`TILE`<br/>`BACKGROUND` | What the media is used for
| type | String | `IMAGE` | The media type
| url | String | `https://sky-assets.api.playstation.com/sky/p1-np/walletCredit/image/walletcredit_11_center.png`<br/>`https://sky-assets.api.playstation.com/sky/p1-np/walletCredit/image/walletcredit_11_topaligned.png`<br/>`https://sky-assets.api.playstation.com/sky/p1-np/walletCredit/image/walletcredit_169_center.png` | URL for the media

### Description (Wallet) JSON object {#m-json-object-Description-wallet}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `Description` |
| type | String | `LEGAL`<br/>`LONG` | The description type
| value | String | `null`<br/>`Wallet Credit - $20` | Description text


## Examples with Responses

### Example 1 - Retrieve collectible reward with id `85bc1d70-a9ee-55e7-a97d-905ee2d82a48` for the authenticating account

<Tabs>
<TabItem value="example1-encoded-url" label="Encoded URL">

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyRewardbyId&variables=%7B%22id%22%3A%2285bc1d70-a9ee-55e7-a97d-905ee2d82a48%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22ce95956c322a6a6a83def21efd4471cf1f617a2259c1e9c52b4a2c2109005cdd%22%7D%7D

</TabItem>

<TabItem value="example1-raw-url" label="Raw URL">

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyRewardbyId&variables={"id":"85bc1d70-a9ee-55e7-a97d-905ee2d82a48"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"ce95956c322a6a6a83def21efd4471cf1f617a2259c1e9c52b4a2c2109005cdd"}}

</TabItem>

<TabItem value="example1-raw-pwsh" label="PowerShell">

_See [using PowerShell to query the API](../query-api)_

```powershell
Invoke-RestMethod -Uri 'https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyRewardbyId&variables={"id":"85bc1d70-a9ee-55e7-a97d-905ee2d82a48"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"ce95956c322a6a6a83def21efd4471cf1f617a2259c1e9c52b4a2c2109005cdd"}}' -Authentication Bearer -Token $token
```

</TabItem>

</Tabs>

<details><summary>Click to view full JSON response</summary>

```json
{
  "data": {
    "loyaltyRewardbyIdRetrieve": {
      "__typename": "LoyaltyRewardCollectible",
      "assets": [
        {
          "__typename": "Media",
          "type": "IMAGE",
          "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/image/masterImage_png_418_1664306106337.png"
        },
        {
          "__typename": "Media",
          "type": "VIDEO",
          "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/video/video_mp4_418_1662589943734.mp4"
        }
      ],
      "description": [
        {
          "__typename": "Description",
          "type": "LEGAL",
          "value": null
        },
        {
          "__typename": "Description",
          "type": "LONG",
          "value": "Escape the ape that's in you with the help of this totally stable aspiring pop star."
        }
      ],
      "displayName": "Pink Monkey Diorama",
      "displayPoints": "200",
      "id": "85bc1d70-a9ee-55e7-a97d-905ee2d82a48",
      "name": "Pink Monkey Diorama",
      "offerEndDate": "2022-11-15T23:59:00.000000Z",
      "offerStartDate": "2022-09-13T21:24:00.000000Z",
      "points": 200,
      "rarity": "RARE",
      "releaseDate": "2022-09-13T00:00:00.000000Z",
      "rewardType": "COLLECTIBLE",
      "unlockedDate": null
    }
  }
}
```

</details>

### Example 2 - Retrieve wallet credit reward with id `18747538-8dce-569c-91b8-3d46bc1c7296` for the authenticating account

<Tabs>
<TabItem value="example2-encoded-url" label="Encoded URL">

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyRewardbyId&variables=%7B%22id%22%3A%2218747538-8dce-569c-91b8-3d46bc1c7296%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22ce95956c322a6a6a83def21efd4471cf1f617a2259c1e9c52b4a2c2109005cdd%22%7D%7D

</TabItem>

<TabItem value="example2-raw-url" label="Raw URL">

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyRewardbyId&variables={"id":"18747538-8dce-569c-91b8-3d46bc1c7296"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"ce95956c322a6a6a83def21efd4471cf1f617a2259c1e9c52b4a2c2109005cdd"}}

</TabItem>

<TabItem value="example2-raw-pwsh" label="PowerShell">

_See [using PowerShell to query the API](../query-api)_

```powershell
Invoke-RestMethod -Uri 'https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyRewardbyId&variables={"id":"18747538-8dce-569c-91b8-3d46bc1c7296"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"ce95956c322a6a6a83def21efd4471cf1f617a2259c1e9c52b4a2c2109005cdd"}}' -Authentication Bearer -Token $token
```

</TabItem>

</Tabs>

<details><summary>Click to view full JSON response</summary>

```json
{
  "data": {
    "loyaltyRewardbyIdRetrieve": {
      "__typename": "LoyaltyRewardWalletCredit",
      "assets": [
        {
          "__typename": "Media",
          "role": "IMAGE",
          "type": "IMAGE",
          "url": "https://sky-assets.api.playstation.com/sky/p1-np/walletCredit/image/walletcredit_11_center.png"
        },
        {
          "__typename": "Media",
          "role": "TILE",
          "type": "IMAGE",
          "url": "https://sky-assets.api.playstation.com/sky/p1-np/walletCredit/image/walletcredit_11_topaligned.png"
        },
        {
          "__typename": "Media",
          "role": "BACKGROUND",
          "type": "IMAGE",
          "url": "https://sky-assets.api.playstation.com/sky/p1-np/walletCredit/image/walletcredit_169_center.png"
        }
      ],
      "description": [
        {
          "__typename": "Description",
          "type": "LEGAL",
          "value": null
        },
        {
          "__typename": "Description",
          "type": "LONG",
          "value": "Wallet Credit - $20"
        }
      ],
      "displayName": "Wallet Credit - $20",
      "displayPoints": "4,000",
      "id": "18747538-8dce-569c-91b8-3d46bc1c7296",
      "localizedProductClassifications": [],
      "monetaryValue": "HK$160.00",
      "name": "Wallet Credit - $20",
      "offerEndDate": "2023-12-31T23:59:00.000000Z",
      "offerStartDate": "2022-09-27T01:51:00.000000Z",
      "points": 4000,
      "rewardType": "WALLET_CREDIT"
    }
  }
}
```

</details>
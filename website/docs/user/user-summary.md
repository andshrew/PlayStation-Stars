---
sidebar_position: 1
title: User Account Summary
description: Retrieve a summary of a users PlayStation Stars record
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# User Account Summary

## Overview

Requests to this endpoint will retrieve a summary of a users PlayStation Stars profile. It includes their enrollment status, their progress through the reward tiers, their points balance and the first 3 items on their collectibles display case.

The endpoint can query the authenticating account, or it can query another user account (providing that the privacy settings on the other account allow it).

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetAccount

:::info

If you query an account (other than the authenticating account) which has either not enrolled with PlayStation Stars or has not given the authenticating account permission to view their PlayStation Stars Level or Display Case then the API will return a successful response with an error object contained within.

<details><summary>Click to view full error response</summary>

```json
{
  "errors": [
    {
      "message": "User not found",
      "type": "NimbusNormalizedError",
      "error": {
        "reason": "NotFound",
        "code": -1,
        "source": "-1",
        "message": "User not found",
        "referenceId": "cc04c1d0-e8c5-4ca2-93a2-a339f0d66f8f"
      },
      "statusCode": 404,
      "errorCode": -1,
      "humanReadableCode": "",
      "humanReadableValidationErrors": [],
      "apiName": "getAccount"
    }
  ],
  "data": {
    "loyaltyAccountRetrieve": null
  }
}
```

</details>

:::

## Input Parameters

| Parameter | Value |
| --- | --- |
| operationName | metGetAccount |
| variables | `{"accountId":"me"}` |
| extensions | `{"persistedQuery":{"version":1,"sha256Hash":"743c32289cdd6fbdead3b34ea80b48d63f8ddab34581469c4dda4ea412e6cf6b"}` |

| Property | Parent Parameter | Type | Example Values | Description | Required |
| --- | --- | --- | --- | --- | --- |
| accountId | variables | String | `me`<br/>`12340..` | The Id of the account to be queried<br/>Use `me` for the authenticating account | Yes |

## Output JSON Response

A JSON response is returned. The following are returned under the `data` attribute.

| Attribute | Type | Example Value | Description |
| --- | --- |--- | --- | 
| loyaltyAccountRetrieve | [JSON object<br/>`LoyaltyAccount`](#m-json-object-LoyaltyAccount) | | Contains a collection of objects for the user including their enrollment status, progress through reward tiers, points balance and their collectibles display case

### LoyaltyAccount JSON object {#m-json-object-LoyaltyAccount}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `LoyaltyAccount` |
| collectibleScene | [JSON object<br/>`LoyaltyCollectibleScene`](#m-json-object-LoyaltyCollectibleScene) | | Users collectibles display case (images only)
| collectibles | [JSON objects<br/>`LoyaltyCollectibleDisplayItem`](#m-json-object-LoyaltyCollectibleDisplayItem) | | First 3 collectibles in the users display case
| enrollStatus | [JSON object<br/>`LoyaltyEnrollStatus`](#m-json-object-LoyaltyEnrollStatus) | | Users enrollment status
| pointsBalance | [JSON object<br/>`LoyaltyPointBalance`](#m-json-object-LoyaltyPointBalance) | | Users reward points balance<br/>**Authenticating account only** Returns as `null` for other account
| requiresTosAcceptance | Boolean | `false` | True if the user has not completed the sign up process<br/>**Authenticating account only** Returns as `null` for other account
| statusLevel | [JSON object<br/>`LoyaltyStatusLevel`](#m-json-object-LoyaltyStatusLevel) | | Users reward tier progress

### LoyaltyCollectibleScene JSON object {#m-json-object-LoyaltyCollectibleScene}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `LoyaltyCollectibleScene` |
| assets | [JSON object<br/>`Media`](#m-json-object-Media-scene) | | Media associated with the collectibles display case (scene)
| id | String | `a68f1a18-de00-429d-b4dc-d0bc66b748c7` | GUID for the scene

### Media (Scene) JSON object {#m-json-object-Media-scene}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `Media` |
| role | String | `BACKGROUND`<br/>`TILE`<br/>`PREVIEW` | What the media is used for
| url | String | `https://sky-assets.api.playstation.com/sky/p1-np/collectibleScene/image/ice_background.png` | URL for the media

### LoyaltyCollectibleDisplayItem JSON object {#m-json-object-LoyaltyCollectibleDisplayItem}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `LoyaltyCollectibleDisplayItem` |
| assets | [JSON object<br/>`Media`](#m-json-object-Media-collectible) | | Media associated with the collectible (images, video)
| id | String | `empty-slot-0`<br/>`4aaf72d0-ceeb-57ab-ad13-09e4ee36ae2e` | GUID for the displayed collectible<br/>`empty-slot-x` if the user has not set a collectible in this display position
| isEmpty | Boolean | `true` | True if the user has not set a collectible in this display position

### Media (Collectible) JSON object {#m-json-object-Media-collectible}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `Media` |
| type | String | `IMAGE`<br/>`VIDEO` | The media type
| url | String | `https://sky-assets.api.playstation.com/sky/p1-np/collectible/image/masterImage_png_408_1664306310803.png`<br/>`https://sky-assets.api.playstation.com/sky/p1-np/collectible/video/video_mp4_408_1662591675454.mp4` | URL for the media

### LoyaltyEnrollStatus JSON object {#m-json-object-LoyaltyEnrollStatus}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `LoyaltyEnrollStatus` |
| enrolledDateTime | Date (UTC) | `2022-09-29T08:00:40.758043Z` | Date the user enrolled into PlayStation Stars
| isUserEligibleToEnroll | Boolean | `true` | True if the user is eligible to enroll
| isUserEnrolled | Boolean | `true` | True if the user is enrolled
| status | String | `ENROLLED` | Additional enrollment status indicator

### LoyaltyPointBalance JSON object {#m-json-object-LoyaltyPointBalance}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `LoyaltyPointBalance` |
| displayTotalPointsBalance | String | `"0"` | Total reward points balance (string formatted)
| totalCampaignsCompleted | Numeric | `0` | Total campaigns (challenges) completed
| totalPointsBalance | Numeric | `0` | Total reward points balance

### LoyaltyStatusLevel JSON object {#m-json-object-LoyaltyStatusLevel}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `LoyaltyStatusLevel` |
| currentStatusLevel | String | `Sapphire` | Name of the current reward tier
| expiryDate | Date (UTC) | `null`<br/>`2023-09-29T08:00:40.758043Z` | Likely the date that the current tier will be downgraded<br/>But could be date points balance expires
| nextStatusProgress | Numeric | `0` | Progress to next reward tier
| statusLevelNumber | Numeric | `1` | Current reward tier
| totalPurchaseEarned | Numeric | `0` | Number of "full game" purchases made towards next reward tier
| totalPurchaseNeeded | Numeric | `1` | Number of "full game" purchases required for next reward tier
| totalTrophiesEarned | Numeric | `0` | Number of trophies earned towards next reward tier
| totalTrophiesNeeded | Numeric | `1` | Number of trophies required for next reward tier

## Examples with Responses

### Example 1 - Retrieve summary for the authenticating account

<Tabs>
<TabItem value="example1-encoded-url" label="Encoded URL">

_See [using a Web Browser to query the API](../query-api#web-browser)_

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetAccount&variables=%7B%22accountId%22%3A%22me%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22743c32289cdd6fbdead3b34ea80b48d63f8ddab34581469c4dda4ea412e6cf6b%22%7D%7D

</TabItem>

<TabItem value="example1-raw-url" label="Raw URL">

_See [using a Web Browser to query the API](../query-api#web-browser)_

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetAccount&variables={"accountId":"me"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"743c32289cdd6fbdead3b34ea80b48d63f8ddab34581469c4dda4ea412e6cf6b"}}

</TabItem>

<TabItem value="example1-raw-pwsh" label="PowerShell">

_See [using PowerShell to query the API](../query-api#powershell-7)_

```powershell
Invoke-RestMethod -Uri 'https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetAccount&variables={"accountId":"me"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"743c32289cdd6fbdead3b34ea80b48d63f8ddab34581469c4dda4ea412e6cf6b"}}' -Authentication Bearer -Token $token
```

</TabItem>

</Tabs>

<details><summary>Click to view full JSON response</summary>

```json
{
  "data": {
    "loyaltyAccountRetrieve": {
      "__typename": "LoyaltyAccount",
      "collectibleScene": {
        "__typename": "LoyaltyCollectibleScene",
        "assets": [
          {
            "__typename": "Media",
            "role": "BACKGROUND",
            "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectibleScene/image/ice_background.png"
          },
          {
            "__typename": "Media",
            "role": "TILE",
            "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectibleScene/image/Ice_Tile.png"
          },
          {
            "__typename": "Media",
            "role": "PREVIEW",
            "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectibleScene/image/Ice_Preview.png"
          }
        ],
        "id": "a68f1a18-de00-429d-b4dc-d0bc66b748c7"
      },
      "collectibles": [
        {
          "__typename": "LoyaltyCollectibleDisplayItem",
          "assets": null,
          "id": "empty-slot-0",
          "isEmpty": true
        },
        {
          "__typename": "LoyaltyCollectibleDisplayItem",
          "assets": null,
          "id": "empty-slot-1",
          "isEmpty": true
        },
        {
          "__typename": "LoyaltyCollectibleDisplayItem",
          "assets": null,
          "id": "empty-slot-2",
          "isEmpty": true
        }
      ],
      "enrollStatus": {
        "__typename": "LoyaltyEnrollStatus",
        "enrolledDateTime": "2022-09-29T08:00:40.758043Z",
        "isUserEligibleToEnroll": true,
        "isUserEnrolled": true,
        "status": "ENROLLED"
      },
      "pointsBalance": {
        "__typename": "LoyaltyPointBalance",
        "displayTotalPointsBalance": "0",
        "totalCampaignsCompleted": 0,
        "totalPointsBalance": 0
      },
      "requiresTosAcceptance": false,
      "statusLevel": {
        "__typename": "LoyaltyStatusLevel",
        "currentStatusLevel": "Sapphire",
        "expiryDate": null,
        "nextStatusProgress": 0,
        "statusLevelNumber": 1,
        "totalPurchaseEarned": 0,
        "totalPurchaseNeeded": 1,
        "totalTrophiesEarned": 0,
        "totalTrophiesNeeded": 1
      }
    }
  }
}
```

</details>

### Example 2 - Retrieve summary for user account with accountId _0000000000000000000_

<Tabs>
<TabItem value="example2-encoded-url" label="Encoded URL">

_See [using a Web Browser to query the API](../query-api#web-browser)_

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetAccount&variables=%7B%22accountId%22%3A%220000000000000000000%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22743c32289cdd6fbdead3b34ea80b48d63f8ddab34581469c4dda4ea412e6cf6b%22%7D%7D

</TabItem>

<TabItem value="example2-raw-url" label="Raw URL">

_See [using a Web Browser to query the API](../query-api#web-browser)_

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetAccount&variables={"accountId":"0000000000000000000"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"743c32289cdd6fbdead3b34ea80b48d63f8ddab34581469c4dda4ea412e6cf6b"}}

</TabItem>

<TabItem value="example2-raw-pwsh" label="PowerShell">

_See [using PowerShell to query the API](../query-api#powershell-7)_

```powershell
Invoke-RestMethod -Uri 'https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetAccount&variables={"accountId":"0000000000000000000"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"743c32289cdd6fbdead3b34ea80b48d63f8ddab34581469c4dda4ea412e6cf6b"}}' -Authentication Bearer -Token $token
```

</TabItem>

</Tabs>

<details><summary>Click to view full JSON response</summary>

```json
{
  "data": {
    "loyaltyAccountRetrieve": {
      "__typename": "LoyaltyAccount",
      "collectibleScene": {
        "__typename": "LoyaltyCollectibleScene",
        "assets": [
          {
            "__typename": "Media",
            "role": "BACKGROUND",
            "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectibleScene/image/ice_background.png"
          },
          {
            "__typename": "Media",
            "role": "TILE",
            "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectibleScene/image/Ice_Tile.png"
          },
          {
            "__typename": "Media",
            "role": "PREVIEW",
            "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectibleScene/image/Ice_Preview.png"
          }
        ],
        "id": "a68f1a18-de00-429d-b4dc-d0bc66b748c7"
      },
      "collectibles": [
        {
          "__typename": "LoyaltyCollectibleDisplayItem",
          "assets": null,
          "id": "empty-slot-0",
          "isEmpty": true
        },
        {
          "__typename": "LoyaltyCollectibleDisplayItem",
          "assets": null,
          "id": "empty-slot-1",
          "isEmpty": true
        },
        {
          "__typename": "LoyaltyCollectibleDisplayItem",
          "assets": null,
          "id": "empty-slot-2",
          "isEmpty": true
        }
      ],
      "enrollStatus": {
        "__typename": "LoyaltyEnrollStatus",
        "enrolledDateTime": "2022-09-29T19:15:18.293261Z",
        "isUserEligibleToEnroll": true,
        "isUserEnrolled": true,
        "status": "ENROLLED"
      },
      "pointsBalance": null,
      "requiresTosAcceptance": null,
      "statusLevel": {
        "__typename": "LoyaltyStatusLevel",
        "currentStatusLevel": "Sapphire",
        "expiryDate": null,
        "nextStatusProgress": 0,
        "statusLevelNumber": 1,
        "totalPurchaseEarned": 0,
        "totalPurchaseNeeded": 1,
        "totalTrophiesEarned": 0,
        "totalTrophiesNeeded": 1
      }
    }
  }
}
```

</details>

### Example 3 - Retrieve summary for an authenticating account which has not enrolled in the service

<Tabs>
<TabItem value="example3-encoded-url" label="Encoded URL">

_See [using a Web Browser to query the API](../query-api#web-browser)_

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetAccount&variables=%7B%22accountId%22%3A%22me%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22743c32289cdd6fbdead3b34ea80b48d63f8ddab34581469c4dda4ea412e6cf6b%22%7D%7D

</TabItem>

<TabItem value="example3-raw-url" label="Raw URL">

_See [using a Web Browser to query the API](../query-api#web-browser)_

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetAccount&variables={"accountId":"me"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"743c32289cdd6fbdead3b34ea80b48d63f8ddab34581469c4dda4ea412e6cf6b"}}

</TabItem>

<TabItem value="example3-raw-pwsh" label="PowerShell">

_See [using PowerShell to query the API](../query-api#powershell-7)_

```powershell
Invoke-RestMethod -Uri 'https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetAccount&variables={"accountId":"me"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"743c32289cdd6fbdead3b34ea80b48d63f8ddab34581469c4dda4ea412e6cf6b"}}' -Authentication Bearer -Token $token
```

</TabItem>

</Tabs>

<details><summary>Click to view full JSON response</summary>

```json
{
  "data": {
    "loyaltyAccountRetrieve": {
      "__typename": "LoyaltyAccount",
      "collectibleScene": {
        "__typename": "LoyaltyCollectibleScene",
        "assets": null,
        "id": null
      },
      "collectibles": null,
      "enrollStatus": {
        "__typename": "LoyaltyEnrollStatus",
        "enrolledDateTime": null,
        "isUserEligibleToEnroll": false,
        "isUserEnrolled": false,
        "status": "NOT_ENROLLED"
      },
      "pointsBalance": null,
      "requiresTosAcceptance": true,
      "statusLevel": {
        "__typename": "LoyaltyStatusLevel",
        "currentStatusLevel": null,
        "expiryDate": null,
        "nextStatusProgress": null,
        "statusLevelNumber": null,
        "totalPurchaseEarned": null,
        "totalPurchaseNeeded": null,
        "totalTrophiesEarned": null,
        "totalTrophiesNeeded": null
      }
    }
  }
}
```

</details>
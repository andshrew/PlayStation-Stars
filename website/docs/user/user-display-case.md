---
sidebar_position: 2
title: User Display Case
description: Retrieve a users collectibles display case
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# User Display Case

## Overview

Requests to this endpoint will retrieve a users collectibles display case. This includes details of the selected display case and up to 12 collectible items they have chosen to display on it.

The endpoint can query the authenticating account, or it can query another user account (providing that the privacy settings on the other account allow it).

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetCollectibleDisplay

:::info

If you query an account which has either not enrolled with PlayStation Stars or has not given the authenticating account permission to view their PlayStation Stars Level or Display Case then the API will return a successful response with an error object contained within.

<details><summary>Click to view full error response</summary>

```json
{
  "errors": [
    {
      "message": "User not found",
      "type": "NimbusNormalizedError",
      "error": {
        "reason": "NotFound",
        "source": "-1",
        "code": -1,
        "message": "User not found",
        "referenceId": "4ba3b58b-902f-4eb7-9247-66c40700cda7"
      },
      "statusCode": 404,
      "errorCode": -1,
      "humanReadableCode": "",
      "humanReadableValidationErrors": [],
      "apiName": "getCollectiblesDisplay"
    }
  ],
  "data": {
    "loyaltyCollectibleDisplayRetrieve": null
  }
}
```

</details>

:::

## Input Parameters

| Parameter | Value |
| --- | --- |
| operationName | metGetCollectibleDisplay |
| variables | `{"accountId":"me"}` |
| extensions | `{"persistedQuery":{"version":1,"sha256Hash":"0299b65abf4385e097e6848d14b0423df5464632855c330bdd002dfc42f4c71e"}}` |

| Property | Parent Parameter | Type | Example Values | Description | Required |
| --- | --- | --- | --- | --- | --- |
| accountId | variables | String | `me`<br/>`12340..` | The Id of the account to be queried<br/>Use `me` for the authenticating account | Yes |

## Output JSON Response

A JSON response is returned. The following are returned under the `data` attribute.

| Attribute | Type | Example Value | Description |
| --- | --- |--- | --- | 
| loyaltyCollectibleDisplayRetrieve | [JSON object<br/>`LoyaltyCollectibleDisplay`](#m-json-object-LoyaltyCollectibleDisplay) | | Contains a collection of objects for the users display case and the collectibles they have chosen to display on it

### LoyaltyCollectibleDisplay JSON object {#m-json-object-LoyaltyCollectibleDisplay}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `LoyaltyCollectibleDisplay` |
| collectibles | [JSON objects<br/>`LoyaltyCollectibleDisplayItem`](#m-json-object-LoyaltyCollectibleDisplayItem) | | Up to 12 collectibles in the users display case
| isEmpty | Boolean | `false` | True if the user is not displaying any collectibles
| isFull | Boolean | `false` | True if the user is displaying 12 collectibles
| selectedScene | [JSON object<br/>`LoyaltyCollectibleScene`](#m-json-object-LoyaltyCollectibleScene) | | Users collectibles display case (images only)

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


## Examples with Responses

### Example 1 - Retrieve display case for the authenticating account

<Tabs>
<TabItem value="example1-encoded-url" label="Encoded URL">

_See [using a Web Browser to query the API](../query-api#web-browser)_

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetCollectibleDisplay&variables=%7B%22accountId%22%3A%22me%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%220299b65abf4385e097e6848d14b0423df5464632855c330bdd002dfc42f4c71e%22%7D%7D

</TabItem>

<TabItem value="example1-raw-url" label="Raw URL">

_See [using a Web Browser to query the API](../query-api#web-browser)_

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetCollectibleDisplay&variables={"accountId":"me"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"0299b65abf4385e097e6848d14b0423df5464632855c330bdd002dfc42f4c71e"}}

</TabItem>

<TabItem value="example1-raw-pwsh" label="PowerShell">

_See [using PowerShell to query the API](../query-api#powershell-7)_

```powershell
Invoke-RestMethod -Uri 'https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetCollectibleDisplay&variables={"accountId":"me"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"0299b65abf4385e097e6848d14b0423df5464632855c330bdd002dfc42f4c71e"}}' -Authentication Bearer -Token $token
```

</TabItem>

</Tabs>

<details><summary>Click to view full JSON response</summary>

```json
{
  "data": {
    "loyaltyCollectibleDisplayRetrieve": {
      "__typename": "LoyaltyCollectibleDisplay",
      "collectibles": [
        {
          "__typename": "LoyaltyCollectibleDisplayItem",
          "assets": [
            {
              "__typename": "Media",
              "type": "IMAGE",
              "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/image/masterImage_png_408_1664306310803.png"
            },
            {
              "__typename": "Media",
              "type": "VIDEO",
              "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/video/video_mp4_408_1662591675454.mp4"
            }
          ],
          "id": "4aaf72d0-ceeb-57ab-ad13-09e4ee36ae2e",
          "isEmpty": false
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
        },
        {
          "__typename": "LoyaltyCollectibleDisplayItem",
          "assets": null,
          "id": "empty-slot-3",
          "isEmpty": true
        },
        {
          "__typename": "LoyaltyCollectibleDisplayItem",
          "assets": null,
          "id": "empty-slot-4",
          "isEmpty": true
        },
        {
          "__typename": "LoyaltyCollectibleDisplayItem",
          "assets": null,
          "id": "empty-slot-5",
          "isEmpty": true
        },
        {
          "__typename": "LoyaltyCollectibleDisplayItem",
          "assets": null,
          "id": "empty-slot-6",
          "isEmpty": true
        },
        {
          "__typename": "LoyaltyCollectibleDisplayItem",
          "assets": null,
          "id": "empty-slot-7",
          "isEmpty": true
        },
        {
          "__typename": "LoyaltyCollectibleDisplayItem",
          "assets": null,
          "id": "empty-slot-8",
          "isEmpty": true
        },
        {
          "__typename": "LoyaltyCollectibleDisplayItem",
          "assets": null,
          "id": "empty-slot-9",
          "isEmpty": true
        },
        {
          "__typename": "LoyaltyCollectibleDisplayItem",
          "assets": null,
          "id": "empty-slot-10",
          "isEmpty": true
        },
        {
          "__typename": "LoyaltyCollectibleDisplayItem",
          "assets": null,
          "id": "empty-slot-11",
          "isEmpty": true
        }
      ],
      "isEmpty": false,
      "isFull": false,
      "selectedScene": {
        "__typename": "LoyaltyCollectibleScene",
        "assets": [
          {
            "__typename": "Media",
            "role": "BACKGROUND",
            "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectibleScene/image/hotel_scene_beta.png"
          },
          {
            "__typename": "Media",
            "role": "TILE",
            "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectibleScene/image/hotel_tile.png"
          },
          {
            "__typename": "Media",
            "role": "PREVIEW",
            "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectibleScene/image/hotel_preview_beta.png"
          }
        ],
        "id": "277d9b04-912d-4231-8ed1-9b3c70a40e1f"
      }
    }
  }
}
```

</details>

### Example 2 - Retrieve display case for user account with accountId _0000000000000000000_

<Tabs>
<TabItem value="example2-encoded-url" label="Encoded URL">

_See [using a Web Browser to query the API](../query-api#web-browser)_

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetCollectibleDisplay&variables=%7B%22accountId%22%3A%220000000000000000000%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%220299b65abf4385e097e6848d14b0423df5464632855c330bdd002dfc42f4c71e%22%7D%7D

</TabItem>

<TabItem value="example2-raw-url" label="Raw URL">

_See [using a Web Browser to query the API](../query-api#web-browser)_

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetCollectibleDisplay&variables={"accountId":"0000000000000000000"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"0299b65abf4385e097e6848d14b0423df5464632855c330bdd002dfc42f4c71e"}}

</TabItem>

<TabItem value="example2-raw-pwsh" label="PowerShell">

_See [using PowerShell to query the API](../query-api#powershell-7)_

```powershell
Invoke-RestMethod -Uri 'https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetCollectibleDisplay&variables={"accountId":"0000000000000000000"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"0299b65abf4385e097e6848d14b0423df5464632855c330bdd002dfc42f4c71e"}}' -Authentication Bearer -Token $token
```

</TabItem>

</Tabs>

<details><summary>Click to view full JSON response</summary>

```json
{
  "data": {
    "loyaltyCollectibleDisplayRetrieve": {
      "__typename": "LoyaltyCollectibleDisplay",
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
        },
        {
          "__typename": "LoyaltyCollectibleDisplayItem",
          "assets": null,
          "id": "empty-slot-3",
          "isEmpty": true
        },
        {
          "__typename": "LoyaltyCollectibleDisplayItem",
          "assets": null,
          "id": "empty-slot-4",
          "isEmpty": true
        },
        {
          "__typename": "LoyaltyCollectibleDisplayItem",
          "assets": null,
          "id": "empty-slot-5",
          "isEmpty": true
        },
        {
          "__typename": "LoyaltyCollectibleDisplayItem",
          "assets": null,
          "id": "empty-slot-6",
          "isEmpty": true
        },
        {
          "__typename": "LoyaltyCollectibleDisplayItem",
          "assets": null,
          "id": "empty-slot-7",
          "isEmpty": true
        },
        {
          "__typename": "LoyaltyCollectibleDisplayItem",
          "assets": null,
          "id": "empty-slot-8",
          "isEmpty": true
        },
        {
          "__typename": "LoyaltyCollectibleDisplayItem",
          "assets": null,
          "id": "empty-slot-9",
          "isEmpty": true
        },
        {
          "__typename": "LoyaltyCollectibleDisplayItem",
          "assets": null,
          "id": "empty-slot-10",
          "isEmpty": true
        },
        {
          "__typename": "LoyaltyCollectibleDisplayItem",
          "assets": null,
          "id": "empty-slot-11",
          "isEmpty": true
        }
      ],
      "isEmpty": true,
      "isFull": false,
      "selectedScene": {
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
      }
    }
  }
}
```

</details>
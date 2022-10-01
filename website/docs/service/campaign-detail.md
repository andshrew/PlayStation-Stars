---
sidebar_position: 2
title: Campaign Detail
description: Retrieve detail of a specific campaign
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Campaign Detail

## Overview

Requests to this endpoint will retrieve the details of a specific campaign including the rewards provided and tasks required to completed. It additionally retrieves information about the users progress.

Campaigns are challenges which users can complete to earn rewards.

The endpoint can query the authenticating account only.

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyCampaignByIdRetrieve

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
        "referenceId": "03e554bc-24f5-47f4-b2f9-30ad696ee94e"
      },
      "statusCode": 400,
      "errorCode": -1,
      "humanReadableCode": "",
      "humanReadableValidationErrors": [],
      "apiName": "getCampaignById"
    }
  ],
  "data": {
    "loyaltyCampaignByIdRetrieve": null
  }
}
```

</details>

:::

## Input Parameters

| Parameter | Value |
| --- | --- |
| operationName | metGetCampaignGroup |
| variables | `{"campaignId":"162f269d-1ed9-5647-a015-30cf1b76a766"}` |
| extensions | `{"persistedQuery":{"version":1,"sha256Hash":"eabc9a2d92e6c8604eb611c22bbc0f8ffce673dee29b0c1f82040f5a4918264b"}}` |

| Property | Parent Parameter | Type | Example Values | Description | Required |
| --- | --- | --- | --- | --- | --- |
| campaignId | variables | String | `162f269d-1ed9-5647-a015-30cf1b76a766` | GUID of the campaign to retrieve | Yes |

## Output JSON Response

A JSON response is returned. The following are returned under the `data` attribute.

| Attribute | Type | Example Value | Description |
| --- | --- |--- | --- | 
| loyaltyCampaignByIdRetrieve | [JSON object<br/>`LoyaltyCampaign`](#m-json-object-LoyaltyCampaign) | | Contains the campaign details

### LoyaltyCampaign JSON object {#m-json-object-LoyaltyCampaign}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `LoyaltyCampaign` |
| campaignRewardType | String | `POINTS`<br/>`COLLECTIBLE` | Type of reward available
| collectible | String | `null`<br/>[JSON object<br/>`LoyaltyCampaignCollectible`](#m-json-object-LoyaltyCampaignCollectible) | `null` if the reward type is not collectible
| description | String | `Grab your next favorite game! Buy one of these select games from PlayStation store.` | Description for the campaign
| displayPoints | String | `""`<br/>`"50"` | Reward points available for completion<br/>`""` if reward points are not awarded
| endDate | Date (UTC) | `2022-10-31T15:59:00.000000Z` | Date the campaign ends
| estimatedTime | String | `null` | Estimated time to complete the campaign(?)
| id | String | `162f269d-1ed9-5647-a015-30cf1b76a766` | GUID for the campaign
| images | [JSON object<br/>`Media`](#m-json-object-Media-campaign) | | Media associated with the campaign (images, video)
| isRegistrationRequired | Boolean | `true` | True if the user has not registered for the campaign
| name | String | `PlayStation Store Picks` | Name of the campaign
| productId | String | `null`<br/>`HP0700-PPSA05164_00-SDGUNBATTLEA0000` | PlayStation Store Product Id associated with the campaign<br/>`null` if not associated with a store product
| progress | Numeric | `0` | Users progress towards completing the campaign
| startDate | Date (UTC) | `2022-09-12T16:00:00.000000Z` | Date the campaign begins
| status | String | `NOT_REGISTERED`<br/>`AUTO_REGISTERED`<br/>`REGISTERED` | Users status for the campaign
| tasks | String | [JSON object<br/>`LoyaltyCampaignTask`](#m-json-object-LoyaltyCampaignTask) | Collections of tasks to complete the campaign

### Media (Campaign) JSON object {#m-json-object-Media-campaign}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `Media` |
| altText | String | `null` |
| role | String | `IMAGE`<br/>`TILE` | What the media is used for
| type | String | `IMAGE` | The media type<br/>**Some entries return an MP4 video even though the type is IMAGE!**
| url | String | `https://sky-assets.api.playstation.com/sky/p1-np/...` | URL for the media

### LoyaltyCampaignCollectible JSON object {#m-json-object-LoyaltyCampaignCollectible}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `LoyaltyCampaignCollectible` |
| assets | [JSON object<br/>`Media`](#m-json-object-Media-collectible) | | Media associated with the collectible (images, video)
| id | String | `4a9d9d67-e29f-598c-bb57-b6689456aa8c` | GUID for the collectible
| name | String | `Novelty Toy Fight Trophy` | Name of the collectible
| rarityType | String | `COMMON`<br/>`UNCOMMON`<br/>`RARE`<br/>`LEGENDARY` | Rarity of the collectible

### Media (Collectible) JSON object {#m-json-object-Media-collectible}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `Media` |
| altText | String | `null` |
| role | String | `IMAGE`<br/>`VIDEO` | What the media is used for
| type | String | `IMAGE`<br/>`VIDEO` | The media type
| url | String | `https://sky-assets.api.playstation.com/sky/p1-np/collectible/image/masterImage_png_406_1664306813863.png`<br/>`https://sky-assets.api.playstation.com/sky/p1-np/collectible/video/video_mp4_406_1662591783851.mp4` | URL for the media

### LoyaltyCampaignTask JSON object {#m-json-object-LoyaltyCampaignTask}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `LoyaltyCampaignTask` |
| description | String | `Play any game (PS4/PS5).` | Description of the task
| id | String | `e4da3be6-c521-5130-b976-4034dea9a212` | GUID for the task
| isLocked | Boolean | `false` | True if the task has been completed
| name | String | `null` | Name of the task<br/>Current ones all appear as `null`
| productId | String | `null` | PlayStation Store Product Id associated with the task<br/>`null` if not associated with a store product
| progress | Numeric | `0`<br/>`null` | Users progress towards completing the task<br/>May be `null` if not registered for the campaign
| status | String | `COMPLETED`<br/>`NOT_REGISTERED`<br/>`AUTO_REGISTERED`<br/>`NOT_STARTED` | Users status for the task


## Examples with Responses

### Example 1 - Retrieve collectible reward campaign with id `23fc3a5d-34bf-509c-b381-7b40bd8611f3` for the authenticating account

<Tabs>
<TabItem value="example1-encoded-url" label="Encoded URL">

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyCampaignByIdRetrieve&variables=%7B%22campaignId%22%3A%2223fc3a5d-34bf-509c-b381-7b40bd8611f3%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22468175b4b9b099b530678e17aabcab4cedd478b09195bc95d5755e69d3173320%22%7D%7D

</TabItem>

<TabItem value="example1-raw-url" label="Raw URL">

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyCampaignByIdRetrieve&variables={"campaignId":"23fc3a5d-34bf-509c-b381-7b40bd8611f3"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"468175b4b9b099b530678e17aabcab4cedd478b09195bc95d5755e69d3173320"}}

</TabItem>

<TabItem value="example1-raw-pwsh" label="PowerShell">

_See [using PowerShell to query the API](../query-api)_

```powershell
Invoke-RestMethod -Uri 'https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyCampaignByIdRetrieve&variables={"campaignId":"23fc3a5d-34bf-509c-b381-7b40bd8611f3"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"468175b4b9b099b530678e17aabcab4cedd478b09195bc95d5755e69d3173320"}}' -Authentication Bearer -Token $token
```

</TabItem>

</Tabs>

<details><summary>Click to view full JSON response</summary>

```json
{
  "data": {
    "loyaltyCampaignByIdRetrieve": {
      "__typename": "LoyaltyCampaign",
      "campaignRewardType": "COLLECTIBLE",
      "collectible": {
        "__typename": "LoyaltyCampaignCollectible",
        "assets": [
          {
            "__typename": "Media",
            "altText": null,
            "role": "IMAGE",
            "type": "IMAGE",
            "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/image/masterImage_png_428_1663345652984.png"
          },
          {
            "__typename": "Media",
            "altText": null,
            "role": "VIDEO",
            "type": "VIDEO",
            "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/video/video_mp4_428_1663345660772.mp4"
          }
        ],
        "id": "88d25cfa-26ad-572a-9335-a32b9bcabe13",
        "name": "PlayStation Tech Demo Tyrannosaurus Rex ",
        "rarityType": "UNCOMMON"
      },
      "description": "Happy October! Always good to see you.",
      "displayPoints": "",
      "endDate": "2022-10-31T15:59:00.000000Z",
      "estimatedTime": null,
      "id": "23fc3a5d-34bf-509c-b381-7b40bd8611f3",
      "images": [
        {
          "__typename": "Media",
          "altText": null,
          "role": "IMAGE",
          "type": "IMAGE",
          "url": "https://sky-assets.api.playstation.com/sky/p1-np/campaign/image/masterImage_image/jpeg,image/png,image/gif_1372_1663708610342.png"
        },
        {
          "__typename": "Media",
          "altText": null,
          "role": "TILE",
          "type": "IMAGE",
          "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/image/masterImage_png_428_1663345652984.png"
        },
        {
          "__typename": "Media",
          "altText": null,
          "role": "TILE",
          "type": "IMAGE",
          "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/video/video_mp4_428_1663345660772.mp4"
        }
      ],
      "isRegistrationRequired": false,
      "name": "October Check-in",
      "productId": null,
      "progress": 0,
      "startDate": "2022-09-30T16:00:00.000000Z",
      "status": "AUTO_REGISTERED",
      "tasks": [
        {
          "__typename": "LoyaltyCampaignTask",
          "description": "Play any game (PS4/PS5).",
          "id": "e4da3be6-c521-5130-b976-4034dea9a212",
          "isLocked": false,
          "name": null,
          "productId": null,
          "progress": 0,
          "status": "NOT_STARTED"
        }
      ]
    }
  }
}
```

</details>

### Example 2 - Retrieve points reward campaign with id `162f269d-1ed9-5647-a015-30cf1b76a766` for the authenticating account

<Tabs>
<TabItem value="example1-encoded-url" label="Encoded URL">

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyCampaignByIdRetrieve&variables=%7B%22campaignId%22%3A%22162f269d-1ed9-5647-a015-30cf1b76a766%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22468175b4b9b099b530678e17aabcab4cedd478b09195bc95d5755e69d3173320%22%7D%7D

</TabItem>

<TabItem value="example1-raw-url" label="Raw URL">

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyCampaignByIdRetrieve&variables={"campaignId":"162f269d-1ed9-5647-a015-30cf1b76a766"}&extensions={"persistedQuery":{"persistedQuery":{"version":1,"sha256Hash":"468175b4b9b099b530678e17aabcab4cedd478b09195bc95d5755e69d3173320"}}

</TabItem>

<TabItem value="example1-raw-pwsh" label="PowerShell">

_See [using PowerShell to query the API](../query-api)_

```powershell
Invoke-RestMethod -Uri 'https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyCampaignByIdRetrieve&variables={"campaignId":"162f269d-1ed9-5647-a015-30cf1b76a766"}&extensions={"persistedQuery":{"persistedQuery":{"version":1,"sha256Hash":"468175b4b9b099b530678e17aabcab4cedd478b09195bc95d5755e69d3173320"}}' -Authentication Bearer -Token $token
```

</TabItem>

</Tabs>

<details><summary>Click to view full JSON response</summary>

```json
{
  "data": {
    "loyaltyCampaignByIdRetrieve": {
      "__typename": "LoyaltyCampaign",
      "campaignRewardType": "POINTS",
      "collectible": null,
      "description": "Grab your next favorite game! Buy one of these select games from PlayStation store.",
      "displayPoints": "50",
      "endDate": "2022-10-31T15:59:00.000000Z",
      "estimatedTime": null,
      "id": "162f269d-1ed9-5647-a015-30cf1b76a766",
      "images": [
        {
          "__typename": "Media",
          "altText": null,
          "role": "IMAGE",
          "type": "IMAGE",
          "url": "https://sky-assets.api.playstation.com/sky/p1-np/campaign/image/masterImage_image/jpeg,image/png,image/gif_1474_1662756973941.jpg"
        }
      ],
      "isRegistrationRequired": true,
      "name": "PlayStation Store Picks",
      "productId": "HP0700-PPSA05164_00-SDGUNBATTLEA0000",
      "progress": 0,
      "startDate": "2022-09-12T16:00:00.000000Z",
      "status": "NOT_REGISTERED",
      "tasks": [
        {
          "__typename": "LoyaltyCampaignTask",
          "description": "SD Gundam Battle Alliance",
          "id": "201f4c56-3ac5-506e-bed9-2792bf585e95",
          "isLocked": false,
          "name": null,
          "productId": null,
          "progress": null,
          "status": "NOT_REGISTERED"
        },
        {
          "__typename": "LoyaltyCampaignTask",
          "description": "JoJo's Bizarre Adventure",
          "id": "b4f10a4b-0a03-54d0-996d-8c99984dafa6",
          "isLocked": false,
          "name": null,
          "productId": null,
          "progress": null,
          "status": "NOT_REGISTERED"
        },
        {
          "__typename": "LoyaltyCampaignTask",
          "description": "Alice Gear Aegis CS",
          "id": "d84ed4e1-ef07-5e57-bc21-973f14200ad7",
          "isLocked": false,
          "name": null,
          "productId": null,
          "progress": null,
          "status": "NOT_REGISTERED"
        },
        {
          "__typename": "LoyaltyCampaignTask",
          "description": "The Last of Us Part 1",
          "id": "f4571452-2736-5c25-81a0-978f9f93044b",
          "isLocked": false,
          "name": null,
          "productId": null,
          "progress": null,
          "status": "NOT_REGISTERED"
        },
        {
          "__typename": "LoyaltyCampaignTask",
          "description": "Inscryption",
          "id": "55a21f65-b8c2-5e8c-9f2c-e89a43a55cfb",
          "isLocked": false,
          "name": null,
          "productId": null,
          "progress": null,
          "status": "NOT_REGISTERED"
        },
        {
          "__typename": "LoyaltyCampaignTask",
          "description": "Soul Hackers 2",
          "id": "46b43907-f766-5340-baee-253686145ef1",
          "isLocked": false,
          "name": null,
          "productId": null,
          "progress": null,
          "status": "NOT_REGISTERED"
        }
      ]
    }
  }
}
```

</details>

### Example 3 - Retrieve a completed campaign for the authenticating account

<Tabs>
<TabItem value="example3-encoded-url" label="Encoded URL">

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyCampaignByIdRetrieve&variables=%7B%22campaignId%22%3A%2223fc3a5d-34bf-509c-b381-7b40bd8611f3%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22468175b4b9b099b530678e17aabcab4cedd478b09195bc95d5755e69d3173320%22%7D%7D

</TabItem>

<TabItem value="example3-raw-url" label="Raw URL">

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyCampaignByIdRetrieve&variables={"campaignId":"23fc3a5d-34bf-509c-b381-7b40bd8611f3"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"468175b4b9b099b530678e17aabcab4cedd478b09195bc95d5755e69d3173320"}}

</TabItem>

<TabItem value="example3-raw-pwsh" label="PowerShell">

_See [using PowerShell to query the API](../query-api)_

```powershell
Invoke-RestMethod -Uri 'https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyCampaignByIdRetrieve&variables={"campaignId":"23fc3a5d-34bf-509c-b381-7b40bd8611f3"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"468175b4b9b099b530678e17aabcab4cedd478b09195bc95d5755e69d3173320"}}' -Authentication Bearer -Token $token
```

</TabItem>

</Tabs>

<details><summary>Click to view full JSON response</summary>

```json
{
  "data": {
    "loyaltyCampaignByIdRetrieve": {
      "__typename": "LoyaltyCampaign",
      "campaignRewardType": "COLLECTIBLE",
      "collectible": {
        "__typename": "LoyaltyCampaignCollectible",
        "assets": [
          {
            "__typename": "Media",
            "altText": null,
            "role": "IMAGE",
            "type": "IMAGE",
            "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/image/masterImage_png_428_1663345652984.png"
          },
          {
            "__typename": "Media",
            "altText": null,
            "role": "VIDEO",
            "type": "VIDEO",
            "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/video/video_mp4_428_1663345660772.mp4"
          }
        ],
        "id": "88d25cfa-26ad-572a-9335-a32b9bcabe13",
        "name": "PlayStation Tech Demo Tyrannosaurus Rex ",
        "rarityType": "UNCOMMON"
      },
      "description": "Happy October! Always good to see you.",
      "displayPoints": "",
      "endDate": "2022-10-31T15:59:00.000000Z",
      "estimatedTime": null,
      "id": "23fc3a5d-34bf-509c-b381-7b40bd8611f3",
      "images": [
        {
          "__typename": "Media",
          "altText": null,
          "role": "IMAGE",
          "type": "IMAGE",
          "url": "https://sky-assets.api.playstation.com/sky/p1-np/campaign/image/masterImage_image/jpeg,image/png,image/gif_1372_1663708610342.png"
        },
        {
          "__typename": "Media",
          "altText": null,
          "role": "TILE",
          "type": "IMAGE",
          "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/image/masterImage_png_428_1663345652984.png"
        },
        {
          "__typename": "Media",
          "altText": null,
          "role": "TILE",
          "type": "IMAGE",
          "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/video/video_mp4_428_1663345660772.mp4"
        }
      ],
      "isRegistrationRequired": false,
      "name": "October Check-in",
      "productId": null,
      "progress": 100,
      "startDate": "2022-09-30T16:00:00.000000Z",
      "status": "COMPLETED",
      "tasks": [
        {
          "__typename": "LoyaltyCampaignTask",
          "description": "Play any game (PS4/PS5).",
          "id": "e4da3be6-c521-5130-b976-4034dea9a212",
          "isLocked": false,
          "name": null,
          "productId": null,
          "progress": 100,
          "status": "COMPLETED"
        }
      ]
    }
  }
}
```

</details>
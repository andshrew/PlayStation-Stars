---
sidebar_position: 1.5
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

:::info

Querying a campaign id which the authenticating account is not eligible for may result in an API error.

<details><summary>Click to view full response</summary>

```json
{
  "errors": [
    {
      "message": "The server encountered an unexpected condition that prevented it from fulfilling the request.",
      "extensions": {
        "type": "NimbusNormalizedError",
        "error": {
          "reason": "InternalError",
          "source": "-1",
          "code": -1,
          "message": "The server encountered an unexpected condition that prevented it from fulfilling the request.",
          "referenceId": "bd09f408-5f65-4ed4-a2e7-13d6a3a7fb6a"
        },
        "statusCode": 500,
        "errorCode": -1,
        "humanReadableCode": "",
        "humanReadableValidationErrors": [],
        "apiName": "getCampaignById"
      },
      "type": "NimbusNormalizedError",
      "error": {
        "reason": "InternalError",
        "source": "-1",
        "code": -1,
        "message": "The server encountered an unexpected condition that prevented it from fulfilling the request.",
        "referenceId": "bd09f408-5f65-4ed4-a2e7-13d6a3a7fb6a"
      },
      "statusCode": 500,
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
| operationName | metLoyaltyCampaignByIdRetrieve |
| variables | `{"campaignId":"a8faa377-f08b-5d1d-a27c-68cc32930105"}` |
| extensions | `{"persistedQuery":{"version":1,"sha256Hash":"068f75eb174b7e9ee31530797f4df6c881219fdbc9b4d6786d900321f6999829"}}` |

| Property | Parent Parameter | Type | Example Values | Description | Required |
| --- | --- | --- | --- | --- | --- |
| campaignId | variables | String | `a8faa377-f08b-5d1d-a27c-68cc32930105` | GUID of the campaign to retrieve | Yes |

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
| isNew | Boolean | `true` | `true` until user interacts with the campaign
| isRegistrable | Boolean | `true` | `true` if user is eligible for the campaign
| isRegistrationRequired | Boolean | `true` | True if the user has not registered for the campaign
| name | String | `PlayStation Store Picks` | Name of the campaign
| productId | String | `null`<br/>`HP0700-PPSA05164_00-SDGUNBATTLEA0000` | PlayStation Store Product Id associated with the campaign<br/>`null` if not associated with a store product
| progress | Numeric | `0` | Users progress towards completing the campaign
| remainingTime | Numeric | `0`<br/>`2678340` | Seconds until the campaign ends
| startDate | Date (UTC) | `2022-09-12T16:00:00.000000Z` | Date the campaign begins
| status | String | `NOT_REGISTERED`<br/>`AUTO_REGISTERED`<br/>`REGISTERED`<br/>`IN_PROGRESS`<br/>`EXPIRED` | Users status for the campaign
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
| rarityType | String | `COMMON`<br/>`UNCOMMON`<br/>`RARE`<br/>`HEROIC`<br/>`LEGENDARY`<br/>`MYTHIC` | Rarity of the collectible

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
| conceptId | String | `10007607`<br/>`null` | Concept Id associated with the task<br/>`null` if not linked with a specific game title
| description | String | `Play any game (PS4/PS5).` | Description of the task
| id | String | `e4da3be6-c521-5130-b976-4034dea9a212` | GUID for the task
| isLocked | Boolean | `false` | Unknown (no examples of `true`)
| name | String | `null` | Name of the task<br/>Current ones all appear as `null`
| productId | String | `null` | PlayStation Store Product Id associated with the task<br/>`null` if not associated with a store product
| progress | Numeric | `0`<br/>`null` | Users progress towards completing the task<br/>May be `null` if not registered for the campaign
| status | String | `COMPLETED`<br/>`NOT_REGISTERED`<br/>`AUTO_REGISTERED`<br/>`NOT_STARTED` | Users status for the task
| type | String | `CONCEPT`<br/>`null` | Type of task?


## Examples with Responses

### Example 1 - Retrieve collectible reward campaign with id `a8faa377-f08b-5d1d-a27c-68cc32930105` for the authenticating account

<Tabs>
<TabItem value="example1-encoded-url" label="Encoded URL">

_See [using a Web Browser to query the API](../query-api#web-browser)_

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyCampaignByIdRetrieve&variables=%7B%22campaignId%22%3A%22a8faa377-f08b-5d1d-a27c-68cc32930105%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22068f75eb174b7e9ee31530797f4df6c881219fdbc9b4d6786d900321f6999829%22%7D%7D

</TabItem>

<TabItem value="example1-raw-url" label="Raw URL">

_See [using a Web Browser to query the API](../query-api#web-browser)_

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyCampaignByIdRetrieve&variables={"campaignId":"a8faa377-f08b-5d1d-a27c-68cc32930105"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"068f75eb174b7e9ee31530797f4df6c881219fdbc9b4d6786d900321f6999829"}}

</TabItem>

<TabItem value="example1-raw-pwsh" label="PowerShell">

_See [using PowerShell to query the API](../query-api#powershell-7)_

```powershell
Invoke-RestMethod -Uri 'https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyCampaignByIdRetrieve&variables={"campaignId":"a8faa377-f08b-5d1d-a27c-68cc32930105"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"068f75eb174b7e9ee31530797f4df6c881219fdbc9b4d6786d900321f6999829"}}' -Authentication Bearer -Token $token
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
            "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/image/masterImage_png_687_1698711685423.png"
          },
          {
            "__typename": "Media",
            "altText": null,
            "role": "VIDEO",
            "type": "VIDEO",
            "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/video/video_mp4_687_1698711696679.mp4"
          }
        ],
        "id": "90c66449-9c4d-5eeb-a07a-254b2a1d1ec0",
        "name": "November’s Robbit",
        "rarityType": "UNCOMMON"
      },
      "description": "Crunchy leaves, a crisp breeze, harvest festivals… it’s autumn in the northern hemisphere! Celebrate the changing of seasons with us by playing some games.",
      "displayPoints": "",
      "endDate": "2023-12-01T03:59:00.000000Z",
      "estimatedTime": null,
      "id": "a8faa377-f08b-5d1d-a27c-68cc32930105",
      "images": [
        {
          "__typename": "Media",
          "altText": null,
          "role": "IMAGE",
          "type": "IMAGE",
          "url": "https://sky-assets.api.playstation.com/sky/p1-np/campaign/image/masterImage_image/jpeg,image/png,image/gif_2494_1697482637592.png"
        },
        {
          "__typename": "Media",
          "altText": null,
          "role": "TILE",
          "type": "IMAGE",
          "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/image/masterImage_png_687_1698711685423.png"
        },
        {
          "__typename": "Media",
          "altText": null,
          "role": "TILE",
          "type": "IMAGE",
          "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/video/video_mp4_687_1698711696679.mp4"
        }
      ],
      "isNew": false,
      "isRegistrable": true,
      "isRegistrationRequired": false,
      "name": "November Check-In",
      "productId": null,
      "progress": 0,
      "remainingTime": 288138,
      "startDate": "2023-11-01T04:00:00.000000Z",
      "status": "AUTO_REGISTERED",
      "tasks": [
        {
          "__typename": "LoyaltyCampaignTask",
          "conceptId": null,
          "description": "Drop the baked good and play any game on PS4 or PS5 for your collectible.",
          "id": "b284a7b2-b24c-550e-b9d6-2fab9ce70a3e",
          "isLocked": false,
          "name": null,
          "productId": null,
          "progress": 0,
          "status": "NOT_STARTED",
          "type": null
        }
      ]
    }
  }
}
```

</details>

### Example 2 - Retrieve points reward campaign with id `b5c96532-2544-5c66-ad78-fa45662577b0` for the authenticating account

<Tabs>
<TabItem value="example2-encoded-url" label="Encoded URL">

_See [using a Web Browser to query the API](../query-api#web-browser)_

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyCampaignByIdRetrieve&variables=%7B%22campaignId%22%3A%22b5c96532-2544-5c66-ad78-fa45662577b0%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22068f75eb174b7e9ee31530797f4df6c881219fdbc9b4d6786d900321f6999829%22%7D%7D

</TabItem>

<TabItem value="example2-raw-url" label="Raw URL">

_See [using a Web Browser to query the API](../query-api#web-browser)_

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyCampaignByIdRetrieve&variables={"campaignId":"b5c96532-2544-5c66-ad78-fa45662577b0"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"068f75eb174b7e9ee31530797f4df6c881219fdbc9b4d6786d900321f6999829"}}

</TabItem>

<TabItem value="example2-raw-pwsh" label="PowerShell">

_See [using PowerShell to query the API](../query-api#powershell-7)_

```powershell
Invoke-RestMethod -Uri 'https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyCampaignByIdRetrieve&variables={"campaignId":"b5c96532-2544-5c66-ad78-fa45662577b0"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"068f75eb174b7e9ee31530797f4df6c881219fdbc9b4d6786d900321f6999829"}}' -Authentication Bearer -Token $token
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
      "description": "Games we’ve been enjoying and think you will too. Buy any one of these carefully curated picks for a point boost!",
      "displayPoints": "50",
      "endDate": "2023-12-01T03:59:00.000000Z",
      "estimatedTime": null,
      "id": "b5c96532-2544-5c66-ad78-fa45662577b0",
      "images": [
        {
          "__typename": "Media",
          "altText": null,
          "role": "IMAGE",
          "type": "IMAGE",
          "url": "https://sky-assets.api.playstation.com/sky/p1-np/campaign/image/masterImage_image/jpeg,image/png,image/gif_2495_1697496785037.png"
        }
      ],
      "isNew": false,
      "isRegistrable": true,
      "isRegistrationRequired": true,
      "name": "November Monthly Picks",
      "productId": "EP3643-PPSA06417_00-0308301971493556",
      "progress": 0,
      "remainingTime": 287269,
      "startDate": "2023-11-01T04:00:00.000000Z",
      "status": "REGISTERED",
      "tasks": [
        {
          "__typename": "LoyaltyCampaignTask",
          "conceptId": "10004448",
          "description": "Wizard With a Gun",
          "id": "7b64edc5-4e6c-5c36-b34e-ee1b38456297",
          "isLocked": false,
          "name": null,
          "productId": null,
          "progress": 0,
          "status": "NOT_STARTED",
          "type": "CONCEPT"
        },
        {
          "__typename": "LoyaltyCampaignTask",
          "conceptId": "229969",
          "description": "Mineko's Night Market",
          "id": "ab4d0be5-4510-5fa0-a3e0-1b6f9077ef43",
          "isLocked": false,
          "name": null,
          "productId": null,
          "progress": 0,
          "status": "NOT_STARTED",
          "type": "CONCEPT"
        },
        {
          "__typename": "LoyaltyCampaignTask",
          "conceptId": "10002162",
          "description": "ENDLESS™ Dungeon",
          "id": "14c4e057-5996-594e-a194-a6d3fa87431e",
          "isLocked": false,
          "name": null,
          "productId": null,
          "progress": 0,
          "status": "NOT_STARTED",
          "type": "CONCEPT"
        },
        {
          "__typename": "LoyaltyCampaignTask",
          "conceptId": "10007607",
          "description": "Metal Gear Solid Master Collection Vol.1",
          "id": "d410ba3a-172f-51a3-96a4-8b7fee4a5a7c",
          "isLocked": false,
          "name": null,
          "productId": null,
          "progress": 0,
          "status": "NOT_STARTED",
          "type": "CONCEPT"
        },
        {
          "__typename": "LoyaltyCampaignTask",
          "conceptId": "10004658",
          "description": "Sonic Superstars",
          "id": "cda0f1a4-bb40-52b5-b248-5888626883f4",
          "isLocked": false,
          "name": null,
          "productId": null,
          "progress": 0,
          "status": "NOT_STARTED",
          "type": "CONCEPT"
        },
        {
          "__typename": "LoyaltyCampaignTask",
          "conceptId": "10004721",
          "description": "Sword Art Online Last Recollection",
          "id": "126971c1-e9f9-5120-9011-0bffc75511f6",
          "isLocked": false,
          "name": null,
          "productId": null,
          "progress": 0,
          "status": "NOT_STARTED",
          "type": "CONCEPT"
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

_See [using a Web Browser to query the API](../query-api#web-browser)_

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyCampaignByIdRetrieve&variables=%7B%22campaignId%22%3A%22a337bf45-dcdd-5914-992e-adc076e1dce9%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22068f75eb174b7e9ee31530797f4df6c881219fdbc9b4d6786d900321f6999829%22%7D%7D

</TabItem>

<TabItem value="example3-raw-url" label="Raw URL">

_See [using a Web Browser to query the API](../query-api#web-browser)_

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyCampaignByIdRetrieve&variables={"campaignId":"a337bf45-dcdd-5914-992e-adc076e1dce9"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"068f75eb174b7e9ee31530797f4df6c881219fdbc9b4d6786d900321f6999829"}}

</TabItem>

<TabItem value="example3-raw-pwsh" label="PowerShell">

_See [using PowerShell to query the API](../query-api#powershell-7)_

```powershell
Invoke-RestMethod -Uri 'https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyCampaignByIdRetrieve&variables={"campaignId":"a337bf45-dcdd-5914-992e-adc076e1dce9"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"068f75eb174b7e9ee31530797f4df6c881219fdbc9b4d6786d900321f6999829"}}' -Authentication Bearer -Token $token
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
            "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/image/masterImage_png_462_1673644072785.png"
          },
          {
            "__typename": "Media",
            "altText": null,
            "role": "VIDEO",
            "type": "VIDEO",
            "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/video/video_mp4_462_1673644081637.mp4"
          }
        ],
        "id": "ecf86d0a-0139-5952-8af0-7a5ad7fd0f5a",
        "name": "PlayStation Home",
        "rarityType": "HEROIC"
      },
      "description": "The online social gaming space that was so ahead of its time. And you were there!",
      "displayPoints": "",
      "endDate": "2025-07-07T03:59:00.000000Z",
      "estimatedTime": null,
      "id": "a337bf45-dcdd-5914-992e-adc076e1dce9",
      "images": [
        {
          "__typename": "Media",
          "altText": null,
          "role": "IMAGE",
          "type": "IMAGE",
          "url": "https://sky-assets.api.playstation.com/sky/p1-np/campaign/image/masterImage_image/jpeg,image/png,image/gif_1638_1669231896266.png"
        },
        {
          "__typename": "Media",
          "altText": null,
          "role": "TILE",
          "type": "IMAGE",
          "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/image/masterImage_png_462_1673644072785.png"
        },
        {
          "__typename": "Media",
          "altText": null,
          "role": "TILE",
          "type": "IMAGE",
          "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/video/video_mp4_462_1673644081637.mp4"
        }
      ],
      "isNew": false,
      "isRegistrable": true,
      "isRegistrationRequired": false,
      "name": "PlayStation & You: PlayStation Home",
      "productId": null,
      "progress": 100,
      "remainingTime": 50744542,
      "startDate": "2023-07-06T04:00:00.000000Z",
      "status": "COMPLETED",
      "tasks": [
        {
          "__typename": "LoyaltyCampaignTask",
          "conceptId": null,
          "description": "Pick a PS4 or PS5 game to play.",
          "id": "40da31cd-7248-5d2b-8e32-5094f53bedef",
          "isLocked": false,
          "name": null,
          "productId": null,
          "progress": 100,
          "status": "COMPLETED",
          "type": null
        }
      ]
    }
  }
}
```

</details>
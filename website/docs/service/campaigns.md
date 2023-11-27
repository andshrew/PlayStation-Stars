---
sidebar_position: 1
title: Campaigns
description: Retrieve available campaigns
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Campaigns

## Overview

Requests to this endpoint will retrieve campaigns which are available. It additionally retrieves information about the users progress.

Campaigns are challenges which users can complete to earn rewards.

Use the [campaign detail](./campaign-detail.md) endpoint to retrieve additional information about a specific campaign including the tasks required to complete it.

The endpoint can query the authenticating account only.

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetCampaignGroup

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
        "code": -1,
        "source": "-1",
        "message": "User is not enrolled inside the program!",
        "referenceId": "f8f43138-2a18-464e-8cdb-90c3f15b3639"
      },
      "statusCode": 400,
      "errorCode": -1,
      "humanReadableCode": "",
      "humanReadableValidationErrors": [],
      "apiName": "getCampaignGroups"
    }
  ],
  "data": {
    "loyaltyCampaignGroupRetrieve": null
  }
}
```

</details>

:::

### Additional Information

The campaigns are typically issued under a unique id for each major PSN region. When the service first launched a consequence of this was that campagins were effectively region locked; for example a campaign requiring the user to play a specific game would only track the version of game that belonged to that region. So if you bought the game using a US PSN account but played it using an EU PSN account then the version of the campaign that was issued to the EU PSN account would only track the EU versions of a game, and so the campaign would not complete when the US region version of the game was played. Other consequences of this approach was that occasionally they would track the wrong version of the game for a region, or only track the PS4 version of a game and not the PS5 version.

The service has mostly mitigated these issues as campaigns can now track a Concept Id. The Concept Id is a unique identifier assigned to every game released on PlayStation. They encompass all regional versions and variants of a game under a single identifier. In the context of PlayStation Stars this now means that when a campaign requires you to play a particular game it should be possible to play any version of that game and have it register progress to complete the task, effectively elimating the region locking. A side effect of this is that _any_ version of a game can be used to complete such campaigns - including any demo or beta/pre-release versions.

## Input Parameters

| Parameter | Value |
| --- | --- |
| operationName | metGetCampaignGroup |
| variables | `{}` |
| extensions | `{"persistedQuery":{"version":1,"sha256Hash":"88fd82cc7cb8c0f5b29548f34b9b2aced1f028fe7a18ad0133c6170af5b6d37b"}}` |


## Output JSON Response

A JSON response is returned. The following are returned under the `data` attribute.

| Attribute | Type | Example Value | Description |
| --- | --- |--- | --- | 
| loyaltyCampaignGroupRetrieve | [JSON object<br/>`LoyaltyCampaignGroups`](#m-json-object-LoyaltyCampaignGroups) | | Contains the campaign groups which are available

### LoyaltyCampaignGroups JSON object {#m-json-object-LoyaltyCampaignGroups}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `LoyaltyCampaignGroups` |
| campaigns | [JSON object<br/>`LoyaltyCampaign`](#m-json-object-LoyaltyCampaign) | | Contains the campaigns which are available within this group
| id | String | `Default` | 
| name | String | `Default` | 

### LoyaltyCampaign JSON object {#m-json-object-LoyaltyCampaign}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `LoyaltyCampaign` |
| campaignRewardType | String | `POINTS`<br/>`COLLECTIBLE` | Type of reward available
| collectible | String | `null`<br/>[JSON object<br/>`LoyaltyCampaignCollectible`](#m-json-object-LoyaltyCampaignCollectible) | `null` if the reward type is not collectible
| description | String | `Grab your next favorite game! Buy one of these select games from PlayStation store.` | Description for the campaign
| displayPoints | String | `""`<br/>`"50"` | Reward points available for completion<br/>`""` if reward points are not awarded
| endDate | Date (UTC) | `2022-10-31T15:59:00.000000Z` | Date the campaign ends
| id | String | `162f269d-1ed9-5647-a015-30cf1b76a766` | GUID for the campaign
| images | [JSON object<br/>`Media`](#m-json-object-Media-campaign) | | Media associated with the campaign (images, video)
| isNew | Boolean | `true` | `true` until user interacts with the campaign
| isRegistrable | Boolean | `true` | `true` if user is eligible for the campaign
| name | String | `PlayStation Store Picks` | Name of the campaign
| productId | String | `null`<br/>`HP0700-PPSA05164_00-SDGUNBATTLEA0000` | PlayStation Store Product Id associated with the campaign<br/>`null` if not associated with a store product
| progress | Numeric | `0`<br/>`100` | Users progress towards completing the campaign
| remainingTime | Numeric | `0`<br/>`2678340` | Seconds until the campaign ends
| startDate | Date (UTC) | `2022-09-12T16:00:00.000000Z` | Date the campaign begins
| status | String | `NOT_REGISTERED`<br/>`AUTO_REGISTERED`<br/>`REGISTERED`<br/>`IN_PROGRESS`<br/>`EXPIRED` | Users status for the campaign

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


## Examples with Responses

### Example 1 - Retrieve all campaigns for the authenticating account

<Tabs>
<TabItem value="example1-encoded-url" label="Encoded URL">

_See [using a Web Browser to query the API](../query-api#web-browser)_

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetCampaignGroup&variables=%7B%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%2288fd82cc7cb8c0f5b29548f34b9b2aced1f028fe7a18ad0133c6170af5b6d37b%22%7D%7D

</TabItem>

<TabItem value="example1-raw-url" label="Raw URL">

_See [using a Web Browser to query the API](../query-api#web-browser)_

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetCampaignGroup&variables={}&extensions={"persistedQuery":{"version":1,"sha256Hash":"88fd82cc7cb8c0f5b29548f34b9b2aced1f028fe7a18ad0133c6170af5b6d37b"}}

</TabItem>

<TabItem value="example1-raw-pwsh" label="PowerShell">

_See [using PowerShell to query the API](../query-api#powershell-7)_

```powershell
Invoke-RestMethod -Uri 'https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetCampaignGroup&variables={}&extensions={"persistedQuery":{"version":1,"sha256Hash":"88fd82cc7cb8c0f5b29548f34b9b2aced1f028fe7a18ad0133c6170af5b6d37b"}}' -Authentication Bearer -Token $token
```

</TabItem>

</Tabs>

<details><summary>Click to view full JSON response</summary>

```json
{
  "data": {
    "loyaltyCampaignGroupRetrieve": [
      {
        "__typename": "LoyaltyCampaignGroups",
        "campaigns": [
          {
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
            "id": "a8faa377-f08b-5d1d-a27c-68cc32930105",
            "images": [
              {
                "__typename": "Media",
                "altText": null,
                "role": "IMAGE",
                "type": "IMAGE",
                "url": "https://sky-assets.api.playstation.com/sky/p1-np/campaign/image/masterImage_image/jpeg,image/png,image/gif_2494_1697482637592.png"
              }
            ],
            "isNew": true,
            "isRegistrable": true,
            "name": "November Check-In",
            "productId": null,
            "progress": 0,
            "remainingTime": 292334,
            "startDate": "2023-11-01T04:00:00.000000Z",
            "status": "AUTO_REGISTERED"
          },
          {
            "__typename": "LoyaltyCampaign",
            "campaignRewardType": "POINTS",
            "collectible": null,
            "description": "Games we’ve been enjoying and think you will too. Buy any one of these carefully curated picks for a point boost!",
            "displayPoints": "50",
            "endDate": "2023-12-01T03:59:00.000000Z",
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
            "isNew": true,
            "isRegistrable": true,
            "name": "November Monthly Picks",
            "productId": "EP3643-PPSA06417_00-0308301971493556",
            "progress": 0,
            "remainingTime": 292334,
            "startDate": "2023-11-01T04:00:00.000000Z",
            "status": "NOT_REGISTERED"
          },
          {
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
                  "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/image/masterImage_png_688_1697660228280.png"
                },
                {
                  "__typename": "Media",
                  "altText": null,
                  "role": "VIDEO",
                  "type": "VIDEO",
                  "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/video/video_mp4_688_1697660232921.mp4"
                }
              ],
              "id": "35c3e099-f9d0-56c4-8e91-3c17c5b2e407",
              "name": "PlayStation 4 Console",
              "rarityType": "HEROIC"
            },
            "description": "PlayStation 4 marked a new era of incredible first party games, social features, and robust services for us. Thanks for being there with us – from your friends at PlayStation.",
            "displayPoints": "",
            "endDate": "2025-11-16T03:59:00.000000Z",
            "id": "e9546664-aa7f-50b7-ab52-c70eda2e403d",
            "images": [
              {
                "__typename": "Media",
                "altText": null,
                "role": "IMAGE",
                "type": "IMAGE",
                "url": "https://sky-assets.api.playstation.com/sky/p1-np/campaign/image/masterImage_image/jpeg,image/png,image/gif_2496_1697483283774.png"
              }
            ],
            "isNew": false,
            "isRegistrable": true,
            "name": "PlayStation & You: PS4",
            "productId": null,
            "progress": 0,
            "remainingTime": 62151680,
            "startDate": "2023-11-15T06:13:00.000000Z",
            "status": "REGISTERED"
          },
          {
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
            "id": "a337bf45-dcdd-5914-992e-adc076e1dce9",
            "images": [
              {
                "__typename": "Media",
                "altText": null,
                "role": "IMAGE",
                "type": "IMAGE",
                "url": "https://sky-assets.api.playstation.com/sky/p1-np/campaign/image/masterImage_image/jpeg,image/png,image/gif_1638_1669231896266.png"
              }
            ],
            "isNew": false,
            "isRegistrable": true,
            "name": "PlayStation & You: PlayStation Home",
            "productId": null,
            "progress": 100,
            "remainingTime": 50746880,
            "startDate": "2023-07-06T04:00:00.000000Z",
            "status": "COMPLETED"
          }
        ],
        "id": "Default",
        "name": "Default"
      }
    ]
  }
}
```

</details>
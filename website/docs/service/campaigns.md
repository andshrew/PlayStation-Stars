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

Campaigns which involve playing specific games are region locked. The version of the game being played must be from the same region as that of the account completing the campaign (ie. if you bought games with a US account but played them with an EU account then these games would not count towards progress on the EU accounts campaigns).

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

## Input Parameters

| Parameter | Value |
| --- | --- |
| operationName | metGetCampaignGroup |
| variables | `{}` |
| extensions | `{"persistedQuery":{"version":1,"sha256Hash":"eabc9a2d92e6c8604eb611c22bbc0f8ffce673dee29b0c1f82040f5a4918264b"}}` |


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
| name | String | `PlayStation Store Picks` | Name of the campaign
| productId | String | `null`<br/>`HP0700-PPSA05164_00-SDGUNBATTLEA0000` | PlayStation Store Product Id associated with the campaign<br/>`null` if not associated with a store product
| progress | Numeric | `0`<br/>`100` | Users progress towards completing the campaign
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
| rarityType | String | `COMMON`<br/>`UNCOMMON`<br/>`RARE`<br/>`HEROIC`<br/>`LEGENDARY` | Rarity of the collectible

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

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetCampaignGroup&variables=%7B%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22eabc9a2d92e6c8604eb611c22bbc0f8ffce673dee29b0c1f82040f5a4918264b%22%7D%7D

</TabItem>

<TabItem value="example1-raw-url" label="Raw URL">

_See [using a Web Browser to query the API](../query-api#web-browser)_

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetCampaignGroup&variables={}&extensions={"persistedQuery":{"version":1,"sha256Hash":"eabc9a2d92e6c8604eb611c22bbc0f8ffce673dee29b0c1f82040f5a4918264b"}}

</TabItem>

<TabItem value="example1-raw-pwsh" label="PowerShell">

_See [using PowerShell to query the API](../query-api#powershell-7)_

```powershell
Invoke-RestMethod -Uri 'https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetCampaignGroup&variables={}&extensions={"persistedQuery":{"version":1,"sha256Hash":"eabc9a2d92e6c8604eb611c22bbc0f8ffce673dee29b0c1f82040f5a4918264b"}}' -Authentication Bearer -Token $token
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
            "campaignRewardType": "POINTS",
            "collectible": null,
            "description": "Grab your next favorite game! Buy one of these select games from PlayStation store.",
            "displayPoints": "50",
            "endDate": "2022-10-31T15:59:00.000000Z",
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
            "name": "PlayStation Store Picks",
            "productId": "HP0700-PPSA05164_00-SDGUNBATTLEA0000",
            "progress": 0,
            "startDate": "2022-09-12T16:00:00.000000Z",
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
                  "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/image/masterImage_png_406_1664306813863.png"
                },
                {
                  "__typename": "Media",
                  "altText": null,
                  "role": "VIDEO",
                  "type": "VIDEO",
                  "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/video/video_mp4_406_1662591783851.mp4"
                }
              ],
              "id": "4a9d9d67-e29f-598c-bb57-b6689456aa8c",
              "name": "Novelty Toy Fight Trophy",
              "rarityType": "UNCOMMON"
            },
            "description": "Pick a fight to honor 30 years of Hadoukens.",
            "displayPoints": "",
            "endDate": "2022-10-31T15:59:00.000000Z",
            "id": "23c6b95b-9892-507c-b4b7-c888aacaf9aa",
            "images": [
              {
                "__typename": "Media",
                "altText": null,
                "role": "IMAGE",
                "type": "IMAGE",
                "url": "https://sky-assets.api.playstation.com/sky/p1-np/campaign/image/masterImage_image/jpeg,image/png,image/gif_1570_1663780701598.png"
              },
              {
                "__typename": "Media",
                "altText": null,
                "role": "TILE",
                "type": "IMAGE",
                "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/image/masterImage_png_406_1664306813863.png"
              },
              {
                "__typename": "Media",
                "altText": null,
                "role": "TILE",
                "type": "IMAGE",
                "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/video/video_mp4_406_1662591783851.mp4"
              }
            ],
            "name": "The World Warrior’s Challenge",
            "productId": null,
            "progress": 0,
            "startDate": "2022-09-12T18:00:00.000000Z",
            "status": "AUTO_REGISTERED"
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
            "name": "October Check-in",
            "productId": null,
            "progress": 0,
            "startDate": "2022-09-30T16:00:00.000000Z",
            "status": "AUTO_REGISTERED"
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
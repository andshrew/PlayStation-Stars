---
sidebar_position: 4
title: Collectible Detail
description: Retrieve detail of a specific collectible
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Collectible Detail

## Overview

Requests to this endpoint will retrieve the details of a specific collectible. It additionally retrieves information about whether a user has earned it.

The endpoint can query the authenticating account, or it can query another user account (providing that the privacy settings on the other account allow it).

You can view a list of collectibles which have been available on the service [here](../collectibles-reference.md).

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyUserCollectibleById

:::info

This endpoint always returns a response for the authenticating account regardless of whether or not it has enrolled with PlayStation Stars service.  If you query an account which has either not enrolled with PlayStation Stars or has not given the authenticating account permission to view their PlayStation Stars Level or Display Case then the API will return a successful response with an error object contained within.

<details><summary>Click to view full response</summary>

```json
{
  "errors": [
    {
      "message": "Cannot return null for non-nullable field LoyaltyUserCollectible.id."
    }
  ],
  "data": {
    "loyaltyUserCollectibleByIdRetrieve": null
  }
}
```

</details>

:::

## Input Parameters

| Parameter | Value |
| --- | --- |
| operationName | metLoyaltyUserCollectibleById |
| variables | `{"collectibleId":"88d25cfa-26ad-572a-9335-a32b9bcabe13","accountId":"me"}` |
| extensions | `{"persistedQuery":{"version":1,"sha256Hash":"86ecd802c228fbae4b7482d7272932ad18f56516dbf28ede9fdbe1554b796549"}}` |

| Property | Parent Parameter | Type | Example Values | Description | Required |
| --- | --- | --- | --- | --- | --- |
| collectibleId | variables | String | `88d25cfa-26ad-572a-9335-a32b9bcabe13` | GUID of the collectible to retrieve | Yes |
| accountId | variables | String | `me`<br/>`12340..` | The Id of the account to be queried<br/>Use `me` for the authenticating account | Yes |

## Output JSON Response

A JSON response is returned. The following are returned under the `data` attribute.

| Attribute | Type | Example Value | Description |
| --- | --- |--- | --- | 
| loyaltyUserCollectibleByIdRetrieve | [JSON object<br/>`LoyaltyUserCollectible`](#m-json-object-LoyaltyUserCollectible) | | Contains the collectible details

### LoyaltyUserCollectible JSON object {#m-json-object-LoyaltyUserCollectible}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `LoyaltyUserCollectible` |
| assets | [JSON object<br/>`Media`](#m-json-object-Media-collectible) | | Media associated with the collectible (images, video)
| descriptions | [JSON object<br/>`Description`](#m-json-object-Description-collectible) | | Description associated with the collectible
| id | String | `88d25cfa-26ad-572a-9335-a32b9bcabe13` | GUID for the collectible
| name | String | `PlayStation Tech Demo Tyrannosaurus Rex` | Name of the collectible
| rarityType | String | `COMMON`<br/>`UNCOMMON`<br/>`RARE`<br/>`HEROIC`<br/>`LEGENDARY`<br/>`MYTHIC` | Rarity of the collectible
| releaseDate | Date (UTC) | `2022-10-01T00:00:00.000000Z` | Date the collectible became available
| unlockedDate | Date (UTC) | `2022-10-01T13:06:01.004772Z`<br/>`null` | Date the user earned the collectible<br/>`null` if not earned

### Media (Collectible) JSON object {#m-json-object-Media-collectible}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `Media` |
| type | String | `IMAGE`<br/>`VIDEO` | The media type
| url | String | `https://sky-assets.api.playstation.com/sky/p1-np/collectible/image/masterImage_png_428_1663345652984.png`<br/>`https://sky-assets.api.playstation.com/sky/p1-np/collectible/video/video_mp4_428_1663345660772.mp4` | URL for the media

### Description (Collectible) JSON object {#m-json-object-Description-collectible}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `Description` |
| type | String | `LEGAL`<br/>`LONG` | The description type
| url | String | `null`<br/>`A scientifically accurate mini statue of the tech demo T. rex from the original PlayStation.` | Description text


## Examples with Responses

### Example 1 - Retrieve earned collectible with id `88d25cfa-26ad-572a-9335-a32b9bcabe13` for the authenticating account

<Tabs>
<TabItem value="example1-encoded-url" label="Encoded URL">

_See [using a Web Browser to query the API](../query-api#web-browser)_

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyUserCollectibleById&variables=%7B%22collectibleId%22%3A%2288d25cfa-26ad-572a-9335-a32b9bcabe13%22%2C%22accountId%22%3A%22me%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%2286ecd802c228fbae4b7482d7272932ad18f56516dbf28ede9fdbe1554b796549%22%7D%7D

</TabItem>

<TabItem value="example1-raw-url" label="Raw URL">

_See [using a Web Browser to query the API](../query-api#web-browser)_

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyUserCollectibleById&variables={"collectibleId":"88d25cfa-26ad-572a-9335-a32b9bcabe13","accountId":"me"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"86ecd802c228fbae4b7482d7272932ad18f56516dbf28ede9fdbe1554b796549"}}

</TabItem>

<TabItem value="example1-raw-pwsh" label="PowerShell">

_See [using PowerShell to query the API](../query-api#powershell-7)_

```powershell
Invoke-RestMethod -Uri 'https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyUserCollectibleById&variables={"collectibleId":"88d25cfa-26ad-572a-9335-a32b9bcabe13","accountId":"me"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"86ecd802c228fbae4b7482d7272932ad18f56516dbf28ede9fdbe1554b796549"}}' -Authentication Bearer -Token $token
```

</TabItem>

</Tabs>

<details><summary>Click to view full JSON response</summary>

```json
{
  "data": {
    "loyaltyUserCollectibleByIdRetrieve": {
      "__typename": "LoyaltyUserCollectible",
      "assets": [
        {
          "__typename": "Media",
          "type": "IMAGE",
          "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/image/masterImage_png_428_1663345652984.png"
        },
        {
          "__typename": "Media",
          "type": "VIDEO",
          "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/video/video_mp4_428_1663345660772.mp4"
        }
      ],
      "descriptions": [
        {
          "__typename": "Description",
          "type": "LEGAL",
          "value": null
        },
        {
          "__typename": "Description",
          "type": "LONG",
          "value": "A scientifically accurate mini statue of the tech demo T. rex from the original PlayStation."
        }
      ],
      "id": "88d25cfa-26ad-572a-9335-a32b9bcabe13",
      "name": "PlayStation Tech Demo Tyrannosaurus Rex ",
      "rarity": "UNCOMMON",
      "releaseDate": "2022-10-01T00:00:00.000000Z",
      "unlockedDate": "2022-10-01T13:06:01.004772Z"
    }
  }
}
```

</details>

### Example 2 - Retrieve unearned collectible with id `613ab757-5a88-5f94-a683-26638f830f1b` for the authenticating account

<Tabs>
<TabItem value="example2-encoded-url" label="Encoded URL">

_See [using a Web Browser to query the API](../query-api#web-browser)_

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyUserCollectibleById&variables=%7B%22collectibleId%22%3A%22613ab757-5a88-5f94-a683-26638f830f1b%22%2C%22accountId%22%3A%22me%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%2286ecd802c228fbae4b7482d7272932ad18f56516dbf28ede9fdbe1554b796549%22%7D%7D

</TabItem>

<TabItem value="example2-raw-url" label="Raw URL">

_See [using a Web Browser to query the API](../query-api#web-browser)_

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyUserCollectibleById&variables={"collectibleId":"613ab757-5a88-5f94-a683-26638f830f1b","accountId":"me"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"86ecd802c228fbae4b7482d7272932ad18f56516dbf28ede9fdbe1554b796549"}}

</TabItem>

<TabItem value="example2-raw-pwsh" label="PowerShell">

_See [using PowerShell to query the API](../query-api#powershell-7)_

```powershell
Invoke-RestMethod -Uri 'https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyUserCollectibleById&variables={"collectibleId":"613ab757-5a88-5f94-a683-26638f830f1b","accountId":"me"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"86ecd802c228fbae4b7482d7272932ad18f56516dbf28ede9fdbe1554b796549"}}' -Authentication Bearer -Token $token
```

</TabItem>

</Tabs>

<details><summary>Click to view full JSON response</summary>

```json
{
  "data": {
    "loyaltyUserCollectibleByIdRetrieve": {
      "__typename": "LoyaltyUserCollectible",
      "assets": [
        {
          "__typename": "Media",
          "type": "IMAGE",
          "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/image/masterImage_png_412_1664309172101.png"
        },
        {
          "__typename": "Media",
          "type": "VIDEO",
          "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/video/video_mp4_412_1663011915453.mp4"
        }
      ],
      "descriptions": [
        {
          "__typename": "Description",
          "type": "LEGAL",
          "value": null
        },
        {
          "__typename": "Description",
          "type": "LONG",
          "value": "In an endless sea of stars, it seems like there’s nowhere to hide. But you wouldn’t be here if you let challenges like that stop you. Welcome to Level 5."
        }
      ],
      "id": "613ab757-5a88-5f94-a683-26638f830f1b",
      "name": "Level 5 Diorama - Bots Don't Breathe",
      "rarity": "LEGENDARY",
      "releaseDate": "2022-09-13T00:00:00Z",
      "unlockedDate": null
    }
  }
}
```

</details>

### Example 3 - Retrieve collectible with id `fcea5464-fb42-582a-8a06-fbba6d41ab4a` for user account with accountId _0000000000000000000_

<Tabs>
<TabItem value="example3-encoded-url" label="Encoded URL">

_See [using a Web Browser to query the API](../query-api#web-browser)_

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyUserCollectibleById&variables=%7B%22collectibleId%22%3A%22fcea5464-fb42-582a-8a06-fbba6d41ab4a%22%2C%22accountId%22%3A%220000000000000000000%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%2286ecd802c228fbae4b7482d7272932ad18f56516dbf28ede9fdbe1554b796549%22%7D%7D

</TabItem>

<TabItem value="example3-raw-url" label="Raw URL">

_See [using a Web Browser to query the API](../query-api#web-browser)_

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyUserCollectibleById&variables={"collectibleId":"fcea5464-fb42-582a-8a06-fbba6d41ab4a","accountId":"0000000000000000000"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"86ecd802c228fbae4b7482d7272932ad18f56516dbf28ede9fdbe1554b796549"}}

</TabItem>

<TabItem value="example3-raw-pwsh" label="PowerShell">

_See [using PowerShell to query the API](../query-api#powershell-7)_

```powershell
Invoke-RestMethod -Uri 'https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyUserCollectibleById&variables={"collectibleId":"fcea5464-fb42-582a-8a06-fbba6d41ab4a","accountId":"0000000000000000000"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"86ecd802c228fbae4b7482d7272932ad18f56516dbf28ede9fdbe1554b796549"}}' -Authentication Bearer -Token $token
```

</TabItem>

</Tabs>

<details><summary>Click to view full JSON response</summary>

```json
{
  "data": {
    "loyaltyUserCollectibleByIdRetrieve": {
      "__typename": "LoyaltyUserCollectible",
      "assets": [
        {
          "__typename": "Media",
          "type": "IMAGE",
          "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/image/masterImage_png_411_1664309142198.png"
        },
        {
          "__typename": "Media",
          "type": "VIDEO",
          "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/video/video_mp4_411_1663011894977.mp4"
        }
      ],
      "descriptions": [
        {
          "__typename": "Description",
          "type": "LEGAL",
          "value": null
        },
        {
          "__typename": "Description",
          "type": "LONG",
          "value": "Take a moment to look back on how far you’ve come as a pioneer of play. Welcome to Level 4."
        }
      ],
      "id": "fcea5464-fb42-582a-8a06-fbba6d41ab4a",
      "name": "Level 4 Diorama - Space Settlers",
      "rarity": "HEROIC",
      "releaseDate": "2022-09-13T00:00:00Z",
      "unlockedDate": null
    }
  }
}
```

</details>
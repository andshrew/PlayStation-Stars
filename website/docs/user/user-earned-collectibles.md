---
sidebar_position: 3
title: User Earned Collectibles
description: Retrieve a users collectibles
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# User Earned Collectibles

## Overview

Requests to this endpoint will retrieve the collectibles that a user has earned.

The endpoint can query the authenticating account only.

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetUserCollectibles

:::info

If you query with an account which has not enrolled with PlayStation Stars then the API will return a successful but empty response.

<details><summary>Click to view full response</summary>

```json
{
  "data": {
    "loyaltyUserCollectiblesRetrieve": []
  }
}
```

</details>

:::

## Input Parameters

| Parameter | Value |
| --- | --- |
| operationName | metGetUserCollectibles |
| variables | `{"includeDisplayItems":false}` |
| extensions | `{"persistedQuery":{"version":1,"sha256Hash":"35e365310aa44393f6cdc5d6b53127e137a9a87749692ca3c4c3c49dca92c4ba"}}` |

| Property | Parent Parameter | Type | Example Values | Description | Required |
| --- | --- | --- | --- | --- | --- |
| includeDisplayItems | variables | String | `true`<br/>`false` | False excludes collectibles which are selected for display on the users display case<br/>True returns all earned collectibles | Yes |

## Output JSON Response

A JSON response is returned. The following are returned under the `data` attribute.

| Attribute | Type | Example Value | Description |
| --- | --- |--- | --- | 
| loyaltyUserCollectiblesRetrieve | [JSON object<br/>`LoyaltyUserCollectible`](#m-json-object-LoyaltyUserCollectible) | | Contains the users collectibles

### LoyaltyUserCollectible JSON object {#m-json-object-LoyaltyUserCollectible}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `LoyaltyUserCollectible` |
| assets | [JSON object<br/>`Media`](#m-json-object-Media-collectible) | | Media associated with the collectible (images, video)
| id | String | `4aaf72d0-ceeb-57ab-ad13-09e4ee36ae2e` | GUID for the collectible
| name | String | `Star Gazer Telescope` | Name of the collectible
| rarity | String | `COMMON`<br/>`UNCOMMON`<br/>`RARE`<br/>`LEGENDARY` | Rarity of the collectible

### Media (Collectible) JSON object {#m-json-object-Media-collectible}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `Media` |
| type | String | `IMAGE`<br/>`VIDEO` | The media type
| url | String | `https://sky-assets.api.playstation.com/sky/p1-np/collectible/image/masterImage_png_408_1664306310803.png`<br/>`https://sky-assets.api.playstation.com/sky/p1-np/collectible/video/video_mp4_408_1662591675454.mp4` | URL for the media


## Examples with Responses

### Example 1 - Retrieve all collectibles for the authenticating account

<Tabs>
<TabItem value="example1-encoded-url" label="Encoded URL">

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetUserCollectibles&variables=%7B%22includeDisplayItems%22%3Atrue%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%2235e365310aa44393f6cdc5d6b53127e137a9a87749692ca3c4c3c49dca92c4ba%22%7D%7D

</TabItem>

<TabItem value="example1-raw-url" label="Raw URL">

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetUserCollectibles&variables={"includeDisplayItems":true}&extensions={"persistedQuery":{"version":1,"sha256Hash":"35e365310aa44393f6cdc5d6b53127e137a9a87749692ca3c4c3c49dca92c4ba"}}

</TabItem>

<TabItem value="example1-raw-pwsh" label="PowerShell">

_See [using PowerShell to query the API](../query-api)_

```powershell
Invoke-RestMethod -Uri 'https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetUserCollectibles&variables={"includeDisplayItems":true}&extensions={"persistedQuery":{"version":1,"sha256Hash":"35e365310aa44393f6cdc5d6b53127e137a9a87749692ca3c4c3c49dca92c4ba"}}' -Authentication Bearer -Token $token
```

</TabItem>

</Tabs>

<details><summary>Click to view full JSON response</summary>

```json
{
  "data": {
    "loyaltyUserCollectiblesRetrieve": [
      {
        "__typename": "LoyaltyUserCollectible",
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
        "name": "Star Gazer Telescope",
        "rarity": "COMMON"
      },
      {
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
        "id": "88d25cfa-26ad-572a-9335-a32b9bcabe13",
        "name": "PlayStation Tech Demo Tyrannosaurus Rex ",
        "rarity": "UNCOMMON"
      }
    ]
  }
}
```

</details>

### Example 2 - Retrieve collectibles excluding those on the display case for the authenticating account

<Tabs>
<TabItem value="example2-encoded-url" label="Encoded URL">

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetUserCollectibles&variables=%7B%22includeDisplayItems%22%3Afalse%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%2235e365310aa44393f6cdc5d6b53127e137a9a87749692ca3c4c3c49dca92c4ba%22%7D%7D

</TabItem>

<TabItem value="example2-raw-url" label="Raw URL">

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetUserCollectibles&variables={"includeDisplayItems":false}&extensions={"persistedQuery":{"version":1,"sha256Hash":"35e365310aa44393f6cdc5d6b53127e137a9a87749692ca3c4c3c49dca92c4ba"}}

</TabItem>

<TabItem value="example2-raw-pwsh" label="PowerShell">

_See [using PowerShell to query the API](../query-api)_

```powershell
Invoke-RestMethod -Uri 'https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetUserCollectibles&variables={"includeDisplayItems":false}&extensions={"persistedQuery":{"version":1,"sha256Hash":"35e365310aa44393f6cdc5d6b53127e137a9a87749692ca3c4c3c49dca92c4ba"}}' -Authentication Bearer -Token $token
```

</TabItem>

</Tabs>

<details><summary>Click to view full JSON response</summary>

```json
{
  "data": {
    "loyaltyUserCollectiblesRetrieve": []
  }
}
```

</details>
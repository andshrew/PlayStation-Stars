---
sidebar_position: 5
title: Display Cases (Scenes)
description: Retrieve available display cases
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Campaign Detail

## Overview

Requests to this endpoint will retrieve the available display cases (or scenes) which can be selected to display collectibles on.

The endpoint can query the authenticating account only.

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetCollectibleScenes

:::info

If you query with an account which has not enrolled with PlayStation Stars then the API will return a successful response with an error object contained within.

<details><summary>Click to view full response</summary>

```json
{
  "data": {
    "loyaltyCollectibleScenesRetrieve": []
  }
}
```

</details>

:::

## Input Parameters

| Parameter | Value |
| --- | --- |
| operationName | metGetCollectibleScenes |
| variables | `{}` |
| extensions | `{"persistedQuery":{"version":1,"sha256Hash":"2adb46c4053cac3491ec3ced326d54356ffa83868233cd6415998b2eadf23351"}}` |

## Output JSON Response

A JSON response is returned. The following are returned under the `data` attribute.

| Attribute | Type | Example Value | Description |
| --- | --- |--- | --- | 
| loyaltyCollectibleScenesRetrieve | [JSON object<br/>`LoyaltyCollectibleScene`](#m-json-object-LoyaltyCollectibleScene) | | Contains the available scenes

### LoyaltyCollectibleScene JSON object {#m-json-object-LoyaltyCollectibleScene}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `LoyaltyCollectibleScene` |
| assets | [JSON object<br/>`Media`](#m-json-object-Media-scene) | | Media associated with the scene (images, video)
| id | String | `277d9b04-912d-4231-8ed1-9b3c70a40e1f` | GUID for the scene

### Media (Scene) JSON object {#m-json-object-Media-scene}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `Media` |
| role | String | `BACKGROUND`<br/>`TILE`<br/>`PREVIEW` | What the media is used for
| url | String | `https://sky-assets.api.playstation.com/sky/p1-np/...` | URL for the media


## Examples with Responses

### Example 1 - Retrieve available display cases (scenes) for the authenticating account

<Tabs>
<TabItem value="example1-encoded-url" label="Encoded URL">

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetCollectibleScenes&variables=%7B%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%222adb46c4053cac3491ec3ced326d54356ffa83868233cd6415998b2eadf23351%22%7D%7D

</TabItem>

<TabItem value="example1-raw-url" label="Raw URL">

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetCollectibleScenes&variables={}&extensions={"persistedQuery":{"version":1,"sha256Hash":"2adb46c4053cac3491ec3ced326d54356ffa83868233cd6415998b2eadf23351"}}

</TabItem>

<TabItem value="example1-raw-pwsh" label="PowerShell">

_See [using PowerShell to query the API](../query-api)_

```powershell
Invoke-RestMethod -Uri 'https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetCollectibleScenes&variables={}&extensions={"persistedQuery":{"version":1,"sha256Hash":"2adb46c4053cac3491ec3ced326d54356ffa83868233cd6415998b2eadf23351"}}' -Authentication Bearer -Token $token
```

</TabItem>

</Tabs>

<details><summary>Click to view full JSON response</summary>

```json
{
  "data": {
    "loyaltyCollectibleScenesRetrieve": [
      {
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
      },
      {
        "__typename": "LoyaltyCollectibleScene",
        "assets": [
          {
            "__typename": "Media",
            "role": "BACKGROUND",
            "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectibleScene/image/returnal_scene_beta2.png"
          },
          {
            "__typename": "Media",
            "role": "TILE",
            "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectibleScene/image/returnal_tile.png"
          },
          {
            "__typename": "Media",
            "role": "PREVIEW",
            "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectibleScene/image/returnal_preview_beta2.png"
          }
        ],
        "id": "8c84db83-1e4f-4ba8-9409-1b794a5d2a00"
      },
      {
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
    ]
  }
}
```

</details>
---
sidebar_position: 6
title: Reward Tiers (Status Levels)
description: Retrieve available reward tiers
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Reward Tiers (Status Levels)

## Overview

Requests to this endpoint will retrieve the reward tiers that exist within the service.

Reward tiers are otherwise known as Status Levels or PlayStation Stars Level. Once a user has enrolled in the service they can upgrade their level by purchasing "full games" from the PlayStation Store and by earning trophies which have a rarity status of rare, very rare, or ultra rate as at the time of unlocking (ie. a trophy which has been earned by 50% or fewer people).

There are 4 Status Levels which can be earned, and the total purchases and trophies required to earn them are cumulative.

| Status Level | "Full Game" PS Store Purchases Required | Rare (and above) Trophies Required
| --- | --- | --- |
| 1 | - | - |
| 2 | 1 | 1 |
| 3 | 2 | 32 |
| 4 | 4 | 128 |

There is an additional (and currently undisclosed) 5th tier in the service known as Diamond which the API suggests is accessible by invite only. Some detail of this can be seen in the example API response below, [additional information can be found in this Reddit post](https://redd.it/zcondt).

The endpoint can query the authenticating account only.

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetStatusLevels


## Input Parameters

| Parameter | Value |
| --- | --- |
| operationName | metGetStatusLevels |
| variables | `{}` |
| extensions | `{"persistedQuery":{"version":1,"sha256Hash":"44dff30ed981a73ed8fa8b38fd5e3fa5996fc00bb4d3eb234d2a00c29bb04dd9"}}` |


## Output JSON Response

A JSON response is returned. The following are returned under the `data` attribute.

| Attribute | Type | Example Value | Description |
| --- | --- |--- | --- | 
| loyaltyStatusLevelsMetaDataRetrieve | [JSON object<br/>`LoyaltyStatusLevelMetaData`](#m-json-object-LoyaltyStatusLevelMetaData) | | Contains the tiers which are available in the service

### LoyaltyStatusLevelMetaData JSON object {#m-json-object-LoyaltyStatusLevelMetaData}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `LoyaltyStatusLevelMetaData` |
| collectibles | `null`<br/>[JSON object<br/>`LoyaltyStatusCollectible`](#m-json-object-LoyaltyStatusCollectible) | | Contains the campaigns which are available within this group<br/>`null` if no collectible is awarded for reaching the tier
| description | String | `Sapphire Level after on-boarding to Sky Program`<br/>`Earn 1 trophy & 1 purchase to earn Garnet`<br/>`Earn 32 trophies & 2 purchase to earn Emerald`<br/>`Earn 128 trophies & 4 purchase to earn Ruby`<br/>`Invite only to Diamond Level` | Description of what is required to reach this tier
| name | String | `Sapphire`<br/>`Garnet`<br/>`Emerald`<br/>`Ruby`<br/>`Diamond` | Name of the tier 
| statusLevelNumber | Numeric | `1`<br/>`2`<br/>`3`<br/>`4`<br/>`5` | Tier number 

### LoyaltyStatusCollectible JSON object {#m-json-object-LoyaltyStatusCollectible}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `LoyaltyStatusCollectible` |
| id | String | `613ab757-5a88-5f94-a683-26638f830f1b` | GUID for the collectible
| name | String | `Level 5 Diorama - Bots Dont Breathe` | Name of the collectible

## Examples with Responses

### Example 1 - Retrieve all reward tiers for the authenticating account

<Tabs>
<TabItem value="example1-encoded-url" label="Encoded URL">

_See [using a Web Browser to query the API](../query-api#web-browser)_

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetStatusLevels&variables=%7B%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%2244dff30ed981a73ed8fa8b38fd5e3fa5996fc00bb4d3eb234d2a00c29bb04dd9%22%7D%7D

</TabItem>

<TabItem value="example1-raw-url" label="Raw URL">

_See [using a Web Browser to query the API](../query-api#web-browser)_

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetStatusLevels&variables={}&extensions={"persistedQuery":{"version":1,"sha256Hash":"44dff30ed981a73ed8fa8b38fd5e3fa5996fc00bb4d3eb234d2a00c29bb04dd9"}}

</TabItem>

<TabItem value="example1-raw-pwsh" label="PowerShell">

_See [using PowerShell to query the API](../query-api#powershell-7)_

```powershell
Invoke-RestMethod -Uri 'https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetStatusLevels&variables={}&extensions={"persistedQuery":{"version":1,"sha256Hash":"44dff30ed981a73ed8fa8b38fd5e3fa5996fc00bb4d3eb234d2a00c29bb04dd9"}}' -Authentication Bearer -Token $token
```

</TabItem>

</Tabs>

<details><summary>Click to view full JSON response</summary>

```json
{
  "data": {
    "loyaltyStatusLevelsMetaDataRetrieve": [
      {
        "__typename": "LoyaltyStatusLevelMetaData",
        "collectibles": [
          {
            "__typename": "LoyaltyStatusCollectible",
            "id": "6bc02f35-5051-541d-af0e-68392e320039",
            "name": "Level 3 Diorama - A Robot Runs Through It"
          }
        ],
        "description": "Earn 32 trophies & 2 purchase to earn Emerald",
        "name": "Emerald",
        "statusLevelNumber": 3
      },
      {
        "__typename": "LoyaltyStatusLevelMetaData",
        "collectibles": [],
        "description": "Sapphire Level after on-boarding to Sky Program",
        "name": "Sapphire",
        "statusLevelNumber": 1
      },
      {
        "__typename": "LoyaltyStatusLevelMetaData",
        "collectibles": [
          {
            "__typename": "LoyaltyStatusCollectible",
            "id": "fcea5464-fb42-582a-8a06-fbba6d41ab4a",
            "name": "Level 4 Diorama - Space Settlers"
          }
        ],
        "description": "Earn 128 trophies & 4 purchase to earn Ruby",
        "name": "Ruby",
        "statusLevelNumber": 4
      },
      {
        "__typename": "LoyaltyStatusLevelMetaData",
        "collectibles": [
          {
            "__typename": "LoyaltyStatusCollectible",
            "id": "613ab757-5a88-5f94-a683-26638f830f1b",
            "name": "Level 5 Diorama - Bots Don't Breathe"
          }
        ],
        "description": "Invite only to Diamond Level",
        "name": "Diamond",
        "statusLevelNumber": 5
      },
      {
        "__typename": "LoyaltyStatusLevelMetaData",
        "collectibles": [
          {
            "__typename": "LoyaltyStatusCollectible",
            "id": "d45437ef-3c4b-5767-b8a4-54854507fad1",
            "name": "Level 2 Diorama - The Astro Walk"
          }
        ],
        "description": "Earn 1 trophy & 1 purchase to earn Garnet",
        "name": "Garnet",
        "statusLevelNumber": 2
      }
    ]
  }
}
```

</details>
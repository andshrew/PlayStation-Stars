---
sidebar_position: 4
title: Collectible Detail
description: Retrieve detail of a specific collectible
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Collectible Detail

#### Change History

<details><summary>Click to view change history</summary>

| **Supersedes** |
| - |
| [Collectible Detail v1](./archive/collectible-detail-v1.md) |

This version of the endpoint was introduced ~September 2023, likely in app version `23.8.0`.

**Notable Changes**

* Information about how a collectible has been earned is now included in the response
* You can now see the date that another user earned a collectible (excluding the birthday collectible)

**Response Diff**

```diff
 {
   "data": {
-      "loyaltyUserCollectibleByIdRetrieve": {
-          "__typename": "LoyaltyUserCollectible",
-          "assets": [
-              {
-                  "__typename": "Media",
-                  "type": "IMAGE",
-                  "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/image/masterImage_png_780_1706723704272.png"
+      "ownedLoyaltyCollectibleRetrieve": {
+          "__typename": "OwnedLoyaltyCollectible",
+          "collectible": {
+              "__typename": "LoyaltyCollectible",
+              "assets": [
+                  {
+                      "__typename": "Media",
+                      "type": "IMAGE",
+                      "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/image/masterImage_png_780_1706723704272.png"
+                  },
+                  {
+                      "__typename": "Media",
+                      "type": "VIDEO",
+                      "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/video/video_mp4_780_1706723692622.mp4"
+                  }
+              ],
+              "descriptions": [
+                  {
+                      "__typename": "Description",
+                      "type": "LEGAL",
+                      "value": null
+                  },
+                  {
+                      "__typename": "Description",
+                      "type": "LONG",
+                      "value": "Robbit, mon Dieu! Now we’ll never stop thinking about the Roman Empire!"
+                  }
+              ],
+              "id": "07edd90d-1143-519f-9488-1b8297db9a0f",
+              "name": "Ancient Rome Robbit",
+              "rarity": "COMMON",
+              "referenceData": {
+                  "__typename": "LoyaltyCollectibleReference",
+                  "description": "Robbit’s still travelling through time, now landing in Ancient Rome! Watch out for those chariots, Robbit, and we’ll be cheering you on while we play some games.",
+                  "earnedDate": "2024-02-01T03:25:23.506148Z",
+                  "id": "7ef4b2ad-180c-57e2-8eb8-504cdba1645e",
+                  "internalName": "Y24_Feb_FebruaryCheck-In_PS4-5_Global BB1DBE_000",
+                  "name": "February check-in",
+                  "points": null,
+                  "referenceType": "CAMPAIGN"
               },
-              {
-                  "__typename": "Media",
-                  "type": "VIDEO",
-                  "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/video/video_mp4_780_1706723692622.mp4"
-              }
-          ],
-          "descriptions": [
-              {
-                  "__typename": "Description",
-                  "type": "LEGAL",
-                  "value": null
-              },
-              {
-                  "__typename": "Description",
-                  "type": "LONG",
-                  "value": "Robbit, mon Dieu! Now we’ll never stop thinking about the Roman Empire!"
-              }
-          ],
-          "id": "07edd90d-1143-519f-9488-1b8297db9a0f",
-          "name": "Ancient Rome Robbit",
-          "rarity": "COMMON",
-          "releaseDate": "2024-02-01T00:00:00.000000Z",
+              "releaseDate": "2024-02-01T00:00:00.000000Z"
+          },
+          "id": "me::07edd90d-1143-519f-9488-1b8297db9a0f",
           "unlockedDate": "2024-02-01T03:25:23.458517Z"
       }
   }
```

</details>

## Overview

Requests to this endpoint will retrieve the details of a specific collectible. It additionally retrieves information about whether a user owns the collectible, and if they do how it was earned.

The endpoint can query the authenticating account, or it can query another user account (providing that the privacy settings on the other account allow it).

You can view a list of collectibles which have been available on the service [here](../collectibles-reference.md).

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyGetOwnedCollectibleById

:::info

This endpoint always returns a response for the authenticating account regardless of whether or not it has enrolled with PlayStation Stars service.  If you query an account which has either not enrolled with PlayStation Stars or has not given the authenticating account permission to view their PlayStation Stars Level or Display Case then the API will return a successful response with an error object contained within.

<details><summary>Click to view full response</summary>

```json
{
  "errors": [
      {
          "message": "Cannot return null for non-nullable field LoyaltyCollectible.id.",
          "path": [
              "ownedLoyaltyCollectibleRetrieve",
              "collectible",
              "id"
          ],
          "extensions": {}
      }
  ],
  "data": {
      "ownedLoyaltyCollectibleRetrieve": {
          "__typename": "OwnedLoyaltyCollectible",
          "collectible": null,
          "id": "0000000000000000000::undefined",
          "unlockedDate": null
      }
  }
}
```

</details>

:::

## Input Parameters

| Parameter | Value |
| --- | --- |
| operationName | metLoyaltyGetOwnedCollectibleById |
| variables | `{"collectibleId":"07edd90d-1143-519f-9488-1b8297db9a0f","accountId":"me"}` |
| extensions | `{"persistedQuery":{"version":1,"sha256Hash":"6d86e3978748e16f463a3062d73b7782f00a71e02d03b34b8dbffd6fe1437fe2"}}` |

| Property | Parent Parameter | Type | Example Values | Description | Required |
| --- | --- | --- | --- | --- | --- |
| collectibleId | variables | String | `07edd90d-1143-519f-9488-1b8297db9a0f` | GUID of the collectible to retrieve | Yes |
| accountId | variables | String | `me`<br/>`12340..` | The Id of the account to be queried<br/>Use `me` for the authenticating account | Yes |

## Output JSON Response

A JSON response is returned. The following are returned under the `data` attribute.

| Attribute | Type | Example Value | Description |
| --- | --- |--- | --- | 
| ownedLoyaltyCollectibleRetrieve | [JSON object<br/>`OwnedLoyaltyCollectible`](#m-json-object-OwnedLoyaltyCollectible) | | Contains the collectible details

### OwnedLoyaltyCollectible JSON object {#m-json-object-OwnedLoyaltyCollectible}

| Attribute | Type | Example Value | Description |
| --- | --- |--- | --- | 
| collectible | [JSON object<br/>`LoyaltyCollectible`](#m-json-object-LoyaltyCollectible) | | Contains the collectible details
| id | String | `me::07edd90d-1143-519f-9488-1b8297db9a0f`<br/>`12340..::07edd90d-1143-519f-9488-1b8297db9a0f` | Account Id being queried :: Collectible GUID<br/>`me` for the authenticating account
| unlockedDate | Date (UTC) | `2024-02-24T20:34:15.642907Z`<br/>`null` | Date the user earned the collectible<br/>`null` if not earned, or when querying another account

### LoyaltyCollectible JSON object {#m-json-object-LoyaltyCollectible}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `LoyaltyCollectible` |
| assets | [JSON object<br/>`Media`](#m-json-object-Media-collectible) | | Media associated with the collectible (images, video)
| descriptions | [JSON object<br/>`Description`](#m-json-object-Description-collectible) | | Description associated with the collectible
| id | String | `07edd90d-1143-519f-9488-1b8297db9a0f` | GUID for the collectible
| name | String | `Ancient Rome Robbit` | Name of the collectible
| rarity | String | `COMMON`<br/>`UNCOMMON`<br/>`RARE`<br/>`HEROIC`<br/>`LEGENDARY`<br/>`MYTHIC` | Rarity of the collectible
| referenceData | [JSON object<br/>`LoyaltyCollectibleReference`](#m-json-object-LoyaltyCollectibleReference) | | Information relating to how the collectible was earned
| releaseDate | Date (UTC) | `2024-02-01T00:00:00.000000Z` | Date the collectible became available<br/>This is purely informational, there is nothing preventing a collectible having a future date should it be released "early"

### Media (Collectible) JSON object {#m-json-object-Media-collectible}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `Media` |
| type | String | `IMAGE`<br/>`VIDEO` | The media type
| url | String | `https://sky-assets.api.playstation.com/sky/p1-np/collectible/image/masterImage_png_780_1706723704272.png`<br/>`https://sky-assets.api.playstation.com/sky/p1-np/collectible/video/video_mp4_780_1706723692622.mp4` | URL for the media

### Description (Collectible) JSON object {#m-json-object-Description-collectible}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `Description` |
| type | String | `LEGAL`<br/>`LONG` | The description type
| value | String | `null`<br/>`Robbit, mon Dieu! Now we’ll never stop thinking about the Roman Empire!` | Description text

### LoyaltyCollectibleReference JSON object {#m-json-object-LoyaltyCollectibleReference}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `LoyaltyCollectibleReference` |
| description | String | `Robbit’s still traveling through time, this time...`<br/>`null` | A description for `CAMPAIGN` type, otherwise `null`
| earnedDate | Date (UTC) | `2024-02-24T20:34:15.654491Z` | Date the user completed the task which awarded the collectible<br/>Does not exactly match the collectible `unlockedDate`, but it is returned for both the authenticating account and when querying other accounts (the difference is within seconds of that time)<br/>Does not return for `BIRTHDAY` type
| id | String | `7ef4b2ad-180c-57e2-8eb8-504cdba1645e`<br/>`2`<br/>`null` | For `CAMPAIGN` and `PURCHASE` type the GUID for the campaign or reward respectively<br/>For `STATUS_LEVEL` type the level reached
| internalName | String | `Y24_Feb_FebruaryCheck-In_PS4-5_Global BB1DBE_000`<br/>`Y24_Jan_RobbitPostcard-Prehistoric_Global`<br/>`null` | An id for the `CAMPAIGN` and `PURCHASE` types, otherwise `null`<br/>Also `null` for older campaigns (likely prior to 2023)
| points | Numeric | `200`<br/>`null` | Points cost of the collectible for `PURCHASE` type, otherwise `null`
| referenceType | String | `CAMPAIGN`<br/>`PSN_ANNIVERSARY`<br/>`STATUS_LEVEL`<br/>`BIRTHDAY`<br/>`PURCHASE`<br/>`null` | `null` if the collectible is not earned


## Examples with Responses

### Example 1 - Retrieve earned collectible with id `07edd90d-1143-519f-9488-1b8297db9a0f` for the authenticating account

<Tabs>
<TabItem value="example1-encoded-url" label="Encoded URL">

_See [using a Web Browser to query the API](../query-api#web-browser)_

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyGetOwnedCollectibleById&variables=%7B%22collectibleId%22%3A%2207edd90d-1143-519f-9488-1b8297db9a0f%22%2C%22accountId%22%3A%22me%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%226d86e3978748e16f463a3062d73b7782f00a71e02d03b34b8dbffd6fe1437fe2%22%7D%7D

</TabItem>

<TabItem value="example1-raw-url" label="Raw URL">

_See [using a Web Browser to query the API](../query-api#web-browser)_

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyGetOwnedCollectibleById&variables={"collectibleId":"07edd90d-1143-519f-9488-1b8297db9a0f","accountId":"me"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"6d86e3978748e16f463a3062d73b7782f00a71e02d03b34b8dbffd6fe1437fe2"}}

</TabItem>

<TabItem value="example1-raw-pwsh" label="PowerShell">

_See [using PowerShell to query the API](../query-api#powershell-7)_

```powershell
Invoke-RestMethod -Uri 'https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyGetOwnedCollectibleById&variables={"collectibleId":"07edd90d-1143-519f-9488-1b8297db9a0f","accountId":"me"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"6d86e3978748e16f463a3062d73b7782f00a71e02d03b34b8dbffd6fe1437fe2"}}' -Authentication Bearer -Token $token
```

</TabItem>

</Tabs>

<details><summary>Click to view full JSON response</summary>

```json
{
  "data": {
    "ownedLoyaltyCollectibleRetrieve": {
      "__typename": "OwnedLoyaltyCollectible",
      "collectible": {
        "__typename": "LoyaltyCollectible",
        "assets": [
          {
            "__typename": "Media",
            "type": "IMAGE",
            "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/image/masterImage_png_780_1706723704272.png"
          },
          {
            "__typename": "Media",
            "type": "VIDEO",
            "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/video/video_mp4_780_1706723692622.mp4"
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
            "value": "Robbit, mon Dieu! Now we’ll never stop thinking about the Roman Empire!"
          }
        ],
        "id": "07edd90d-1143-519f-9488-1b8297db9a0f",
        "name": "Ancient Rome Robbit",
        "rarity": "COMMON",
        "referenceData": {
          "__typename": "LoyaltyCollectibleReference",
          "description": "Robbit’s still traveling through time, this time landing in Ancient Rome! Watch out for those chariots, Robbit, and we’ll be cheering you on while we play some games.",
          "earnedDate": "2024-02-24T20:34:15.654491Z",
          "id": "7ef4b2ad-180c-57e2-8eb8-504cdba1645e",
          "internalName": "Y24_Feb_FebruaryCheck-In_PS4-5_Global BB1DBE_000",
          "name": "February Check-In",
          "points": null,
          "referenceType": "CAMPAIGN"
        },
        "releaseDate": "2024-02-01T00:00:00.000000Z"
      },
      "id": "me::07edd90d-1143-519f-9488-1b8297db9a0f",
      "unlockedDate": "2024-02-24T20:34:15.642907Z"
    }
  }
}
```

</details>

### Example 2 - Retrieve unearned collectible with id `788ad72d-aa06-5d1b-bd5e-c52f13ca0040` for the authenticating account

<Tabs>
<TabItem value="example2-encoded-url" label="Encoded URL">

_See [using a Web Browser to query the API](../query-api#web-browser)_

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyGetOwnedCollectibleById&variables=%7B%22collectibleId%22%3A%22788ad72d-aa06-5d1b-bd5e-c52f13ca0040%22%2C%22accountId%22%3A%22me%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%226d86e3978748e16f463a3062d73b7782f00a71e02d03b34b8dbffd6fe1437fe2%22%7D%7D

</TabItem>

<TabItem value="example2-raw-url" label="Raw URL">

_See [using a Web Browser to query the API](../query-api#web-browser)_

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyGetOwnedCollectibleById&variables={"collectibleId":"788ad72d-aa06-5d1b-bd5e-c52f13ca0040","accountId":"me"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"6d86e3978748e16f463a3062d73b7782f00a71e02d03b34b8dbffd6fe1437fe2"}}

</TabItem>

<TabItem value="example2-raw-pwsh" label="PowerShell">

_See [using PowerShell to query the API](../query-api#powershell-7)_

```powershell
Invoke-RestMethod -Uri 'https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyGetOwnedCollectibleById&variables={"collectibleId":"788ad72d-aa06-5d1b-bd5e-c52f13ca0040","accountId":"me"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"6d86e3978748e16f463a3062d73b7782f00a71e02d03b34b8dbffd6fe1437fe2"}}' -Authentication Bearer -Token $token
```

</TabItem>

</Tabs>

<details><summary>Click to view full JSON response</summary>

```json
{
  "data": {
    "ownedLoyaltyCollectibleRetrieve": {
      "__typename": "OwnedLoyaltyCollectible",
      "collectible": {
        "__typename": "LoyaltyCollectible",
        "assets": [
          {
            "__typename": "Media",
            "type": "IMAGE",
            "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/image/masterImage_png_716_1703094987170.png"
          },
          {
            "__typename": "Media",
            "type": "VIDEO",
            "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/video/video_mp4_716_1703094995202.mp4"
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
            "value": "This gamer has breached the bonds of gravity and is now a permanent fixture amongst the galaxies and nebulae. A true PlayStation Star."
          }
        ],
        "id": "788ad72d-aa06-5d1b-bd5e-c52f13ca0040",
        "name": "Level 5: Star Sailor",
        "rarity": "LEGENDARY",
        "referenceData": {
          "__typename": "LoyaltyCollectibleReference",
          "description": null,
          "earnedDate": null,
          "id": null,
          "internalName": null,
          "name": null,
          "points": null,
          "referenceType": null
        },
        "releaseDate": "2023-12-20T00:00:00.000000Z"
      },
      "id": "me::788ad72d-aa06-5d1b-bd5e-c52f13ca0040",
      "unlockedDate": null
    }
  }
}
```

</details>

### Example 3 - Retrieve collectible with id `9bee4aec-a322-5627-a83d-03edeecc1896` for user account with accountId _0000000000000000000_

<Tabs>
<TabItem value="example3-encoded-url" label="Encoded URL">

_See [using a Web Browser to query the API](../query-api#web-browser)_

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyGetOwnedCollectibleById&variables=%7B%22collectibleId%22%3A%229bee4aec-a322-5627-a83d-03edeecc1896%22%2C%22accountId%22%3A%220000000000000000000%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%226d86e3978748e16f463a3062d73b7782f00a71e02d03b34b8dbffd6fe1437fe2%22%7D%7D

</TabItem>

<TabItem value="example3-raw-url" label="Raw URL">

_See [using a Web Browser to query the API](../query-api#web-browser)_

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyGetOwnedCollectibleById&variables={"collectibleId":"9bee4aec-a322-5627-a83d-03edeecc1896","accountId":"0000000000000000000"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"6d86e3978748e16f463a3062d73b7782f00a71e02d03b34b8dbffd6fe1437fe2"}}

</TabItem>

<TabItem value="example3-raw-pwsh" label="PowerShell">

_See [using PowerShell to query the API](../query-api#powershell-7)_

```powershell
Invoke-RestMethod -Uri 'https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyGetOwnedCollectibleById&variables={"collectibleId":"9bee4aec-a322-5627-a83d-03edeecc1896","accountId":"0000000000000000000"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"6d86e3978748e16f463a3062d73b7782f00a71e02d03b34b8dbffd6fe1437fe2"}}' -Authentication Bearer -Token $token
```

</TabItem>

</Tabs>

<details><summary>Click to view full JSON response</summary>

```json
{
  "data": {
    "ownedLoyaltyCollectibleRetrieve": {
      "__typename": "OwnedLoyaltyCollectible",
      "collectible": {
        "__typename": "LoyaltyCollectible",
        "assets": [
          {
            "__typename": "Media",
            "type": "IMAGE",
            "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/image/masterImage_png_499_1674237149626.png"
          },
          {
            "__typename": "Media",
            "type": "VIDEO",
            "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/video/video_mp4_499_1674237154261.mp4"
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
            "value": "A small token of our appreciation for your big effort."
          }
        ],
        "id": "9bee4aec-a322-5627-a83d-03edeecc1896",
        "name": "PlayStation 3 Folding@home",
        "rarity": "HEROIC",
        "referenceData": {
          "__typename": "LoyaltyCollectibleReference",
          "description": "Thank you for being among the 15 million PlayStation 3 owners who helped scientists study proteins. With your help, over 100 million computational hours were used to help scientists better understand complex diseases.",
          "earnedDate": "2023-02-15T19:41:48.226905Z",
          "id": "da481649-0452-59de-bb81-eb1711f99eec",
          "internalName": "Y23_Feb_PlayStationandYou:PS3Folding@home_PS3_N/A",
          "name": "PlayStation and You: PS3 Folding@home",
          "points": null,
          "referenceType": "CAMPAIGN"
        },
        "releaseDate": "2023-02-15T00:00:00.000000Z"
      },
      "id": "0000000000000000000::9bee4aec-a322-5627-a83d-03edeecc1896",
      "unlockedDate": null
    }
  }
}
```

</details>

### Example 4 - Retrieve purchased collectible with id `85545008-74df-54f5-8d35-063c062dcf68` for user account with accountId _0000000000000000000_

<Tabs>
<TabItem value="example4-encoded-url" label="Encoded URL">

_See [using a Web Browser to query the API](../query-api#web-browser)_

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyGetOwnedCollectibleById&variables=%7B%22collectibleId%22%3A%2285545008-74df-54f5-8d35-063c062dcf68%22%2C%22accountId%22%3A%220000000000000000000%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%226d86e3978748e16f463a3062d73b7782f00a71e02d03b34b8dbffd6fe1437fe2%22%7D%7D

</TabItem>

<TabItem value="example4-raw-url" label="Raw URL">

_See [using a Web Browser to query the API](../query-api#web-browser)_

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyGetOwnedCollectibleById&variables={"collectibleId":"85545008-74df-54f5-8d35-063c062dcf68","accountId":"0000000000000000000"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"6d86e3978748e16f463a3062d73b7782f00a71e02d03b34b8dbffd6fe1437fe2"}}

</TabItem>

<TabItem value="example4-raw-pwsh" label="PowerShell">

_See [using PowerShell to query the API](../query-api#powershell-7)_

```powershell
Invoke-RestMethod -Uri 'https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyGetOwnedCollectibleById&variables={"collectibleId":"85545008-74df-54f5-8d35-063c062dcf68","accountId":"0000000000000000000"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"6d86e3978748e16f463a3062d73b7782f00a71e02d03b34b8dbffd6fe1437fe2"}}' -Authentication Bearer -Token $token
```

</TabItem>

</Tabs>

<details><summary>Click to view full JSON response</summary>

```json
{
  "data": {
    "ownedLoyaltyCollectibleRetrieve": {
      "__typename": "OwnedLoyaltyCollectible",
      "collectible": {
        "__typename": "LoyaltyCollectible",
        "assets": [
          {
            "__typename": "Media",
            "type": "IMAGE",
            "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/image/masterImage_png_774_1705001134204.png"
          },
          {
            "__typename": "Media",
            "type": "VIDEO",
            "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/video/video_mp4_774_1705001139285.mp4"
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
            "value": "Concept art for Robbit’s prehistoric adventure, signed by artists Derek Lancaster and Glen Shultz. What’s that object Robbit is emerging from…?"
          }
        ],
        "id": "85545008-74df-54f5-8d35-063c062dcf68",
        "name": "Robbit Postcard | Prehistoric",
        "rarity": "COMMON",
        "referenceData": {
          "__typename": "LoyaltyCollectibleReference",
          "description": null,
          "earnedDate": "2024-02-12T05:03:00.597637Z",
          "id": "a734b4ff-4166-5665-afb9-8f4ffe2f5aaf",
          "internalName": "Y24_Jan_RobbitPostcard-Prehistoric_Global",
          "name": null,
          "points": 200,
          "referenceType": "PURCHASE"
        },
        "releaseDate": "2024-01-28T00:00:00.000000Z"
      },
      "id": "0000000000000000000::85545008-74df-54f5-8d35-063c062dcf68",
      "unlockedDate": null
    }
  }
}
```

</details>

### Example 5 - Retrieve Mythic tier collectible with id `2a19cf48-5a7a-5dbc-8d3d-a24475d1fba5` for user account with accountId _0000000000000000000_

<Tabs>
<TabItem value="example5-encoded-url" label="Encoded URL">

_See [using a Web Browser to query the API](../query-api#web-browser)_

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyGetOwnedCollectibleById&variables=%7B%22collectibleId%22%3A%222a19cf48-5a7a-5dbc-8d3d-a24475d1fba5%22%2C%22accountId%22%3A%220000000000000000000%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%226d86e3978748e16f463a3062d73b7782f00a71e02d03b34b8dbffd6fe1437fe2%22%7D%7D

</TabItem>

<TabItem value="example5-raw-url" label="Raw URL">

_See [using a Web Browser to query the API](../query-api#web-browser)_

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyGetOwnedCollectibleById&variables={"collectibleId":"2a19cf48-5a7a-5dbc-8d3d-a24475d1fba5","accountId":"0000000000000000000"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"6d86e3978748e16f463a3062d73b7782f00a71e02d03b34b8dbffd6fe1437fe2"}}

</TabItem>

<TabItem value="example5-raw-pwsh" label="PowerShell">

_See [using PowerShell to query the API](../query-api#powershell-7)_

```powershell
Invoke-RestMethod -Uri 'https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyGetOwnedCollectibleById&variables={"collectibleId":"2a19cf48-5a7a-5dbc-8d3d-a24475d1fba5","accountId":"0000000000000000000"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"6d86e3978748e16f463a3062d73b7782f00a71e02d03b34b8dbffd6fe1437fe2"}}' -Authentication Bearer -Token $token
```

</TabItem>

</Tabs>

<details><summary>Click to view full JSON response</summary>

```json
{
  "data": {
    "ownedLoyaltyCollectibleRetrieve": {
      "__typename": "OwnedLoyaltyCollectible",
      "collectible": {
        "__typename": "LoyaltyCollectible",
        "assets": [
          {
            "__typename": "Media",
            "type": "IMAGE",
            "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/image/masterImage_png_685_1695679910088.png"
          },
          {
            "__typename": "Media",
            "type": "VIDEO",
            "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/video/video_mp4_685_1695679915325.mp4"
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
            "value": "Thanks for joining us at the first annual DTIS Day!"
          }
        ],
        "id": "2a19cf48-5a7a-5dbc-8d3d-a24475d1fba5",
        "name": "DTIS Day 2023",
        "rarity": "MYTHIC",
        "referenceData": {
          "__typename": "LoyaltyCollectibleReference",
          "description": "This is a first. A World first!\nSee how all of your hard work comes together from a players point of view. Just fire your console at home or play as a team in any SIE office and live the experience.",
          "earnedDate": "2023-09-30T14:42:10.843370Z",
          "id": "a7f78e2a-fa8b-525e-8ec8-9a2903cd7730",
          "internalName": "Y23_Sep_DTIS:DrivenbyYOU_PS4-5_Global",
          "name": "DTIS: Driven by YOU",
          "points": null,
          "referenceType": "CAMPAIGN"
        },
        "releaseDate": "2023-09-25T00:00:00.000000Z"
      },
      "id": "0000000000000000000::2a19cf48-5a7a-5dbc-8d3d-a24475d1fba5",
      "unlockedDate": null
    }
  }
}
```

</details>
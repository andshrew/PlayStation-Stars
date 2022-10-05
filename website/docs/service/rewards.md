---
sidebar_position: 3
title: Rewards
description: Retrieve available rewards
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Rewards

## Overview

Requests to this endpoint will retrieve the rewards which are available to redeem in exchange for points earned through the service.

Rewards include digital collectibles, full PS4 and PS5 games, and wallet credit to spend on the PlayStation Store.

Use the [reward detail](./reward-detail.md) endpoint to retrieve additional information about a specific reward (collectible and wallet credit rewards only).

The endpoint can query the authenticating account only.

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetRewardGroup

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
        "referenceId": "7c8296f1-23c2-419c-8097-40d67b788af5"
      },
      "statusCode": 400,
      "errorCode": -1,
      "humanReadableCode": "",
      "humanReadableValidationErrors": [],
      "apiName": "getRewardGroups"
    }
  ],
  "data": {
    "loyaltyRewardGroupRetrieve": null
  }
}
```

</details>

:::

## Input Parameters

| Parameter | Value |
| --- | --- |
| operationName | metGetRewardGroup |
| variables | `{}` |
| extensions | `{"persistedQuery":{"version":1,"sha256Hash":"1207d68bf50a5d0d2227446c77650e244d1aa14f4a42f7dcd7be662934c93689"}}` |


## Output JSON Response

A JSON response is returned. The following are returned under the `data` attribute.

| Attribute | Type | Example Value | Description |
| --- | --- |--- | --- | 
| loyaltyRewardGroupRetrieve | [JSON object<br/>`LoyaltyRewardGroup`](#m-json-object-LoyaltyRewardGroup) | | Contains the reward groups which are available

### LoyaltyRewardGroup JSON object {#m-json-object-LoyaltyRewardGroup}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `LoyaltyRewardGroup` |
| id | String | `Digital Collectibles`<br/>`PS Store Rewards`<br/>`PS Store Wallet Credit` | Category of reward
| name | String | `Digital Collectibles`<br/>`PS Store Rewards`<br/>`PS Store Wallet Credit` | Category of reward
| rewards | [JSON object<br/>`LoyaltyRewardCollectible`](#m-json-object-LoyaltyRewardCollectible)<br/>[JSON object<br/>`LoyaltyRewardProduct`](#m-json-object-LoyaltyRewardProduct)<br/>[JSON object<br/>`LoyaltyRewardWalletCredit`](#m-json-object-LoyaltyRewardWalletCredit) | | Contains the rewards which are available within this group

### LoyaltyRewardCollectible JSON object {#m-json-object-LoyaltyRewardCollectible}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `LoyaltyRewardCollectible` |
| assets | [JSON object<br/>`Media`](#m-json-object-Media-collectible) | | Media associated with the collectible (images, video)
| descriptions | [JSON object<br/>`Description`](#m-json-object-Description-collectible) | | Description associated with the collectible
| displayName | String | `Pink Monkey Diorama` | Name of the collectible
| displayPoints | String | `200` | Cost of the reward (string formatted)
| id | String | `85bc1d70-a9ee-55e7-a97d-905ee2d82a48` | GUID for the collectible
| name | String | `Pink Monkey Diorama` | Name of the collectible
| rarityType | String | `COMMON`<br/>`UNCOMMON`<br/>`RARE`<br/>`HEROIC`<br/>`LEGENDARY` | Rarity of the collectible
| rewardType | String | `COLLECTIBLE` | Type of reward

### Media (Collectible) JSON object {#m-json-object-Media-collectible}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `Media` |
| type | String | `IMAGE`<br/>`VIDEO` | The media type
| url | String | `https://sky-assets.api.playstation.com/sky/p1-np/collectible/image/masterImage_png_418_1664306106337.png`<br/>`https://sky-assets.api.playstation.com/sky/p1-np/collectible/video/video_mp4_418_1662589943734.mp4` | URL for the media

### Description (Collectible) JSON object {#m-json-object-Description-collectible}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `Description` |
| value | String | `null`<br/>`Escape the ape that's in you with the help of this totally stable aspiring pop star.` | Description text

### LoyaltyRewardProduct JSON object {#m-json-object-LoyaltyRewardProduct}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `LoyaltyRewardProduct` |
| assets | [JSON object<br/>`Media`](#m-json-object-Media-product) | | Media associated with the product (images, video)
| descriptions | [JSON object<br/>`Description`](#m-json-object-Description-product) | | Description associated with the product
| displayName | String | `Sekiro: Shadows Die Twice` | Name of the product
| displayPoints | String | `15,000` | Cost of the reward (string formatted)
| id | String | `OFFER-LOYALTY-1244` | ID for the product reward
| localizedProductClassifications | Array<br/>String | `Full Game` | Type of product
| name | String | `SEKIRO: SHADOWS DIE TWICE` | Name of the product
| platforms | Array<br/>String | `PS4`<br/>`PS5`<br/>`WEB_STORE` | Storefronts product is available on (?)
| productId | String | `HP0506-CUSA13910_00-ASIAFULLGAME0000` | PlayStation Store Product Id associated with the product
| rewardType | String | `PRODUCT` | Type of reward

### Media (Product) JSON object {#m-json-object-Media-product}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `Media` |
| type | String | `IMAGE`<br/>`VIDEO` | The media type
| url | String | `https://vulcan.dl.playstation.net/img/rnd/202010/2701/sVLb4wrkXcFff2uuSS8tvErW.png` | URL for the media

### Description (Product) JSON object {#m-json-object-Description-product}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `Description` |
| value | String | `null`<br/>`To play this game on PS5, your system may need to be updated to the latest system software.` | Description text

### LoyaltyRewardWalletCredit JSON object {#m-json-object-LoyaltyRewardWalletCredit}

:::tip

Wallet credit rewards appear to be listed as generic dollar values (ie. $5, $20) with the `monetaryValue` attribute displaying the actual localised value of the credit.

:::

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `LoyaltyRewardWalletCredit` |
| assets | [JSON object<br/>`Media`](#m-json-object-Media-wallet) | | Media associated with the wallet credit (images, video)
| descriptions | [JSON object<br/>`Description`](#m-json-object-Description-wallet) | | Description associated with the wallet credit
| displayName | String | `Wallet Credit - $20` | Name of the wallet credit
| displayPoints | String | `4,000` | Cost of the reward (string formatted)
| id | String | `18747538-8dce-569c-91b8-3d46bc1c7296` | GUID for the wallet credit
| localizedProductClassifications | Array<br/>String | `null` | Type of product
| monetaryValue | String | `HK$160.00` | Value of the wallet credit
| name | String | `Wallet Credit - $20` | Name of the wallet credit
| rewardType | String | `WALLET_CREDIT` | Type of reward

### Media (Wallet) JSON object {#m-json-object-Media-wallet}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `Media` |
| role | String | `IMAGE`<br/>`TILE`<br/>`BACKGROUND` | What the media is used for
| type | String | `IMAGE` | The media type
| url | String | `https://sky-assets.api.playstation.com/sky/p1-np/walletCredit/image/walletcredit_11_center.png`<br/>`https://sky-assets.api.playstation.com/sky/p1-np/walletCredit/image/walletcredit_11_topaligned.png`<br/>`https://sky-assets.api.playstation.com/sky/p1-np/walletCredit/image/walletcredit_169_center.png` | URL for the media

### Description (Wallet) JSON object {#m-json-object-Description-wallet}

| Attribute | Type | Example Response | Description |
| --- | --- |--- | --- |
| __typename | String | `Description` |
| value | String | `null`<br/>`Wallet Credit - $20` | Description text


## Examples with Responses

### Example 1 - Retrieve all rewards for the authenticating account

<Tabs>
<TabItem value="example1-encoded-url" label="Encoded URL">

_See [using a Web Browser to query the API](../query-api#web-browser)_

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetRewardGroup&variables=%7B%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%221207d68bf50a5d0d2227446c77650e244d1aa14f4a42f7dcd7be662934c93689%22%7D%7D

</TabItem>

<TabItem value="example1-raw-url" label="Raw URL">

_See [using a Web Browser to query the API](../query-api#web-browser)_

    https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetRewardGroup&variables={}&extensions={"persistedQuery":{"version":1,"sha256Hash":"1207d68bf50a5d0d2227446c77650e244d1aa14f4a42f7dcd7be662934c93689"}}

</TabItem>

<TabItem value="example1-raw-pwsh" label="PowerShell">

_See [using PowerShell to query the API](../query-api#powershell-7)_

```powershell
Invoke-RestMethod -Uri 'https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetRewardGroup&variables={}&extensions={"persistedQuery":{"version":1,"sha256Hash":"1207d68bf50a5d0d2227446c77650e244d1aa14f4a42f7dcd7be662934c93689"}}' -Authentication Bearer -Token $token
```

</TabItem>

</Tabs>

<details><summary>Click to view full JSON response</summary>

```json
{
  "data": {
    "loyaltyRewardGroupRetrieve": [
      {
        "__typename": "LoyaltyRewardGroup",
        "id": "Digital Collectibles",
        "name": "Digital Collectibles",
        "rewards": [
          {
            "__typename": "LoyaltyRewardCollectible",
            "assets": [
              {
                "__typename": "Media",
                "type": "IMAGE",
                "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/image/masterImage_png_418_1664306106337.png"
              },
              {
                "__typename": "Media",
                "type": "VIDEO",
                "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/video/video_mp4_418_1662589943734.mp4"
              }
            ],
            "description": [
              {
                "__typename": "Description",
                "value": null
              },
              {
                "__typename": "Description",
                "value": "Escape the ape that's in you with the help of this totally stable aspiring pop star."
              }
            ],
            "displayName": "Pink Monkey Diorama",
            "displayPoints": "200",
            "id": "85bc1d70-a9ee-55e7-a97d-905ee2d82a48",
            "name": "Pink Monkey Diorama",
            "rarity": "RARE",
            "rewardType": "COLLECTIBLE"
          },
          {
            "__typename": "LoyaltyRewardCollectible",
            "assets": [
              {
                "__typename": "Media",
                "type": "IMAGE",
                "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/image/masterImage_png_419_1664387327058.png"
              },
              {
                "__typename": "Media",
                "type": "VIDEO",
                "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/video/video_mp4_419_1664387274046.mp4"
              }
            ],
            "description": [
              {
                "__typename": "Description",
                "value": null
              },
              {
                "__typename": "Description",
                "value": "Go forth and explore. Let the stars be your guide."
              }
            ],
            "displayName": "Punto Diorama",
            "displayPoints": "200",
            "id": "f7af95e3-c9c3-5f0c-9a12-1d70ea90237f",
            "name": "Punto Diorama",
            "rarity": "RARE",
            "rewardType": "COLLECTIBLE"
          }
        ]
      },
      {
        "__typename": "LoyaltyRewardGroup",
        "id": "PS Store Rewards",
        "name": "PS Store Rewards",
        "rewards": [
          {
            "__typename": "LoyaltyRewardProduct",
            "assets": [
              {
                "__typename": "Media",
                "type": "IMAGE",
                "url": "https://vulcan.dl.playstation.net/img/rnd/202010/2701/sVLb4wrkXcFff2uuSS8tvErW.png"
              }
            ],
            "description": [
              {
                "__typename": "Description",
                "value": null
              },
              {
                "__typename": "Description",
                "value": "To play this game on PS5, your system may need to be updated to the latest system software. Although this game is playable on PS5, some features available on PS4 may be absent. See PlayStation.com/bc for more details."
              }
            ],
            "displayName": "Sekiro: Shadows Die Twice",
            "displayPoints": "15,000",
            "id": "OFFER-LOYALTY-1244",
            "localizedProductClassifications": [
              "Full Game"
            ],
            "name": "SEKIRO: SHADOWS DIE TWICE (Simplified Chinese, English, Korean, Thai, Traditional Chinese)",
            "platforms": [
              "PS4",
              "PS5",
              "WEB_STORE"
            ],
            "productId": "HP0506-CUSA13910_00-ASIAFULLGAME0000",
            "rewardType": "PRODUCT"
          },
          {
            "__typename": "LoyaltyRewardProduct",
            "assets": [
              {
                "__typename": "Media",
                "type": "IMAGE",
                "url": "https://vulcan.dl.playstation.net/ap/rnd/202207/1823/uGwz6VetgE8k5BpCPKBD1qTj.png"
              }
            ],
            "description": [
              {
                "__typename": "Description",
                "value": null
              },
              {
                "__typename": "Description",
                "value": "To play this game on PS5, your system may need to be updated to the latest system software. Although this game is playable on PS5, some features available on PS4 may be absent. See PlayStation.com/bc for more details."
              }
            ],
            "displayName": "Cult of the Lamb",
            "displayPoints": "6,250",
            "id": "OFFER-LOYALTY-1212",
            "localizedProductClassifications": [
              "Full Game"
            ],
            "name": "Cult of the Lamb (Simplified Chinese, English, Korean, Japanese, Traditional Chinese)",
            "platforms": [
              "PS5",
              "WEB_STORE"
            ],
            "productId": "UP3643-PPSA06464_00-6576653892496327",
            "rewardType": "PRODUCT"
          },
          {
            "__typename": "LoyaltyRewardProduct",
            "assets": [
              {
                "__typename": "Media",
                "type": "IMAGE",
                "url": "https://vulcan.dl.playstation.net/ap/rnd/202012/0815/7CRynuLSAb0vysSC4TmZy5e4.png"
              }
            ],
            "description": [
              {
                "__typename": "Description",
                "value": null
              },
              {
                "__typename": "Description",
                "value": "To play this game on PS5, your system may need to be updated to the latest system software. Although this game is playable on PS5, some features available on PS4 may be absent. See PlayStation.com/bc for more details."
              }
            ],
            "displayName": "It Takes Two PS4™ & PS5™",
            "displayPoints": "10,000",
            "id": "OFFER-LOYALTY-1260",
            "localizedProductClassifications": [
              "Game Bundle"
            ],
            "name": "It Takes Two PS4™ & PS5™ (Simplified Chinese, English, Korean, Japanese, Traditional Chinese)",
            "platforms": [
              "PS5",
              "WEB_STORE"
            ],
            "productId": "UP0006-PPSA02342_00-ITTAKESTWORETAIL",
            "rewardType": "PRODUCT"
          },
          {
            "__typename": "LoyaltyRewardProduct",
            "assets": [
              {
                "__typename": "Media",
                "type": "IMAGE",
                "url": "https://vulcan.dl.playstation.net/ap/rnd/202203/0501/FUr3M0kGxyddUfUeuKBBFf2w.png"
              }
            ],
            "description": [
              {
                "__typename": "Description",
                "value": null
              },
              {
                "__typename": "Description",
                "value": "A thrilling teen horror story, where your decisions shape how the night unfolds"
              }
            ],
            "displayName": "The Quarry",
            "displayPoints": "17,500",
            "id": "OFFER-LOYALTY-1275",
            "localizedProductClassifications": [
              "Full Game"
            ],
            "name": "The Quarry for PS5™ (Simplified Chinese, English, Korean, Japanese, Traditional Chinese)",
            "platforms": [
              "PS5",
              "WEB_STORE"
            ],
            "productId": "UP1001-PPSA05813_00-8185911092060169",
            "rewardType": "PRODUCT"
          },
          {
            "__typename": "LoyaltyRewardProduct",
            "assets": [
              {
                "__typename": "Media",
                "type": "IMAGE",
                "url": "https://vulcan.dl.playstation.net/ap/rnd/202104/0517/9AcM3vy5t77zPiJyKHwRfnNT.png"
              }
            ],
            "description": [
              {
                "__typename": "Description",
                "value": null
              },
              {
                "__typename": "Description",
                "value": "To play this game on PS5, your system may need to be updated to the latest system software. Although this game is playable on PS5, some features available on PS4 may be absent. See PlayStation.com/bc for more details."
              }
            ],
            "displayName": "Hades",
            "displayPoints": "6,250",
            "id": "OFFER-LOYALTY-1276",
            "localizedProductClassifications": [
              "Full Game"
            ],
            "name": "Hades (Simplified Chinese, English, Korean, Japanese)",
            "platforms": [
              "PS5",
              "WEB_STORE"
            ],
            "productId": "UP2125-PPSA03355_00-3466019145463410",
            "rewardType": "PRODUCT"
          }
        ]
      },
      {
        "__typename": "LoyaltyRewardGroup",
        "id": "PS Store Wallet Credit",
        "name": "PS Store Wallet Credit",
        "rewards": [
          {
            "__typename": "LoyaltyRewardWalletCredit",
            "assets": [
              {
                "__typename": "Media",
                "role": "IMAGE",
                "type": "IMAGE",
                "url": "https://sky-assets.api.playstation.com/sky/p1-np/walletCredit/image/walletcredit_11_center.png"
              },
              {
                "__typename": "Media",
                "role": "TILE",
                "type": "IMAGE",
                "url": "https://sky-assets.api.playstation.com/sky/p1-np/walletCredit/image/walletcredit_11_topaligned.png"
              },
              {
                "__typename": "Media",
                "role": "BACKGROUND",
                "type": "IMAGE",
                "url": "https://sky-assets.api.playstation.com/sky/p1-np/walletCredit/image/walletcredit_169_center.png"
              }
            ],
            "description": [
              {
                "__typename": "Description",
                "value": null
              },
              {
                "__typename": "Description",
                "value": "Wallet Credit - $20"
              }
            ],
            "displayName": "Wallet Credit - $20",
            "displayPoints": "4,000",
            "id": "18747538-8dce-569c-91b8-3d46bc1c7296",
            "localizedProductClassifications": [],
            "monetaryValue": "HK$160.00",
            "name": "Wallet Credit - $20",
            "rewardType": "WALLET_CREDIT"
          },
          {
            "__typename": "LoyaltyRewardWalletCredit",
            "assets": [
              {
                "__typename": "Media",
                "role": "IMAGE",
                "type": "IMAGE",
                "url": "https://sky-assets.api.playstation.com/sky/p1-np/walletCredit/image/walletcredit_11_center.png"
              },
              {
                "__typename": "Media",
                "role": "TILE",
                "type": "IMAGE",
                "url": "https://sky-assets.api.playstation.com/sky/p1-np/walletCredit/image/walletcredit_11_topaligned.png"
              },
              {
                "__typename": "Media",
                "role": "BACKGROUND",
                "type": "IMAGE",
                "url": "https://sky-assets.api.playstation.com/sky/p1-np/walletCredit/image/walletcredit_169_center.png"
              }
            ],
            "description": [
              {
                "__typename": "Description",
                "value": null
              },
              {
                "__typename": "Description",
                "value": "Wallet Credit - $5 "
              }
            ],
            "displayName": "Wallet Credit - $5",
            "displayPoints": "1,000",
            "id": "3427176d-bd18-576c-bb89-a4166be94261",
            "localizedProductClassifications": [],
            "monetaryValue": "HK$40.00",
            "name": "Wallet Credit - $5",
            "rewardType": "WALLET_CREDIT"
          }
        ]
      }
    ]
  }
}
```

</details>
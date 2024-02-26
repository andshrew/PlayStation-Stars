---
title: Querying the API
description: Examples for querying the API
sidebar_position: 5
pagination_next: null
pagination_prev: null
---

# Querying the API

## Web Browser

PlayStation web services store their authentication token within a cookie in the browser, so once you have authenticated to one of the services such as the PlayStation Store you can then access any of the endpoint URLs documented here and your browser will automatically use the stored auth token. The API responds with a JSON object, so for a more friendly view you can use a web browser such as FireFox which includes a JSON parser.

1. In your web browser access https://store.playstation.com and log in with a PSN account.

2. In the same browser access one of the URLs documented here, for example: [view a specific collectible](https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyUserCollectibleById&variables={%22collectibleId%22:%2288d25cfa-26ad-572a-9335-a32b9bcabe13%22,%22accountId%22:%22me%22}&extensions={%22persistedQuery%22:{%22version%22:1,%22sha256Hash%22:%2286ecd802c228fbae4b7482d7272932ad18f56516dbf28ede9fdbe1554b796549%22}})

3. The JSON response will be displayed in the browser.
![browser example](img/2022-10-05-18-54-54.png)
_Example with FireFox which automatically parses the JSON response_

## Powershell 7

Powershell includes the [`Invoke-RestMethod`](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/invoke-restmethod?view=powershell-7.1) cmdlet which enables you to to make a request to a URL and process the response - in this case JSON - into a Powershell object.

First configure the authentication token which you will use. See [obtaining an authentication token](#obtaining-an-authentication-token) for more detail.

Now make a request to one of the API URLs using `Invoke-RestMethod`. This will output the response to the screen, but you could instead store the response in a variable or pipe it elsewhere for further processing.

An example to request the PlayStation Stars profile summary for the authenticating account and output the original JSON response to the screen. Additional examples are included within the documentation for each API endpoint.

```powershell
Invoke-RestMethod -Uri 'https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetAccount&variables={"accountId":"me"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"743c32289cdd6fbdead3b34ea80b48d63f8ddab34581469c4dda4ea412e6cf6b"}}' -Authentication Bearer -Token $token | ConvertTo-Json -Depth 5
```

### Obtaining an Authentication Token

:::tip

These instructions _**require**_ PowerShell 7. Download it for Windows/Linux/Mac from https://github.com/PowerShell/PowerShell

:::

1. Open a Powershell session and paste in the following function

```powershell
function Get-AuthenticationToken {
  param(
    [Parameter(Mandatory=$true)]
    [string]$npsso
  )

  if ($PSVersionTable.PSVersion.Major -lt 7) {
    Write-Host "This function requires PowerShell 7. Download it from https://github.com/PowerShell/PowerShell"
    return
  }

  $body = @{
    token_format="jwt"
    grant_type="sso_token"
    npsso=$npsso
    scope="psn:mobile.v2.core psn:clientapp"
  }

  $contentType = "application/x-www-form-urlencoded"
  $url = "https://ca.account.sony.com/api/authz/v3/oauth/token"

  try {
    $result = Invoke-RestMethod -Uri $url -Method Post -Body $body -ContentType $contentType -Headers @{
      "Authorization"="Basic MDk1MTUxNTktNzIzNy00MzcwLTliNDAtMzgwNmU2N2MwODkxOnVjUGprYTV0bnRCMktxc1A="
    }
    $token = ConvertTo-SecureString $result.access_token -AsPlainText
    if ($token) {
      Write-Host "Authentication Token successfully granted"
      return $token
    }
    else { Write-Host "Error: Unable to obtain Authentication Token" }
  }
  catch { Write-Host "Error: Unable to obtain Authentication Token (check npsso)" }
}
```

2. In your web browser access https://store.playstation.com and log in with a PSN account.
3. In the same browser access https://ca.account.sony.com/api/v1/ssocookie<br/>You should see a response with `npsso` followed by a string of letters and numbers. Highlight and copy this.
![ssocookie example](img/2021-03-20-15-33-08.png)

:::danger Understanding the npsso token
**Never share your npsso token with anyone**. This code acts as authorisation to Sony's servers to enable access to information relating to your PlayStation Network account. In addition to permitting access to view information such as your PlayStation Stars membership, your trophies and your purchase and entitlement history, it may also enable personal information disclosure (ie. your real name, your date of birth). In short, if the information is visible in the PlayStation App, then it is accessible via this code. It may also, in certain circumstances, aid a sophisticated attacker in compromising your account.

**Should you ever accidentally share this code**, you can attempt to invalidate it by using the option to sign out of all devices.

Access and log in to the PlayStation Store web site, click your profile picture followed by Account Settings. A new page will load, under the Account section click Security. On the Security page, scroll to the bottom and click `Sign Out of All Devices`.
:::

4. In the PowerShell session run the following command, substituting in your npsso token copied in the previous step
```powershell
$token = Get-AuthenticationToken -npsso "Hwl9Vq%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%"
```
![get-authenticationtoken example](img/2021-03-20-15-41-57.png)

The `$token` variable is now ready to be used in combination with `Invoke-RestMethod` to authenticate your requests to the API.

This will be valid for ~60 minutes after which you will need to repeat these steps to obtain an updated token.
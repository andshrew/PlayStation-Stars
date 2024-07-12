---
title: Points History Parser
description: Parse the User Points History endpoint response
slug: /points-parser
sidebar_position: 2
pagination_next: null
pagination_prev: null
---

import PointsTable from '@site/src/components/parse-points.js';

This page can be used to parse the JSON response from the [User Points History](/user/user-points-history) endpoint into a simple table.

1. In your web browser access https://store.playstation.com and log in with a PSN account.
1. In the same browser access access the [User Points History](https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetPointsHistory&variables=%7B%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22302481c4156ec3f64332bf4b76251597eb30825a79e2736641737bc3af77755c%22%7D%7D) endpoint and copy the entire JSON response.
2. Paste the response into the text box below. Once a valid JSON response has been pasted the table will be automatically generated.

:::tip

You can use the JSON response listed in the example for accessing [User Points History](/user/user-points-history#example-1---retrieve-points-history-for-the-authenticating-account-purchase-campaign-and-wallet-credit) to test this utility.

:::

<PointsTable></PointsTable>
---
title: Home
description: Documentation for the PlayStation Stars API
sidebar_position: 1
slug: '/'
pagination_next: null
pagination_prev: null
---

# PlayStation Stars API Documentation

## Summary

PlayStation Stars is a customer loyalty reward service launched by Sony in late 2022. The service is free to join and enables members to earn rewards including collectible digital items, currency to spend on the PlayStation Store, and digital versions of PS4 and PS5 games.

Sony have an API for retrieving details of this service including the progress which a user has made through the reward tiers, the rewards they have earned and the campaigns (challenges) which are available to complete. As there is no public documentation for using the API this project is an attempt at documenting it.

## API Overview

* Accessing the API requires authentication with a PSN account.
* The information returned will be in the context of the authenticating PSN account.
* Some endpoints allow you to return the details of another PSN account providing that the other accounts privacy settings allow the authenticating PSN account to do so (used for viewing another users display case of collectibles, and their level within the service).
* The service uses GUIDs as the unique identifiers for items (collectibles, rewards) contained within. This is a change from other PlayStation services which have typically used sequential (and consequently guessable) ids for their items.

## Explore the API Endpoints

[User Data](./category/user-endpoints)<br/>
[Service Data](./category/service-endpoints)

## Contribute to the Documentation
Visit the GitHub repository for the project [github.com/andshrew/PlayStation-Stars](https://github.com/andshrew/PlayStation-Stars) or use the _**Edit this page**_ links available at the bottom of every page.
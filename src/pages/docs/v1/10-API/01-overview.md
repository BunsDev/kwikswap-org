---
title: API Overview
tags: api, documentation
---

This section explains the Kwikswap Subgraph and how to interact with it. The Kwikswap subgraph indexes data from the Kwikswap contracts over time. It organizes data about pairs, tokens, Kwikswap as a whole, and more. The subgraph updates any time a transaction is made on Kwikswap. The subgraph runs on [The Graph](https://thegraph.com/) protocol's hosted service and can be openly queried.

## Resources

[Subgraph Explorer](https://thegraph.com/explorer/subgraph/kwikswap/kwikswap-subgraph) - sandbox for querying data and endpoints for developers.

[Kwikswap  Subgraph](https://github.com/Kwikswap/kwikswap-subgraph) - source code for deployed subgraph.

## Usage

The subgraph provides a snapshot of the current state of Kwikswap and also tracks historical data. It is currently used to power [info.kwikswap.org](https://info.kwikswap.org/). **It is not intended to be used as a data source for structuring transactions (contracts should be referenced directly for the most reliable live data).**

## Making Queries

To learn more about querying a subgraph refer to [The Graph's documentation](https://thegraph.com/docs/introduction).

## Versions

The [Kwikswap Subgraph](https://thegraph.com/explorer/subgraph/kwikswap/kwikswap-subgraph) only tracks data on Kwikswap. For Kwikswap information see the [Subgraph](https://thegraph.com/explorer/subgraph/graphprotocol/kwikswap).

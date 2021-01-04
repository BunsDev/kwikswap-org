---
title: Swaps
subtitle: Learn about the core functionality of the kwikswap protocol. Token Swaps.
tags: swaps, documentation
---



# Introduction

Swapping is a kind of process in which, A user picks an input token and get an output token. They specify an input amount, and the Kwikswap protocol automatically calculates how much of the output tokens user will receive. They then execute the swap by clicking the "Swap" button, and immediately user receives the output token in the wallet.

Swapping the ERC-20 Token is quite easy in Kwikswap Protocol.

Kwikswap protocol is a decentralized trading platform. Kwikswap does not use an order book to represent liquidity or determine prices. Kwikswap uses an automated market maker mechanism to provide instant feedback on rates and slippage.

In this guide, we’ll look at what happens during a swap at the Kwikswap protocol level to gain a deeper understanding of how Kwikswap works.

This rule is the [constant product formula](/docs/v1/protocol-overview/glossary#constant-product-formula). When either token is withdrawn (purchased), a proportional amount of the other must be deposited (sold), to maintain the constant.

As we learned in [Protocol Overview](/docs/v1/protocol-overview/how-kwikswap-works), each pair on Kwikswap is actually underpinned by a liquidity pool. Smart contracts are used to maintain the Liquidity Pools of different Tokens.

## Anatomy of a swap

In Kwikswap, all the Swaps are get done by calling the single function of `swap`:

```solidity
function swap(uint amount0Out, uint amount1Out, address to, bytes calldata data);
```

# Receiving tokens

As is probably clear from the function signature, Kwikswap requires `swap` callers to _specify how many output tokens they would like to receive_ via the `amount{0,1}Out` parameters, which correspond to the desired amount of `token{0,1}`.

# Sending Tokens

What’s not as clear is how Kwikswap _receives_ tokens as payment for the swap. Typically, smart contracts which need tokens to perform some functionality require callers to first make an approval on the token contract, then call a function that in turn calls transferFrom on the token contract. This is _not_ how pairs accept tokens. Instead, pairs check their token balances at the _end_ of every interaction. Then, at the beginning of the _next_ interaction, current balances are differenced against the stored values to determine the amount of tokens that were sent by the current interactor. See the <a href='/whitepaper.pdf' rel='noopener noreferrer'>whitepaper</a> for a justification of why this is the case.

# Developer resources

- To see how to implement token swaps in a smart contract read [Trading from a smart contract](/docs/v1/smart-contract-integration/trading-from-a-smart-contract/).
- To see how to execute a swap from an interface read [Trading (SDK)](/docs/v1/javascript-SDK/trading/)

---
title: How Kwikswap works
tags: protocol-overview, documentation
---


Kwikswap is an Decentralized protocol for _automated liquidity_ based on <Link to="/docs/v1/protocol-overview/glossary/#constant-product-formula">constant product formula</Link>
and implemented with non-upgradeable smart contracts on the [Ethereum](https://ethereum.org/) blockchain. 
It removes the need for trusted intermediaries, prioritizing **decentralization**, **censorship resistance**, 
and **security**. Kwikswap is **open-source software** licensed under the
[GPL](https://en.wikipedia.org/wiki/GNU_General_Public_License).

Anybody can turn into a liquidity supplier for a pool by storing an equivalent value of each basic token as a trade-off for pool tokens. These tokens track LP shares of the complete reserves and can be recovered for the underlying resources whenever.

Each Kwikswap smart contract, or pair, manages a liquidity pool made up of reserves of two [ERC-20](https://eips.ethereum.org/EIPS/eip-20) tokens.

Pairs act as automated market makers, standing ready to accept one token for the other as long as the “constant product” formula is preserved. This formula, most simply expressed as `x * y = k`, states that trades must not change the product (`k`) of a pair’s reserve balances (`x` and `y`). Because `k` remains unchanged from the reference frame of a trade, it is often referred to as the invariant. This formula has the desirable property that larger trades (relative to reserves) execute at exponentially worse rates than smaller ones.

In practice, Kwikswap applies a 0.30% fee to trades, which is added to reserves. As a result, each trade actually increases `k`. This functions as a payout to LPs, which is realized when they burn their pool tokens to withdraw their portion of total reserves. In the future, this fee may be reduced to 0.25%, with the remaining 0.05% withheld as a protocol-wide charge.

Because the relative price of the two pair assets can only be changed through trading, divergences between the Kwikswap price and external prices create arbitrage opportunities. This mechanism ensures that Kwikswap prices always trend toward the market-clearing price.

# Further reading

To see how token swaps work in practice, and to walk through the lifecycle of a swap, check out <Link to="/docs/v1/core-concepts/swaps">Swaps</Link>. Or, to see how liquidity pools work, see <Link to="/docs/v1/core-concepts/pools">Pools</Link>.

Ultimately, of course, the Kwikswap protocol is just smart contract code running on Ethereum. To understand how they work, head over to <Link to="/docs/v1/protocol-overview/smart-contracts/">Smart Contracts</Link>.

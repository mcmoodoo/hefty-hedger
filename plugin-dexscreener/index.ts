// import type { Plugin } from "@elizaos/core"
// import { TokenPriceProvider } from "./tokenProvider.ts"

// export const dexScreenerPlugin: Plugin = {
// 	name: "dexscreener",
// 	description: "Dex Screener Plugin with Token Price Action, Token Trends, Evaluators and Providers",
// 	actions: [],
// 	evaluators: [],
// 	providers: [new TokenPriceProvider()],
// }

// export default dexScreenerPlugin



import type { Plugin } from "@elizaos/core"
import { TokenPriceAction } from "./src/actions/tokenAction.ts"
import { TokenPriceEvaluator } from "./src/evaluators/tokenEvaluator.ts"
import { TokenPriceProvider } from "./src/providers/tokenProvider.ts"
import { LatestTokensAction, LatestBoostedTokensAction, TopBoostedTokensAction } from "./src/actions/trendsAction.ts"

// export * as actions from "./actions"
// export * as evaluators from "./evaluators"
// export * as providers from "./providers"

export const dexScreenerPlugin: Plugin = {
	name: "dexscreener",
	description: "Dex Screener Plugin with Token Price Action, Token Trends, Evaluators and Providers",
	actions: [new TokenPriceAction(), new LatestTokensAction(), new LatestBoostedTokensAction(), new TopBoostedTokensAction()],
	evaluators: [new TokenPriceEvaluator()],
	providers: [new TokenPriceProvider()],
}

export default dexScreenerPlugin

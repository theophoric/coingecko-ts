import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';


import { CoinsApiRequestFactory, CoinsApiResponseProcessor} from "../apis/CoinsApi";
export class ObservableCoinsApi {
    private requestFactory: CoinsApiRequestFactory;
    private responseProcessor: CoinsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CoinsApiRequestFactory,
        responseProcessor?: CoinsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CoinsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CoinsApiResponseProcessor();
    }

    /**
     * Get current data (name, price, market, ... including exchange tickers) for a coin.<br><br> **IMPORTANT**:  Ticker object is limited to 100 items, to get more tickers, use `/coins/{id}/tickers`  Ticker `is_stale` is true when ticker that has not been updated/unchanged from the exchange for a while.  Ticker `is_anomaly` is true if ticker's price is outliered by our system.  You are responsible for managing how you want to display these information (e.g. footnote, different background, change opacity, hide) 
     * Get current data (name, price, market, ... including exchange tickers) for a coin
     * @param id pass the coin id (can be obtained from /coins) eg. bitcoin
     * @param localization Include all localized languages in response (true/false) &lt;b&gt;[default: true]&lt;/b&gt;
     * @param tickers Include tickers data (true/false) &lt;b&gt;[default: true]&lt;/b&gt;
     * @param marketData Include market_data (true/false) &lt;b&gt;[default: true]&lt;/b&gt;
     * @param communityData Include community_data data (true/false) &lt;b&gt;[default: true]&lt;/b&gt;
     * @param developerData Include developer_data data (true/false) &lt;b&gt;[default: true]&lt;/b&gt;
     * @param sparkline Include sparkline 7 days data (eg. true, false) &lt;b&gt;[default: false]&lt;/b&gt;
     */
    public coinsIdGet(id: string, localization?: string, tickers?: boolean, marketData?: boolean, communityData?: boolean, developerData?: boolean, sparkline?: boolean, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.coinsIdGet(id, localization, tickers, marketData, communityData, developerData, sparkline, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.coinsIdGet(rsp)));
	    	}));
    }
	
    /**
     * Get historical data (name, price, market, stats) at a given date for a coin 
     * Get historical data (name, price, market, stats) at a given date for a coin
     * @param id pass the coin id (can be obtained from /coins) eg. bitcoin
     * @param date The date of data snapshot in dd-mm-yyyy eg. 30-12-2017
     * @param localization Set to false to exclude localized languages in response
     */
    public coinsIdHistoryGet(id: string, date: string, localization?: string, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.coinsIdHistoryGet(id, date, localization, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.coinsIdHistoryGet(rsp)));
	    	}));
    }
	
    /**
     * Get historical market data include price, market cap, and 24h volume (granularity auto)  <b>Minutely data will be used for duration within 1 day, Hourly data will be used for duration between 1 day and 90 days, Daily data will be used for duration above 90 days.</b>
     * Get historical market data include price, market cap, and 24h volume (granularity auto)
     * @param id pass the coin id (can be obtained from /coins) eg. bitcoin
     * @param vsCurrency The target currency of market data (usd, eur, jpy, etc.)
     * @param days Data up to number of days ago (eg. 1,14,30,max)
     * @param interval Data interval. Possible value: daily
     */
    public coinsIdMarketChartGet(id: string, vsCurrency: string, days: string, interval?: string, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.coinsIdMarketChartGet(id, vsCurrency, days, interval, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.coinsIdMarketChartGet(rsp)));
	    	}));
    }
	
    /**
     * Get historical market data include price, market cap, and 24h volume within a range of timestamp (granularity auto)  <b>Minutely data will be used for duration within 1 day, Hourly data will be used for duration between 1 day and 90 days, Daily data will be used for duration above 90 days.</b>
     * Get historical market data include price, market cap, and 24h volume within a range of timestamp (granularity auto)
     * @param id pass the coin id (can be obtained from /coins) eg. bitcoin
     * @param vsCurrency The target currency of market data (usd, eur, jpy, etc.)
     * @param from From date in UNIX Timestamp (eg. 1392577232)
     * @param to To date in UNIX Timestamp (eg. 1422577232)
     */
    public coinsIdMarketChartRangeGet(id: string, vsCurrency: string, from: string, to: string, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.coinsIdMarketChartRangeGet(id, vsCurrency, from, to, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.coinsIdMarketChartRangeGet(rsp)));
	    	}));
    }
	
    /**
     * Candle's body:  1 - 2 days: 30 minutes 3 - 30 days: 4 hours 31 and before: 4 days
     * Get coin's OHLC (Beta)
     * @param id pass the coin id (can be obtained from /coins/list) eg. bitcoin
     * @param vsCurrency The target currency of market data (usd, eur, jpy, etc.)
     * @param days  Data up to number of days ago (1/7/14/30/90/180/365/max)
     */
    public coinsIdOhlcGet(id: string, vsCurrency: string, days: number, options?: Configuration): Observable<Array<number>> {
    	const requestContextPromise = this.requestFactory.coinsIdOhlcGet(id, vsCurrency, days, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.coinsIdOhlcGet(rsp)));
	    	}));
    }
	
    /**
     * Get status updates for a given coin
     * Get status updates for a given coin (beta)
     * @param id pass the coin id (can be obtained from /coins) eg. bitcoin
     * @param perPage Total results per page
     * @param page Page through results
     */
    public coinsIdStatusUpdatesGet(id: string, perPage?: number, page?: number, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.coinsIdStatusUpdatesGet(id, perPage, page, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.coinsIdStatusUpdatesGet(rsp)));
	    	}));
    }
	
    /**
     * Get coin tickers (paginated to 100 items)<br><br> **IMPORTANT**:  Ticker `is_stale` is true when ticker that has not been updated/unchanged from the exchange for a while.  Ticker `is_anomaly` is true if ticker's price is outliered by our system.  You are responsible for managing how you want to display these information (e.g. footnote, different background, change opacity, hide) 
     * Get coin tickers (paginated to 100 items)
     * @param id pass the coin id (can be obtained from /coins/list) eg. bitcoin
     * @param exchangeIds filter results by exchange_ids (ref: v3/exchanges/list)
     * @param includeExchangeLogo flag to show exchange_logo
     * @param page Page through results
     * @param order valid values: &lt;b&gt;trust_score_desc (default), trust_score_asc and volume_desc&lt;/b&gt;
     * @param depth flag to show 2% orderbook depth. valid values: true, false
     */
    public coinsIdTickersGet(id: string, exchangeIds?: string, includeExchangeLogo?: string, page?: number, order?: string, depth?: string, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.coinsIdTickersGet(id, exchangeIds, includeExchangeLogo, page, order, depth, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.coinsIdTickersGet(rsp)));
	    	}));
    }
	
    /**
     * Use this to obtain all the coins' id in order to make API calls
     * List all supported coins id, name and symbol (no pagination required)
     * @param includePlatform flag to include platform contract addresses (eg. 0x.... for Ethereum based tokens).   valid values: true, false
     */
    public coinsListGet(includePlatform?: boolean, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.coinsListGet(includePlatform, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.coinsListGet(rsp)));
	    	}));
    }
	
    /**
     * Use this to obtain all the coins market data (price, market cap, volume)
     * List all supported coins price, market cap, volume, and market related data
     * @param vsCurrency The target currency of market data (usd, eur, jpy, etc.)
     * @param ids The ids of the coin, comma separated crytocurrency symbols (base). refers to &#x60;/coins/list&#x60;. &lt;b&gt;When left empty, returns numbers the coins observing the params &#x60;limit&#x60; and &#x60;start&#x60;&lt;/b&gt;
     * @param category filter by coin category, only decentralized_finance_defi is supported at the moment
     * @param order valid values: &lt;b&gt;market_cap_desc, gecko_desc, gecko_asc, market_cap_asc, market_cap_desc, volume_asc, volume_desc, id_asc, id_desc&lt;/b&gt; sort results by field.
     * @param perPage valid values: 1..250  Total results per page
     * @param page Page through results
     * @param sparkline Include sparkline 7 days data (eg. true, false)
     * @param priceChangePercentage Include price change percentage in &lt;b&gt;1h, 24h, 7d, 14d, 30d, 200d, 1y&lt;/b&gt; (eg. &#39;&#x60;1h,24h,7d&#x60;&#39; comma-separated, invalid values will be discarded)
     */
    public coinsMarketsGet(vsCurrency: string, ids?: string, category?: string, order?: string, perPage?: number, page?: number, sparkline?: boolean, priceChangePercentage?: string, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.coinsMarketsGet(vsCurrency, ids, category, order, perPage, page, sparkline, priceChangePercentage, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.coinsMarketsGet(rsp)));
	    	}));
    }
	

}




import { ContractApiRequestFactory, ContractApiResponseProcessor} from "../apis/ContractApi";
export class ObservableContractApi {
    private requestFactory: ContractApiRequestFactory;
    private responseProcessor: ContractApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ContractApiRequestFactory,
        responseProcessor?: ContractApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ContractApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ContractApiResponseProcessor();
    }

    /**
     * Get coin info from contract address
     * Get coin info from contract address
     * @param id Asset platform (only &#x60;ethereum&#x60; is supported at this moment)
     * @param contractAddress Token&#39;s contract address
     */
    public coinsIdContractContractAddressGet(id: string, contractAddress: string, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.coinsIdContractContractAddressGet(id, contractAddress, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.coinsIdContractContractAddressGet(rsp)));
	    	}));
    }
	
    /**
     * Get historical market data include price, market cap, and 24h volume (granularity auto) 
     * Get historical market data include price, market cap, and 24h volume (granularity auto) from a contract address 
     * @param id The id of the platform issuing tokens (Only &#x60;ethereum&#x60; is supported for now)
     * @param contractAddress Token&#39;s contract address
     * @param vsCurrency The target currency of market data (usd, eur, jpy, etc.)
     * @param days Data up to number of days ago (eg. 1,14,30,max)
     */
    public coinsIdContractContractAddressMarketChartGet(id: string, contractAddress: string, vsCurrency: string, days: string, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.coinsIdContractContractAddressMarketChartGet(id, contractAddress, vsCurrency, days, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.coinsIdContractContractAddressMarketChartGet(rsp)));
	    	}));
    }
	
    /**
     * Get historical market data include price, market cap, and 24h volume within a range of timestamp (granularity auto) 
     * Get historical market data include price, market cap, and 24h volume within a range of timestamp (granularity auto) from a contract address
     * @param id The id of the platform issuing tokens (Only &#x60;ethereum&#x60; is supported for now)
     * @param contractAddress Token&#39;s contract address
     * @param vsCurrency The target currency of market data (usd, eur, jpy, etc.)
     * @param from From date in UNIX Timestamp (eg. 1392577232)
     * @param to To date in UNIX Timestamp (eg. 1422577232)
     */
    public coinsIdContractContractAddressMarketChartRangeGet(id: string, contractAddress: string, vsCurrency: string, from: string, to: string, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.coinsIdContractContractAddressMarketChartRangeGet(id, contractAddress, vsCurrency, from, to, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.coinsIdContractContractAddressMarketChartRangeGet(rsp)));
	    	}));
    }
	

}




import { DerivativesBetaApiRequestFactory, DerivativesBetaApiResponseProcessor} from "../apis/DerivativesBetaApi";
export class ObservableDerivativesBetaApi {
    private requestFactory: DerivativesBetaApiRequestFactory;
    private responseProcessor: DerivativesBetaApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DerivativesBetaApiRequestFactory,
        responseProcessor?: DerivativesBetaApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DerivativesBetaApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DerivativesBetaApiResponseProcessor();
    }

    /**
     * List all derivative exchanges
     * List all derivative exchanges
     * @param order order results using following params name_asc，name_desc，open_interest_btc_asc，open_interest_btc_desc，trade_volume_24h_btc_asc，trade_volume_24h_btc_desc
     * @param perPage Total results per page
     * @param page Page through results
     */
    public derivativesExchangesGet(order?: string, perPage?: number, page?: number, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.derivativesExchangesGet(order, perPage, page, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.derivativesExchangesGet(rsp)));
	    	}));
    }
	
    /**
     * show derivative exchange data
     * show derivative exchange data
     * @param id pass the exchange id (can be obtained from derivatives/exchanges/list) eg. bitmex
     * @param includeTickers [&#39;all&#39;, &#39;unexpired&#39;] - expired to show unexpired tickers, all to list all tickers, leave blank to omit tickers data in response
     */
    public derivativesExchangesIdGet(id: string, includeTickers?: string, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.derivativesExchangesIdGet(id, includeTickers, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.derivativesExchangesIdGet(rsp)));
	    	}));
    }
	
    /**
     * List all derivative exchanges name and identifier
     * List all derivative exchanges name and identifier
     */
    public derivativesExchangesListGet(options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.derivativesExchangesListGet(options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.derivativesExchangesListGet(rsp)));
	    	}));
    }
	
    /**
     * List all derivative tickers
     * List all derivative tickers
     * @param includeTickers [&#39;all&#39;, &#39;unexpired&#39;] - expired to show unexpired tickers, all to list all tickers, defaults to unexpired
     */
    public derivativesGet(includeTickers?: string, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.derivativesGet(includeTickers, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.derivativesGet(rsp)));
	    	}));
    }
	

}




import { EventsApiRequestFactory, EventsApiResponseProcessor} from "../apis/EventsApi";
export class ObservableEventsApi {
    private requestFactory: EventsApiRequestFactory;
    private responseProcessor: EventsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EventsApiRequestFactory,
        responseProcessor?: EventsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EventsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EventsApiResponseProcessor();
    }

    /**
     * Get list of event countries 
     * Get list of event countries
     */
    public eventsCountriesGet(options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.eventsCountriesGet(options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventsCountriesGet(rsp)));
	    	}));
    }
	
    /**
     * Get events, paginated by 100 
     * Get events, paginated by 100
     * @param countryCode country_code of event (eg. &#39;US&#39;). use &lt;b&gt;/api/v3/events/countries&lt;/b&gt; for list of country_codes
     * @param type type of event (eg. &#39;Conference&#39;). use &lt;b&gt;/api/v3/events/types&lt;/b&gt; for list of types
     * @param page page of results (paginated by 100)
     * @param upcomingEventsOnly lists only upcoming events. &lt;br&gt;true, false&lt;/br&gt; (defaults to true, set to false to list all events)
     * @param fromDate lists events after this date yyyy-mm-dd
     * @param toDate lists events before this date yyyy-mm-dd (set upcoming_events_only to false if fetching past events)
     */
    public eventsGet(countryCode?: string, type?: string, page?: number, upcomingEventsOnly?: boolean, fromDate?: string, toDate?: string, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.eventsGet(countryCode, type, page, upcomingEventsOnly, fromDate, toDate, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventsGet(rsp)));
	    	}));
    }
	
    /**
     * Get list of event types 
     * Get list of events types
     */
    public eventsTypesGet(options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.eventsTypesGet(options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventsTypesGet(rsp)));
	    	}));
    }
	

}




import { ExchangeRatesApiRequestFactory, ExchangeRatesApiResponseProcessor} from "../apis/ExchangeRatesApi";
export class ObservableExchangeRatesApi {
    private requestFactory: ExchangeRatesApiRequestFactory;
    private responseProcessor: ExchangeRatesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ExchangeRatesApiRequestFactory,
        responseProcessor?: ExchangeRatesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ExchangeRatesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ExchangeRatesApiResponseProcessor();
    }

    /**
     * Get BTC-to-Currency exchange rates 
     * Get BTC-to-Currency exchange rates
     */
    public exchangeRatesGet(options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.exchangeRatesGet(options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.exchangeRatesGet(rsp)));
	    	}));
    }
	

}




import { ExchangesBetaApiRequestFactory, ExchangesBetaApiResponseProcessor} from "../apis/ExchangesBetaApi";
export class ObservableExchangesBetaApi {
    private requestFactory: ExchangesBetaApiRequestFactory;
    private responseProcessor: ExchangesBetaApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ExchangesBetaApiRequestFactory,
        responseProcessor?: ExchangesBetaApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ExchangesBetaApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ExchangesBetaApiResponseProcessor();
    }

    /**
     * List all exchanges
     * List all exchanges
     * @param perPage Valid values: 1...250 Total results per page Default value:: 100
     * @param page page through results
     */
    public exchangesGet(perPage?: number, page?: number, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.exchangesGet(perPage, page, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.exchangesGet(rsp)));
	    	}));
    }
	
    /**
     * Get exchange volume in BTC and tickers<br><br> **IMPORTANT**:  Ticker object is limited to 100 items, to get more tickers, use `/exchanges/{id}/tickers`  Ticker `is_stale` is true when ticker that has not been updated/unchanged from the exchange for a while.  Ticker `is_anomaly` is true if ticker's price is outliered by our system.  You are responsible for managing how you want to display these information (e.g. footnote, different background, change opacity, hide) 
     * Get exchange volume in BTC and top 100 tickers only
     * @param id pass the exchange id (can be obtained from /exchanges/list) eg. binance
     */
    public exchangesIdGet(id: string, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.exchangesIdGet(id, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.exchangesIdGet(rsp)));
	    	}));
    }
	
    /**
     * Get status updates for a given exchange
     * Get status updates for a given exchange (beta)
     * @param id pass the exchange id (can be obtained from /exchanges/list) eg. binance
     * @param perPage Total results per page
     * @param page Page through results
     */
    public exchangesIdStatusUpdatesGet(id: string, perPage?: number, page?: number, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.exchangesIdStatusUpdatesGet(id, perPage, page, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.exchangesIdStatusUpdatesGet(rsp)));
	    	}));
    }
	
    /**
     * Get exchange tickers (paginated)<br><br> **IMPORTANT**:  Ticker `is_stale` is true when ticker that has not been updated/unchanged from the exchange for a while.  Ticker `is_anomaly` is true if ticker's price is outliered by our system.  You are responsible for managing how you want to display these information (e.g. footnote, different background, change opacity, hide) 
     * Get exchange tickers (paginated, 100 tickers per page)
     * @param id pass the exchange id (can be obtained from /exchanges/list) eg. binance
     * @param coinIds filter tickers by coin_ids (ref: v3/coins/list)
     * @param includeExchangeLogo flag to show exchange_logo
     * @param page Page through results
     * @param depth flag to show 2% orderbook depth i.e., cost_to_move_up_usd and cost_to_move_down_usd
     * @param order valid values: &lt;b&gt;trust_score_desc (default), trust_score_asc and volume_desc&lt;/b&gt;
     */
    public exchangesIdTickersGet(id: string, coinIds?: string, includeExchangeLogo?: string, page?: number, depth?: string, order?: string, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.exchangesIdTickersGet(id, coinIds, includeExchangeLogo, page, depth, order, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.exchangesIdTickersGet(rsp)));
	    	}));
    }
	
    /**
     * Get volume_chart data for a given exchange
     * Get volume_chart data for a given exchange (beta)
     * @param id pass the exchange id (can be obtained from /exchanges/list) eg. binance
     * @param days  Data up to number of days ago (eg. 1,14,30)
     */
    public exchangesIdVolumeChartGet(id: string, days: number, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.exchangesIdVolumeChartGet(id, days, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.exchangesIdVolumeChartGet(rsp)));
	    	}));
    }
	
    /**
     * Use this to obtain all the markets' id in order to make API calls
     * List all supported markets id and name (no pagination required)
     */
    public exchangesListGet(options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.exchangesListGet(options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.exchangesListGet(rsp)));
	    	}));
    }
	

}




import { FinanceBetaApiRequestFactory, FinanceBetaApiResponseProcessor} from "../apis/FinanceBetaApi";
export class ObservableFinanceBetaApi {
    private requestFactory: FinanceBetaApiRequestFactory;
    private responseProcessor: FinanceBetaApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FinanceBetaApiRequestFactory,
        responseProcessor?: FinanceBetaApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FinanceBetaApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FinanceBetaApiResponseProcessor();
    }

    /**
     * List all finance platforms
     * List all finance platforms
     * @param perPage Total results per page
     * @param page page of results (paginated to 100 by default)
     */
    public financePlatformsGet(perPage?: number, page?: number, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.financePlatformsGet(perPage, page, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.financePlatformsGet(rsp)));
	    	}));
    }
	
    /**
     * List all finance products
     * List all finance products
     * @param perPage Total results per page
     * @param page page of results (paginated to 100 by default)
     * @param startAt start date of the financial products
     * @param endAt end date of the financial products
     */
    public financeProductsGet(perPage?: number, page?: string, startAt?: string, endAt?: string, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.financeProductsGet(perPage, page, startAt, endAt, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.financeProductsGet(rsp)));
	    	}));
    }
	

}




import { GlobalApiRequestFactory, GlobalApiResponseProcessor} from "../apis/GlobalApi";
export class ObservableGlobalApi {
    private requestFactory: GlobalApiRequestFactory;
    private responseProcessor: GlobalApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: GlobalApiRequestFactory,
        responseProcessor?: GlobalApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GlobalApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GlobalApiResponseProcessor();
    }

    /**
     * Get Top 100 Cryptocurrency Global Eecentralized Finance(defi) data 
     * Get cryptocurrency global decentralized finance(defi) data
     */
    public globalDecentralizedFinanceDefiGet(options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.globalDecentralizedFinanceDefiGet(options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.globalDecentralizedFinanceDefiGet(rsp)));
	    	}));
    }
	
    /**
     * Get cryptocurrency global data 
     * Get cryptocurrency global data
     */
    public globalGet(options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.globalGet(options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.globalGet(rsp)));
	    	}));
    }
	

}




import { IndexesBetaApiRequestFactory, IndexesBetaApiResponseProcessor} from "../apis/IndexesBetaApi";
export class ObservableIndexesBetaApi {
    private requestFactory: IndexesBetaApiRequestFactory;
    private responseProcessor: IndexesBetaApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: IndexesBetaApiRequestFactory,
        responseProcessor?: IndexesBetaApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new IndexesBetaApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new IndexesBetaApiResponseProcessor();
    }

    /**
     * List all market indexes
     * List all market indexes
     * @param perPage Total results per page
     * @param page Page through results
     */
    public indexesGet(perPage?: number, page?: number, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.indexesGet(perPage, page, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.indexesGet(rsp)));
	    	}));
    }
	
    /**
     * get market index by market id and market index id
     * get market index by market id and market index id
     * @param marketId pass the market id (can be obtained from /exchanges/list)
     * @param id pass the index id (can be obtained from /indexes/list)
     */
    public indexesListByMarketAndIdMarketIdIdGet(marketId: string, id: string, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.indexesListByMarketAndIdMarketIdIdGet(marketId, id, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.indexesListByMarketAndIdMarketIdIdGet(rsp)));
	    	}));
    }
	
    /**
     * list market indexes id and name
     * list market indexes id and name
     */
    public indexesListGet(options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.indexesListGet(options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.indexesListGet(rsp)));
	    	}));
    }
	
    /**
     * get market index by market id and index id
     * get market index by market id and index id
     * @param marketId pass the market id (can be obtained from /exchanges/list)
     * @param id pass the index id (can be obtained from /indexes/list)
     */
    public indexesMarketIdIdGet(marketId: string, id: string, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.indexesMarketIdIdGet(marketId, id, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.indexesMarketIdIdGet(rsp)));
	    	}));
    }
	

}




import { PingApiRequestFactory, PingApiResponseProcessor} from "../apis/PingApi";
export class ObservablePingApi {
    private requestFactory: PingApiRequestFactory;
    private responseProcessor: PingApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PingApiRequestFactory,
        responseProcessor?: PingApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PingApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PingApiResponseProcessor();
    }

    /**
     * Check API server status 
     * Check API server status
     */
    public pingGet(options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.pingGet(options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pingGet(rsp)));
	    	}));
    }
	

}




import { SimpleApiRequestFactory, SimpleApiResponseProcessor} from "../apis/SimpleApi";
export class ObservableSimpleApi {
    private requestFactory: SimpleApiRequestFactory;
    private responseProcessor: SimpleApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SimpleApiRequestFactory,
        responseProcessor?: SimpleApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SimpleApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SimpleApiResponseProcessor();
    }

    /**
     * Get the current price of any cryptocurrencies in any other supported currencies that you need.
     * @param ids id of coins, comma-separated if querying more than 1 coin *refers to &lt;b&gt;&#x60;coins/list&#x60;&lt;/b&gt;
     * @param vsCurrencies vs_currency of coins, comma-separated if querying more than 1 vs_currency *refers to &lt;b&gt;&#x60;simple/supported_vs_currencies&#x60;&lt;/b&gt;
     * @param includeMarketCap &lt;b&gt;true/false&lt;/b&gt; to include market_cap, &lt;b&gt;default: false&lt;/b&gt;
     * @param include24hrVol &lt;b&gt;true/false&lt;/b&gt; to include 24hr_vol, &lt;b&gt;default: false&lt;/b&gt;
     * @param include24hrChange &lt;b&gt;true/false&lt;/b&gt; to include 24hr_change, &lt;b&gt;default: false&lt;/b&gt;
     * @param includeLastUpdatedAt &lt;b&gt;true/false&lt;/b&gt; to include last_updated_at of price, &lt;b&gt;default: false&lt;/b&gt;
     */
    public simplePriceGet(ids: string, vsCurrencies: string, includeMarketCap?: string, include24hrVol?: string, include24hrChange?: string, includeLastUpdatedAt?: string, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.simplePriceGet(ids, vsCurrencies, includeMarketCap, include24hrVol, include24hrChange, includeLastUpdatedAt, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.simplePriceGet(rsp)));
	    	}));
    }
	
    /**
     * Get list of supported_vs_currencies.
     */
    public simpleSupportedVsCurrenciesGet(options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.simpleSupportedVsCurrenciesGet(options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.simpleSupportedVsCurrenciesGet(rsp)));
	    	}));
    }
	
    /**
     * Get current price of tokens (using contract addresses) for a given platform in any other currency that you need.
     * @param id The id of the platform issuing tokens (Only &#x60;ethereum&#x60; is supported for now)
     * @param contractAddresses The contract address of tokens, comma separated
     * @param vsCurrencies vs_currency of coins, comma-separated if querying more than 1 vs_currency *refers to &lt;b&gt;&#x60;simple/supported_vs_currencies&#x60;&lt;/b&gt;
     * @param includeMarketCap &lt;b&gt;true/false&lt;/b&gt; to include market_cap, &lt;b&gt;default: false&lt;/b&gt;
     * @param include24hrVol &lt;b&gt;true/false&lt;/b&gt; to include 24hr_vol, &lt;b&gt;default: false&lt;/b&gt;
     * @param include24hrChange &lt;b&gt;true/false&lt;/b&gt; to include 24hr_change, &lt;b&gt;default: false&lt;/b&gt;
     * @param includeLastUpdatedAt &lt;b&gt;true/false&lt;/b&gt; to include last_updated_at of price, &lt;b&gt;default: false&lt;/b&gt;
     */
    public simpleTokenPriceIdGet(id: string, contractAddresses: string, vsCurrencies: string, includeMarketCap?: string, include24hrVol?: string, include24hrChange?: string, includeLastUpdatedAt?: string, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.simpleTokenPriceIdGet(id, contractAddresses, vsCurrencies, includeMarketCap, include24hrVol, include24hrChange, includeLastUpdatedAt, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.simpleTokenPriceIdGet(rsp)));
	    	}));
    }
	

}




import { StatusUpdatesBetaApiRequestFactory, StatusUpdatesBetaApiResponseProcessor} from "../apis/StatusUpdatesBetaApi";
export class ObservableStatusUpdatesBetaApi {
    private requestFactory: StatusUpdatesBetaApiRequestFactory;
    private responseProcessor: StatusUpdatesBetaApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: StatusUpdatesBetaApiRequestFactory,
        responseProcessor?: StatusUpdatesBetaApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new StatusUpdatesBetaApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new StatusUpdatesBetaApiResponseProcessor();
    }

    /**
     * List all status_updates with data (description, category, created_at, user, user_title and pin) 
     * List all status_updates with data (description, category, created_at, user, user_title and pin)
     * @param category Filtered by category (eg. general, milestone, partnership, exchange_listing, software_release, fund_movement, new_listings, event)
     * @param projectType Filtered by Project Type (eg. coin, market). If left empty returns both status from coins and markets.
     * @param perPage Total results per page
     * @param page Page through results
     */
    public statusUpdatesGet(category?: string, projectType?: string, perPage?: number, page?: number, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.statusUpdatesGet(category, projectType, perPage, page, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.statusUpdatesGet(rsp)));
	    	}));
    }
	

}




import { TrendingApiRequestFactory, TrendingApiResponseProcessor} from "../apis/TrendingApi";
export class ObservableTrendingApi {
    private requestFactory: TrendingApiRequestFactory;
    private responseProcessor: TrendingApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TrendingApiRequestFactory,
        responseProcessor?: TrendingApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TrendingApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TrendingApiResponseProcessor();
    }

    /**
     * Top-7 trending coins on CoinGecko as searched by users in the last 24 hours (Ordered by most popular first)
     * Get trending search coins (Top-7) on CoinGecko in the last 24 hours
     */
    public searchTrendingGet(options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.searchTrendingGet(options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchTrendingGet(rsp)));
	    	}));
    }
	

}




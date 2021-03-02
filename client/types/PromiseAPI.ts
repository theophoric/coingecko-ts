import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { ObservableCoinsApi } from './ObservableAPI';


import { CoinsApiRequestFactory, CoinsApiResponseProcessor} from "../apis/CoinsApi";
export class PromiseCoinsApi {
    private api: ObservableCoinsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CoinsApiRequestFactory,
        responseProcessor?: CoinsApiResponseProcessor
    ) {
        this.api = new ObservableCoinsApi(configuration, requestFactory, responseProcessor);
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
    public coinsIdGet(id: string, localization?: string, tickers?: boolean, marketData?: boolean, communityData?: boolean, developerData?: boolean, sparkline?: boolean, options?: Configuration): Promise<void> {
    	const result = this.api.coinsIdGet(id, localization, tickers, marketData, communityData, developerData, sparkline, options);
        return result.toPromise();
    }
	
    /**
     * Get historical data (name, price, market, stats) at a given date for a coin 
     * Get historical data (name, price, market, stats) at a given date for a coin
     * @param id pass the coin id (can be obtained from /coins) eg. bitcoin
     * @param date The date of data snapshot in dd-mm-yyyy eg. 30-12-2017
     * @param localization Set to false to exclude localized languages in response
     */
    public coinsIdHistoryGet(id: string, date: string, localization?: string, options?: Configuration): Promise<void> {
    	const result = this.api.coinsIdHistoryGet(id, date, localization, options);
        return result.toPromise();
    }
	
    /**
     * Get historical market data include price, market cap, and 24h volume (granularity auto)  <b>Minutely data will be used for duration within 1 day, Hourly data will be used for duration between 1 day and 90 days, Daily data will be used for duration above 90 days.</b>
     * Get historical market data include price, market cap, and 24h volume (granularity auto)
     * @param id pass the coin id (can be obtained from /coins) eg. bitcoin
     * @param vsCurrency The target currency of market data (usd, eur, jpy, etc.)
     * @param days Data up to number of days ago (eg. 1,14,30,max)
     * @param interval Data interval. Possible value: daily
     */
    public coinsIdMarketChartGet(id: string, vsCurrency: string, days: string, interval?: string, options?: Configuration): Promise<void> {
    	const result = this.api.coinsIdMarketChartGet(id, vsCurrency, days, interval, options);
        return result.toPromise();
    }
	
    /**
     * Get historical market data include price, market cap, and 24h volume within a range of timestamp (granularity auto)  <b>Minutely data will be used for duration within 1 day, Hourly data will be used for duration between 1 day and 90 days, Daily data will be used for duration above 90 days.</b>
     * Get historical market data include price, market cap, and 24h volume within a range of timestamp (granularity auto)
     * @param id pass the coin id (can be obtained from /coins) eg. bitcoin
     * @param vsCurrency The target currency of market data (usd, eur, jpy, etc.)
     * @param from From date in UNIX Timestamp (eg. 1392577232)
     * @param to To date in UNIX Timestamp (eg. 1422577232)
     */
    public coinsIdMarketChartRangeGet(id: string, vsCurrency: string, from: string, to: string, options?: Configuration): Promise<void> {
    	const result = this.api.coinsIdMarketChartRangeGet(id, vsCurrency, from, to, options);
        return result.toPromise();
    }
	
    /**
     * Candle's body:  1 - 2 days: 30 minutes 3 - 30 days: 4 hours 31 and before: 4 days
     * Get coin's OHLC (Beta)
     * @param id pass the coin id (can be obtained from /coins/list) eg. bitcoin
     * @param vsCurrency The target currency of market data (usd, eur, jpy, etc.)
     * @param days  Data up to number of days ago (1/7/14/30/90/180/365/max)
     */
    public coinsIdOhlcGet(id: string, vsCurrency: string, days: number, options?: Configuration): Promise<Array<number>> {
    	const result = this.api.coinsIdOhlcGet(id, vsCurrency, days, options);
        return result.toPromise();
    }
	
    /**
     * Get status updates for a given coin
     * Get status updates for a given coin (beta)
     * @param id pass the coin id (can be obtained from /coins) eg. bitcoin
     * @param perPage Total results per page
     * @param page Page through results
     */
    public coinsIdStatusUpdatesGet(id: string, perPage?: number, page?: number, options?: Configuration): Promise<void> {
    	const result = this.api.coinsIdStatusUpdatesGet(id, perPage, page, options);
        return result.toPromise();
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
    public coinsIdTickersGet(id: string, exchangeIds?: string, includeExchangeLogo?: string, page?: number, order?: string, depth?: string, options?: Configuration): Promise<void> {
    	const result = this.api.coinsIdTickersGet(id, exchangeIds, includeExchangeLogo, page, order, depth, options);
        return result.toPromise();
    }
	
    /**
     * Use this to obtain all the coins' id in order to make API calls
     * List all supported coins id, name and symbol (no pagination required)
     * @param includePlatform flag to include platform contract addresses (eg. 0x.... for Ethereum based tokens).   valid values: true, false
     */
    public coinsListGet(includePlatform?: boolean, options?: Configuration): Promise<void> {
    	const result = this.api.coinsListGet(includePlatform, options);
        return result.toPromise();
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
    public coinsMarketsGet(vsCurrency: string, ids?: string, category?: string, order?: string, perPage?: number, page?: number, sparkline?: boolean, priceChangePercentage?: string, options?: Configuration): Promise<void> {
    	const result = this.api.coinsMarketsGet(vsCurrency, ids, category, order, perPage, page, sparkline, priceChangePercentage, options);
        return result.toPromise();
    }
	

}



import { ObservableContractApi } from './ObservableAPI';


import { ContractApiRequestFactory, ContractApiResponseProcessor} from "../apis/ContractApi";
export class PromiseContractApi {
    private api: ObservableContractApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ContractApiRequestFactory,
        responseProcessor?: ContractApiResponseProcessor
    ) {
        this.api = new ObservableContractApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get coin info from contract address
     * Get coin info from contract address
     * @param id Asset platform (only &#x60;ethereum&#x60; is supported at this moment)
     * @param contractAddress Token&#39;s contract address
     */
    public coinsIdContractContractAddressGet(id: string, contractAddress: string, options?: Configuration): Promise<void> {
    	const result = this.api.coinsIdContractContractAddressGet(id, contractAddress, options);
        return result.toPromise();
    }
	
    /**
     * Get historical market data include price, market cap, and 24h volume (granularity auto) 
     * Get historical market data include price, market cap, and 24h volume (granularity auto) from a contract address 
     * @param id The id of the platform issuing tokens (Only &#x60;ethereum&#x60; is supported for now)
     * @param contractAddress Token&#39;s contract address
     * @param vsCurrency The target currency of market data (usd, eur, jpy, etc.)
     * @param days Data up to number of days ago (eg. 1,14,30,max)
     */
    public coinsIdContractContractAddressMarketChartGet(id: string, contractAddress: string, vsCurrency: string, days: string, options?: Configuration): Promise<void> {
    	const result = this.api.coinsIdContractContractAddressMarketChartGet(id, contractAddress, vsCurrency, days, options);
        return result.toPromise();
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
    public coinsIdContractContractAddressMarketChartRangeGet(id: string, contractAddress: string, vsCurrency: string, from: string, to: string, options?: Configuration): Promise<void> {
    	const result = this.api.coinsIdContractContractAddressMarketChartRangeGet(id, contractAddress, vsCurrency, from, to, options);
        return result.toPromise();
    }
	

}



import { ObservableDerivativesBetaApi } from './ObservableAPI';


import { DerivativesBetaApiRequestFactory, DerivativesBetaApiResponseProcessor} from "../apis/DerivativesBetaApi";
export class PromiseDerivativesBetaApi {
    private api: ObservableDerivativesBetaApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DerivativesBetaApiRequestFactory,
        responseProcessor?: DerivativesBetaApiResponseProcessor
    ) {
        this.api = new ObservableDerivativesBetaApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List all derivative exchanges
     * List all derivative exchanges
     * @param order order results using following params name_asc，name_desc，open_interest_btc_asc，open_interest_btc_desc，trade_volume_24h_btc_asc，trade_volume_24h_btc_desc
     * @param perPage Total results per page
     * @param page Page through results
     */
    public derivativesExchangesGet(order?: string, perPage?: number, page?: number, options?: Configuration): Promise<void> {
    	const result = this.api.derivativesExchangesGet(order, perPage, page, options);
        return result.toPromise();
    }
	
    /**
     * show derivative exchange data
     * show derivative exchange data
     * @param id pass the exchange id (can be obtained from derivatives/exchanges/list) eg. bitmex
     * @param includeTickers [&#39;all&#39;, &#39;unexpired&#39;] - expired to show unexpired tickers, all to list all tickers, leave blank to omit tickers data in response
     */
    public derivativesExchangesIdGet(id: string, includeTickers?: string, options?: Configuration): Promise<void> {
    	const result = this.api.derivativesExchangesIdGet(id, includeTickers, options);
        return result.toPromise();
    }
	
    /**
     * List all derivative exchanges name and identifier
     * List all derivative exchanges name and identifier
     */
    public derivativesExchangesListGet(options?: Configuration): Promise<void> {
    	const result = this.api.derivativesExchangesListGet(options);
        return result.toPromise();
    }
	
    /**
     * List all derivative tickers
     * List all derivative tickers
     * @param includeTickers [&#39;all&#39;, &#39;unexpired&#39;] - expired to show unexpired tickers, all to list all tickers, defaults to unexpired
     */
    public derivativesGet(includeTickers?: string, options?: Configuration): Promise<void> {
    	const result = this.api.derivativesGet(includeTickers, options);
        return result.toPromise();
    }
	

}



import { ObservableEventsApi } from './ObservableAPI';


import { EventsApiRequestFactory, EventsApiResponseProcessor} from "../apis/EventsApi";
export class PromiseEventsApi {
    private api: ObservableEventsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EventsApiRequestFactory,
        responseProcessor?: EventsApiResponseProcessor
    ) {
        this.api = new ObservableEventsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get list of event countries 
     * Get list of event countries
     */
    public eventsCountriesGet(options?: Configuration): Promise<void> {
    	const result = this.api.eventsCountriesGet(options);
        return result.toPromise();
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
    public eventsGet(countryCode?: string, type?: string, page?: number, upcomingEventsOnly?: boolean, fromDate?: string, toDate?: string, options?: Configuration): Promise<void> {
    	const result = this.api.eventsGet(countryCode, type, page, upcomingEventsOnly, fromDate, toDate, options);
        return result.toPromise();
    }
	
    /**
     * Get list of event types 
     * Get list of events types
     */
    public eventsTypesGet(options?: Configuration): Promise<void> {
    	const result = this.api.eventsTypesGet(options);
        return result.toPromise();
    }
	

}



import { ObservableExchangeRatesApi } from './ObservableAPI';


import { ExchangeRatesApiRequestFactory, ExchangeRatesApiResponseProcessor} from "../apis/ExchangeRatesApi";
export class PromiseExchangeRatesApi {
    private api: ObservableExchangeRatesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ExchangeRatesApiRequestFactory,
        responseProcessor?: ExchangeRatesApiResponseProcessor
    ) {
        this.api = new ObservableExchangeRatesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get BTC-to-Currency exchange rates 
     * Get BTC-to-Currency exchange rates
     */
    public exchangeRatesGet(options?: Configuration): Promise<void> {
    	const result = this.api.exchangeRatesGet(options);
        return result.toPromise();
    }
	

}



import { ObservableExchangesBetaApi } from './ObservableAPI';


import { ExchangesBetaApiRequestFactory, ExchangesBetaApiResponseProcessor} from "../apis/ExchangesBetaApi";
export class PromiseExchangesBetaApi {
    private api: ObservableExchangesBetaApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ExchangesBetaApiRequestFactory,
        responseProcessor?: ExchangesBetaApiResponseProcessor
    ) {
        this.api = new ObservableExchangesBetaApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List all exchanges
     * List all exchanges
     * @param perPage Valid values: 1...250 Total results per page Default value:: 100
     * @param page page through results
     */
    public exchangesGet(perPage?: number, page?: number, options?: Configuration): Promise<void> {
    	const result = this.api.exchangesGet(perPage, page, options);
        return result.toPromise();
    }
	
    /**
     * Get exchange volume in BTC and tickers<br><br> **IMPORTANT**:  Ticker object is limited to 100 items, to get more tickers, use `/exchanges/{id}/tickers`  Ticker `is_stale` is true when ticker that has not been updated/unchanged from the exchange for a while.  Ticker `is_anomaly` is true if ticker's price is outliered by our system.  You are responsible for managing how you want to display these information (e.g. footnote, different background, change opacity, hide) 
     * Get exchange volume in BTC and top 100 tickers only
     * @param id pass the exchange id (can be obtained from /exchanges/list) eg. binance
     */
    public exchangesIdGet(id: string, options?: Configuration): Promise<void> {
    	const result = this.api.exchangesIdGet(id, options);
        return result.toPromise();
    }
	
    /**
     * Get status updates for a given exchange
     * Get status updates for a given exchange (beta)
     * @param id pass the exchange id (can be obtained from /exchanges/list) eg. binance
     * @param perPage Total results per page
     * @param page Page through results
     */
    public exchangesIdStatusUpdatesGet(id: string, perPage?: number, page?: number, options?: Configuration): Promise<void> {
    	const result = this.api.exchangesIdStatusUpdatesGet(id, perPage, page, options);
        return result.toPromise();
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
    public exchangesIdTickersGet(id: string, coinIds?: string, includeExchangeLogo?: string, page?: number, depth?: string, order?: string, options?: Configuration): Promise<void> {
    	const result = this.api.exchangesIdTickersGet(id, coinIds, includeExchangeLogo, page, depth, order, options);
        return result.toPromise();
    }
	
    /**
     * Get volume_chart data for a given exchange
     * Get volume_chart data for a given exchange (beta)
     * @param id pass the exchange id (can be obtained from /exchanges/list) eg. binance
     * @param days  Data up to number of days ago (eg. 1,14,30)
     */
    public exchangesIdVolumeChartGet(id: string, days: number, options?: Configuration): Promise<void> {
    	const result = this.api.exchangesIdVolumeChartGet(id, days, options);
        return result.toPromise();
    }
	
    /**
     * Use this to obtain all the markets' id in order to make API calls
     * List all supported markets id and name (no pagination required)
     */
    public exchangesListGet(options?: Configuration): Promise<void> {
    	const result = this.api.exchangesListGet(options);
        return result.toPromise();
    }
	

}



import { ObservableFinanceBetaApi } from './ObservableAPI';


import { FinanceBetaApiRequestFactory, FinanceBetaApiResponseProcessor} from "../apis/FinanceBetaApi";
export class PromiseFinanceBetaApi {
    private api: ObservableFinanceBetaApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FinanceBetaApiRequestFactory,
        responseProcessor?: FinanceBetaApiResponseProcessor
    ) {
        this.api = new ObservableFinanceBetaApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List all finance platforms
     * List all finance platforms
     * @param perPage Total results per page
     * @param page page of results (paginated to 100 by default)
     */
    public financePlatformsGet(perPage?: number, page?: number, options?: Configuration): Promise<void> {
    	const result = this.api.financePlatformsGet(perPage, page, options);
        return result.toPromise();
    }
	
    /**
     * List all finance products
     * List all finance products
     * @param perPage Total results per page
     * @param page page of results (paginated to 100 by default)
     * @param startAt start date of the financial products
     * @param endAt end date of the financial products
     */
    public financeProductsGet(perPage?: number, page?: string, startAt?: string, endAt?: string, options?: Configuration): Promise<void> {
    	const result = this.api.financeProductsGet(perPage, page, startAt, endAt, options);
        return result.toPromise();
    }
	

}



import { ObservableGlobalApi } from './ObservableAPI';


import { GlobalApiRequestFactory, GlobalApiResponseProcessor} from "../apis/GlobalApi";
export class PromiseGlobalApi {
    private api: ObservableGlobalApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GlobalApiRequestFactory,
        responseProcessor?: GlobalApiResponseProcessor
    ) {
        this.api = new ObservableGlobalApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get Top 100 Cryptocurrency Global Eecentralized Finance(defi) data 
     * Get cryptocurrency global decentralized finance(defi) data
     */
    public globalDecentralizedFinanceDefiGet(options?: Configuration): Promise<void> {
    	const result = this.api.globalDecentralizedFinanceDefiGet(options);
        return result.toPromise();
    }
	
    /**
     * Get cryptocurrency global data 
     * Get cryptocurrency global data
     */
    public globalGet(options?: Configuration): Promise<void> {
    	const result = this.api.globalGet(options);
        return result.toPromise();
    }
	

}



import { ObservableIndexesBetaApi } from './ObservableAPI';


import { IndexesBetaApiRequestFactory, IndexesBetaApiResponseProcessor} from "../apis/IndexesBetaApi";
export class PromiseIndexesBetaApi {
    private api: ObservableIndexesBetaApi

    public constructor(
        configuration: Configuration,
        requestFactory?: IndexesBetaApiRequestFactory,
        responseProcessor?: IndexesBetaApiResponseProcessor
    ) {
        this.api = new ObservableIndexesBetaApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List all market indexes
     * List all market indexes
     * @param perPage Total results per page
     * @param page Page through results
     */
    public indexesGet(perPage?: number, page?: number, options?: Configuration): Promise<void> {
    	const result = this.api.indexesGet(perPage, page, options);
        return result.toPromise();
    }
	
    /**
     * get market index by market id and market index id
     * get market index by market id and market index id
     * @param marketId pass the market id (can be obtained from /exchanges/list)
     * @param id pass the index id (can be obtained from /indexes/list)
     */
    public indexesListByMarketAndIdMarketIdIdGet(marketId: string, id: string, options?: Configuration): Promise<void> {
    	const result = this.api.indexesListByMarketAndIdMarketIdIdGet(marketId, id, options);
        return result.toPromise();
    }
	
    /**
     * list market indexes id and name
     * list market indexes id and name
     */
    public indexesListGet(options?: Configuration): Promise<void> {
    	const result = this.api.indexesListGet(options);
        return result.toPromise();
    }
	
    /**
     * get market index by market id and index id
     * get market index by market id and index id
     * @param marketId pass the market id (can be obtained from /exchanges/list)
     * @param id pass the index id (can be obtained from /indexes/list)
     */
    public indexesMarketIdIdGet(marketId: string, id: string, options?: Configuration): Promise<void> {
    	const result = this.api.indexesMarketIdIdGet(marketId, id, options);
        return result.toPromise();
    }
	

}



import { ObservablePingApi } from './ObservableAPI';


import { PingApiRequestFactory, PingApiResponseProcessor} from "../apis/PingApi";
export class PromisePingApi {
    private api: ObservablePingApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PingApiRequestFactory,
        responseProcessor?: PingApiResponseProcessor
    ) {
        this.api = new ObservablePingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Check API server status 
     * Check API server status
     */
    public pingGet(options?: Configuration): Promise<void> {
    	const result = this.api.pingGet(options);
        return result.toPromise();
    }
	

}



import { ObservableSimpleApi } from './ObservableAPI';


import { SimpleApiRequestFactory, SimpleApiResponseProcessor} from "../apis/SimpleApi";
export class PromiseSimpleApi {
    private api: ObservableSimpleApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SimpleApiRequestFactory,
        responseProcessor?: SimpleApiResponseProcessor
    ) {
        this.api = new ObservableSimpleApi(configuration, requestFactory, responseProcessor);
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
    public simplePriceGet(ids: string, vsCurrencies: string, includeMarketCap?: string, include24hrVol?: string, include24hrChange?: string, includeLastUpdatedAt?: string, options?: Configuration): Promise<void> {
    	const result = this.api.simplePriceGet(ids, vsCurrencies, includeMarketCap, include24hrVol, include24hrChange, includeLastUpdatedAt, options);
        return result.toPromise();
    }
	
    /**
     * Get list of supported_vs_currencies.
     */
    public simpleSupportedVsCurrenciesGet(options?: Configuration): Promise<void> {
    	const result = this.api.simpleSupportedVsCurrenciesGet(options);
        return result.toPromise();
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
    public simpleTokenPriceIdGet(id: string, contractAddresses: string, vsCurrencies: string, includeMarketCap?: string, include24hrVol?: string, include24hrChange?: string, includeLastUpdatedAt?: string, options?: Configuration): Promise<void> {
    	const result = this.api.simpleTokenPriceIdGet(id, contractAddresses, vsCurrencies, includeMarketCap, include24hrVol, include24hrChange, includeLastUpdatedAt, options);
        return result.toPromise();
    }
	

}



import { ObservableStatusUpdatesBetaApi } from './ObservableAPI';


import { StatusUpdatesBetaApiRequestFactory, StatusUpdatesBetaApiResponseProcessor} from "../apis/StatusUpdatesBetaApi";
export class PromiseStatusUpdatesBetaApi {
    private api: ObservableStatusUpdatesBetaApi

    public constructor(
        configuration: Configuration,
        requestFactory?: StatusUpdatesBetaApiRequestFactory,
        responseProcessor?: StatusUpdatesBetaApiResponseProcessor
    ) {
        this.api = new ObservableStatusUpdatesBetaApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List all status_updates with data (description, category, created_at, user, user_title and pin) 
     * List all status_updates with data (description, category, created_at, user, user_title and pin)
     * @param category Filtered by category (eg. general, milestone, partnership, exchange_listing, software_release, fund_movement, new_listings, event)
     * @param projectType Filtered by Project Type (eg. coin, market). If left empty returns both status from coins and markets.
     * @param perPage Total results per page
     * @param page Page through results
     */
    public statusUpdatesGet(category?: string, projectType?: string, perPage?: number, page?: number, options?: Configuration): Promise<void> {
    	const result = this.api.statusUpdatesGet(category, projectType, perPage, page, options);
        return result.toPromise();
    }
	

}



import { ObservableTrendingApi } from './ObservableAPI';


import { TrendingApiRequestFactory, TrendingApiResponseProcessor} from "../apis/TrendingApi";
export class PromiseTrendingApi {
    private api: ObservableTrendingApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TrendingApiRequestFactory,
        responseProcessor?: TrendingApiResponseProcessor
    ) {
        this.api = new ObservableTrendingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Top-7 trending coins on CoinGecko as searched by users in the last 24 hours (Ordered by most popular first)
     * Get trending search coins (Top-7) on CoinGecko in the last 24 hours
     */
    public searchTrendingGet(options?: Configuration): Promise<void> {
    	const result = this.api.searchTrendingGet(options);
        return result.toPromise();
    }
	

}




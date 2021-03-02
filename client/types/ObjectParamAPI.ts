import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'


import { ObservableCoinsApi } from "./ObservableAPI";
import { CoinsApiRequestFactory, CoinsApiResponseProcessor} from "../apis/CoinsApi";

export interface CoinsApiCoinsIdGetRequest {
    /**
     * pass the coin id (can be obtained from /coins) eg. bitcoin
     * @type string
     * @memberof CoinsApicoinsIdGet
     */
    id: string
    /**
     * Include all localized languages in response (true/false) &lt;b&gt;[default: true]&lt;/b&gt;
     * @type string
     * @memberof CoinsApicoinsIdGet
     */
    localization?: string
    /**
     * Include tickers data (true/false) &lt;b&gt;[default: true]&lt;/b&gt;
     * @type boolean
     * @memberof CoinsApicoinsIdGet
     */
    tickers?: boolean
    /**
     * Include market_data (true/false) &lt;b&gt;[default: true]&lt;/b&gt;
     * @type boolean
     * @memberof CoinsApicoinsIdGet
     */
    marketData?: boolean
    /**
     * Include community_data data (true/false) &lt;b&gt;[default: true]&lt;/b&gt;
     * @type boolean
     * @memberof CoinsApicoinsIdGet
     */
    communityData?: boolean
    /**
     * Include developer_data data (true/false) &lt;b&gt;[default: true]&lt;/b&gt;
     * @type boolean
     * @memberof CoinsApicoinsIdGet
     */
    developerData?: boolean
    /**
     * Include sparkline 7 days data (eg. true, false) &lt;b&gt;[default: false]&lt;/b&gt;
     * @type boolean
     * @memberof CoinsApicoinsIdGet
     */
    sparkline?: boolean
}

export interface CoinsApiCoinsIdHistoryGetRequest {
    /**
     * pass the coin id (can be obtained from /coins) eg. bitcoin
     * @type string
     * @memberof CoinsApicoinsIdHistoryGet
     */
    id: string
    /**
     * The date of data snapshot in dd-mm-yyyy eg. 30-12-2017
     * @type string
     * @memberof CoinsApicoinsIdHistoryGet
     */
    date: string
    /**
     * Set to false to exclude localized languages in response
     * @type string
     * @memberof CoinsApicoinsIdHistoryGet
     */
    localization?: string
}

export interface CoinsApiCoinsIdMarketChartGetRequest {
    /**
     * pass the coin id (can be obtained from /coins) eg. bitcoin
     * @type string
     * @memberof CoinsApicoinsIdMarketChartGet
     */
    id: string
    /**
     * The target currency of market data (usd, eur, jpy, etc.)
     * @type string
     * @memberof CoinsApicoinsIdMarketChartGet
     */
    vsCurrency: string
    /**
     * Data up to number of days ago (eg. 1,14,30,max)
     * @type string
     * @memberof CoinsApicoinsIdMarketChartGet
     */
    days: string
    /**
     * Data interval. Possible value: daily
     * @type string
     * @memberof CoinsApicoinsIdMarketChartGet
     */
    interval?: string
}

export interface CoinsApiCoinsIdMarketChartRangeGetRequest {
    /**
     * pass the coin id (can be obtained from /coins) eg. bitcoin
     * @type string
     * @memberof CoinsApicoinsIdMarketChartRangeGet
     */
    id: string
    /**
     * The target currency of market data (usd, eur, jpy, etc.)
     * @type string
     * @memberof CoinsApicoinsIdMarketChartRangeGet
     */
    vsCurrency: string
    /**
     * From date in UNIX Timestamp (eg. 1392577232)
     * @type string
     * @memberof CoinsApicoinsIdMarketChartRangeGet
     */
    from: string
    /**
     * To date in UNIX Timestamp (eg. 1422577232)
     * @type string
     * @memberof CoinsApicoinsIdMarketChartRangeGet
     */
    to: string
}

export interface CoinsApiCoinsIdOhlcGetRequest {
    /**
     * pass the coin id (can be obtained from /coins/list) eg. bitcoin
     * @type string
     * @memberof CoinsApicoinsIdOhlcGet
     */
    id: string
    /**
     * The target currency of market data (usd, eur, jpy, etc.)
     * @type string
     * @memberof CoinsApicoinsIdOhlcGet
     */
    vsCurrency: string
    /**
     *  Data up to number of days ago (1/7/14/30/90/180/365/max)
     * @type number
     * @memberof CoinsApicoinsIdOhlcGet
     */
    days: number
}

export interface CoinsApiCoinsIdStatusUpdatesGetRequest {
    /**
     * pass the coin id (can be obtained from /coins) eg. bitcoin
     * @type string
     * @memberof CoinsApicoinsIdStatusUpdatesGet
     */
    id: string
    /**
     * Total results per page
     * @type number
     * @memberof CoinsApicoinsIdStatusUpdatesGet
     */
    perPage?: number
    /**
     * Page through results
     * @type number
     * @memberof CoinsApicoinsIdStatusUpdatesGet
     */
    page?: number
}

export interface CoinsApiCoinsIdTickersGetRequest {
    /**
     * pass the coin id (can be obtained from /coins/list) eg. bitcoin
     * @type string
     * @memberof CoinsApicoinsIdTickersGet
     */
    id: string
    /**
     * filter results by exchange_ids (ref: v3/exchanges/list)
     * @type string
     * @memberof CoinsApicoinsIdTickersGet
     */
    exchangeIds?: string
    /**
     * flag to show exchange_logo
     * @type string
     * @memberof CoinsApicoinsIdTickersGet
     */
    includeExchangeLogo?: string
    /**
     * Page through results
     * @type number
     * @memberof CoinsApicoinsIdTickersGet
     */
    page?: number
    /**
     * valid values: &lt;b&gt;trust_score_desc (default), trust_score_asc and volume_desc&lt;/b&gt;
     * @type string
     * @memberof CoinsApicoinsIdTickersGet
     */
    order?: string
    /**
     * flag to show 2% orderbook depth. valid values: true, false
     * @type string
     * @memberof CoinsApicoinsIdTickersGet
     */
    depth?: string
}

export interface CoinsApiCoinsListGetRequest {
    /**
     * flag to include platform contract addresses (eg. 0x.... for Ethereum based tokens).   valid values: true, false
     * @type boolean
     * @memberof CoinsApicoinsListGet
     */
    includePlatform?: boolean
}

export interface CoinsApiCoinsMarketsGetRequest {
    /**
     * The target currency of market data (usd, eur, jpy, etc.)
     * @type string
     * @memberof CoinsApicoinsMarketsGet
     */
    vsCurrency: string
    /**
     * The ids of the coin, comma separated crytocurrency symbols (base). refers to &#x60;/coins/list&#x60;. &lt;b&gt;When left empty, returns numbers the coins observing the params &#x60;limit&#x60; and &#x60;start&#x60;&lt;/b&gt;
     * @type string
     * @memberof CoinsApicoinsMarketsGet
     */
    ids?: string
    /**
     * filter by coin category, only decentralized_finance_defi is supported at the moment
     * @type string
     * @memberof CoinsApicoinsMarketsGet
     */
    category?: string
    /**
     * valid values: &lt;b&gt;market_cap_desc, gecko_desc, gecko_asc, market_cap_asc, market_cap_desc, volume_asc, volume_desc, id_asc, id_desc&lt;/b&gt; sort results by field.
     * @type string
     * @memberof CoinsApicoinsMarketsGet
     */
    order?: string
    /**
     * valid values: 1..250  Total results per page
     * @type number
     * @memberof CoinsApicoinsMarketsGet
     */
    perPage?: number
    /**
     * Page through results
     * @type number
     * @memberof CoinsApicoinsMarketsGet
     */
    page?: number
    /**
     * Include sparkline 7 days data (eg. true, false)
     * @type boolean
     * @memberof CoinsApicoinsMarketsGet
     */
    sparkline?: boolean
    /**
     * Include price change percentage in &lt;b&gt;1h, 24h, 7d, 14d, 30d, 200d, 1y&lt;/b&gt; (eg. &#39;&#x60;1h,24h,7d&#x60;&#39; comma-separated, invalid values will be discarded)
     * @type string
     * @memberof CoinsApicoinsMarketsGet
     */
    priceChangePercentage?: string
}


export class ObjectCoinsApi {
    private api: ObservableCoinsApi

    public constructor(configuration: Configuration, requestFactory?: CoinsApiRequestFactory, responseProcessor?: CoinsApiResponseProcessor) {
        this.api = new ObservableCoinsApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * Get current data (name, price, market, ... including exchange tickers) for a coin.<br><br> **IMPORTANT**:  Ticker object is limited to 100 items, to get more tickers, use `/coins/{id}/tickers`  Ticker `is_stale` is true when ticker that has not been updated/unchanged from the exchange for a while.  Ticker `is_anomaly` is true if ticker's price is outliered by our system.  You are responsible for managing how you want to display these information (e.g. footnote, different background, change opacity, hide) 
     * Get current data (name, price, market, ... including exchange tickers) for a coin
     * @param param the request object
     */
    public coinsIdGet(param: CoinsApiCoinsIdGetRequest, options?: Configuration): Promise<void> {
        return this.api.coinsIdGet(param.id, param.localization, param.tickers, param.marketData, param.communityData, param.developerData, param.sparkline,  options).toPromise();
    }
	
    /**
     * Get historical data (name, price, market, stats) at a given date for a coin 
     * Get historical data (name, price, market, stats) at a given date for a coin
     * @param param the request object
     */
    public coinsIdHistoryGet(param: CoinsApiCoinsIdHistoryGetRequest, options?: Configuration): Promise<void> {
        return this.api.coinsIdHistoryGet(param.id, param.date, param.localization,  options).toPromise();
    }
	
    /**
     * Get historical market data include price, market cap, and 24h volume (granularity auto)  <b>Minutely data will be used for duration within 1 day, Hourly data will be used for duration between 1 day and 90 days, Daily data will be used for duration above 90 days.</b>
     * Get historical market data include price, market cap, and 24h volume (granularity auto)
     * @param param the request object
     */
    public coinsIdMarketChartGet(param: CoinsApiCoinsIdMarketChartGetRequest, options?: Configuration): Promise<void> {
        return this.api.coinsIdMarketChartGet(param.id, param.vsCurrency, param.days, param.interval,  options).toPromise();
    }
	
    /**
     * Get historical market data include price, market cap, and 24h volume within a range of timestamp (granularity auto)  <b>Minutely data will be used for duration within 1 day, Hourly data will be used for duration between 1 day and 90 days, Daily data will be used for duration above 90 days.</b>
     * Get historical market data include price, market cap, and 24h volume within a range of timestamp (granularity auto)
     * @param param the request object
     */
    public coinsIdMarketChartRangeGet(param: CoinsApiCoinsIdMarketChartRangeGetRequest, options?: Configuration): Promise<void> {
        return this.api.coinsIdMarketChartRangeGet(param.id, param.vsCurrency, param.from, param.to,  options).toPromise();
    }
	
    /**
     * Candle's body:  1 - 2 days: 30 minutes 3 - 30 days: 4 hours 31 and before: 4 days
     * Get coin's OHLC (Beta)
     * @param param the request object
     */
    public coinsIdOhlcGet(param: CoinsApiCoinsIdOhlcGetRequest, options?: Configuration): Promise<Array<number>> {
        return this.api.coinsIdOhlcGet(param.id, param.vsCurrency, param.days,  options).toPromise();
    }
	
    /**
     * Get status updates for a given coin
     * Get status updates for a given coin (beta)
     * @param param the request object
     */
    public coinsIdStatusUpdatesGet(param: CoinsApiCoinsIdStatusUpdatesGetRequest, options?: Configuration): Promise<void> {
        return this.api.coinsIdStatusUpdatesGet(param.id, param.perPage, param.page,  options).toPromise();
    }
	
    /**
     * Get coin tickers (paginated to 100 items)<br><br> **IMPORTANT**:  Ticker `is_stale` is true when ticker that has not been updated/unchanged from the exchange for a while.  Ticker `is_anomaly` is true if ticker's price is outliered by our system.  You are responsible for managing how you want to display these information (e.g. footnote, different background, change opacity, hide) 
     * Get coin tickers (paginated to 100 items)
     * @param param the request object
     */
    public coinsIdTickersGet(param: CoinsApiCoinsIdTickersGetRequest, options?: Configuration): Promise<void> {
        return this.api.coinsIdTickersGet(param.id, param.exchangeIds, param.includeExchangeLogo, param.page, param.order, param.depth,  options).toPromise();
    }
	
    /**
     * Use this to obtain all the coins' id in order to make API calls
     * List all supported coins id, name and symbol (no pagination required)
     * @param param the request object
     */
    public coinsListGet(param: CoinsApiCoinsListGetRequest, options?: Configuration): Promise<void> {
        return this.api.coinsListGet(param.includePlatform,  options).toPromise();
    }
	
    /**
     * Use this to obtain all the coins market data (price, market cap, volume)
     * List all supported coins price, market cap, volume, and market related data
     * @param param the request object
     */
    public coinsMarketsGet(param: CoinsApiCoinsMarketsGetRequest, options?: Configuration): Promise<void> {
        return this.api.coinsMarketsGet(param.vsCurrency, param.ids, param.category, param.order, param.perPage, param.page, param.sparkline, param.priceChangePercentage,  options).toPromise();
    }
	

}




import { ObservableContractApi } from "./ObservableAPI";
import { ContractApiRequestFactory, ContractApiResponseProcessor} from "../apis/ContractApi";

export interface ContractApiCoinsIdContractContractAddressGetRequest {
    /**
     * Asset platform (only &#x60;ethereum&#x60; is supported at this moment)
     * @type string
     * @memberof ContractApicoinsIdContractContractAddressGet
     */
    id: string
    /**
     * Token&#39;s contract address
     * @type string
     * @memberof ContractApicoinsIdContractContractAddressGet
     */
    contractAddress: string
}

export interface ContractApiCoinsIdContractContractAddressMarketChartGetRequest {
    /**
     * The id of the platform issuing tokens (Only &#x60;ethereum&#x60; is supported for now)
     * @type string
     * @memberof ContractApicoinsIdContractContractAddressMarketChartGet
     */
    id: string
    /**
     * Token&#39;s contract address
     * @type string
     * @memberof ContractApicoinsIdContractContractAddressMarketChartGet
     */
    contractAddress: string
    /**
     * The target currency of market data (usd, eur, jpy, etc.)
     * @type string
     * @memberof ContractApicoinsIdContractContractAddressMarketChartGet
     */
    vsCurrency: string
    /**
     * Data up to number of days ago (eg. 1,14,30,max)
     * @type string
     * @memberof ContractApicoinsIdContractContractAddressMarketChartGet
     */
    days: string
}

export interface ContractApiCoinsIdContractContractAddressMarketChartRangeGetRequest {
    /**
     * The id of the platform issuing tokens (Only &#x60;ethereum&#x60; is supported for now)
     * @type string
     * @memberof ContractApicoinsIdContractContractAddressMarketChartRangeGet
     */
    id: string
    /**
     * Token&#39;s contract address
     * @type string
     * @memberof ContractApicoinsIdContractContractAddressMarketChartRangeGet
     */
    contractAddress: string
    /**
     * The target currency of market data (usd, eur, jpy, etc.)
     * @type string
     * @memberof ContractApicoinsIdContractContractAddressMarketChartRangeGet
     */
    vsCurrency: string
    /**
     * From date in UNIX Timestamp (eg. 1392577232)
     * @type string
     * @memberof ContractApicoinsIdContractContractAddressMarketChartRangeGet
     */
    from: string
    /**
     * To date in UNIX Timestamp (eg. 1422577232)
     * @type string
     * @memberof ContractApicoinsIdContractContractAddressMarketChartRangeGet
     */
    to: string
}


export class ObjectContractApi {
    private api: ObservableContractApi

    public constructor(configuration: Configuration, requestFactory?: ContractApiRequestFactory, responseProcessor?: ContractApiResponseProcessor) {
        this.api = new ObservableContractApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * Get coin info from contract address
     * Get coin info from contract address
     * @param param the request object
     */
    public coinsIdContractContractAddressGet(param: ContractApiCoinsIdContractContractAddressGetRequest, options?: Configuration): Promise<void> {
        return this.api.coinsIdContractContractAddressGet(param.id, param.contractAddress,  options).toPromise();
    }
	
    /**
     * Get historical market data include price, market cap, and 24h volume (granularity auto) 
     * Get historical market data include price, market cap, and 24h volume (granularity auto) from a contract address 
     * @param param the request object
     */
    public coinsIdContractContractAddressMarketChartGet(param: ContractApiCoinsIdContractContractAddressMarketChartGetRequest, options?: Configuration): Promise<void> {
        return this.api.coinsIdContractContractAddressMarketChartGet(param.id, param.contractAddress, param.vsCurrency, param.days,  options).toPromise();
    }
	
    /**
     * Get historical market data include price, market cap, and 24h volume within a range of timestamp (granularity auto) 
     * Get historical market data include price, market cap, and 24h volume within a range of timestamp (granularity auto) from a contract address
     * @param param the request object
     */
    public coinsIdContractContractAddressMarketChartRangeGet(param: ContractApiCoinsIdContractContractAddressMarketChartRangeGetRequest, options?: Configuration): Promise<void> {
        return this.api.coinsIdContractContractAddressMarketChartRangeGet(param.id, param.contractAddress, param.vsCurrency, param.from, param.to,  options).toPromise();
    }
	

}




import { ObservableDerivativesBetaApi } from "./ObservableAPI";
import { DerivativesBetaApiRequestFactory, DerivativesBetaApiResponseProcessor} from "../apis/DerivativesBetaApi";

export interface DerivativesBetaApiDerivativesExchangesGetRequest {
    /**
     * order results using following params name_asc，name_desc，open_interest_btc_asc，open_interest_btc_desc，trade_volume_24h_btc_asc，trade_volume_24h_btc_desc
     * @type string
     * @memberof DerivativesBetaApiderivativesExchangesGet
     */
    order?: string
    /**
     * Total results per page
     * @type number
     * @memberof DerivativesBetaApiderivativesExchangesGet
     */
    perPage?: number
    /**
     * Page through results
     * @type number
     * @memberof DerivativesBetaApiderivativesExchangesGet
     */
    page?: number
}

export interface DerivativesBetaApiDerivativesExchangesIdGetRequest {
    /**
     * pass the exchange id (can be obtained from derivatives/exchanges/list) eg. bitmex
     * @type string
     * @memberof DerivativesBetaApiderivativesExchangesIdGet
     */
    id: string
    /**
     * [&#39;all&#39;, &#39;unexpired&#39;] - expired to show unexpired tickers, all to list all tickers, leave blank to omit tickers data in response
     * @type string
     * @memberof DerivativesBetaApiderivativesExchangesIdGet
     */
    includeTickers?: string
}

export interface DerivativesBetaApiDerivativesExchangesListGetRequest {
}

export interface DerivativesBetaApiDerivativesGetRequest {
    /**
     * [&#39;all&#39;, &#39;unexpired&#39;] - expired to show unexpired tickers, all to list all tickers, defaults to unexpired
     * @type string
     * @memberof DerivativesBetaApiderivativesGet
     */
    includeTickers?: string
}


export class ObjectDerivativesBetaApi {
    private api: ObservableDerivativesBetaApi

    public constructor(configuration: Configuration, requestFactory?: DerivativesBetaApiRequestFactory, responseProcessor?: DerivativesBetaApiResponseProcessor) {
        this.api = new ObservableDerivativesBetaApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * List all derivative exchanges
     * List all derivative exchanges
     * @param param the request object
     */
    public derivativesExchangesGet(param: DerivativesBetaApiDerivativesExchangesGetRequest, options?: Configuration): Promise<void> {
        return this.api.derivativesExchangesGet(param.order, param.perPage, param.page,  options).toPromise();
    }
	
    /**
     * show derivative exchange data
     * show derivative exchange data
     * @param param the request object
     */
    public derivativesExchangesIdGet(param: DerivativesBetaApiDerivativesExchangesIdGetRequest, options?: Configuration): Promise<void> {
        return this.api.derivativesExchangesIdGet(param.id, param.includeTickers,  options).toPromise();
    }
	
    /**
     * List all derivative exchanges name and identifier
     * List all derivative exchanges name and identifier
     * @param param the request object
     */
    public derivativesExchangesListGet(param: DerivativesBetaApiDerivativesExchangesListGetRequest, options?: Configuration): Promise<void> {
        return this.api.derivativesExchangesListGet( options).toPromise();
    }
	
    /**
     * List all derivative tickers
     * List all derivative tickers
     * @param param the request object
     */
    public derivativesGet(param: DerivativesBetaApiDerivativesGetRequest, options?: Configuration): Promise<void> {
        return this.api.derivativesGet(param.includeTickers,  options).toPromise();
    }
	

}




import { ObservableEventsApi } from "./ObservableAPI";
import { EventsApiRequestFactory, EventsApiResponseProcessor} from "../apis/EventsApi";

export interface EventsApiEventsCountriesGetRequest {
}

export interface EventsApiEventsGetRequest {
    /**
     * country_code of event (eg. &#39;US&#39;). use &lt;b&gt;/api/v3/events/countries&lt;/b&gt; for list of country_codes
     * @type string
     * @memberof EventsApieventsGet
     */
    countryCode?: string
    /**
     * type of event (eg. &#39;Conference&#39;). use &lt;b&gt;/api/v3/events/types&lt;/b&gt; for list of types
     * @type string
     * @memberof EventsApieventsGet
     */
    type?: string
    /**
     * page of results (paginated by 100)
     * @type number
     * @memberof EventsApieventsGet
     */
    page?: number
    /**
     * lists only upcoming events. &lt;br&gt;true, false&lt;/br&gt; (defaults to true, set to false to list all events)
     * @type boolean
     * @memberof EventsApieventsGet
     */
    upcomingEventsOnly?: boolean
    /**
     * lists events after this date yyyy-mm-dd
     * @type string
     * @memberof EventsApieventsGet
     */
    fromDate?: string
    /**
     * lists events before this date yyyy-mm-dd (set upcoming_events_only to false if fetching past events)
     * @type string
     * @memberof EventsApieventsGet
     */
    toDate?: string
}

export interface EventsApiEventsTypesGetRequest {
}


export class ObjectEventsApi {
    private api: ObservableEventsApi

    public constructor(configuration: Configuration, requestFactory?: EventsApiRequestFactory, responseProcessor?: EventsApiResponseProcessor) {
        this.api = new ObservableEventsApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * Get list of event countries 
     * Get list of event countries
     * @param param the request object
     */
    public eventsCountriesGet(param: EventsApiEventsCountriesGetRequest, options?: Configuration): Promise<void> {
        return this.api.eventsCountriesGet( options).toPromise();
    }
	
    /**
     * Get events, paginated by 100 
     * Get events, paginated by 100
     * @param param the request object
     */
    public eventsGet(param: EventsApiEventsGetRequest, options?: Configuration): Promise<void> {
        return this.api.eventsGet(param.countryCode, param.type, param.page, param.upcomingEventsOnly, param.fromDate, param.toDate,  options).toPromise();
    }
	
    /**
     * Get list of event types 
     * Get list of events types
     * @param param the request object
     */
    public eventsTypesGet(param: EventsApiEventsTypesGetRequest, options?: Configuration): Promise<void> {
        return this.api.eventsTypesGet( options).toPromise();
    }
	

}




import { ObservableExchangeRatesApi } from "./ObservableAPI";
import { ExchangeRatesApiRequestFactory, ExchangeRatesApiResponseProcessor} from "../apis/ExchangeRatesApi";

export interface ExchangeRatesApiExchangeRatesGetRequest {
}


export class ObjectExchangeRatesApi {
    private api: ObservableExchangeRatesApi

    public constructor(configuration: Configuration, requestFactory?: ExchangeRatesApiRequestFactory, responseProcessor?: ExchangeRatesApiResponseProcessor) {
        this.api = new ObservableExchangeRatesApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * Get BTC-to-Currency exchange rates 
     * Get BTC-to-Currency exchange rates
     * @param param the request object
     */
    public exchangeRatesGet(param: ExchangeRatesApiExchangeRatesGetRequest, options?: Configuration): Promise<void> {
        return this.api.exchangeRatesGet( options).toPromise();
    }
	

}




import { ObservableExchangesBetaApi } from "./ObservableAPI";
import { ExchangesBetaApiRequestFactory, ExchangesBetaApiResponseProcessor} from "../apis/ExchangesBetaApi";

export interface ExchangesBetaApiExchangesGetRequest {
    /**
     * Valid values: 1...250 Total results per page Default value:: 100
     * @type number
     * @memberof ExchangesBetaApiexchangesGet
     */
    perPage?: number
    /**
     * page through results
     * @type number
     * @memberof ExchangesBetaApiexchangesGet
     */
    page?: number
}

export interface ExchangesBetaApiExchangesIdGetRequest {
    /**
     * pass the exchange id (can be obtained from /exchanges/list) eg. binance
     * @type string
     * @memberof ExchangesBetaApiexchangesIdGet
     */
    id: string
}

export interface ExchangesBetaApiExchangesIdStatusUpdatesGetRequest {
    /**
     * pass the exchange id (can be obtained from /exchanges/list) eg. binance
     * @type string
     * @memberof ExchangesBetaApiexchangesIdStatusUpdatesGet
     */
    id: string
    /**
     * Total results per page
     * @type number
     * @memberof ExchangesBetaApiexchangesIdStatusUpdatesGet
     */
    perPage?: number
    /**
     * Page through results
     * @type number
     * @memberof ExchangesBetaApiexchangesIdStatusUpdatesGet
     */
    page?: number
}

export interface ExchangesBetaApiExchangesIdTickersGetRequest {
    /**
     * pass the exchange id (can be obtained from /exchanges/list) eg. binance
     * @type string
     * @memberof ExchangesBetaApiexchangesIdTickersGet
     */
    id: string
    /**
     * filter tickers by coin_ids (ref: v3/coins/list)
     * @type string
     * @memberof ExchangesBetaApiexchangesIdTickersGet
     */
    coinIds?: string
    /**
     * flag to show exchange_logo
     * @type string
     * @memberof ExchangesBetaApiexchangesIdTickersGet
     */
    includeExchangeLogo?: string
    /**
     * Page through results
     * @type number
     * @memberof ExchangesBetaApiexchangesIdTickersGet
     */
    page?: number
    /**
     * flag to show 2% orderbook depth i.e., cost_to_move_up_usd and cost_to_move_down_usd
     * @type string
     * @memberof ExchangesBetaApiexchangesIdTickersGet
     */
    depth?: string
    /**
     * valid values: &lt;b&gt;trust_score_desc (default), trust_score_asc and volume_desc&lt;/b&gt;
     * @type string
     * @memberof ExchangesBetaApiexchangesIdTickersGet
     */
    order?: string
}

export interface ExchangesBetaApiExchangesIdVolumeChartGetRequest {
    /**
     * pass the exchange id (can be obtained from /exchanges/list) eg. binance
     * @type string
     * @memberof ExchangesBetaApiexchangesIdVolumeChartGet
     */
    id: string
    /**
     *  Data up to number of days ago (eg. 1,14,30)
     * @type number
     * @memberof ExchangesBetaApiexchangesIdVolumeChartGet
     */
    days: number
}

export interface ExchangesBetaApiExchangesListGetRequest {
}


export class ObjectExchangesBetaApi {
    private api: ObservableExchangesBetaApi

    public constructor(configuration: Configuration, requestFactory?: ExchangesBetaApiRequestFactory, responseProcessor?: ExchangesBetaApiResponseProcessor) {
        this.api = new ObservableExchangesBetaApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * List all exchanges
     * List all exchanges
     * @param param the request object
     */
    public exchangesGet(param: ExchangesBetaApiExchangesGetRequest, options?: Configuration): Promise<void> {
        return this.api.exchangesGet(param.perPage, param.page,  options).toPromise();
    }
	
    /**
     * Get exchange volume in BTC and tickers<br><br> **IMPORTANT**:  Ticker object is limited to 100 items, to get more tickers, use `/exchanges/{id}/tickers`  Ticker `is_stale` is true when ticker that has not been updated/unchanged from the exchange for a while.  Ticker `is_anomaly` is true if ticker's price is outliered by our system.  You are responsible for managing how you want to display these information (e.g. footnote, different background, change opacity, hide) 
     * Get exchange volume in BTC and top 100 tickers only
     * @param param the request object
     */
    public exchangesIdGet(param: ExchangesBetaApiExchangesIdGetRequest, options?: Configuration): Promise<void> {
        return this.api.exchangesIdGet(param.id,  options).toPromise();
    }
	
    /**
     * Get status updates for a given exchange
     * Get status updates for a given exchange (beta)
     * @param param the request object
     */
    public exchangesIdStatusUpdatesGet(param: ExchangesBetaApiExchangesIdStatusUpdatesGetRequest, options?: Configuration): Promise<void> {
        return this.api.exchangesIdStatusUpdatesGet(param.id, param.perPage, param.page,  options).toPromise();
    }
	
    /**
     * Get exchange tickers (paginated)<br><br> **IMPORTANT**:  Ticker `is_stale` is true when ticker that has not been updated/unchanged from the exchange for a while.  Ticker `is_anomaly` is true if ticker's price is outliered by our system.  You are responsible for managing how you want to display these information (e.g. footnote, different background, change opacity, hide) 
     * Get exchange tickers (paginated, 100 tickers per page)
     * @param param the request object
     */
    public exchangesIdTickersGet(param: ExchangesBetaApiExchangesIdTickersGetRequest, options?: Configuration): Promise<void> {
        return this.api.exchangesIdTickersGet(param.id, param.coinIds, param.includeExchangeLogo, param.page, param.depth, param.order,  options).toPromise();
    }
	
    /**
     * Get volume_chart data for a given exchange
     * Get volume_chart data for a given exchange (beta)
     * @param param the request object
     */
    public exchangesIdVolumeChartGet(param: ExchangesBetaApiExchangesIdVolumeChartGetRequest, options?: Configuration): Promise<void> {
        return this.api.exchangesIdVolumeChartGet(param.id, param.days,  options).toPromise();
    }
	
    /**
     * Use this to obtain all the markets' id in order to make API calls
     * List all supported markets id and name (no pagination required)
     * @param param the request object
     */
    public exchangesListGet(param: ExchangesBetaApiExchangesListGetRequest, options?: Configuration): Promise<void> {
        return this.api.exchangesListGet( options).toPromise();
    }
	

}




import { ObservableFinanceBetaApi } from "./ObservableAPI";
import { FinanceBetaApiRequestFactory, FinanceBetaApiResponseProcessor} from "../apis/FinanceBetaApi";

export interface FinanceBetaApiFinancePlatformsGetRequest {
    /**
     * Total results per page
     * @type number
     * @memberof FinanceBetaApifinancePlatformsGet
     */
    perPage?: number
    /**
     * page of results (paginated to 100 by default)
     * @type number
     * @memberof FinanceBetaApifinancePlatformsGet
     */
    page?: number
}

export interface FinanceBetaApiFinanceProductsGetRequest {
    /**
     * Total results per page
     * @type number
     * @memberof FinanceBetaApifinanceProductsGet
     */
    perPage?: number
    /**
     * page of results (paginated to 100 by default)
     * @type string
     * @memberof FinanceBetaApifinanceProductsGet
     */
    page?: string
    /**
     * start date of the financial products
     * @type string
     * @memberof FinanceBetaApifinanceProductsGet
     */
    startAt?: string
    /**
     * end date of the financial products
     * @type string
     * @memberof FinanceBetaApifinanceProductsGet
     */
    endAt?: string
}


export class ObjectFinanceBetaApi {
    private api: ObservableFinanceBetaApi

    public constructor(configuration: Configuration, requestFactory?: FinanceBetaApiRequestFactory, responseProcessor?: FinanceBetaApiResponseProcessor) {
        this.api = new ObservableFinanceBetaApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * List all finance platforms
     * List all finance platforms
     * @param param the request object
     */
    public financePlatformsGet(param: FinanceBetaApiFinancePlatformsGetRequest, options?: Configuration): Promise<void> {
        return this.api.financePlatformsGet(param.perPage, param.page,  options).toPromise();
    }
	
    /**
     * List all finance products
     * List all finance products
     * @param param the request object
     */
    public financeProductsGet(param: FinanceBetaApiFinanceProductsGetRequest, options?: Configuration): Promise<void> {
        return this.api.financeProductsGet(param.perPage, param.page, param.startAt, param.endAt,  options).toPromise();
    }
	

}




import { ObservableGlobalApi } from "./ObservableAPI";
import { GlobalApiRequestFactory, GlobalApiResponseProcessor} from "../apis/GlobalApi";

export interface GlobalApiGlobalDecentralizedFinanceDefiGetRequest {
}

export interface GlobalApiGlobalGetRequest {
}


export class ObjectGlobalApi {
    private api: ObservableGlobalApi

    public constructor(configuration: Configuration, requestFactory?: GlobalApiRequestFactory, responseProcessor?: GlobalApiResponseProcessor) {
        this.api = new ObservableGlobalApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * Get Top 100 Cryptocurrency Global Eecentralized Finance(defi) data 
     * Get cryptocurrency global decentralized finance(defi) data
     * @param param the request object
     */
    public globalDecentralizedFinanceDefiGet(param: GlobalApiGlobalDecentralizedFinanceDefiGetRequest, options?: Configuration): Promise<void> {
        return this.api.globalDecentralizedFinanceDefiGet( options).toPromise();
    }
	
    /**
     * Get cryptocurrency global data 
     * Get cryptocurrency global data
     * @param param the request object
     */
    public globalGet(param: GlobalApiGlobalGetRequest, options?: Configuration): Promise<void> {
        return this.api.globalGet( options).toPromise();
    }
	

}




import { ObservableIndexesBetaApi } from "./ObservableAPI";
import { IndexesBetaApiRequestFactory, IndexesBetaApiResponseProcessor} from "../apis/IndexesBetaApi";

export interface IndexesBetaApiIndexesGetRequest {
    /**
     * Total results per page
     * @type number
     * @memberof IndexesBetaApiindexesGet
     */
    perPage?: number
    /**
     * Page through results
     * @type number
     * @memberof IndexesBetaApiindexesGet
     */
    page?: number
}

export interface IndexesBetaApiIndexesListByMarketAndIdMarketIdIdGetRequest {
    /**
     * pass the market id (can be obtained from /exchanges/list)
     * @type string
     * @memberof IndexesBetaApiindexesListByMarketAndIdMarketIdIdGet
     */
    marketId: string
    /**
     * pass the index id (can be obtained from /indexes/list)
     * @type string
     * @memberof IndexesBetaApiindexesListByMarketAndIdMarketIdIdGet
     */
    id: string
}

export interface IndexesBetaApiIndexesListGetRequest {
}

export interface IndexesBetaApiIndexesMarketIdIdGetRequest {
    /**
     * pass the market id (can be obtained from /exchanges/list)
     * @type string
     * @memberof IndexesBetaApiindexesMarketIdIdGet
     */
    marketId: string
    /**
     * pass the index id (can be obtained from /indexes/list)
     * @type string
     * @memberof IndexesBetaApiindexesMarketIdIdGet
     */
    id: string
}


export class ObjectIndexesBetaApi {
    private api: ObservableIndexesBetaApi

    public constructor(configuration: Configuration, requestFactory?: IndexesBetaApiRequestFactory, responseProcessor?: IndexesBetaApiResponseProcessor) {
        this.api = new ObservableIndexesBetaApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * List all market indexes
     * List all market indexes
     * @param param the request object
     */
    public indexesGet(param: IndexesBetaApiIndexesGetRequest, options?: Configuration): Promise<void> {
        return this.api.indexesGet(param.perPage, param.page,  options).toPromise();
    }
	
    /**
     * get market index by market id and market index id
     * get market index by market id and market index id
     * @param param the request object
     */
    public indexesListByMarketAndIdMarketIdIdGet(param: IndexesBetaApiIndexesListByMarketAndIdMarketIdIdGetRequest, options?: Configuration): Promise<void> {
        return this.api.indexesListByMarketAndIdMarketIdIdGet(param.marketId, param.id,  options).toPromise();
    }
	
    /**
     * list market indexes id and name
     * list market indexes id and name
     * @param param the request object
     */
    public indexesListGet(param: IndexesBetaApiIndexesListGetRequest, options?: Configuration): Promise<void> {
        return this.api.indexesListGet( options).toPromise();
    }
	
    /**
     * get market index by market id and index id
     * get market index by market id and index id
     * @param param the request object
     */
    public indexesMarketIdIdGet(param: IndexesBetaApiIndexesMarketIdIdGetRequest, options?: Configuration): Promise<void> {
        return this.api.indexesMarketIdIdGet(param.marketId, param.id,  options).toPromise();
    }
	

}




import { ObservablePingApi } from "./ObservableAPI";
import { PingApiRequestFactory, PingApiResponseProcessor} from "../apis/PingApi";

export interface PingApiPingGetRequest {
}


export class ObjectPingApi {
    private api: ObservablePingApi

    public constructor(configuration: Configuration, requestFactory?: PingApiRequestFactory, responseProcessor?: PingApiResponseProcessor) {
        this.api = new ObservablePingApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * Check API server status 
     * Check API server status
     * @param param the request object
     */
    public pingGet(param: PingApiPingGetRequest, options?: Configuration): Promise<void> {
        return this.api.pingGet( options).toPromise();
    }
	

}




import { ObservableSimpleApi } from "./ObservableAPI";
import { SimpleApiRequestFactory, SimpleApiResponseProcessor} from "../apis/SimpleApi";

export interface SimpleApiSimplePriceGetRequest {
    /**
     * id of coins, comma-separated if querying more than 1 coin *refers to &lt;b&gt;&#x60;coins/list&#x60;&lt;/b&gt;
     * @type string
     * @memberof SimpleApisimplePriceGet
     */
    ids: string
    /**
     * vs_currency of coins, comma-separated if querying more than 1 vs_currency *refers to &lt;b&gt;&#x60;simple/supported_vs_currencies&#x60;&lt;/b&gt;
     * @type string
     * @memberof SimpleApisimplePriceGet
     */
    vsCurrencies: string
    /**
     * &lt;b&gt;true/false&lt;/b&gt; to include market_cap, &lt;b&gt;default: false&lt;/b&gt;
     * @type string
     * @memberof SimpleApisimplePriceGet
     */
    includeMarketCap?: string
    /**
     * &lt;b&gt;true/false&lt;/b&gt; to include 24hr_vol, &lt;b&gt;default: false&lt;/b&gt;
     * @type string
     * @memberof SimpleApisimplePriceGet
     */
    include24hrVol?: string
    /**
     * &lt;b&gt;true/false&lt;/b&gt; to include 24hr_change, &lt;b&gt;default: false&lt;/b&gt;
     * @type string
     * @memberof SimpleApisimplePriceGet
     */
    include24hrChange?: string
    /**
     * &lt;b&gt;true/false&lt;/b&gt; to include last_updated_at of price, &lt;b&gt;default: false&lt;/b&gt;
     * @type string
     * @memberof SimpleApisimplePriceGet
     */
    includeLastUpdatedAt?: string
}

export interface SimpleApiSimpleSupportedVsCurrenciesGetRequest {
}

export interface SimpleApiSimpleTokenPriceIdGetRequest {
    /**
     * The id of the platform issuing tokens (Only &#x60;ethereum&#x60; is supported for now)
     * @type string
     * @memberof SimpleApisimpleTokenPriceIdGet
     */
    id: string
    /**
     * The contract address of tokens, comma separated
     * @type string
     * @memberof SimpleApisimpleTokenPriceIdGet
     */
    contractAddresses: string
    /**
     * vs_currency of coins, comma-separated if querying more than 1 vs_currency *refers to &lt;b&gt;&#x60;simple/supported_vs_currencies&#x60;&lt;/b&gt;
     * @type string
     * @memberof SimpleApisimpleTokenPriceIdGet
     */
    vsCurrencies: string
    /**
     * &lt;b&gt;true/false&lt;/b&gt; to include market_cap, &lt;b&gt;default: false&lt;/b&gt;
     * @type string
     * @memberof SimpleApisimpleTokenPriceIdGet
     */
    includeMarketCap?: string
    /**
     * &lt;b&gt;true/false&lt;/b&gt; to include 24hr_vol, &lt;b&gt;default: false&lt;/b&gt;
     * @type string
     * @memberof SimpleApisimpleTokenPriceIdGet
     */
    include24hrVol?: string
    /**
     * &lt;b&gt;true/false&lt;/b&gt; to include 24hr_change, &lt;b&gt;default: false&lt;/b&gt;
     * @type string
     * @memberof SimpleApisimpleTokenPriceIdGet
     */
    include24hrChange?: string
    /**
     * &lt;b&gt;true/false&lt;/b&gt; to include last_updated_at of price, &lt;b&gt;default: false&lt;/b&gt;
     * @type string
     * @memberof SimpleApisimpleTokenPriceIdGet
     */
    includeLastUpdatedAt?: string
}


export class ObjectSimpleApi {
    private api: ObservableSimpleApi

    public constructor(configuration: Configuration, requestFactory?: SimpleApiRequestFactory, responseProcessor?: SimpleApiResponseProcessor) {
        this.api = new ObservableSimpleApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * Get the current price of any cryptocurrencies in any other supported currencies that you need.
     * @param param the request object
     */
    public simplePriceGet(param: SimpleApiSimplePriceGetRequest, options?: Configuration): Promise<void> {
        return this.api.simplePriceGet(param.ids, param.vsCurrencies, param.includeMarketCap, param.include24hrVol, param.include24hrChange, param.includeLastUpdatedAt,  options).toPromise();
    }
	
    /**
     * Get list of supported_vs_currencies.
     * @param param the request object
     */
    public simpleSupportedVsCurrenciesGet(param: SimpleApiSimpleSupportedVsCurrenciesGetRequest, options?: Configuration): Promise<void> {
        return this.api.simpleSupportedVsCurrenciesGet( options).toPromise();
    }
	
    /**
     * Get current price of tokens (using contract addresses) for a given platform in any other currency that you need.
     * @param param the request object
     */
    public simpleTokenPriceIdGet(param: SimpleApiSimpleTokenPriceIdGetRequest, options?: Configuration): Promise<void> {
        return this.api.simpleTokenPriceIdGet(param.id, param.contractAddresses, param.vsCurrencies, param.includeMarketCap, param.include24hrVol, param.include24hrChange, param.includeLastUpdatedAt,  options).toPromise();
    }
	

}




import { ObservableStatusUpdatesBetaApi } from "./ObservableAPI";
import { StatusUpdatesBetaApiRequestFactory, StatusUpdatesBetaApiResponseProcessor} from "../apis/StatusUpdatesBetaApi";

export interface StatusUpdatesBetaApiStatusUpdatesGetRequest {
    /**
     * Filtered by category (eg. general, milestone, partnership, exchange_listing, software_release, fund_movement, new_listings, event)
     * @type string
     * @memberof StatusUpdatesBetaApistatusUpdatesGet
     */
    category?: string
    /**
     * Filtered by Project Type (eg. coin, market). If left empty returns both status from coins and markets.
     * @type string
     * @memberof StatusUpdatesBetaApistatusUpdatesGet
     */
    projectType?: string
    /**
     * Total results per page
     * @type number
     * @memberof StatusUpdatesBetaApistatusUpdatesGet
     */
    perPage?: number
    /**
     * Page through results
     * @type number
     * @memberof StatusUpdatesBetaApistatusUpdatesGet
     */
    page?: number
}


export class ObjectStatusUpdatesBetaApi {
    private api: ObservableStatusUpdatesBetaApi

    public constructor(configuration: Configuration, requestFactory?: StatusUpdatesBetaApiRequestFactory, responseProcessor?: StatusUpdatesBetaApiResponseProcessor) {
        this.api = new ObservableStatusUpdatesBetaApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * List all status_updates with data (description, category, created_at, user, user_title and pin) 
     * List all status_updates with data (description, category, created_at, user, user_title and pin)
     * @param param the request object
     */
    public statusUpdatesGet(param: StatusUpdatesBetaApiStatusUpdatesGetRequest, options?: Configuration): Promise<void> {
        return this.api.statusUpdatesGet(param.category, param.projectType, param.perPage, param.page,  options).toPromise();
    }
	

}




import { ObservableTrendingApi } from "./ObservableAPI";
import { TrendingApiRequestFactory, TrendingApiResponseProcessor} from "../apis/TrendingApi";

export interface TrendingApiSearchTrendingGetRequest {
}


export class ObjectTrendingApi {
    private api: ObservableTrendingApi

    public constructor(configuration: Configuration, requestFactory?: TrendingApiRequestFactory, responseProcessor?: TrendingApiResponseProcessor) {
        this.api = new ObservableTrendingApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * Top-7 trending coins on CoinGecko as searched by users in the last 24 hours (Ordered by most popular first)
     * Get trending search coins (Top-7) on CoinGecko in the last 24 hours
     * @param param the request object
     */
    public searchTrendingGet(param: TrendingApiSearchTrendingGetRequest, options?: Configuration): Promise<void> {
        return this.api.searchTrendingGet( options).toPromise();
    }
	

}




// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';


/**
 * no description
 */
export class CoinsApiRequestFactory extends BaseAPIRequestFactory {
	
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
    public async coinsIdGet(id: string, localization?: string, tickers?: boolean, marketData?: boolean, communityData?: boolean, developerData?: boolean, sparkline?: boolean, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling coinsIdGet.');
        }

		
		
		
		
		
		
		
		// Path Params
    	const localVarPath = '/coins/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (localization !== undefined) {
        	requestContext.setQueryParam("localization", ObjectSerializer.serialize(localization, "string", ""));
        }
        if (tickers !== undefined) {
        	requestContext.setQueryParam("tickers", ObjectSerializer.serialize(tickers, "boolean", ""));
        }
        if (marketData !== undefined) {
        	requestContext.setQueryParam("market_data", ObjectSerializer.serialize(marketData, "boolean", ""));
        }
        if (communityData !== undefined) {
        	requestContext.setQueryParam("community_data", ObjectSerializer.serialize(communityData, "boolean", ""));
        }
        if (developerData !== undefined) {
        	requestContext.setQueryParam("developer_data", ObjectSerializer.serialize(developerData, "boolean", ""));
        }
        if (sparkline !== undefined) {
        	requestContext.setQueryParam("sparkline", ObjectSerializer.serialize(sparkline, "boolean", ""));
        }
	
		// Header Params
	
		// Form Params


		// Body Params

        // Apply auth methods

        return requestContext;
    }

    /**
     * Get historical data (name, price, market, stats) at a given date for a coin 
     * Get historical data (name, price, market, stats) at a given date for a coin
     * @param id pass the coin id (can be obtained from /coins) eg. bitcoin
     * @param date The date of data snapshot in dd-mm-yyyy eg. 30-12-2017
     * @param localization Set to false to exclude localized languages in response
     */
    public async coinsIdHistoryGet(id: string, date: string, localization?: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling coinsIdHistoryGet.');
        }

		
        // verify required parameter 'date' is not null or undefined
        if (date === null || date === undefined) {
            throw new RequiredError('Required parameter date was null or undefined when calling coinsIdHistoryGet.');
        }

		
		
		// Path Params
    	const localVarPath = '/coins/{id}/history'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (date !== undefined) {
        	requestContext.setQueryParam("date", ObjectSerializer.serialize(date, "string", ""));
        }
        if (localization !== undefined) {
        	requestContext.setQueryParam("localization", ObjectSerializer.serialize(localization, "string", ""));
        }
	
		// Header Params
	
		// Form Params


		// Body Params

        // Apply auth methods

        return requestContext;
    }

    /**
     * Get historical market data include price, market cap, and 24h volume (granularity auto)  <b>Minutely data will be used for duration within 1 day, Hourly data will be used for duration between 1 day and 90 days, Daily data will be used for duration above 90 days.</b>
     * Get historical market data include price, market cap, and 24h volume (granularity auto)
     * @param id pass the coin id (can be obtained from /coins) eg. bitcoin
     * @param vsCurrency The target currency of market data (usd, eur, jpy, etc.)
     * @param days Data up to number of days ago (eg. 1,14,30,max)
     * @param interval Data interval. Possible value: daily
     */
    public async coinsIdMarketChartGet(id: string, vsCurrency: string, days: string, interval?: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling coinsIdMarketChartGet.');
        }

		
        // verify required parameter 'vsCurrency' is not null or undefined
        if (vsCurrency === null || vsCurrency === undefined) {
            throw new RequiredError('Required parameter vsCurrency was null or undefined when calling coinsIdMarketChartGet.');
        }

		
        // verify required parameter 'days' is not null or undefined
        if (days === null || days === undefined) {
            throw new RequiredError('Required parameter days was null or undefined when calling coinsIdMarketChartGet.');
        }

		
		
		// Path Params
    	const localVarPath = '/coins/{id}/market_chart'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (vsCurrency !== undefined) {
        	requestContext.setQueryParam("vs_currency", ObjectSerializer.serialize(vsCurrency, "string", ""));
        }
        if (days !== undefined) {
        	requestContext.setQueryParam("days", ObjectSerializer.serialize(days, "string", ""));
        }
        if (interval !== undefined) {
        	requestContext.setQueryParam("interval", ObjectSerializer.serialize(interval, "string", ""));
        }
	
		// Header Params
	
		// Form Params


		// Body Params

        // Apply auth methods

        return requestContext;
    }

    /**
     * Get historical market data include price, market cap, and 24h volume within a range of timestamp (granularity auto)  <b>Minutely data will be used for duration within 1 day, Hourly data will be used for duration between 1 day and 90 days, Daily data will be used for duration above 90 days.</b>
     * Get historical market data include price, market cap, and 24h volume within a range of timestamp (granularity auto)
     * @param id pass the coin id (can be obtained from /coins) eg. bitcoin
     * @param vsCurrency The target currency of market data (usd, eur, jpy, etc.)
     * @param from From date in UNIX Timestamp (eg. 1392577232)
     * @param to To date in UNIX Timestamp (eg. 1422577232)
     */
    public async coinsIdMarketChartRangeGet(id: string, vsCurrency: string, from: string, to: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling coinsIdMarketChartRangeGet.');
        }

		
        // verify required parameter 'vsCurrency' is not null or undefined
        if (vsCurrency === null || vsCurrency === undefined) {
            throw new RequiredError('Required parameter vsCurrency was null or undefined when calling coinsIdMarketChartRangeGet.');
        }

		
        // verify required parameter 'from' is not null or undefined
        if (from === null || from === undefined) {
            throw new RequiredError('Required parameter from was null or undefined when calling coinsIdMarketChartRangeGet.');
        }

		
        // verify required parameter 'to' is not null or undefined
        if (to === null || to === undefined) {
            throw new RequiredError('Required parameter to was null or undefined when calling coinsIdMarketChartRangeGet.');
        }

		
		// Path Params
    	const localVarPath = '/coins/{id}/market_chart/range'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (vsCurrency !== undefined) {
        	requestContext.setQueryParam("vs_currency", ObjectSerializer.serialize(vsCurrency, "string", ""));
        }
        if (from !== undefined) {
        	requestContext.setQueryParam("from", ObjectSerializer.serialize(from, "string", ""));
        }
        if (to !== undefined) {
        	requestContext.setQueryParam("to", ObjectSerializer.serialize(to, "string", ""));
        }
	
		// Header Params
	
		// Form Params


		// Body Params

        // Apply auth methods

        return requestContext;
    }

    /**
     * Candle's body:  1 - 2 days: 30 minutes 3 - 30 days: 4 hours 31 and before: 4 days
     * Get coin's OHLC (Beta)
     * @param id pass the coin id (can be obtained from /coins/list) eg. bitcoin
     * @param vsCurrency The target currency of market data (usd, eur, jpy, etc.)
     * @param days  Data up to number of days ago (1/7/14/30/90/180/365/max)
     */
    public async coinsIdOhlcGet(id: string, vsCurrency: string, days: number, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling coinsIdOhlcGet.');
        }

		
        // verify required parameter 'vsCurrency' is not null or undefined
        if (vsCurrency === null || vsCurrency === undefined) {
            throw new RequiredError('Required parameter vsCurrency was null or undefined when calling coinsIdOhlcGet.');
        }

		
        // verify required parameter 'days' is not null or undefined
        if (days === null || days === undefined) {
            throw new RequiredError('Required parameter days was null or undefined when calling coinsIdOhlcGet.');
        }

		
		// Path Params
    	const localVarPath = '/coins/{id}/ohlc'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (vsCurrency !== undefined) {
        	requestContext.setQueryParam("vs_currency", ObjectSerializer.serialize(vsCurrency, "string", ""));
        }
        if (days !== undefined) {
        	requestContext.setQueryParam("days", ObjectSerializer.serialize(days, "number", ""));
        }
	
		// Header Params
	
		// Form Params


		// Body Params

        // Apply auth methods

        return requestContext;
    }

    /**
     * Get status updates for a given coin
     * Get status updates for a given coin (beta)
     * @param id pass the coin id (can be obtained from /coins) eg. bitcoin
     * @param perPage Total results per page
     * @param page Page through results
     */
    public async coinsIdStatusUpdatesGet(id: string, perPage?: number, page?: number, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling coinsIdStatusUpdatesGet.');
        }

		
		
		
		// Path Params
    	const localVarPath = '/coins/{id}/status_updates'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (perPage !== undefined) {
        	requestContext.setQueryParam("per_page", ObjectSerializer.serialize(perPage, "number", ""));
        }
        if (page !== undefined) {
        	requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }
	
		// Header Params
	
		// Form Params


		// Body Params

        // Apply auth methods

        return requestContext;
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
    public async coinsIdTickersGet(id: string, exchangeIds?: string, includeExchangeLogo?: string, page?: number, order?: string, depth?: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling coinsIdTickersGet.');
        }

		
		
		
		
		
		
		// Path Params
    	const localVarPath = '/coins/{id}/tickers'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (exchangeIds !== undefined) {
        	requestContext.setQueryParam("exchange_ids", ObjectSerializer.serialize(exchangeIds, "string", ""));
        }
        if (includeExchangeLogo !== undefined) {
        	requestContext.setQueryParam("include_exchange_logo", ObjectSerializer.serialize(includeExchangeLogo, "string", ""));
        }
        if (page !== undefined) {
        	requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }
        if (order !== undefined) {
        	requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "string", ""));
        }
        if (depth !== undefined) {
        	requestContext.setQueryParam("depth", ObjectSerializer.serialize(depth, "string", ""));
        }
	
		// Header Params
	
		// Form Params


		// Body Params

        // Apply auth methods

        return requestContext;
    }

    /**
     * Use this to obtain all the coins' id in order to make API calls
     * List all supported coins id, name and symbol (no pagination required)
     * @param includePlatform flag to include platform contract addresses (eg. 0x.... for Ethereum based tokens).   valid values: true, false
     */
    public async coinsListGet(includePlatform?: boolean, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		// Path Params
    	const localVarPath = '/coins/list';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (includePlatform !== undefined) {
        	requestContext.setQueryParam("include_platform", ObjectSerializer.serialize(includePlatform, "boolean", ""));
        }
	
		// Header Params
	
		// Form Params


		// Body Params

        // Apply auth methods

        return requestContext;
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
    public async coinsMarketsGet(vsCurrency: string, ids?: string, category?: string, order?: string, perPage?: number, page?: number, sparkline?: boolean, priceChangePercentage?: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'vsCurrency' is not null or undefined
        if (vsCurrency === null || vsCurrency === undefined) {
            throw new RequiredError('Required parameter vsCurrency was null or undefined when calling coinsMarketsGet.');
        }

		
		
		
		
		
		
		
		
		// Path Params
    	const localVarPath = '/coins/markets';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (vsCurrency !== undefined) {
        	requestContext.setQueryParam("vs_currency", ObjectSerializer.serialize(vsCurrency, "string", ""));
        }
        if (ids !== undefined) {
        	requestContext.setQueryParam("ids", ObjectSerializer.serialize(ids, "string", ""));
        }
        if (category !== undefined) {
        	requestContext.setQueryParam("category", ObjectSerializer.serialize(category, "string", ""));
        }
        if (order !== undefined) {
        	requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "string", ""));
        }
        if (perPage !== undefined) {
        	requestContext.setQueryParam("per_page", ObjectSerializer.serialize(perPage, "number", ""));
        }
        if (page !== undefined) {
        	requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }
        if (sparkline !== undefined) {
        	requestContext.setQueryParam("sparkline", ObjectSerializer.serialize(sparkline, "boolean", ""));
        }
        if (priceChangePercentage !== undefined) {
        	requestContext.setQueryParam("price_change_percentage", ObjectSerializer.serialize(priceChangePercentage, "string", ""));
        }
	
		// Header Params
	
		// Form Params


		// Body Params

        // Apply auth methods

        return requestContext;
    }

}



export class CoinsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to coinsIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async coinsIdGet(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to coinsIdHistoryGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async coinsIdHistoryGet(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to coinsIdMarketChartGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async coinsIdMarketChartGet(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to coinsIdMarketChartRangeGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async coinsIdMarketChartRangeGet(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to coinsIdOhlcGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async coinsIdOhlcGet(response: ResponseContext): Promise<Array<number> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<number> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<number>", ""
            ) as Array<number>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<number> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<number>", ""
            ) as Array<number>;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to coinsIdStatusUpdatesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async coinsIdStatusUpdatesGet(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to coinsIdTickersGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async coinsIdTickersGet(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to coinsListGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async coinsListGet(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to coinsMarketsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async coinsMarketsGet(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
}

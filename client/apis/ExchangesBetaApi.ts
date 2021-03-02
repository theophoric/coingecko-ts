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
export class ExchangesBetaApiRequestFactory extends BaseAPIRequestFactory {
	
    /**
     * List all exchanges
     * List all exchanges
     * @param perPage Valid values: 1...250 Total results per page Default value:: 100
     * @param page page through results
     */
    public async exchangesGet(perPage?: number, page?: number, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		
		// Path Params
    	const localVarPath = '/exchanges';

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
     * Get exchange volume in BTC and tickers<br><br> **IMPORTANT**:  Ticker object is limited to 100 items, to get more tickers, use `/exchanges/{id}/tickers`  Ticker `is_stale` is true when ticker that has not been updated/unchanged from the exchange for a while.  Ticker `is_anomaly` is true if ticker's price is outliered by our system.  You are responsible for managing how you want to display these information (e.g. footnote, different background, change opacity, hide) 
     * Get exchange volume in BTC and top 100 tickers only
     * @param id pass the exchange id (can be obtained from /exchanges/list) eg. binance
     */
    public async exchangesIdGet(id: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling exchangesIdGet.');
        }

		
		// Path Params
    	const localVarPath = '/exchanges/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params

        // Apply auth methods

        return requestContext;
    }

    /**
     * Get status updates for a given exchange
     * Get status updates for a given exchange (beta)
     * @param id pass the exchange id (can be obtained from /exchanges/list) eg. binance
     * @param perPage Total results per page
     * @param page Page through results
     */
    public async exchangesIdStatusUpdatesGet(id: string, perPage?: number, page?: number, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling exchangesIdStatusUpdatesGet.');
        }

		
		
		
		// Path Params
    	const localVarPath = '/exchanges/{id}/status_updates'
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
     * Get exchange tickers (paginated)<br><br> **IMPORTANT**:  Ticker `is_stale` is true when ticker that has not been updated/unchanged from the exchange for a while.  Ticker `is_anomaly` is true if ticker's price is outliered by our system.  You are responsible for managing how you want to display these information (e.g. footnote, different background, change opacity, hide) 
     * Get exchange tickers (paginated, 100 tickers per page)
     * @param id pass the exchange id (can be obtained from /exchanges/list) eg. binance
     * @param coinIds filter tickers by coin_ids (ref: v3/coins/list)
     * @param includeExchangeLogo flag to show exchange_logo
     * @param page Page through results
     * @param depth flag to show 2% orderbook depth i.e., cost_to_move_up_usd and cost_to_move_down_usd
     * @param order valid values: &lt;b&gt;trust_score_desc (default), trust_score_asc and volume_desc&lt;/b&gt;
     */
    public async exchangesIdTickersGet(id: string, coinIds?: string, includeExchangeLogo?: string, page?: number, depth?: string, order?: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling exchangesIdTickersGet.');
        }

		
		
		
		
		
		
		// Path Params
    	const localVarPath = '/exchanges/{id}/tickers'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (coinIds !== undefined) {
        	requestContext.setQueryParam("coin_ids", ObjectSerializer.serialize(coinIds, "string", ""));
        }
        if (includeExchangeLogo !== undefined) {
        	requestContext.setQueryParam("include_exchange_logo", ObjectSerializer.serialize(includeExchangeLogo, "string", ""));
        }
        if (page !== undefined) {
        	requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }
        if (depth !== undefined) {
        	requestContext.setQueryParam("depth", ObjectSerializer.serialize(depth, "string", ""));
        }
        if (order !== undefined) {
        	requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "string", ""));
        }
	
		// Header Params
	
		// Form Params


		// Body Params

        // Apply auth methods

        return requestContext;
    }

    /**
     * Get volume_chart data for a given exchange
     * Get volume_chart data for a given exchange (beta)
     * @param id pass the exchange id (can be obtained from /exchanges/list) eg. binance
     * @param days  Data up to number of days ago (eg. 1,14,30)
     */
    public async exchangesIdVolumeChartGet(id: string, days: number, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling exchangesIdVolumeChartGet.');
        }

		
        // verify required parameter 'days' is not null or undefined
        if (days === null || days === undefined) {
            throw new RequiredError('Required parameter days was null or undefined when calling exchangesIdVolumeChartGet.');
        }

		
		// Path Params
    	const localVarPath = '/exchanges/{id}/volume_chart'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
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
     * Use this to obtain all the markets' id in order to make API calls
     * List all supported markets id and name (no pagination required)
     */
    public async exchangesListGet(options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		// Path Params
    	const localVarPath = '/exchanges/list';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params

        // Apply auth methods

        return requestContext;
    }

}



export class ExchangesBetaApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to exchangesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async exchangesGet(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to exchangesIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async exchangesIdGet(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to exchangesIdStatusUpdatesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async exchangesIdStatusUpdatesGet(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to exchangesIdTickersGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async exchangesIdTickersGet(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to exchangesIdVolumeChartGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async exchangesIdVolumeChartGet(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to exchangesListGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async exchangesListGet(response: ResponseContext): Promise<void > {
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

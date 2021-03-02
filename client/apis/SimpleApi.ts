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
export class SimpleApiRequestFactory extends BaseAPIRequestFactory {
	
    /**
     * Get the current price of any cryptocurrencies in any other supported currencies that you need.
     * @param ids id of coins, comma-separated if querying more than 1 coin *refers to &lt;b&gt;&#x60;coins/list&#x60;&lt;/b&gt;
     * @param vsCurrencies vs_currency of coins, comma-separated if querying more than 1 vs_currency *refers to &lt;b&gt;&#x60;simple/supported_vs_currencies&#x60;&lt;/b&gt;
     * @param includeMarketCap &lt;b&gt;true/false&lt;/b&gt; to include market_cap, &lt;b&gt;default: false&lt;/b&gt;
     * @param include24hrVol &lt;b&gt;true/false&lt;/b&gt; to include 24hr_vol, &lt;b&gt;default: false&lt;/b&gt;
     * @param include24hrChange &lt;b&gt;true/false&lt;/b&gt; to include 24hr_change, &lt;b&gt;default: false&lt;/b&gt;
     * @param includeLastUpdatedAt &lt;b&gt;true/false&lt;/b&gt; to include last_updated_at of price, &lt;b&gt;default: false&lt;/b&gt;
     */
    public async simplePriceGet(ids: string, vsCurrencies: string, includeMarketCap?: string, include24hrVol?: string, include24hrChange?: string, includeLastUpdatedAt?: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'ids' is not null or undefined
        if (ids === null || ids === undefined) {
            throw new RequiredError('Required parameter ids was null or undefined when calling simplePriceGet.');
        }

		
        // verify required parameter 'vsCurrencies' is not null or undefined
        if (vsCurrencies === null || vsCurrencies === undefined) {
            throw new RequiredError('Required parameter vsCurrencies was null or undefined when calling simplePriceGet.');
        }

		
		
		
		
		
		// Path Params
    	const localVarPath = '/simple/price';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (ids !== undefined) {
        	requestContext.setQueryParam("ids", ObjectSerializer.serialize(ids, "string", ""));
        }
        if (vsCurrencies !== undefined) {
        	requestContext.setQueryParam("vs_currencies", ObjectSerializer.serialize(vsCurrencies, "string", ""));
        }
        if (includeMarketCap !== undefined) {
        	requestContext.setQueryParam("include_market_cap", ObjectSerializer.serialize(includeMarketCap, "string", ""));
        }
        if (include24hrVol !== undefined) {
        	requestContext.setQueryParam("include_24hr_vol", ObjectSerializer.serialize(include24hrVol, "string", ""));
        }
        if (include24hrChange !== undefined) {
        	requestContext.setQueryParam("include_24hr_change", ObjectSerializer.serialize(include24hrChange, "string", ""));
        }
        if (includeLastUpdatedAt !== undefined) {
        	requestContext.setQueryParam("include_last_updated_at", ObjectSerializer.serialize(includeLastUpdatedAt, "string", ""));
        }
	
		// Header Params
	
		// Form Params


		// Body Params

        // Apply auth methods

        return requestContext;
    }

    /**
     * Get list of supported_vs_currencies.
     */
    public async simpleSupportedVsCurrenciesGet(options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		// Path Params
    	const localVarPath = '/simple/supported_vs_currencies';

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
     * Get current price of tokens (using contract addresses) for a given platform in any other currency that you need.
     * @param id The id of the platform issuing tokens (Only &#x60;ethereum&#x60; is supported for now)
     * @param contractAddresses The contract address of tokens, comma separated
     * @param vsCurrencies vs_currency of coins, comma-separated if querying more than 1 vs_currency *refers to &lt;b&gt;&#x60;simple/supported_vs_currencies&#x60;&lt;/b&gt;
     * @param includeMarketCap &lt;b&gt;true/false&lt;/b&gt; to include market_cap, &lt;b&gt;default: false&lt;/b&gt;
     * @param include24hrVol &lt;b&gt;true/false&lt;/b&gt; to include 24hr_vol, &lt;b&gt;default: false&lt;/b&gt;
     * @param include24hrChange &lt;b&gt;true/false&lt;/b&gt; to include 24hr_change, &lt;b&gt;default: false&lt;/b&gt;
     * @param includeLastUpdatedAt &lt;b&gt;true/false&lt;/b&gt; to include last_updated_at of price, &lt;b&gt;default: false&lt;/b&gt;
     */
    public async simpleTokenPriceIdGet(id: string, contractAddresses: string, vsCurrencies: string, includeMarketCap?: string, include24hrVol?: string, include24hrChange?: string, includeLastUpdatedAt?: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling simpleTokenPriceIdGet.');
        }

		
        // verify required parameter 'contractAddresses' is not null or undefined
        if (contractAddresses === null || contractAddresses === undefined) {
            throw new RequiredError('Required parameter contractAddresses was null or undefined when calling simpleTokenPriceIdGet.');
        }

		
        // verify required parameter 'vsCurrencies' is not null or undefined
        if (vsCurrencies === null || vsCurrencies === undefined) {
            throw new RequiredError('Required parameter vsCurrencies was null or undefined when calling simpleTokenPriceIdGet.');
        }

		
		
		
		
		
		// Path Params
    	const localVarPath = '/simple/token_price/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (contractAddresses !== undefined) {
        	requestContext.setQueryParam("contract_addresses", ObjectSerializer.serialize(contractAddresses, "string", ""));
        }
        if (vsCurrencies !== undefined) {
        	requestContext.setQueryParam("vs_currencies", ObjectSerializer.serialize(vsCurrencies, "string", ""));
        }
        if (includeMarketCap !== undefined) {
        	requestContext.setQueryParam("include_market_cap", ObjectSerializer.serialize(includeMarketCap, "string", ""));
        }
        if (include24hrVol !== undefined) {
        	requestContext.setQueryParam("include_24hr_vol", ObjectSerializer.serialize(include24hrVol, "string", ""));
        }
        if (include24hrChange !== undefined) {
        	requestContext.setQueryParam("include_24hr_change", ObjectSerializer.serialize(include24hrChange, "string", ""));
        }
        if (includeLastUpdatedAt !== undefined) {
        	requestContext.setQueryParam("include_last_updated_at", ObjectSerializer.serialize(includeLastUpdatedAt, "string", ""));
        }
	
		// Header Params
	
		// Form Params


		// Body Params

        // Apply auth methods

        return requestContext;
    }

}



export class SimpleApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to simplePriceGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async simplePriceGet(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to simpleSupportedVsCurrenciesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async simpleSupportedVsCurrenciesGet(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to simpleTokenPriceIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async simpleTokenPriceIdGet(response: ResponseContext): Promise<void > {
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

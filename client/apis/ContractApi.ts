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
export class ContractApiRequestFactory extends BaseAPIRequestFactory {
	
    /**
     * Get coin info from contract address
     * Get coin info from contract address
     * @param id Asset platform (only &#x60;ethereum&#x60; is supported at this moment)
     * @param contractAddress Token&#39;s contract address
     */
    public async coinsIdContractContractAddressGet(id: string, contractAddress: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling coinsIdContractContractAddressGet.');
        }

		
        // verify required parameter 'contractAddress' is not null or undefined
        if (contractAddress === null || contractAddress === undefined) {
            throw new RequiredError('Required parameter contractAddress was null or undefined when calling coinsIdContractContractAddressGet.');
        }

		
		// Path Params
    	const localVarPath = '/coins/{id}/contract/{contract_address}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
            .replace('{' + 'contract_address' + '}', encodeURIComponent(String(contractAddress)));

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
     * Get historical market data include price, market cap, and 24h volume (granularity auto) 
     * Get historical market data include price, market cap, and 24h volume (granularity auto) from a contract address 
     * @param id The id of the platform issuing tokens (Only &#x60;ethereum&#x60; is supported for now)
     * @param contractAddress Token&#39;s contract address
     * @param vsCurrency The target currency of market data (usd, eur, jpy, etc.)
     * @param days Data up to number of days ago (eg. 1,14,30,max)
     */
    public async coinsIdContractContractAddressMarketChartGet(id: string, contractAddress: string, vsCurrency: string, days: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling coinsIdContractContractAddressMarketChartGet.');
        }

		
        // verify required parameter 'contractAddress' is not null or undefined
        if (contractAddress === null || contractAddress === undefined) {
            throw new RequiredError('Required parameter contractAddress was null or undefined when calling coinsIdContractContractAddressMarketChartGet.');
        }

		
        // verify required parameter 'vsCurrency' is not null or undefined
        if (vsCurrency === null || vsCurrency === undefined) {
            throw new RequiredError('Required parameter vsCurrency was null or undefined when calling coinsIdContractContractAddressMarketChartGet.');
        }

		
        // verify required parameter 'days' is not null or undefined
        if (days === null || days === undefined) {
            throw new RequiredError('Required parameter days was null or undefined when calling coinsIdContractContractAddressMarketChartGet.');
        }

		
		// Path Params
    	const localVarPath = '/coins/{id}/contract/{contract_address}/market_chart/'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
            .replace('{' + 'contract_address' + '}', encodeURIComponent(String(contractAddress)));

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
	
		// Header Params
	
		// Form Params


		// Body Params

        // Apply auth methods

        return requestContext;
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
    public async coinsIdContractContractAddressMarketChartRangeGet(id: string, contractAddress: string, vsCurrency: string, from: string, to: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling coinsIdContractContractAddressMarketChartRangeGet.');
        }

		
        // verify required parameter 'contractAddress' is not null or undefined
        if (contractAddress === null || contractAddress === undefined) {
            throw new RequiredError('Required parameter contractAddress was null or undefined when calling coinsIdContractContractAddressMarketChartRangeGet.');
        }

		
        // verify required parameter 'vsCurrency' is not null or undefined
        if (vsCurrency === null || vsCurrency === undefined) {
            throw new RequiredError('Required parameter vsCurrency was null or undefined when calling coinsIdContractContractAddressMarketChartRangeGet.');
        }

		
        // verify required parameter 'from' is not null or undefined
        if (from === null || from === undefined) {
            throw new RequiredError('Required parameter from was null or undefined when calling coinsIdContractContractAddressMarketChartRangeGet.');
        }

		
        // verify required parameter 'to' is not null or undefined
        if (to === null || to === undefined) {
            throw new RequiredError('Required parameter to was null or undefined when calling coinsIdContractContractAddressMarketChartRangeGet.');
        }

		
		// Path Params
    	const localVarPath = '/coins/{id}/contract/{contract_address}/market_chart/range'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
            .replace('{' + 'contract_address' + '}', encodeURIComponent(String(contractAddress)));

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

}



export class ContractApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to coinsIdContractContractAddressGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async coinsIdContractContractAddressGet(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to coinsIdContractContractAddressMarketChartGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async coinsIdContractContractAddressMarketChartGet(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to coinsIdContractContractAddressMarketChartRangeGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async coinsIdContractContractAddressMarketChartRangeGet(response: ResponseContext): Promise<void > {
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

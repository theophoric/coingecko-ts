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
export class IndexesBetaApiRequestFactory extends BaseAPIRequestFactory {
	
    /**
     * List all market indexes
     * List all market indexes
     * @param perPage Total results per page
     * @param page Page through results
     */
    public async indexesGet(perPage?: number, page?: number, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		
		// Path Params
    	const localVarPath = '/indexes';

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
     * get market index by market id and market index id
     * get market index by market id and market index id
     * @param marketId pass the market id (can be obtained from /exchanges/list)
     * @param id pass the index id (can be obtained from /indexes/list)
     */
    public async indexesListByMarketAndIdMarketIdIdGet(marketId: string, id: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'marketId' is not null or undefined
        if (marketId === null || marketId === undefined) {
            throw new RequiredError('Required parameter marketId was null or undefined when calling indexesListByMarketAndIdMarketIdIdGet.');
        }

		
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling indexesListByMarketAndIdMarketIdIdGet.');
        }

		
		// Path Params
    	const localVarPath = '/indexes/list_by_market_and_id/{market_id}/{id}'
            .replace('{' + 'market_id' + '}', encodeURIComponent(String(marketId)))
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
     * list market indexes id and name
     * list market indexes id and name
     */
    public async indexesListGet(options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		// Path Params
    	const localVarPath = '/indexes/list';

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
     * get market index by market id and index id
     * get market index by market id and index id
     * @param marketId pass the market id (can be obtained from /exchanges/list)
     * @param id pass the index id (can be obtained from /indexes/list)
     */
    public async indexesMarketIdIdGet(marketId: string, id: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'marketId' is not null or undefined
        if (marketId === null || marketId === undefined) {
            throw new RequiredError('Required parameter marketId was null or undefined when calling indexesMarketIdIdGet.');
        }

		
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling indexesMarketIdIdGet.');
        }

		
		// Path Params
    	const localVarPath = '/indexes/{market_id}/{id}'
            .replace('{' + 'market_id' + '}', encodeURIComponent(String(marketId)))
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

}



export class IndexesBetaApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to indexesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async indexesGet(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to indexesListByMarketAndIdMarketIdIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async indexesListByMarketAndIdMarketIdIdGet(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to indexesListGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async indexesListGet(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to indexesMarketIdIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async indexesMarketIdIdGet(response: ResponseContext): Promise<void > {
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

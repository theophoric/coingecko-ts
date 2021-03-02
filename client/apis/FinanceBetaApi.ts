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
export class FinanceBetaApiRequestFactory extends BaseAPIRequestFactory {
	
    /**
     * List all finance platforms
     * List all finance platforms
     * @param perPage Total results per page
     * @param page page of results (paginated to 100 by default)
     */
    public async financePlatformsGet(perPage?: number, page?: number, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		
		// Path Params
    	const localVarPath = '/finance_platforms';

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
     * List all finance products
     * List all finance products
     * @param perPage Total results per page
     * @param page page of results (paginated to 100 by default)
     * @param startAt start date of the financial products
     * @param endAt end date of the financial products
     */
    public async financeProductsGet(perPage?: number, page?: string, startAt?: string, endAt?: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		
		
		
		// Path Params
    	const localVarPath = '/finance_products';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (perPage !== undefined) {
        	requestContext.setQueryParam("per_page", ObjectSerializer.serialize(perPage, "number", ""));
        }
        if (page !== undefined) {
        	requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "string", ""));
        }
        if (startAt !== undefined) {
        	requestContext.setQueryParam("start_at", ObjectSerializer.serialize(startAt, "string", ""));
        }
        if (endAt !== undefined) {
        	requestContext.setQueryParam("end_at", ObjectSerializer.serialize(endAt, "string", ""));
        }
	
		// Header Params
	
		// Form Params


		// Body Params

        // Apply auth methods

        return requestContext;
    }

}



export class FinanceBetaApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to financePlatformsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async financePlatformsGet(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to financeProductsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async financeProductsGet(response: ResponseContext): Promise<void > {
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

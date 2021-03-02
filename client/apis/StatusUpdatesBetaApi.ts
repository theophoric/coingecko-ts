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
export class StatusUpdatesBetaApiRequestFactory extends BaseAPIRequestFactory {
	
    /**
     * List all status_updates with data (description, category, created_at, user, user_title and pin) 
     * List all status_updates with data (description, category, created_at, user, user_title and pin)
     * @param category Filtered by category (eg. general, milestone, partnership, exchange_listing, software_release, fund_movement, new_listings, event)
     * @param projectType Filtered by Project Type (eg. coin, market). If left empty returns both status from coins and markets.
     * @param perPage Total results per page
     * @param page Page through results
     */
    public async statusUpdatesGet(category?: string, projectType?: string, perPage?: number, page?: number, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		
		
		
		// Path Params
    	const localVarPath = '/status_updates';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (category !== undefined) {
        	requestContext.setQueryParam("category", ObjectSerializer.serialize(category, "string", ""));
        }
        if (projectType !== undefined) {
        	requestContext.setQueryParam("project_type", ObjectSerializer.serialize(projectType, "string", ""));
        }
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

}



export class StatusUpdatesBetaApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to statusUpdatesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async statusUpdatesGet(response: ResponseContext): Promise<void > {
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

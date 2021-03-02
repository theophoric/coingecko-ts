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
export class EventsApiRequestFactory extends BaseAPIRequestFactory {
	
    /**
     * Get list of event countries 
     * Get list of event countries
     */
    public async eventsCountriesGet(options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		// Path Params
    	const localVarPath = '/events/countries';

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
     * Get events, paginated by 100 
     * Get events, paginated by 100
     * @param countryCode country_code of event (eg. &#39;US&#39;). use &lt;b&gt;/api/v3/events/countries&lt;/b&gt; for list of country_codes
     * @param type type of event (eg. &#39;Conference&#39;). use &lt;b&gt;/api/v3/events/types&lt;/b&gt; for list of types
     * @param page page of results (paginated by 100)
     * @param upcomingEventsOnly lists only upcoming events. &lt;br&gt;true, false&lt;/br&gt; (defaults to true, set to false to list all events)
     * @param fromDate lists events after this date yyyy-mm-dd
     * @param toDate lists events before this date yyyy-mm-dd (set upcoming_events_only to false if fetching past events)
     */
    public async eventsGet(countryCode?: string, type?: string, page?: number, upcomingEventsOnly?: boolean, fromDate?: string, toDate?: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		
		
		
		
		
		// Path Params
    	const localVarPath = '/events';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (countryCode !== undefined) {
        	requestContext.setQueryParam("country_code", ObjectSerializer.serialize(countryCode, "string", ""));
        }
        if (type !== undefined) {
        	requestContext.setQueryParam("type", ObjectSerializer.serialize(type, "string", ""));
        }
        if (page !== undefined) {
        	requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }
        if (upcomingEventsOnly !== undefined) {
        	requestContext.setQueryParam("upcoming_events_only", ObjectSerializer.serialize(upcomingEventsOnly, "boolean", ""));
        }
        if (fromDate !== undefined) {
        	requestContext.setQueryParam("from_date", ObjectSerializer.serialize(fromDate, "string", ""));
        }
        if (toDate !== undefined) {
        	requestContext.setQueryParam("to_date", ObjectSerializer.serialize(toDate, "string", ""));
        }
	
		// Header Params
	
		// Form Params


		// Body Params

        // Apply auth methods

        return requestContext;
    }

    /**
     * Get list of event types 
     * Get list of events types
     */
    public async eventsTypesGet(options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		// Path Params
    	const localVarPath = '/events/types';

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



export class EventsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to eventsCountriesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async eventsCountriesGet(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to eventsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async eventsGet(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to eventsTypesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async eventsTypesGet(response: ResponseContext): Promise<void > {
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

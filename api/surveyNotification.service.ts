/**
 * Appointment Decision System API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { SurveyNotification } from '../model/surveyNotification';
import { SurveyNotificationListResponse } from '../model/surveyNotificationListResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { SurveyNotificationServiceInterface }                            from './surveyNotification.serviceInterface';


@Injectable()
export class SurveyNotificationService implements SurveyNotificationServiceInterface {

    protected basePath = 'https://virtserver.swaggerhub.com/Moritz-Hoeppner/Terminio/1.0.0';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Get all survey notifications for current user and apply filters
     * 
     * @param read Whether to get read or unread survey notifications. If not specified, all survey notifications are returned.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSurveyNotifications(read?: boolean, observe?: 'body', reportProgress?: boolean): Observable<SurveyNotificationListResponse>;
    public getSurveyNotifications(read?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SurveyNotificationListResponse>>;
    public getSurveyNotifications(read?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SurveyNotificationListResponse>>;
    public getSurveyNotifications(read?: boolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (read !== undefined && read !== null) {
            queryParameters = queryParameters.set('read', <any>read);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<SurveyNotificationListResponse>('get',`${this.basePath}/survey_notification`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Marks a survey notification as read
     * 
     * @param surveyNotificationId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public readSurveyNotification(surveyNotificationId: number, observe?: 'body', reportProgress?: boolean): Observable<SurveyNotification>;
    public readSurveyNotification(surveyNotificationId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SurveyNotification>>;
    public readSurveyNotification(surveyNotificationId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SurveyNotification>>;
    public readSurveyNotification(surveyNotificationId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (surveyNotificationId === null || surveyNotificationId === undefined) {
            throw new Error('Required parameter surveyNotificationId was null or undefined when calling readSurveyNotification.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<SurveyNotification>('put',`${this.basePath}/survey_notification/${encodeURIComponent(String(surveyNotificationId))}/read`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}

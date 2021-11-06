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
 */
import { HttpHeaders }                                       from '@angular/common/http';

import { Observable }                                        from 'rxjs/Observable';


import { Account } from '../model/account';
import { AccountCreateRequest } from '../model/accountCreateRequest';
import { AccountLoginRequest } from '../model/accountLoginRequest';
import { AccountUpdateRequest } from '../model/accountUpdateRequest';
import { AuthenticationResponse } from '../model/authenticationResponse';


import { Configuration }                                     from '../configuration';


export interface UsersServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    

    /**
    * Creates a User.
    * 
    * @param body Basic User information
    */
    createAccount(body: AccountCreateRequest, extraHttpRequestParams?: any): Observable<Account>;

    /**
    * Get account information by userId.
    * 
    */
    getAccountInformation(extraHttpRequestParams?: any): Observable<Account>;

    /**
    * Logs in a User.
    * 
    * @param body Basic User information
    */
    loginAccount(body: AccountLoginRequest, extraHttpRequestParams?: any): Observable<AuthenticationResponse>;

    /**
    * Updates information of a User by userId.
    * 
    * @param body Fields to be updated for the User.
    */
    updateAccountInformation(body: AccountUpdateRequest, extraHttpRequestParams?: any): Observable<Account>;

}
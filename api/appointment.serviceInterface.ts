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


import { AppointmentListResponse } from '../model/appointmentListResponse';


import { Configuration }                                     from '../configuration';


export interface AppointmentServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    

    /**
    * Get all appointments for the current user.
    * 
    */
    getAppointments(extraHttpRequestParams?: any): Observable<AppointmentListResponse>;

}
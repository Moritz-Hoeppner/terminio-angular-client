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
import { Survey } from './survey';

export interface SurveyNotification { 
    type?: string;
    read?: boolean;
    survey?: Survey;
}
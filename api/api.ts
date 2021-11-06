export * from './appointment.service';
import { AppointmentService } from './appointment.service';
export * from './appointment.serviceInterface'
export * from './survey.service';
import { SurveyService } from './survey.service';
export * from './survey.serviceInterface'
export * from './surveyNotification.service';
import { SurveyNotificationService } from './surveyNotification.service';
export * from './surveyNotification.serviceInterface'
export * from './users.service';
import { UsersService } from './users.service';
export * from './users.serviceInterface'
export const APIS = [AppointmentService, SurveyService, SurveyNotificationService, UsersService];

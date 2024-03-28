'use client'
import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: '2053292c-92bc-43cf-8237-04ccaacff61a',
    clientToken: 'pub677cc4c2221ae4bb3fefd77457fe3206',
    site: 'us5.datadoghq.com',
    service: 'wep',
    env: '<ENV_NAME>',
    // Specify a version number to identify the deployed version of your application in Datadog
    // version: '1.0.0', 
    sessionSampleRate: 100,
    sessionReplaySampleRate: 100,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: 'mask-user-input',
});

export default function DatadogInit() {
    // Render nothing - this component is only included so that the init code
    // above will run client-side
    return null;
}
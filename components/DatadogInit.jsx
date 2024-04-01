'use client'
// import { datadogRum } from '@datadog/browser-rum';

// datadogRum.init({
//     applicationId: '873e7e49-6f6a-426f-846d-e35824bae07b',
//     clientToken: 'pub33399532166e22a2964cfa3ed897d7ae',
//     site: 'us5.datadoghq.com',
//     service: 'wep',
//     env: '<ENV_NAME>',
//     // Specify a version number to identify the deployed version of your application in Datadog
//     // version: '1.0.0', 
//     sessionSampleRate: 100,
//     sessionReplaySampleRate: 100,
//     trackUserInteractions: true,
//     trackResources: true,
//     trackLongTasks: true,
//     defaultPrivacyLevel: 'mask-user-input',
// });

// export default function DatadogInit() {
//     // Render nothing - this component is only included so that the init code
//     // above will run client-side
//     return null;
// }

import { useEffect } from 'react';
import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: '873e7e49-6f6a-426f-846d-e35824bae07b',
    clientToken: 'pub33399532166e22a2964cfa3ed897d7ae',
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

function generateUniqueUserId() {
    // Implement a method to generate a unique user ID
    return 'user_' + Math.random().toString(36).substr(2, 9);
}

export default function DatadogInit() {
    useEffect(() => {
        window.DD_RUM.onReady(function () {
            // Initialize Datadog RUM
            var userId = localStorage.getItem('userId');
            if (!userId) {
                userId = generateUniqueUserId(); // Replace with your method of generating a user ID
                localStorage.setItem('userId', userId);
            }
            window.DD_RUM.setUser({
                id: userId // Replace '1234' with your user's unique identifier
            });
        });
    }, []);

    // Render nothing - this component is only included so that the init code above will run client-side
    return null;
}

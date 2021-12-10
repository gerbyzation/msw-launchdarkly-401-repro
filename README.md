# Repro

Run: `LAUNCHDARKLY_SDK_KEY=[key] node index.js`

Output:
```
gerben@Gerbens-MacBook-Pro launchdarkly-msw-repro % node  index.js
info: [LaunchDarkly] Initializing stream processor to receive feature flag updates
[MSW] Warning: captured a request without a matching request handler:

  • POST https://events.launchdarkly.com/diagnostic

If you still wish to intercept this unhandled request, please create a request handler for it.
Read more: https://mswjs.io/docs/getting-started/mocks
[MSW] Warning: captured a request without a matching request handler:

  • GET https://stream.launchdarkly.com/all

If you still wish to intercept this unhandled request, please create a request handler for it.
Read more: https://mswjs.io/docs/getting-started/mocks
error: [LaunchDarkly] Received error 401 (invalid SDK key) for streaming request - giving up permanently
error: [LaunchDarkly] Authentication failed. Double check your SDK key.
/Users/gerben/projects/[redacted]/launchdarkly-msw-repro/node_modules/@mswjs/interceptors/lib/interceptors/ClientRequest/utils/getIncomingMessageBody.js:35
        var stream = response.headers['content-encoding'] === 'gzip'
                                     ^

TypeError: Cannot read properties of undefined (reading 'content-encoding')
    at /Users/gerben/projects/[redacted]/launchdarkly-msw-repro/node_modules/@mswjs/interceptors/lib/interceptors/ClientRequest/utils/getIncomingMessageBody.js:35:38
    at new Promise (<anonymous>)
    at Object.getIncomingMessageBody (/Users/gerben/projects/[redacted]/launchdarkly-msw-repro/node_modules/@mswjs/interceptors/lib/interceptors/ClientRequest/utils/getIncomingMessageBody.js:28:12)
    at NodeClientRequest.<anonymous> (/Users/gerben/projects/[redacted]/launchdarkly-msw-repro/node_modules/@mswjs/interceptors/lib/interceptors/ClientRequest/NodeClientRequest.js:234:91)
    at step (/Users/gerben/projects/[redacted]/launchdarkly-msw-repro/node_modules/@mswjs/interceptors/lib/interceptors/ClientRequest/NodeClientRequest.js:48:23)
    at Object.next (/Users/gerben/projects/[redacted]/launchdarkly-msw-repro/node_modules/@mswjs/interceptors/lib/interceptors/ClientRequest/NodeClientRequest.js:29:53)
    at /Users/gerben/projects/[redacted]/launchdarkly-msw-repro/node_modules/@mswjs/interceptors/lib/interceptors/ClientRequest/NodeClientRequest.js:23:71
    at new Promise (<anonymous>)
    at __awaiter (/Users/gerben/projects/[redacted]/launchdarkly-msw-repro/node_modules/@mswjs/interceptors/lib/interceptors/ClientRequest/NodeClientRequest.js:19:12)
    at NodeClientRequest.<anonymous> (/Users/gerben/projects/[redacted]/launchdarkly-msw-repro/node_modules/@mswjs/interceptors/lib/interceptors/ClientRequest/NodeClientRequest.js:230:85)
```

The important info is
```
error: [LaunchDarkly] Received error 401 (invalid SDK key) for streaming request - giving up permanently
error: [LaunchDarkly] Authentication failed. Double check your SDK key.
```

This only occurs when `server.listen()` is running, commenting this out LD does not return a 401.
This issue also occurs when removing the resolution for `@mswjs/interceptors@0.13.0`

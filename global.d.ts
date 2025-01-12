// src/types/global.d.ts or just global.d.ts in your root folder

declare module 'node-mocks-http' {
    import { IncomingMessage, ServerResponse } from 'http';
  
    export interface Request extends IncomingMessage {
      body: any;
      query: any;
      cookies: any;
      // Add any other properties that you might need for your testing
    }
  
    export interface Response extends ServerResponse {
      statusCode: number;
      json: (body: any) => Response;
      // Add any other properties that you might need for your testing
    }
  
    export function createRequest(): Request;
    export function createResponse(): Response;
  }
  
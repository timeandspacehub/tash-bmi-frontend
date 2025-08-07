import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { PublicClientApplication } from '@azure/msal-browser';

import { routes } from './app.routes';

export function MSALInstanceFactory() {
  return new PublicClientApplication({
    auth: {
      clientId: 'ba4de720-5d3f-4aa6-a32b-1506b6c82c9d', // From Azure App Registration
      authority: 'https://login.microsoftonline.com/efbd8ac5-4653-42bf-a9c3-163ffb38629f',
      redirectUri: 'http://localhost:4200'
    },
    cache: {
      cacheLocation: 'localStorage',
      storeAuthStateInCookie: false
    }
  });
}
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(FormsModule, HttpClientModule),
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    MsalService
  ],
};


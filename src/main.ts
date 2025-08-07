import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig, MSALInstanceFactory } from './app/app.config';
import { MSAL_INSTANCE } from '@azure/msal-angular';

async function main() {
  // 1️⃣ Create the MSAL instance
  const pca = MSALInstanceFactory();

  // 2️⃣ Initialize before Angular starts
  await pca.initialize();

  // 3️⃣ Replace MSAL provider in appConfig with the ready instance
  const providers = appConfig.providers.map(provider => {
    if (provider && typeof provider === 'object' && 'provide' in provider && provider.provide === MSAL_INSTANCE) {
      return { provide: MSAL_INSTANCE, useValue: pca };
    }
    return provider;
  });

  // 4️⃣ Bootstrap Angular with updated providers
  bootstrapApplication(AppComponent, {
    ...appConfig,
    providers
  }).catch(err => console.error(err));
}

main();

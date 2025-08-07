import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { MsalService } from '@azure/msal-angular';

export const authGuard: CanActivateFn = (route, state) => {
  const msalService = inject(MsalService);
  const accounts = msalService.instance.getAllAccounts();

  if (accounts.length > 0) {
    return true; // ✅ Already logged in
  }
  msalService.loginRedirect({
    scopes: ['user.read'],
    redirectStartPage: state.url
  });
  return false;
};

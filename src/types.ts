import { types as DefaultTypes } from "replugged";
export { types as DefaultTypes } from "replugged";

export interface AuthenticationStore {
    allowLogoutRedirect: DefaultTypes.AnyFunction;
    didVerifyFail: DefaultTypes.AnyFunction;
    didVerifySucceed: DefaultTypes.AnyFunction;
    getAnalyticsToken: DefaultTypes.AnyFunction;
    getAuthSessionIdHash: DefaultTypes.AnyFunction;
    getCredentials: DefaultTypes.AnyFunction;
    getCurrentRegistrationOptions: DefaultTypes.AnyFunction;
    getEmail: DefaultTypes.AnyFunction;
    getErrors: DefaultTypes.AnyFunction;
    getFingerprint: DefaultTypes.AnyFunction;
    getId: DefaultTypes.AnyFunction;
    getLogin: DefaultTypes.AnyFunction;
    getLoginStatus: DefaultTypes.AnyFunction;
    getMFASMS: DefaultTypes.AnyFunction;
    getMFATicket: DefaultTypes.AnyFunction;
    getMaskedPhone: DefaultTypes.AnyFunction;
    getRegisterStatus: DefaultTypes.AnyFunction;
    getSessionId: DefaultTypes.AnyFunction;
    getToken: DefaultTypes.AnyFunction;
    getVerifyErrors: DefaultTypes.AnyFunction;
    getVerifyingUserId: DefaultTypes.AnyFunction;
    getWebAuthnChallenge: DefaultTypes.AnyFunction;
    initialize: DefaultTypes.AnyFunction;
    isAuthenticated: DefaultTypes.AnyFunction;
}

declare module 'react-native-ca-mas' {
    export interface IMAS {
        debug: () => void
        getState: () => PromiseLike<number>
        invoke: <B, O>(path: string, options: IInvokeOptions<O>) => Promise<IInvokeResponse<B>>
        isAuthenticationListenerRegistered: () => PromiseLike<boolean>
        setGrantFlow: (constant: MASConstant) => void
    }

    export interface IMASDevice {
        deregister: () => Promise<void>
        getIdentifier: () => PromiseLike<string>
        isRegistered: () => PromiseLike<boolean>
        resetLocally: () => void
    }

    export interface IMASUser {
        getAuthCredentialsType: () => PromiseLike<string>
        getCurrentUser: () => PromiseLike<any>
        login: (username: string, password: string) => Promise<boolean>
        logout: (force: boolean) => Promise<boolean>
        getCurrentUserInfo: () => PromiseLike<any>
    }

    export interface IInvokeOptions<B = any> {
        body?: B
        headers?: object
        method: 'DELETE' | 'GET' | 'POST' | 'PUT'
    }

    export interface IInvokeResponse<B = any> {
        body?: B
        headers?: object
        message?: string
        statusCode?: number
    }

    export type MASConstants = {
        MAS_GRANT_FLOW_PASSWORD: 2,
        MAS_GRANT_FLOW_CLIENT_CREDENTIALS: 1,
        MAS_USER: 1,
        MAS_APPLICATION: 2,
        MAS_STATE_NOT_CONFIGURED: 1,
        MAS_STATE_NOT_INITIALIZED: 2,
        MAS_STATE_STARTED: 3,
        MAS_STATE_STOPPED: 4,
    }

    export var MAS: IMAS
    export var MASDevice: IMASDevice
    export var MASUser: IMASUser
    export var MASConstants: MASConstants
}

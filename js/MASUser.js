import { NativeModules } from 'react-native';

const RNCaMASUser = NativeModules.CaMASUser;

const CaMASUser = {};

CaMASUser.getAuthCredentialsType = () => {
    return RNCaMASUser.getAuthCredentialsType();
}

CaMASUser.getCurrentUser = () => {
    return RNCaMASUser.getCurrentUser();
}

CaMASUser.getCurrentUserInfo = () => {
    return RNCaMASUser.getCurrentUserInfo();
}

CaMASUser.login = (username, password) => {
    return RNCaMASUser.login(username, password);
}

CaMASUser.logout = (force) => {
    return RNCaMASUser.logout(force);
}

export default CaMASUser;

import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import {NativeModules, Platform} from 'react-native';
import {startpage} from './locales';

const normalizeLanguageName: any = {
  en_US: 'en_US',
  en: 'en_US',
  en_BR: 'en_US',
  pt_BR: 'pt_BR',
  pt_US: 'pt_BR',
};

const getLanguageByDevice = () => {
  return Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier;
};

i18next.use(initReactI18next).init({
  resources: {
    en_US: {startpage: startpage.en_US},
    pt_BR: {startpage: startpage.pt_BR},
  },
  lng: normalizeLanguageName[getLanguageByDevice()],
  fallbackLng: 'en_US',
});

export default i18next;

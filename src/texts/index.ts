import {Platform, NativeModules} from 'react-native';
import I18n from 'react-native-i18n';

import {en_US, pt_BR} from './locales';

const normalizeTranslate: any = {
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

I18n.translations = {
  en_US,
  pt_BR,
};

const setLanguageI18n = () => {
  const language = getLanguageByDevice();
  const translateNormalize = normalizeTranslate[language];
  const hasLanguage = I18n.translations.hasOwnProperty(translateNormalize);
  hasLanguage
    ? (I18n.locale = translateNormalize)
    : (I18n.defaultLocale = 'en_US');
};

setLanguageI18n();

export const localizedText = (key: string) => I18n.t(key);

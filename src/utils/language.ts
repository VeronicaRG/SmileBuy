import i18next from 'i18next';

export function changeCurrentLanguage() {
  if (i18next.language === 'en') {
    return i18next.changeLanguage('es');
  } else if (i18next.language === 'es') {
    return i18next.changeLanguage('pt-BR');
  }
  return i18next.changeLanguage('en');
}


import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        Introduction: 'Introduction',
        'is an internationalization-framework which offers a complete solution to localize your product from web to mobile and desktop':
          'is an internationalization-framework which offers a complete solution to localize your product from web to mobile and desktop',
        'Plugins to detect the user language':
          'Plugins to detect the user language',
        'Plugins to load translations': 'Plugins to load translations',
        'Optionally cache the translations':
          'Optionally cache the translations',
        Advantages: 'Advantages',
        'Flexibility to use other packages': 'Flexibility to use other packages',
      },
    },
    jap: {
      translations: {
        Introduction: '前書き',
        'is an internationalization-framework which offers a complete solution to localize your product from web to mobile and desktop':
          'Webからモバイルとデスクトップに製品をローカライズするための完全なソリューションを提供する国際化フレームワークです',
        'Plugins to detect the user language':
          'ユーザー言語を検出するためのプラグイン',
        'Plugins to load translations': '翻訳をロードするためのプラグイン',
        'Optionally cache the translations': '必要に応じて翻訳をキャッシュする',
        Advantages: '利点',
        'Flexibility to use other packages': '他のパッケージを使用する柔軟性',
      },
    },

    hin: {
      translations: {
        Introduction: 'प्रस्तावना',
        'is an internationalization-framework which offers a complete solution to localize your product from web to mobile and desktop':
          'एक अंतर्राष्ट्रीयकरण - ढांचा है जो आपके उत्पाद को वेब से मोबाइल और डेस्कटॉप पर स्थानांतरित करने का एक संपूर्ण समाधान प्रदान करता है',
        'Plugins to detect the user language':
          'उपयोगकर्ता भाषा का पता लगाने के लिए प्लगइन्स',
        'Plugins to load translations': 'अनुवाद लोड करने के लिए प्लगइन्स',
        'Optionally cache the translations': 'वैकल्पिक रूप से अनुवाद कैश करें',
        Advantages: 'लाभ',
        'Flexibility to use other packages':
          'अन्य पैकेजों का उपयोग करने के लिए लचीलापन',
      },
    },
  },
  fallbackLng: 'en',
  debug: true,

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ',',
  },

  react: {
    wait: true,
  },
});

export default i18n;

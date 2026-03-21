/**
 * Taro Admin Plugin
 *
 * Admin-side plugin that provides Taro admin extensions.
 * Completely independent from the user-side Taro plugin.
 */

import type { IPlugin, IPlatformSDK } from 'vbwd-view-component';
import { extensionRegistry } from '../../vue/src/plugins/extensionRegistry';
import taroAdminExtension from './extension';
import en from './locales/en.json';
import de from './locales/de.json';
import es from './locales/es.json';
import fr from './locales/fr.json';
import ja from './locales/ja.json';
import ru from './locales/ru.json';
import th from './locales/th.json';
import zh from './locales/zh.json';

export const taroAdminPlugin: IPlugin = {
  name: 'taro-admin',
  version: '1.0.0',
  description: 'Admin extension for Taro',

  install(sdk: IPlatformSDK) {
    // Translations
    sdk.addTranslations('en', { taro: (en as Record<string, unknown>)['taro'] });
    sdk.addTranslations('de', { taro: (de as Record<string, unknown>)['taro'] });
    sdk.addTranslations('es', { taro: (es as Record<string, unknown>)['taro'] });
    sdk.addTranslations('fr', { taro: (fr as Record<string, unknown>)['taro'] });
    sdk.addTranslations('ja', { taro: (ja as Record<string, unknown>)['taro'] });
    sdk.addTranslations('ru', { taro: (ru as Record<string, unknown>)['taro'] });
    sdk.addTranslations('th', { taro: (th as Record<string, unknown>)['taro'] });
    sdk.addTranslations('zh', { taro: (zh as Record<string, unknown>)['taro'] });

    // Register Taro admin extensions
    extensionRegistry.register('taro', taroAdminExtension);
  },

  activate() {
    extensionRegistry.register('taro', taroAdminExtension);
  },

  deactivate() {
    extensionRegistry.unregister('taro');
  },
};

export default taroAdminPlugin;

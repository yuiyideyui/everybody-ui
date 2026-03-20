import { default as default_2 } from 'markdown-it';
import { Locale } from '../locales/text';
import { PlatformTemplate } from '../constant/type';

declare type CodeFiles = string[] | Record<string, string>;

declare type Platform = {
    show: boolean;
    templates?: PlatformTemplate[];
};

declare interface TabConfig {
    /**
     * @cn 代码切换 tab 的展示顺序
     * @en The order of the code switch tab
     */
    order?: string;
    /**
     * @cn 是否显示 tab
     * @en Whether to show the tab
     */
    visible?: boolean;
    /**
     * @cn 默认选中的 tab
     * @en The default selected tab
     */
    select?: string;
}

declare interface VitepressDemoBoxConfig {
    /**
     * @cn demo所在目录
     * @en The directory of the demo
     */
    demoDir?: string;
    /**
     * @cn 代码切换 tab 的配置
     * @en The configuration of the code switch tab
     */
    tab?: TabConfig;
    /**
     * @cn stackblitz 平台配置
     * @en The configuration of the stackblitz platform
     */
    stackblitz?: Platform;
    /**
     * @cn codesandbox 平台配置
     * @en The configuration of the codesandbox platform
     */
    codesandbox?: Platform;
    /**
     * @cn codeplayer 平台配置
     * @en The configuration of the codeplayer platform
     */
    codeplayer?: Platform;
    /**
     * @cn vue 展示的代码文件
     * @en The code files of the vue
     */
    vueFiles?: CodeFiles;
    /**
     * @cn react 展示的代码文件
     * @en The code files of the react
     */
    reactFiles?: CodeFiles;
    /**
     * @cn html 展示的代码文件
     * @en The code files of the html
     */
    htmlFiles?: CodeFiles;
    /**
     * @cn 亮色模式主题，参考 https://shiki.style/themes#bundled-themes
     * @en The light theme, reference https://shiki.style/themes#bundled-themes
     */
    lightTheme?: string;
    /**
     * @cn 暗色模式主题，参考 https://shiki.style/themes#bundled-themes
     * @en The dark theme, reference https://shiki.style/themes#bundled-themes
     */
    darkTheme?: string;
    /**
     * @cn 亮色/暗色模式统一的主题(建议使用 lightTheme 和 darkTheme 分开)，参考 https://shiki.style/themes#bundled-themes
     * @en The light/dark theme, reference https://shiki.style/themes#bundled-themes
     */
    theme?: string;
    /**
     * @cn 国际化配置 'zh-CN' | 'en-US'
     * @en The locale configuration 'zh-CN' | 'en-US'
     */
    locale?: Locale;
}

export declare const vitepressDemoPlugin: (md: default_2 & any, params?: VitepressDemoBoxConfig) => void;

export { }

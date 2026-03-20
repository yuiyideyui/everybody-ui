import { App } from 'vue';
import transitionText from './vTransitionText'
import jsxTable from './vJsxTable'
export const initDirective = (app:App) => {
  app.directive('eb-jsx-table',jsxTable)
  app.directive("eb-transition-text", transitionText);
};

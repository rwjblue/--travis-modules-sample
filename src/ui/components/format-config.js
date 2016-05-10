import { safe, formatConfig as formatConfigHelper } from 'travis/utils/helpers';

export const helper = function(config, options) {
  return safe(formatConfigHelper(config));
}

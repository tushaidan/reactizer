import webpack from 'webpack';

import config from './../../webpack.production.js';
import logger from './../tools/logger';

// TODO stylus

webpack(config, () => logger.info('Webpack compilation done.'));


import {expectType} from 'tsd';
import importLazy = require('.');

expectType<unknown>(importLazy(require)('lodash'));
expectType<number>(importLazy((moduleId: string) => 1)('lodash'));

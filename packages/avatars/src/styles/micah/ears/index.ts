import type { IOptions, IPrng } from '../../../interfaces';
import { filterByOption } from '../../../utils';

import attached from './attached';
import detached from './detached';

export default <O>(prng: IPrng, options: IOptions<O>) =>
  prng.pick(filterByOption(options, 'ears', { attached, detached }))();

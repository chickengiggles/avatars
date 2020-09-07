import type { IOptions, IPrng } from '../../../interfaces';
import { filterByOption } from '../../../utils';

import hoop from './hoop';
import stud from './stud';

export default <O>(prng: IPrng, options: IOptions<O>) =>
  prng.pick(filterByOption(options, 'earrings', { hoop, stud }))();

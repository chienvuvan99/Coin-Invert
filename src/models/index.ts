import {Models} from '@rematch/core';

import assessment from './assessment';

export interface RootModel extends Models<RootModel> {
  assessment: typeof assessment;
}

export const models: RootModel = {assessment};

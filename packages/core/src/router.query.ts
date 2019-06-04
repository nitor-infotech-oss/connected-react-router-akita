import { Query } from '@datorama/akita';

import { RouterRootStore } from './router.store';
import { IRouterState } from './router.state';

export class RouterQuery extends Query<IRouterState> {
  constructor(protected store: RouterRootStore) {
    super(store);
  }

  public getLocation = () => this.select(state => state.location);

}

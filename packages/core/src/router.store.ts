import { Store, StoreConfig } from '@datorama/akita';
import invariant from "tiny-invariant";

import { createInitialRoute, IRouterState } from './router.state';
import { RouterService } from './router.service';
import { RouterQuery } from './router.query';

import {
  History,
} from 'history';

@StoreConfig({ name: 'RouterState' })
export class RouterRootStore extends Store<IRouterState> {
  constructor(history: History) {
    super(createInitialRoute(history));
  }
}

export class RouterStore {
  private routerService: RouterService;
  private routerQuery: RouterQuery;

  initialize(initialState: History) {
    const store: RouterRootStore = new RouterRootStore(initialState);
    this.routerService = new RouterService(store);
    this.routerQuery = new RouterQuery(store);
  }

  getQuery() {
    invariant(this.routerQuery !== undefined, "getQuery has been called before initialization of Router Akita Store");
    return this.routerQuery;
  }

  getService() {
    invariant(this.routerService !== undefined, "getService has been called before initialization of Router Akita Store");
    return this.routerService;
  }
};

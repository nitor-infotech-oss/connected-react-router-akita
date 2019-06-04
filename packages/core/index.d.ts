
declare module '@connected-react-router-akita/core' {
  import { Subscription } from "rxjs";
  import { Store, Query } from '@datorama/akita';
  import { History, Location, Action } from 'history';

  export interface IRouterState {
    location: Location;
    action: Action;
  }

  export const createInitialRoute: (history: History) => IRouterState;

  export class RouterRootStore extends Store<IRouterState> {
    constructor(history: History);
  }
  export class RouterStore {
    private routerService;
    private routerQuery;
    initialize(initialState: History): void;
    getQuery(): RouterQuery;
    getService(): RouterService;
  }
  export class RouterService {
    private store;
    constructor(store: RouterRootStore);
    updateLocation: (params: any) => void;
  }

  export class RouterQuery extends Query<IRouterState> {
    protected store: RouterRootStore;
    constructor(store: RouterRootStore);
    getLocation: () => import('rxjs').Observable<Location<any>>;
  }

  export const routerStore: RouterStore;

}
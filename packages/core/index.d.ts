
declare module '@connected-react-router-akita/core' {
  import { Subscription } from "rxjs";
  import { Store, Query } from '@datorama/akita';
  import { History, Location, Action } from 'history';

  export interface IRouterState {
    location: Location;
    action: Action;
  }

  export interface IRouter {
    routerService: RouterService;
    routerQuery: RouterQuery;
  }

  export class RouterStore extends Store<IRouterState> {
    constructor(history: History);
  }

  export const configureStore: (initialState: History) => IRouter;

  export const createInitialRoute: (history: History) => IRouterState;

  export class RouterService {
    private store;
    constructor(store: RouterStore);
    updateLocation: (params: any) => void;
  }

  export class RouterQuery extends Query<IRouterState> {
    protected store: RouterStore;
    constructor(store: RouterStore);
    getLocation: () => import('rxjs').Observable<Location<any>>;
  }

}
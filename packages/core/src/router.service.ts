import { RouterRootStore } from './router.store';
import { IRouterState } from "./router.state"
export class RouterService {
  constructor(private store: RouterRootStore) { }

  public updateLocation = (params: IRouterState) => {
    this.store.update(() => params);
  };

}

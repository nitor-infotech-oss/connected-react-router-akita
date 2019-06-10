import { RouterStore, RouterRootStore } from "../lib/router.store";

describe("Router Store", () => {

    let store;
    let mockHistory;

    beforeEach(() => {
      store = new RouterStore();
      mockHistory = {
        location: {
          pathname: '/',
          search: '',
          hash: '',
        },
        action: 'POP',
      }
    });
  
    it('should create an instance', () => {
      expect(store).toBeTruthy();
    });

    it('should initialize rootRouterStore with History', () => {
        //spy(RouterRootStore, 'constructor');
        expect(store.routerService).toBeUndefined();
        store.initialize(mockHistory);
        //expect(RouterRootStore.constructor).toHaveBeenCalledWith();
        expect(store.routerService).toBeTruthy();
    })
  
})
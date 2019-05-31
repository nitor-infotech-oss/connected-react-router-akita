
declare module '@onnected-react-router-akita/component' {
  import * as React from 'react';
  import { ReactChild, Component } from 'react';
  import { Subscription } from "rxjs";
  import { History } from 'history';
  import { RouterQuery, RouterService } from "@connected-react-router-akita/core";
 
  interface IConnectedRouterProps {
    history: History;
    routerQuery: RouterQuery;
    routerService: RouterService;
    children: ReactChild;
  }
  export class ConnectedRouter extends Component<IConnectedRouterProps, {}> {
    inTimeTravelling: boolean;
    unSubscribeLocation: Subscription;
    unlisten: () => void;
    constructor(props: IConnectedRouterProps);
    componentWillUnmount(): void;
    render(): JSX.Element;
  }

}
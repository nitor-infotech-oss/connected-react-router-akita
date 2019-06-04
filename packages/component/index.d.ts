
declare module '@connected-react-router-akita/component' {
  import * as React from 'react';
  import { ReactChild, Component } from 'react';
  import { Subscription } from "rxjs";
  import { History } from 'history';
 
  interface IConnectedRouterProps {
    history: History;
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
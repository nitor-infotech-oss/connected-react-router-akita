
declare module '@connected-react-router-akita/hook-omponent' {
  import { History } from "history";
  import { ReactChild } from "react";
  import { RouterQuery, RouterService } from "@connected-react-router-akita/core";
  interface IConnectedRouterProps {
    history: History;
    routerQuery: RouterQuery;
    routerService: RouterService;
    children: ReactChild;
  }

  export const ConnectedRouter: (props: IConnectedRouterProps) => JSX.Element;

}

declare module '@connected-react-router-akita/hook-component' {
  import { History } from "history";
  import { ReactChild } from "react";
  interface IConnectedRouterProps {
    history: History;
    children: ReactChild;
  }

  export const ConnectedRouter: (props: IConnectedRouterProps) => JSX.Element;

}
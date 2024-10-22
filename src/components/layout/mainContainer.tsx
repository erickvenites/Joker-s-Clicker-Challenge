import { ReactNode } from "react";
import "./mainContainer.scss";

function MainContainer(props: { children: ReactNode }) {
  return <div className="container">{props.children}</div>;
}

export default MainContainer;

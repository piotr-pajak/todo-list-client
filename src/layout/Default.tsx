import {
  LayoutDefaultFooter,
  LayoutDefaultHeader,
  LayoutDefaultWrapper,
} from "./default/index";
import React from "react";

type Props = {
  children: React.ReactNode;
};
const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <LayoutDefaultWrapper>
      <LayoutDefaultHeader />
      <main>{children}</main>
      <LayoutDefaultFooter />
    </LayoutDefaultWrapper>
  );
};
export default DefaultLayout;

import { ReactNode } from "react";

const MemberLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h1>会員ページ</h1>
      {children}
    </div>
  );
};

export default MemberLayout;

import { ReactNode } from "react";
import MainLayout from "@/layout/main-layout";

type Props = {
  children: ReactNode;
};

export default async function Layout({ children }: Props) {
  return (
    <div>
      <MainLayout>{children}</MainLayout>
    </div>
  );
}

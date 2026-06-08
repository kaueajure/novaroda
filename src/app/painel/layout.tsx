import type { ReactNode } from "react";
import { PainelLojistaLayout } from "@/components/layout/PainelLojistaLayout";

export default function LayoutPainel({ children }: { children: ReactNode }) {
  return <PainelLojistaLayout>{children}</PainelLojistaLayout>;
}

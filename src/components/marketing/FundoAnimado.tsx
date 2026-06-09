export function FundoAnimado() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 padrao-vistoria opacity-70" />
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--principal),transparent)] opacity-60" />
      <div className="absolute -right-24 top-20 h-[420px] w-[420px] rotate-12 border border-linha-forte opacity-30" />
      <div className="absolute bottom-0 left-0 h-28 w-full faixas-patio opacity-20" />
    </div>
  );
}

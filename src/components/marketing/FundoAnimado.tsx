export function FundoAnimado() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="grade-fina absolute inset-0 opacity-70" />
      <div className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(97,214,200,0.16),transparent_62%)] blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[420px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(116,169,255,0.12),transparent_68%)] blur-3xl" />
    </div>
  );
}

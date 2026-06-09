export function SecaoTitulo({
  etiqueta,
  titulo,
  descricao,
}: {
  etiqueta: string;
  titulo: string;
  descricao: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="etiqueta-metal mx-auto w-fit">{etiqueta}</p>
      <h2 className="text-balance mt-4 font-display text-4xl font-bold leading-tight text-texto sm:text-5xl">
        {titulo}
      </h2>
      <p className="mt-4 text-lg leading-8 text-texto-suave">{descricao}</p>
    </div>
  );
}

import { CardCliente } from "@/components/clientes/CardCliente";
import type { Cliente } from "@/types/Cliente";

export function ListaClientes({ clientes }: { clientes: Cliente[] }) {
  if (clientes.length === 0) {
    return (
      <section className="rounded-xl border border-dashed border-linha-forte bg-card p-10 text-center">
        <p className="font-display text-3xl font-semibold text-texto">
          Nenhum interessado encontrado.
        </p>
        <p className="mx-auto mt-2 max-w-md text-texto-suave">
          Ajuste a busca ou cadastre um novo cliente interessado.
        </p>
      </section>
    );
  }

  return (
    <div className="grid gap-4 xl:grid-cols-2">
      {clientes.map((cliente) => (
        <CardCliente key={cliente.id} cliente={cliente} />
      ))}
    </div>
  );
}

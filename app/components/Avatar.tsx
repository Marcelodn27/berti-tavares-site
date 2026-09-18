// Avatar reutilizável para a equipe. Enquanto as fotos reais não chegam,
// mostra um círculo com as iniciais da pessoa em vinho/creme.
// Basta passar `photoUrl` para trocar pelo retrato real — nenhuma outra
// mudança é necessária nos componentes que usam este avatar.

type AvatarProps = {
  name: string;
  photoUrl?: string;
  size?: number;
  className?: string;
  /** Inverte as cores (fundo creme / letras vinho) para uso sobre fundos escuros. */
  inverted?: boolean;
};

function getInitials(name: string) {
  const cleaned = name.replace(/^(Dra?\.|Dr\.)\s*/i, "").trim();
  const parts = cleaned.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  const first = parts[0][0];
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

export default function Avatar({
  name,
  photoUrl,
  size = 96,
  className = "",
  inverted = false,
}: AvatarProps) {
  if (photoUrl) {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- photoUrl pode ser um caminho externo arbitrário definido depois pelo cliente
      <img
        src={photoUrl}
        alt={name}
        width={size}
        height={size}
        className={`rounded-full object-cover ${className}`}
        style={{ width: size, height: size }}
      />
    );
  }

  const bg = inverted ? "bg-cream" : "bg-wine";
  const text = inverted ? "text-wine" : "text-cream";

  return (
    <div
      role="img"
      aria-label={`Foto de ${name} (em breve)`}
      className={`flex select-none items-center justify-center rounded-full font-serif ${bg} ${text} ${className}`}
      style={{ width: size, height: size, fontSize: size * 0.34 }}
    >
      {getInitials(name)}
    </div>
  );
}

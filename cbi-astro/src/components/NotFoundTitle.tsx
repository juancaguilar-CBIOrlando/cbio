import DecryptedText from "./ui/DecryptedText";

export default function NotFoundTitle() {
  return (
    <h1 className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-none text-center">
      <DecryptedText
        text="404 — Fuera Del Camino :)"
        speed={60}
        maxIterations={12}
        className=""
        encryptedClassName="text-primary"
        animateOn="view"
        revealDirection="start"
      />
    </h1>
  );
}

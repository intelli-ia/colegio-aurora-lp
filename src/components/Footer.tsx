export default function Footer() {
  return (
    <footer className="w-full bg-[#0F0F0F] border-t border-white/5">
      <div className="container mx-auto px-6 md:px-16">
        <div className="py-6 md:py-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-white/25 text-xs md:text-sm">© 2026 Jet Salvador. Todos os direitos reservados.</p>
          <p className="text-white/25 text-xs md:text-sm flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#00B8D9] rounded-full" />
            Você habilitado e moralizado
          </p>
        </div>
      </div>
    </footer>
  );
}

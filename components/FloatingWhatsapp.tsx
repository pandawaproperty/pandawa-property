export default function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/6281290004662?text=Halo%20Pandawa%20Property,%20saya%20ingin%20bertanya%20mengenai%20properti."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
      aria-label="Chat WhatsApp"
    >
      <div className="w-16 h-16 flex items-center justify-center text-3xl">
        💬
      </div>
    </a>
  );
}
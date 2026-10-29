import { useState } from 'react'
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Heart,
  Instagram,
  Menu,
  MessageCircle,
  Minus,
  Plus,
  Sparkles,
  X,
} from 'lucide-react'

const gallery = [
  { image: '/pulsos/pulso-color.jpeg', name: 'Color vivo', category: 'Color', tag: 'Energía' },
  { image: '/pulsos/pulso-rojo.jpeg', name: 'Rojo pasión', category: 'Clásicos', tag: 'Favorito' },
  { image: '/pulsos/pulso-corazones.jpeg', name: 'Doble corazón', category: 'Amor', tag: 'Nuevo' },
  { image: '/pulsos/pulso-moño.jpeg', name: 'Moño dorado', category: 'Dijes', tag: 'Especial' },
  { image: '/pulsos/pulso-flores.jpeg', name: 'Flor de oro', category: 'Clásicos', tag: 'Artesanal' },
  { image: '/pulsos/pulso-amor.jpeg', name: 'Love & black', category: 'Amor', tag: 'Para dos' },
  { image: '/pulsos/pulso-fe.jpeg', name: 'Fe', category: 'Dijes', tag: 'Simbólico' },
  { image: '/pulsos/pulso-mascotas.jpeg', name: 'Siempre contigo', category: 'Dijes', tag: 'Regalo' },
]

const categories = ['Todos', 'Clásicos', 'Color', 'Amor', 'Dijes']

function IconBadge({ children, className = '' }) {
  return <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${className}`}>{children}</span>
}

function App() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const filteredGallery = activeCategory === 'Todos'
    ? gallery
    : gallery.filter((item) => item.category === activeCategory)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="min-h-screen overflow-hidden bg-[#fbf7f1] text-[#302a28]">
      <div className="bg-[#302a28] px-5 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f8d9c4] sm:text-xs">
        Envíos y entregas en Cuba · Hechos con intención
      </div>

      <header className="relative z-50 border-b border-[#e9dfd5] bg-[#fbf7f1]/95 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8" aria-label="Navegación principal">
          <a href="#inicio" className="group flex items-center gap-3" onClick={closeMenu}>
            <IconBadge className="bg-[#b74738] text-[#fff9f2] transition-transform group-hover:rotate-12"><Sparkles size={17} /></IconBadge>
            <div className="leading-none">
              <p className="serif text-[23px] font-semibold tracking-[-0.04em]">Luz de Luna</p>
              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#a17d67]">Pulsos con intención</p>
            </div>
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium text-[#6c5b51] md:flex">
            <a className="transition-colors hover:text-[#b74738]" href="#coleccion">Colección</a>
            <a className="transition-colors hover:text-[#b74738]" href="#historia">Nuestra esencia</a>
            <a className="transition-colors hover:text-[#b74738]" href="#pedidos">Pedidos</a>
          </div>

          <a href="#pedidos" className="hidden items-center gap-2 rounded-full bg-[#b74738] px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-[0_8px_20px_rgba(183,71,56,.18)] transition-all hover:-translate-y-0.5 hover:bg-[#943a2e] sm:flex">
            Encargar el mío <ArrowUpRight size={15} />
          </a>
          <button className="rounded-full p-2 text-[#302a28] md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}>
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-[#e9dfd5] bg-[#fffaf4] px-5 py-5 md:hidden">
            <div className="flex flex-col gap-5 text-sm font-semibold text-[#6c5b51]">
              <a href="#coleccion" onClick={closeMenu}>Colección</a>
              <a href="#historia" onClick={closeMenu}>Nuestra esencia</a>
              <a href="#pedidos" onClick={closeMenu}>Pedidos</a>
            </div>
          </div>
        )}
      </header>

      <main id="inicio">
        <section className="relative mx-auto max-w-7xl px-5 pb-16 pt-12 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="absolute -left-36 top-16 h-80 w-80 rounded-full bg-[#f4dfd1]/65 blur-3xl" />
          <div className="absolute -right-28 bottom-12 h-96 w-96 rounded-full bg-[#e8d5cf]/60 blur-3xl" />
          <div className="relative grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
            <div className="max-w-xl">
              <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#b74738]"><span className="h-px w-8 bg-[#b74738]" /> Hechos en Cuba</div>
              <h1 className="serif text-[3.65rem] font-medium leading-[.98] tracking-[-0.055em] text-[#302a28] sm:text-7xl lg:text-[5.6rem]">Lleva contigo <em className="text-[#b74738]">lo que importa.</em></h1>
              <p className="mt-7 max-w-md text-base leading-7 text-[#74645a] sm:text-lg">Pulsos hechos a mano para celebrar tus vínculos, tu energía y esos pequeños detalles que hablan de ti.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#coleccion" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#302a28] px-6 py-4 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#4b3b35]">Ver la colección <ArrowUpRight size={17} /></a>
                <a href="#historia" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d8c8ba] px-6 py-4 text-sm font-bold text-[#5b4a41] transition-colors hover:border-[#b74738] hover:text-[#b74738]">Conoce nuestra esencia</a>
              </div>
              <div className="mt-12 flex items-center gap-5 border-t border-[#e9dfd5] pt-5">
                <div className="flex -space-x-2">
                  {['/pulsos/pulso-amor.jpeg', '/pulsos/pulso-color.jpeg', '/pulsos/pulso-rojo.jpeg'].map((src) => <img key={src} className="h-9 w-9 rounded-full border-2 border-[#fbf7f1] object-cover" src={src} alt="" />)}
                </div>
                <p className="text-xs leading-5 text-[#806f64]">Detalles que se convierten<br /><span className="font-bold text-[#4c3e37]">en tus favoritos de todos los días.</span></p>
              </div>
            </div>

            <div className="relative mx-auto h-[500px] w-full max-w-[550px] sm:h-[590px]">
              <div className="absolute right-2 top-0 h-[390px] w-[76%] overflow-hidden rounded-[150px] rounded-br-[30px] rounded-tl-[30px] hero-glow sm:h-[480px]">
                <img className="image-shine h-full w-full object-cover object-center" src="/pulsos/pulso-color.jpeg" alt="Pulsos de colores hechos a mano" />
              </div>
              <div className="absolute bottom-0 left-0 h-[235px] w-[57%] overflow-hidden rounded-[28px] border-[10px] border-[#fbf7f1] bg-white shadow-xl sm:h-[285px]">
                <img className="h-full w-full object-cover object-center" src="/pulsos/pulso-corazones.jpeg" alt="Pulsos con corazones" />
              </div>
              <div className="float absolute bottom-20 right-0 flex h-24 w-24 -rotate-3 flex-col items-center justify-center rounded-full bg-[#d97c59] text-center text-[#fffaf3] shadow-xl sm:h-28 sm:w-28">
                <Heart size={22} fill="currentColor" />
                <span className="mt-1 text-[9px] font-bold uppercase leading-3 tracking-[0.12em]">Hecho<br />para ti</span>
              </div>
              <div className="absolute left-4 top-8 rounded-full bg-[#fffaf4] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#806f64] shadow-lg">Una pieza · una historia</div>
            </div>
          </div>
        </section>

        <div className="overflow-hidden border-y border-[#e9dfd5] bg-[#f3e7dc] py-4 text-[#806f64]">
          <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap text-xs font-bold uppercase tracking-[0.24em]">
            {Array.from({ length: 2 }).map((_, index) => <div className="flex items-center gap-10" key={index}><span>Colores que cuentan</span><span className="text-[#b74738]">✦</span><span>Detalles con alma</span><span className="text-[#b74738]">✦</span><span>Regalos que abrazan</span><span className="text-[#b74738]">✦</span><span>Hecho en Cuba</span><span className="text-[#b74738]">✦</span></div>)}
          </div>
        </div>

        <section id="coleccion" className="mx-auto max-w-7xl scroll-mt-8 px-5 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
            <div><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#b74738]">La colección</p><h2 className="serif max-w-lg text-4xl leading-tight tracking-[-0.04em] sm:text-5xl">Tu pulso, <em className="text-[#b74738]">tu manera.</em></h2></div>
            <p className="max-w-xs text-sm leading-6 text-[#806f64]">Diseños para combinar, regalar o guardar como ese amuleto que siempre te acompaña.</p>
          </div>
          <div className="mt-10 flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => <button key={category} onClick={() => setActiveCategory(category)} className={`whitespace-nowrap rounded-full px-5 py-2.5 text-xs font-bold transition-colors ${activeCategory === category ? 'bg-[#302a28] text-white' : 'border border-[#dfd0c3] text-[#806f64] hover:border-[#b74738] hover:text-[#b74738]'}`}>{category}</button>)}
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5">
            {filteredGallery.map((item, index) => <article key={item.name} className={`group ${index === 0 && filteredGallery.length > 4 ? 'sm:row-span-2' : ''}`}><div className={`image-shine relative overflow-hidden rounded-[20px] bg-[#eadcd1] ${index === 0 && filteredGallery.length > 4 ? 'aspect-[4/5] h-full' : 'aspect-[4/5]'}`}><img className="h-full w-full object-cover transition duration-700 group-hover:scale-105" src={item.image} alt={item.name} /><span className="absolute left-3 top-3 rounded-full bg-[#fffaf4]/90 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-[#806f64] backdrop-blur">{item.tag}</span><button className="absolute bottom-3 right-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white/90 text-[#b74738] opacity-0 shadow-lg transition-all group-hover:translate-y-0 group-hover:opacity-100" aria-label={`Ver ${item.name}`}><ArrowUpRight size={16} /></button></div><div className="mt-3 flex items-center justify-between gap-2"><h3 className="serif text-lg text-[#40342f]">{item.name}</h3><span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#a17d67]">{item.category}</span></div></article>)}
          </div>
        </section>

        <section id="historia" className="scroll-mt-8 bg-[#302a28] text-[#fffaf3]">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:gap-24 lg:px-8 lg:py-28">
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-[30px] border border-[#d97c59]/40" />
              <img className="relative aspect-[4/5] w-full rounded-[30px] object-cover" src="/pulsos/pulso-flores.jpeg" alt="Pulso con dije de flor dorada" />
              <div className="absolute -bottom-5 -right-4 rounded-2xl bg-[#d97c59] p-5 text-[#fffaf3] shadow-2xl"><Sparkles size={22} /><p className="mt-2 max-w-[100px] text-xs font-bold leading-4">Pequeños detalles, grandes historias.</p></div>
            </div>
            <div><p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#e5a17f]">Nuestra esencia</p><h2 className="serif max-w-xl text-4xl leading-[1.05] tracking-[-0.04em] sm:text-5xl">No es solo un pulso. Es <em className="text-[#e5a17f]">lo que representa.</em></h2><p className="mt-7 max-w-lg text-base leading-7 text-[#d6c5b9]">En Luz de Luna creemos en los objetos que se vuelven parte de tu historia. Cada pulso se elige con calma, se prepara a mano y se entrega listo para regalar —aunque el regalo seas tú.</p><div className="mt-9 grid grid-cols-2 gap-6 border-t border-[#594943] pt-7"><div><p className="serif text-3xl text-[#e5a17f]">100%</p><p className="mt-1 text-xs uppercase tracking-[0.14em] text-[#b9a49a]">Hecho a mano</p></div><div><p className="serif text-3xl text-[#e5a17f]">∞</p><p className="mt-1 text-xs uppercase tracking-[0.14em] text-[#b9a49a]">Formas de decirlo</p></div></div></div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="text-center"><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#b74738]">Así de fácil</p><h2 className="serif text-4xl tracking-[-0.04em] sm:text-5xl">Hazlo tuyo en tres pasos.</h2></div>
          <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-5">
            {[['01', 'Elige tu vibra', 'Explora nuestros colores, dijes y combinaciones favoritas.'], ['02', 'Escríbenos', 'Cuéntanos cuál te gustó o qué tienes en mente para personalizarlo.'], ['03', 'Recíbelo con cariño', 'Coordinamos contigo la entrega y preparamos tu pulso para que llegue perfecto.']].map(([number, title, text], index) => <div key={number} className="relative rounded-[24px] border border-[#eaded4] bg-[#fffaf4] p-7"><span className="serif text-5xl italic text-[#e5c5b4]">{number}</span><h3 className="mt-6 text-xl font-bold text-[#40342f]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#806f64]">{text}</p>{index < 2 && <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-[#d8c8ba] md:block" />}</div>)}
          </div>
        </section>

        <section className="bg-[#f3e7dc]">
          <div className="mx-auto max-w-3xl px-5 py-20 lg:py-24"><div className="text-center"><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#b74738]">Preguntas frecuentes</p><h2 className="serif text-4xl tracking-[-0.04em] sm:text-5xl">Antes de elegir.</h2></div><div className="mt-10 divide-y divide-[#dbc9bb] border-y border-[#dbc9bb]">{[['¿Puedo pedir un diseño personalizado?', 'Sí. Cuéntanos los colores, dijes o idea que tienes y revisamos juntas las opciones disponibles.'], ['¿Cómo coordino mi entrega?', 'Escríbenos para confirmar disponibilidad, zona y forma de entrega. Te respondemos con todos los detalles.'], ['¿Son ajustables?', 'La mayoría de nuestros pulsos cuenta con cierre ajustable para que encuentres tu medida ideal.']].map(([question, answer], index) => <div key={question}><button className="flex w-full items-center justify-between gap-5 py-5 text-left text-sm font-bold text-[#40342f]" onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>{question}{openFaq === index ? <Minus size={17} className="shrink-0 text-[#b74738]" /> : <Plus size={17} className="shrink-0 text-[#b74738]" />}</button>{openFaq === index && <p className="-mt-2 max-w-2xl pb-5 pr-8 text-sm leading-6 text-[#806f64]">{answer}</p>}</div>)}</div></div>
        </section>

        <section id="pedidos" className="scroll-mt-8 mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="relative overflow-hidden rounded-[32px] bg-[#b74738] px-6 py-12 text-[#fffaf3] sm:px-12 lg:px-20 lg:py-16"><div className="grain absolute inset-0 opacity-40" /><div className="absolute -right-16 -top-20 h-72 w-72 rounded-full border border-white/15" /><div className="absolute -right-6 -top-10 h-52 w-52 rounded-full border border-white/15" /><div className="relative grid items-center gap-10 lg:grid-cols-[1fr_0.85fr]"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#f8d7c6]">¿Listo para encontrar el tuyo?</p><h2 className="serif max-w-xl text-4xl leading-tight tracking-[-0.04em] sm:text-5xl">Un detalle pequeño que dice <em>muchísimo.</em></h2><p className="mt-5 max-w-md text-sm leading-6 text-[#f8d7c6]">Cuéntanos qué estás buscando y te ayudamos a elegir tu próximo pulso favorito.</p></div><div className="rounded-2xl bg-[#fffaf3] p-5 text-[#40342f] shadow-xl sm:p-6">{submitted ? <div className="flex min-h-[210px] flex-col items-center justify-center text-center"><IconBadge className="bg-[#eaf3e7] text-[#55854a]"><Check size={20} /></IconBadge><h3 className="mt-4 text-lg font-bold">¡Mensaje preparado!</h3><p className="mt-2 text-sm leading-5 text-[#806f64]">Gracias por escribirnos. Pronto te contactaremos para coordinar tu pedido.</p><button onClick={() => setSubmitted(false)} className="mt-5 text-xs font-bold uppercase tracking-[0.15em] text-[#b74738]">Enviar otro mensaje</button></div> : <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}><label className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#a17d67]" htmlFor="name">Tu nombre</label><input required id="name" className="mt-2 w-full border-b border-[#ddcec3] bg-transparent pb-3 text-sm outline-none placeholder:text-[#b8a59a] focus:border-[#b74738]" placeholder="¿Cómo te llamas?" /><label className="mt-5 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#a17d67]" htmlFor="message">¿Qué te gustaría?</label><textarea required id="message" rows="2" className="mt-2 w-full resize-none border-b border-[#ddcec3] bg-transparent pb-3 text-sm outline-none placeholder:text-[#b8a59a] focus:border-[#b74738]" placeholder="Cuéntanos tu idea o el modelo que te gustó" /><button className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#302a28] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#4b3b35]">Quiero pedirlo <MessageCircle size={15} /></button></form>}</div></div></div>
        </section>
      </main>

      <footer className="border-t border-[#e9dfd5] px-5 py-8 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left"><a href="#inicio" className="flex items-center gap-3"><IconBadge className="h-8 w-8 bg-[#b74738] text-white"><Sparkles size={14} /></IconBadge><span className="serif text-lg font-semibold">Luz de Luna</span></a><p className="text-xs text-[#a17d67]">Pulsos con intención · Hechos en Cuba</p><div className="flex items-center gap-4 text-[#806f64]"><a href="#pedidos" aria-label="Escríbenos"><MessageCircle size={18} /></a><a href="#coleccion" aria-label="Ver colección"><Instagram size={18} /></a></div></div></footer>
    </div>
  )
}

export default App

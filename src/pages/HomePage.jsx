import { Link } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { FaPlaystation, FaXbox, FaSteam, FaWindows, FaGamepad } from 'react-icons/fa6';

import heroImage from '../../assets/images/SCENEBACKTRUC7.png';
import aboutImage from '../../assets/images/SCENEBACKTRUC2.png';
import synopsisImage from '../../assets/images/SCENEBACKTRUC5.png';
import charCardOne from '../../assets/images/SCENEBACKTRUC8.png';
import charCardTwo from '../../assets/images/SCENEBACKTRUC9.png';
import pegiImage from '../../assets/images/PEGI_18.svg.png';
import awardVisual from '../../assets/images/gamescom_2025_winner_2025_bestvisuals_rgb 1.png';
import awardEpic from '../../assets/images/gamescom_2025_winner_2025_mostepic_rgb 1.png';
import awardPs from '../../assets/images/gamescom_winner_2025_bestplaystationgame_rgb 1.png';

import charAlpha from '../../assets/images/ALPHapresentationIMG.png';
import charEmily from '../../assets/images/EMILEPRESENTATIONIMG.png';
import charMonster from '../../assets/images/MonsterpresentationIMG.png';

import gallery1 from '../../assets/images/SCENEBACKTRUC4.png';
import gallery2 from '../../assets/images/MONSTER LITTLE3.png';
import gallery3 from '../../assets/images/SCENEBACKTRUC5.png';
import gallery4 from '../../assets/images/SCENEBACKTRUC3.png';
import gallery5 from '../../assets/images/SCENEBACKTRUC6.png';

const characters = [
  {
    name: 'Kijin',
    role: 'Éclaireur & Protecteur',
    desc: "Il avance en premier. Toujours. Même quand ça ne devrait pas. Sa force est aussi sa plus grande faiblesse.",
    img: charAlpha
  },
  {
    name: 'Emily',
    role: 'Agile & Subtile',
    desc: 'Sa discrétion est son arme la plus tranchante dans les couloirs obscurs. Elle se meut sans un bruit.',
    img: charEmily
  },
  {
    name: 'Traqueur',
    role: 'Chercher & Tuer',
    desc: "Prédateur né de l'infection, il rampe sur les murs et les plafonds avec une agilité morbide. Son ignoble cliquetis est le seul avertissement avant que ses griffes ne frappent.",
    img: charMonster
  }
];

const gallery = [
  { src: gallery1, alt: 'Salle de la station' },
  { src: gallery2, alt: 'La créature' },
  { src: gallery3, alt: 'Couloir sombre' },
  { src: gallery4, alt: 'Atmosphère oppressante' },
  { src: gallery5, alt: 'Exploration de la station' }
];

const testimonials = [
  'Le jeu le plus terrifiant de cette décennie. L’audio spatial m’a fait enlever mon casque plusieurs fois.',
  'Une descente aux enfers magistrale. Les mécaniques de l’IA vous chassent de manière imprévisible.',
  'La coop asymétrique réinvente le genre. Un chef-d’œuvre de tension à deux joueurs.'
];

const features = [
  'Terreur Psychologique',
  'Audio Spatial 3D',
  'IA Évolutive Adaptative',
  'Contrôle du Souffle'
];

export default function HomePage() {
  const [charIndex, setCharIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [videoOpen, setVideoOpen] = useState(false);
  const [scores, setScores] = useState([0, 0, 0]);

  const currentChar = useMemo(() => characters[charIndex], [charIndex]);

  useEffect(() => {
    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0);
      setShowTop(window.scrollY > 500);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          const target = [9.25, 9.25, 9.25];
          const start = performance.now();
          const animate = (now) => {
            const progressValue = Math.min((now - start) / 1300, 1);
            const eased = 1 - Math.pow(1 - progressValue, 3);
            setScores(target.map((value) => Number((value * eased).toFixed(2))));
            if (progressValue < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        });
      },
      { threshold: 0.35 }
    );
    const band = document.getElementById('scores-band');
    if (band) {
      observer.observe(band);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setLightboxIndex(null);
        setVideoOpen(false);
        setMenuOpen(false);
      }
      if (lightboxIndex !== null && event.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % gallery.length);
      }
      if (lightboxIndex !== null && event.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxIndex]);

  return (
    <div className="noise min-h-screen bg-abyss text-zinc-200 font-sans">
      <div className="progress-bar" style={{ width: `${progress}%` }} />

      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 px-5 py-4 backdrop-blur md:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <div className={`gap-6 ${menuOpen ? 'mobile-menu-open' : 'hidden md:flex'}`}>
            <a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>À propos</a>
            <a href="#characters" className="nav-link" onClick={() => setMenuOpen(false)}>Personnages</a>
            <a href="#features" className="nav-link" onClick={() => setMenuOpen(false)}>Mécaniques</a>
            <a href="#gallery" className="nav-link" onClick={() => setMenuOpen(false)}>Galerie</a>
          </div>
          <div className="font-serif text-xl tracking-[0.25em] text-white">SWILD</div>
          <div className="flex items-center gap-4">
            <Link to="/precommande" className="rounded-none bg-blood px-4 py-2 text-[10px] uppercase tracking-[0.15em] text-white transition hover:bg-bloodDark">Précommander</Link>
            <button className="nav-link text-lg md:hidden" onClick={() => setMenuOpen((value) => !value)} aria-label="Ouvrir le menu">
              {menuOpen ? '×' : '☰'}
            </button>
          </div>
        </div>
      </nav>

      <header className="hero-shell relative flex min-h-screen items-end overflow-hidden px-6 pb-20 pt-24 md:px-20">
        <img src={heroImage} alt="Station spatiale abandonnée" className="hero-image absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(216,28,28,0.16),transparent_45%),linear-gradient(180deg,rgba(0,0,0,0.15),rgba(10,8,8,0.94))]" />
        <div className="hero-copy relative z-10 max-w-2xl">
          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-blood">Prévu pour le monde entier</p>
          <h1 className="font-serif text-5xl text-white md:text-7xl">Until He Wakes</h1>
          <p className="mt-4 font-serif text-xl italic text-zinc-400 md:text-2xl">Ils ont quitté la station.</p>
          <p className="mt-1 text-sm uppercase tracking-[0.18em] text-zinc-500">Quelque chose les a suivis.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="bg-blood px-6 py-3 text-xs uppercase tracking-[0.2em] text-white shadow-blood transition hover:bg-bloodDark pulse-cta" onClick={() => setVideoOpen(true)}>
              ▶ Voir la bande annonce
            </button>
            <a href="#about" className="border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.2em] text-zinc-300 transition hover:border-white/40 hover:text-white">
              Plus d'informations
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="platform-logo-item">
              <FaPlaystation className="platform-logo-icon" />
              <span>PlayStation 5</span>
            </div>
            <div className="platform-logo-item">
              <FaXbox className="platform-logo-icon" />
              <span>Xbox Series</span>
            </div>
            <div className="platform-logo-item">
              <FaSteam className="platform-logo-icon" />
              <span>Steam</span>
            </div>
            <div className="platform-logo-item">
              <FaWindows className="platform-logo-icon" />
              <span>PC</span>
            </div>
            <div className="platform-logo-item">
              <FaGamepad className="platform-logo-icon" />
              <span>Switch 2</span>
            </div>
          </div>
        </div>
      </header>

      <section id="scores-band" className="border-y border-white/10 bg-abyss2 px-6 py-8 md:px-20">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8">
          {[
            { label: 'Gameplay', desc: 'Meilleur jeu indé 2025', accent: 'gold' },
            { label: 'Horreur', desc: 'Prix de l’originalité', accent: 'green' },
            { label: 'Ambiance', desc: 'Son de l’année', accent: 'red' }
          ].map((item, index) => (
            <div key={item.label} className="flex items-center gap-3">
              <div className={`score-badge ${item.accent}`}>
                <span className="text-lg leading-none text-white">{scores[index].toFixed(2)}</span>
                <span className="text-[8px] uppercase tracking-[0.12em] text-zinc-400">{item.label}</span>
              </div>
              <span className="max-w-[90px] text-[10px] leading-5 text-zinc-500">{item.desc}</span>
            </div>
          ))}
          <div className="score-separator" />
          {[awardVisual, awardEpic, awardPs].map((src) => (
            <img key={src} src={src} alt="Award" className="award-logo" loading="lazy" />
          ))}
          <div className="score-separator" />
          <img src={pegiImage} alt="PEGI 18" className="award-logo pegi-logo" loading="lazy" />
        </div>
      </section>

      <section id="about" className="px-6 py-20 md:px-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-start">
          <div className="section-reveal">
            <p className="section-label">À propos du jeu</p>
            <h2 className="section-title">Un voyage cauchemardesque au cœur de l’obscurité absolue.</h2>
            <p className="section-copy">Explorez une station spatiale abandonnée où chaque couloir cache une vérité plus terrifiante que la précédente.</p>
            <p className="section-copy">Survivez à une entité aux origines inconnues en exploitant votre environnement, vos sens et votre volonté. Ce n’est pas juste un jeu, c’est une épreuve psychologique.</p>
          </div>
          <div className="frame-panel section-reveal">
            <img src={aboutImage} alt="Couloirs de la station" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="bg-abyss3 px-6 py-20 md:px-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr,1.15fr] md:items-center">
          <div className="frame-panel square-panel section-reveal">
            <img src={synopsisImage} alt="Atmosphère oppressante" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="section-reveal">
            <p className="section-label">Synopsis</p>
            <h2 className="section-title">Périple incertain</h2>
            <p className="section-copy">Un fond sonore désorientant plonge vos sens dans les ténèbres. Personne ne sait d’où vient l’entité. Personne n’en est revenu pour le raconter.</p>
            <p className="section-copy">Les survivants parlent d’une présence qui grandit avec vos peurs. Plus vous avez peur, plus elle devient réelle. Plus elle devient réelle, plus vous avez peur.</p>
            <p className="section-copy">Votre seul atout : ne pas lui montrer votre terreur.</p>
          </div>
        </div>
      </section>

      <section id="characters" className="px-6 py-20 md:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="section-reveal mb-8">
            <p className="section-label">Galerie des personnages</p>
            <h2 className="section-title">Les acteurs du cauchemar</h2>
          </div>
          <div className="spotlight-panel section-reveal">
            <img src={currentChar.img} alt={currentChar.name} className="spotlight-image" />
            <div className="spotlight-overlay" />
            <div className="spotlight-content">
              <div>
                <h3 className="font-serif text-4xl text-white md:text-5xl">{currentChar.name}</h3>
                <p className="mt-2 text-[11px] uppercase tracking-[0.26em] text-blood">{currentChar.role}</p>
                <p className="mt-4 max-w-2xl font-serif text-lg italic text-zinc-300">{currentChar.desc}</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="char-btn" onClick={() => setCharIndex((value) => (value - 1 + characters.length) % characters.length)}>←</button>
                <span className="text-xs tracking-[0.12em] text-zinc-500">{String(charIndex + 1).padStart(2, '0')} / {String(characters.length).padStart(2, '0')}</span>
                <button className="char-btn" onClick={() => setCharIndex((value) => (value + 1) % characters.length)}>→</button>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {[
              { name: 'Emily', role: 'Agile & Subtile', desc: 'Sa discrétion est son arme la plus tranchante dans les couloirs obscurs.', img: charCardOne },
              { name: 'Kijin', role: 'Éclaireur & Protecteur', desc: 'Il avance en premier. Toujours. Même quand ça ne devrait pas.', img: charCardTwo }
            ].map((card) => (
              <article key={card.name} className="character-card section-reveal">
                <img src={card.img} alt={card.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                <div className="character-card-overlay">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-blood">{card.role}</p>
                  <h3 className="font-serif text-3xl text-white">{card.name}</h3>
                  <p className="mt-2 font-serif text-base italic text-zinc-300">{card.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="border-y border-white/10 bg-abyss2 px-6 py-20 md:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="section-reveal">
            <p className="section-label">Mécaniques de jeu</p>
            <h2 className="section-title">Ce qui attend dans l’obscurité</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {features.map((title) => (
              <div key={title} className="feature-panel section-reveal">
                <div className="diamond-icon" />
                <h3 className="font-serif text-2xl text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">Une expérience pensée pour maintenir la tension, brouiller tes repères et transformer chaque erreur en punition.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="px-6 py-20 md:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="section-reveal">
            <p className="section-label">Galerie</p>
            <h2 className="section-title">Immersion dans l’abîme</h2>
          </div>
          <div className="gallery-grid mt-8">
            {gallery.map((item, index) => (
              <button key={item.src} className={`gallery-tile ${index === 0 ? 'gallery-large' : ''}`} onClick={() => setLightboxIndex(index)}>
                <img src={item.src} alt={item.alt} className="h-full w-full object-cover" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-abyss px-6 py-20 text-center md:px-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="section-title section-reveal">Ils n’en dorment plus</h2>
          <div className="mt-10 space-y-10">
            {testimonials.map((quote) => (
              <blockquote key={quote} className="testimonial-item section-reveal">
                <p className="font-serif text-xl italic leading-9 text-zinc-200">“{quote}”</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/10 bg-abyss2 px-6 py-20 text-center md:px-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(216,28,28,0.12),transparent_60%)]" />
        <div className="relative mx-auto max-w-5xl section-reveal">
          <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500">Disponible maintenant</p>
          <h2 className="mt-6 font-serif text-5xl text-white md:text-7xl">UNTIL HE WAKES</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-[11px] uppercase tracking-[0.18em] text-zinc-400">
            <span>Steam</span>
            <span>PlayStation</span>
            <span>Xbox</span>
            <span>Switch</span>
            <span>PC</span>
          </div>
          <Link to="/precommande" className="mt-10 inline-block bg-blood px-8 py-4 text-xs uppercase tracking-[0.22em] text-white transition hover:bg-bloodDark">
            Aller à la précommande
          </Link>
          <img src={pegiImage} alt="PEGI 18" className="mx-auto mt-8 h-14 w-auto" loading="lazy" />
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-[11px] uppercase tracking-[0.18em] text-zinc-500 md:px-20">
        © 2026 SWILD Studio. Tous droits réservés.
      </footer>

      {showTop && (
        <button className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>
      )}

      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[120] grid place-items-center bg-black/95 p-4" onClick={() => setLightboxIndex(null)}>
          <button className="absolute right-6 top-4 text-4xl text-zinc-300 transition hover:text-white">×</button>
          <button className="absolute left-4 text-3xl text-zinc-300 transition hover:text-white md:left-8" onClick={(event) => { event.stopPropagation(); setLightboxIndex((prev) => (prev - 1 + gallery.length) % gallery.length); }}>←</button>
          <img src={gallery[lightboxIndex].src} alt={gallery[lightboxIndex].alt} className="max-h-[86vh] max-w-[92vw] border border-white/15" onClick={(event) => event.stopPropagation()} />
          <button className="absolute right-4 text-3xl text-zinc-300 transition hover:text-white md:right-8" onClick={(event) => { event.stopPropagation(); setLightboxIndex((prev) => (prev + 1) % gallery.length); }}>→</button>
        </div>
      )}

      {videoOpen && (
        <div className="fixed inset-0 z-[130] grid place-items-center bg-black/95 p-4" onClick={() => setVideoOpen(false)}>
          <div className="w-full max-w-5xl overflow-hidden border border-white/15" onClick={(event) => event.stopPropagation()}>
            <div className="aspect-video">
              <iframe title="trailer" className="h-full w-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" allow="autoplay; encrypted-media" allowFullScreen />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

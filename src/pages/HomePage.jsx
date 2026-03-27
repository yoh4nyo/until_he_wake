import { Link } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { FaPlaystation, FaXbox, FaSteam, FaWindows, FaGamepad } from 'react-icons/fa6';
import { FaXTwitter, FaInstagram, FaYoutube, FaDiscord, FaTiktok } from 'react-icons/fa6';
import { GiBrain, GiSoundWaves, GiLungs, GiGhostAlly } from 'react-icons/gi';

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
    desc: "L'adulte. Sa lampe est le seul rempart contre l'obscurité. Il ouvre la voie, encaisse les coups et veille sur l'enfant. Sans lui, pas de lumière. Sans lumière, pas de survie.",
    img: charAlpha
  },
  {
    name: 'Emily',
    role: 'L\'Enfant Malade',
    desc: "Fragile mais agile, elle se faufile là où Kijin ne peut pas aller. Ses ciseaux sont sa seule défense. Sa maladie progresse — chaque environnement traversé est une course contre le temps.",
    img: charEmily
  },
  {
    name: 'Traqueur',
    role: 'Chercher & Dévorer',
    desc: "Il sent la peur. Il sent la maladie. Né des cauchemars d'Emily, il erre dans chaque environnement, attiré par le bruit et la distance qui sépare les deux survivants. Plus ils s'éloignent l'un de l'autre, plus il se rapproche.",
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
  "La relation entre l'enfant et l'adulte m'a brisé. Quand Emily tousse dans le noir et que le Traqueur se rapproche… j'ai coupé mon micro pour ne pas crier.",
  "Jamais un jeu n'a autant récompensé la coopération. Rester proches est vital, mais chaque pièce vous force à vous séparer.",
  "Les ciseaux d'Emily contre la lampe de Kijin. Deux styles, une seule mission : la garder en vie. Chef-d'œuvre."
];

const features = [
  { title: 'Terreur Psychologique', icon: GiGhostAlly, desc: "La maladie d'Emily altère sa perception. Plus elle s'affaiblit, plus le monde se déforme autour d'elle. Le joueur ne sait plus ce qui est réel." },
  { title: 'Audio Spatial 3D', icon: GiSoundWaves, desc: "La toux d'Emily, les pas de Kijin, le cliquetis du Traqueur — chaque son a une position dans l'espace. Votre ouïe est votre meilleur outil de survie." },
  { title: 'IA Évolutive Adaptative', icon: GiBrain, desc: "Le Traqueur apprend. Il mémorise vos cachettes, repère vos habitudes et exploite la distance entre les deux survivants pour frapper." },
  { title: 'Contrôle du Souffle', icon: GiLungs, desc: "Votre micro capte votre respiration. Emily tousse, Kijin halète. Chaque bruit réel attire le Traqueur vers vous." }
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

  useEffect(() => {
    const revealNodes = Array.from(document.querySelectorAll('.section-reveal'));
    revealNodes.forEach((node, index) => {
      node.style.setProperty('--reveal-delay', `${(index % 6) * 80}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px' }
    );

    revealNodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="noise min-h-screen bg-abyss text-zinc-200 font-sans">
      <div className="progress-bar" style={{ width: `${progress}%` }} />

      <nav className="site-nav-entrance fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 px-5 py-4 backdrop-blur md:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <div className={`gap-6 ${menuOpen ? 'mobile-menu-open' : 'hidden md:flex'}`}>
            <a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>À propos</a>
            <a href="#characters" className="nav-link" onClick={() => setMenuOpen(false)}>Personnages</a>
            <a href="#gameplay" className="nav-link" onClick={() => setMenuOpen(false)}>Gameplay</a>
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
          <h1 className="font-serif text-5xl text-white md:text-7xl">The Weight of Us</h1>
          <p className="mt-4 font-serif text-xl italic text-zinc-400 md:text-2xl">Elle est malade. Il est son seul espoir.</p>
          <p className="mt-1 text-sm uppercase tracking-[0.18em] text-zinc-500">Mais quelque chose ne veut pas qu'elle guérisse.</p>
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
        <div className="absolute bottom-8 right-6 z-10 flex flex-col gap-3 md:right-12">
          {[
            { icon: FaXTwitter, href: '#', label: 'X' },
            { icon: FaInstagram, href: '#', label: 'Instagram' },
            { icon: FaYoutube, href: '#', label: 'YouTube' },
            { icon: FaDiscord, href: '#', label: 'Discord' },
            { icon: FaTiktok, href: '#', label: 'TikTok' },
          ].map((s) => (
            <a key={s.label} href={s.href} aria-label={s.label} className="text-white/40 transition hover:text-white">
              <s.icon className="text-lg" />
            </a>
          ))}
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
            <h2 className="section-title">Un enfant malade. Un adulte prêt à tout. Un chemin sans retour.</h2>
            <p className="section-copy">Emily est atteinte d'un mal inconnu. Kijin, seul adulte à ses côtés, refuse de la laisser mourir. Ensemble, ils doivent traverser des environnements de plus en plus hostiles pour trouver un remède.</p>
            <p className="section-copy">Mais dans chaque lieu qu'ils traversent, une présence les suit. Le Traqueur rôde, attiré par la maladie d'Emily et par la distance qui les sépare. Restez proches. Restez en vie.</p>
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
            <h2 className="section-title">Le remède est au bout du cauchemar</h2>
            <p className="section-copy">Emily tousse de plus en plus. Ses forces diminuent à chaque environnement. Kijin allume sa lampe et avance — forêts abandonnées, hôpitaux en ruine, souterrains oubliés. Chaque lieu les rapproche du remède, mais les enfonce plus loin dans le territoire du Traqueur.</p>
            <p className="section-copy">Le Traqueur n'est pas un monstre ordinaire. Il est né de la maladie elle-même. Plus Emily s'affaiblit, plus il grandit. Plus les deux survivants s'éloignent l'un de l'autre, plus il frappe vite.</p>
            <p className="section-copy">Le seul atout de Kijin : sa lampe et sa force brute. Le seul atout d'Emily : sa petite taille, son agilité et une paire de ciseaux bien aiguisés.</p>
          </div>
        </div>
      </section>

      <section id="characters" className="px-6 py-20 md:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="section-reveal mb-8">
            <p className="section-label">Galerie des personnages</p>
            <h2 className="section-title">Les acteurs du cauchemar</h2>
          </div>

          {/* RE Requiem-style: Thumbnail film strip */}
          <div className="section-reveal relative mb-6">
            <div className="flex items-center gap-4">
              <button
                className="char-btn shrink-0"
                onClick={() => setCharIndex((v) => (v - 1 + characters.length) % characters.length)}
              >←</button>
              <div className="flex gap-2 overflow-x-auto py-2">
                {characters.map((c, i) => (
                  <button
                    key={c.name}
                    onClick={() => setCharIndex(i)}
                    className={`group relative shrink-0 overflow-hidden border-2 transition-all duration-300 ${i === charIndex ? 'border-blood brightness-100 scale-105' : 'border-white/15 brightness-50 hover:brightness-75'}`}
                    style={{ width: '160px', height: '100px' }}
                  >
                    <img src={c.img} alt={c.name} className="h-full w-full object-cover object-top" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-2 py-1">
                      <span className="text-[10px] uppercase tracking-[0.15em] text-white">{c.name}</span>
                    </div>
                  </button>
                ))}
              </div>
              <div className="ml-auto shrink-0 text-xs tracking-[0.12em] text-zinc-500">
                IMAGES {characters.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCharIndex(i)}
                    className={`mx-0.5 transition ${i === charIndex ? 'text-white' : 'text-zinc-600 hover:text-zinc-400'}`}
                  >
                    {i + 1}
                  </button>
                )).reduce((prev, curr, i) => i === 0 ? [curr] : [...prev, <span key={`sep-${i}`} className="text-zinc-600"> - </span>, curr], [])}
              </div>
            </div>
          </div>

          {/* Large showcase image */}
          <div className="spotlight-panel section-reveal">
            <img src={currentChar.img} alt={currentChar.name} className="spotlight-image" />
            <div className="spotlight-overlay" />
            <div className="spotlight-content">
              <div>
                <h3 className="font-serif text-4xl text-white md:text-5xl">{currentChar.name}</h3>
                <p className="mt-2 text-[11px] uppercase tracking-[0.26em] text-blood">{currentChar.role}</p>
                <p className="mt-4 max-w-2xl font-serif text-lg italic text-zinc-300">{currentChar.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gameplay section – RE Requiem "Combat" style */}
      <section id="gameplay" className="bg-abyss3 px-6 py-20 md:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="section-reveal mb-10">
            <p className="section-label">Gameplay</p>
            <h2 className="section-title">Un grand, une petite. Deux façons de survivre.</h2>
          </div>

          {/* Block 1 – Emily */}
          <div className="section-reveal grid gap-6 md:grid-cols-[1fr_1.2fr] md:items-center">
            <div className="relative overflow-hidden border border-white/10">
              <img src={charCardOne} alt="Emily – Gameplay" className="aspect-[4/3] w-full object-cover" loading="lazy" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-2">
                <span className="text-[10px] uppercase tracking-[0.15em] text-zinc-300">Emily Carter</span>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-blood">Emily — L'Enfant</p>
              <h3 className="mt-2 font-serif text-3xl text-white md:text-4xl">Petite, malade, mais mortelle</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-400">
                Emily est frêle, mais sa petite taille lui permet de se faufiler dans des passages
                inaccessibles à Kijin. Ses ciseaux sont sa seule arme — rapides, précis, silencieux.
                Attention : elle ne peut pas s'éloigner trop longtemps de Kijin, ou le Traqueur la trouvera.
              </p>
            </div>
          </div>

          {/* Block 2 – Kijin (reversed layout) */}
          <div className="section-reveal mt-12 grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div className="order-2 md:order-1">
              <p className="text-xs uppercase tracking-[0.18em] text-blood">Kijin — L'Adulte</p>
              <h3 className="mt-2 font-serif text-3xl text-white md:text-4xl">La lumière dans l'obscurité</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-400">
                Kijin éclaire le chemin avec sa lampe et frappe avec tout ce qu'il trouve.
                Sa force brute repousse le Traqueur là où les ciseaux d'Emily ne suffisent pas.
                Mais sa lampe attire aussi l'attention. Chaque pas en avant est un risque calculé
                pour garder l'enfant en sécurité.
              </p>
            </div>
            <div className="relative order-1 overflow-hidden border border-white/10 md:order-2">
              <img src={charCardTwo} alt="Kijin – Gameplay" className="aspect-[4/3] w-full object-cover" loading="lazy" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-2">
                <span className="text-[10px] uppercase tracking-[0.15em] text-zinc-300">Kijin Tanaka</span>
              </div>
            </div>
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
            {features.map((f) => (
              <div key={f.title} className="feature-panel section-reveal">
                <f.icon className="text-3xl text-blood" />
                <h3 className="font-serif text-2xl text-white">{f.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="px-6 py-20 md:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="section-reveal">
            <p className="section-label">Galerie</p>
            <h2 className="section-title">Les environnements qui les attendent</h2>
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
          <h2 className="section-title section-reveal">Ce qu'ils en disent</h2>
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
          <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500">Serez-vous capable de la sauver ?</p>
          <h2 className="mt-6 font-serif text-5xl text-white md:text-7xl">The Weight of Us</h2>
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

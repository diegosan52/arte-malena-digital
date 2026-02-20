import { useState, useEffect, useRef } from 'react';

const projects = [
  { num: '01', title: 'Gran Mural Insignia', location: 'Centro Comercial Gran Manzana', desc: 'A través de colores vibrantes y detalles meticulosos, este mural captura la diversidad de especies que habitan nuestros ecosistemas.', img: 'https://loremflickr.com/1200/800/jungle,mural,birds/all' },
  { num: '02', title: 'Mural Estilo Botánico', location: 'Interiores', desc: 'Composición orgánica que integra la naturaleza en espacios interiores, creando frescura y serenidad.', img: 'https://loremflickr.com/1200/800/botanical,leaves,painting/all', reverse: true },
  { num: '03', title: 'Fresco a Frida', location: 'Restaurante La Santa Guadalupe', desc: 'Homenaje cromático y vibrante en honor a Frida Kahlo, capturando su esencia y fuerza.', img: 'https://loremflickr.com/1200/800/frida,kahlo,art/all' },
  { num: '04', title: 'Muralismo Sublime', location: 'Hotel Boutique Sublime', desc: 'Intervención artística muralista que redefine la elegancia del espacio hotelero.', img: 'https://loremflickr.com/1200/800/hummingbird,art,mural/all', reverse: true },
  { num: '05', title: 'Nobleza Salvaje', location: 'Mural Cromático', desc: 'Pintura acrílica que explora la fuerza y belleza de la vida salvaje con una paleta intensa.', img: 'https://loremflickr.com/1200/800/leopard,painting,art/all' },
  { num: '06', title: 'Ara Macao', location: 'Entre Hojas', desc: 'Representación vibrante del guacamayo en su hábitat natural, jugando con luz y color.', img: 'https://loremflickr.com/1200/800/macaw,parrot,art/all', reverse: true },
  { num: '07', title: 'Alma de San Jacinto', location: 'Hotel Cartagena Plaza', desc: 'Mural típico que honra las raíces culturales, la música y las tradiciones de la región.', img: 'https://loremflickr.com/1200/800/colombia,mural,culture/all' },
  { num: '08', title: 'Plantación Tropical', location: 'Mural Relax', desc: 'Mural con la intención de relajar y conectar por medio de colores suaves y naturales.', img: 'https://loremflickr.com/1200/800/tropical,plants,art/all', reverse: true },
  { num: '09', title: 'El Ciclista', location: 'Decoración de Interiores', desc: 'Mural dinámico que captura la velocidad y la pasión por el deporte.', img: 'https://loremflickr.com/1200/800/cyclist,art,painting/all' },
  { num: '10', title: 'Plantación Cafetera', location: 'Hotel Cartagena Plaza', desc: 'Alianza con Café Tostao. Un homenaje visual a la cultura cafetera.', img: 'https://loremflickr.com/1200/800/coffee,plant,mural/all', reverse: true },
];

const poems = [
  { num: 'I', title: 'Colores del Alma', text: `Pinto con la furia del mar,\ncon la calma del atardecer.\nCada trazo es un latido,\ncada color, un amanecer.\n\nEn el lienzo vivo y muero,\nrenazco con cada pincelada.\nEl arte es mi refugio eterno,\nmi voz cuando no hay palabras.` },
  { num: 'II', title: 'Caribe en la Piel', text: `Cartagena me viste de colores,\nme arropa con su brisa salada.\nSoy hija de murallas y flores,\nde historias en piedra tallada.\n\nMi arte lleva el sabor del trópico,\nla fuerza de un pueblo que canta.\nCada mural es un verso épico,\nque al mundo entero encanta.` },
  { num: 'III', title: 'Mujer de Pinceles', text: `No me definen los muros,\nsino los murales que pinto.\nCon las manos llenas de futuro,\ncon el corazón, nunca me rindo.\n\nSoy mujer de colores intensos,\nde sueños que no tienen precio.\nMis obras son mis argumentos,\nmi arte, mi mejor reflejo.` },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'hero', label: 'Inicio' },
    { id: 'about', label: 'Sobre Mí' },
    { id: 'projects', label: 'Portafolio' },
    { id: 'mascotas', label: 'Mascotas' },
    { id: 'anime', label: 'Anime' },
    { id: 'fitness', label: 'Fitness' },
    { id: 'poesia', label: 'Poesía' },
    { id: 'bodas', label: 'Bodas' },
    { id: 'contact', label: 'Contacto' },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <span className="brand" onClick={() => scrollTo('hero')}>MG</span>
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className={`nav-overlay ${menuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            {navItems.map(item => (
              <li key={item.id}>
                <a className="nav-link" data-text={item.label} onClick={() => scrollTo(item.id)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <header id="hero" className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="line">Malena</span>
            <span className="line">Gamarra</span>
          </h1>
          <p className="hero-subtitle">ARTISTA PLÁSTICA & VISUAL</p>
        </div>
        <div className="scroll-indicator">
          <span>SCROLL</span>
          <div className="line-decoration"></div>
        </div>
      </header>

      {/* About */}
      <section id="about" className="about-section">
        <div className="geo-shape shape-triangle"></div>
        <div className="geo-shape shape-circle"></div>
        <div className="container" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="about-grid">
            <div className="about-text">
              <h2 className="section-title">Arte & Muralismo <br/>Creativo</h2>
              <p className="lead-text">Transformo tus ideas en obras maestras que embellezcan y enriquezcan cualquier espacio.</p>
              <p>Soy una artista apasionada por el arte y la creatividad, especializada en la creación de murales impactantes, cuadros personalizados y proyectos artísticos únicos. Mi enfoque combina la técnica clásica con una visión contemporánea, creando atmósferas que cuentan historias.</p>
            </div>
            <div className="about-image-placeholder">
              <img src="https://loremflickr.com/600/800/woman,artist,colorful/all" alt="Malena Gamarra" />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="projects" className="portfolio-section">
        <div className="portfolio-header">
          <h2 className="section-title">Portafolio</h2>
        </div>
        <div className="project-list">
          {projects.map((p) => (
            <article key={p.num} className={`project-item ${p.reverse ? 'reverse' : ''}`}>
              <div className="project-info">
                <span className="project-number">{p.num}</span>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-location">{p.location}</p>
                <p className="project-desc">{p.desc}</p>
                <a href="#" className="view-project">Ver Proyecto</a>
              </div>
              <div className="project-image">
                <img src={p.img} alt={p.title} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Mascotas */}
      <section id="mascotas" className="new-section mascotas-section">
        <div className="container">
          <h2 className="section-title">Retratos de Mascotas</h2>
          <p className="lead-text">Inmortaliza a tu compañero peludo en una obra de arte única.</p>
          <div className="mascotas-grid">
            <div className="mascotas-card">
              <img src="/images/mascota-retrato.png" alt="Retrato artístico de mascota con rosas" loading="lazy" />
              <div className="mascotas-card-info">
                <h3>Retrato con Rosas</h3>
                <p>Pintura acrílica vibrante que captura la esencia y personalidad de tu mascota con un toque floral.</p>
              </div>
            </div>
            <div className="mascotas-text-block">
              <h3>¿Por qué un retrato de tu mascota?</h3>
              <ul>
                <li>🎨 Técnica hiperrealista con toques expresionistas</li>
                <li>🖼️ Personalización total: fondo, estilo, tamaño</li>
                <li>💝 El regalo perfecto para amantes de los animales</li>
                <li>📸 Solo necesitas enviar una foto de tu mascota</li>
              </ul>
              <a href="#contact" className="view-project">Solicitar Retrato</a>
            </div>
          </div>
        </div>
      </section>

      {/* Anime */}
      <section id="anime" className="new-section anime-section">
        <div className="container">
          <h2 className="section-title">Arte Anime & Pop Culture</h2>
          <p className="lead-text">Del lienzo a la piel. Pinturas y diseños de tatuajes inspirados en el anime y la cultura pop.</p>
          <div className="anime-grid">
            <div className="anime-card featured">
              <img src="/images/anime-goku.png" alt="Pintura de Goku Super Saiyan Blue" loading="lazy" />
              <div className="anime-card-overlay">
                <h3>Goku SSJ Blue</h3>
                <span>Acrílico sobre lienzo</span>
              </div>
            </div>
            <div className="anime-card">
              <img src="/images/joker-painting.png" alt="Pintura del Joker estilo pop art" loading="lazy" />
              <div className="anime-card-overlay">
                <h3>Joker Pop Art</h3>
                <span>Acrílico sobre lienzo</span>
              </div>
            </div>
          </div>
          <div className="anime-services">
            <div className="service-badge">🎨 Cuadros Personalizados</div>
            <div className="service-badge">✏️ Diseño de Tatuajes</div>
            <div className="service-badge">🖌️ Pintura Corporal</div>
            <div className="service-badge">🎭 Fan Art por Encargo</div>
          </div>
        </div>
      </section>

      {/* Fitness */}
      <section id="fitness" className="new-section fitness-section">
        <div className="container">
          <h2 className="section-title">Arte en Movimiento</h2>
          <p className="lead-text">La disciplina del fitness alimenta mi creatividad artística.</p>
          <div className="fitness-grid">
            <div className="fitness-philosophy">
              <blockquote>
                "El cuerpo es el primer lienzo. La disciplina física me da la energía y enfoque para crear. El arte y el fitness comparten la misma esencia: constancia, pasión y superación."
              </blockquote>
              <p>Malena comparte su rutina de entrenamiento y estilo de vida saludable en sus redes sociales, inspirando a otros artistas a encontrar el equilibrio entre cuerpo y mente.</p>
            </div>
            <div className="fitness-highlights">
              <div className="fitness-stat"><span className="stat-icon">💪</span><span className="stat-label">Entrenamiento diario</span></div>
              <div className="fitness-stat"><span className="stat-icon">🧘‍♀️</span><span className="stat-label">Yoga & Meditación</span></div>
              <div className="fitness-stat"><span className="stat-icon">🏋️‍♀️</span><span className="stat-label">Fuerza & Cardio</span></div>
              <div className="fitness-stat"><span className="stat-icon">🥗</span><span className="stat-label">Nutrición consciente</span></div>
            </div>
          </div>
          <p className="fitness-cta">Sígueme en <a href="https://www.instagram.com/artemalenag/" target="_blank" rel="noopener noreferrer">Instagram</a> para ver mis rutinas y tips de bienestar.</p>
        </div>
      </section>

      {/* Poesía */}
      <section id="poesia" className="new-section poesia-section">
        <div className="container">
          <h2 className="section-title">Poesía & Letras</h2>
          <p className="lead-text">Cuando el pincel no alcanza, las palabras pintan.</p>
          <div className="poesia-grid">
            {poems.map(poem => (
              <div key={poem.num} className="poema-card">
                <span className="poema-number">{poem.num}</span>
                <h3>{poem.title}</h3>
                <p className="poema-text">
                  {poem.text.split('\n').map((line, i) => (
                    <span key={i}>{line}<br/></span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bodas */}
      <section id="bodas" className="new-section bodas-section">
        <div className="container">
          <h2 className="section-title">Arte para tu Boda</h2>
          <p className="lead-text">Hago de tu celebración una obra de arte: pinto retratos en vivo de tus invitados con mucho estilo.</p>
          <div className="bodas-grid">
            <div className="bodas-image">
              <img src="/images/boda-servicio.png" alt="Servicio artístico para bodas en Cartagena" loading="lazy" />
            </div>
            <div className="bodas-info">
              <h3>Live Painting en tu Evento</h3>
              <p>Ofrezco un servicio exclusivo de pintura en vivo durante bodas y eventos especiales en Cartagena y toda Colombia. Pinto retratos rápidos de los invitados como recuerdo único e irrepetible.</p>
              <div className="bodas-features">
                <div className="boda-feature">
                  <span>🎨</span>
                  <div><strong>Retratos en Vivo</strong><p>Pinto a cada invitado con estilo artístico en minutos.</p></div>
                </div>
                <div className="boda-feature">
                  <span>🖼️</span>
                  <div><strong>Cuadro Conmemorativo</strong><p>Una obra grande pintada durante la ceremonia como recuerdo.</p></div>
                </div>
                <div className="boda-feature">
                  <span>✨</span>
                  <div><strong>Decoración Artística</strong><p>Letreros, bienvenidas y detalles pintados a mano.</p></div>
                </div>
              </div>
              <a href="#contact" className="view-project">Cotizar para mi Boda</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="footer-content">
          <h2 className="footer-title">Hablemos</h2>
          <div className="footer-links">
            <a href="https://www.instagram.com/artemalenag/" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
            <a href="#" className="footer-link">Email</a>
            <a href="#" className="footer-link">WhatsApp</a>
          </div>
          <p className="copyright">© 2026 Malena Gamarra. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
}

export default App;

import React, { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown,
  ClipboardCheck, Mail, Menu, MessageCircle, MousePointer2,
  ShieldCheck, Snowflake, X, Zap, HousePlug
} from 'lucide-react'
import Service3D from './components/Service3D'
import { IMAGES, SITE, whatsappUrl } from './config'
import { services, reviews } from './data/content'

const NAV = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
]

const serviceIcons = { security: ShieldCheck, cooling: Snowflake, electric: Zap, automation: HousePlug }

function Reveal({ children, className = '', delay = 0 }) {
  const reducedMotion = useReducedMotion()
  return <motion.div
    className={className}
    initial={reducedMotion ? false : { opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.10 }}
    transition={{ duration: 0.48, delay, ease: [0.21, 0.61, 0.35, 1] }}
  >{children}</motion.div>
}

function Brand({ light = false }) {
  return <a className={`brand ${light ? 'brand-light' : ''}`} href="#inicio" aria-label="OS Segurança e Tecnologia, ir para o início">
    <img src="/assets/logo-os.png" alt="" width="47" height="47" />
    <span className="brand-name"><strong>OS</strong><small>SEGURANÇA & TECNOLOGIA</small></span>
  </a>
}

function ButtonLink({ href = '#contato', children, secondary = false, className = '' }) {
  return <a className={`button ${secondary ? 'button-secondary' : 'button-primary'} ${className}`} href={href}>
    <span>{children}</span><ArrowUpRight size={17} strokeWidth={1.9} aria-hidden="true" />
  </a>
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const check = () => setScrolled(window.scrollY > 12)
    check()
    window.addEventListener('scroll', check, { passive: true })
    return () => window.removeEventListener('scroll', check)
  }, [])
  useEffect(() => {
    if (!menuOpen) return
    const escapeMenu = (event) => { if (event.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', escapeMenu)
    return () => window.removeEventListener('keydown', escapeMenu)
  }, [menuOpen])
  return <header className={`site-header ${scrolled ? 'site-header-scrolled' : ''}`}>
    <div className="container header-content">
      <Brand />
      <nav className="desktop-navigation" aria-label="Navegação principal">
        {NAV.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}
      </nav>
      <ButtonLink className="header-button">Solicitar orçamento</ButtonLink>
      <button className="mobile-menu-button" type="button" onClick={() => setMenuOpen(value => !value)}
        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation">
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
    {menuOpen && <nav id="mobile-navigation" className="mobile-navigation" aria-label="Navegação mobile">
      {NAV.map(item => <a onClick={() => setMenuOpen(false)} href={item.href} key={item.href}>{item.label}<ArrowUpRight size={17} /></a>)}
      <a className="mobile-navigation-cta" onClick={() => setMenuOpen(false)} href="#contato">Solicitar orçamento <ArrowRight size={17} /></a>
    </nav>}
  </header>
}

function Eyebrow({ children, inverted = false }) {
  return <span className={`eyebrow ${inverted ? 'eyebrow-inverted' : ''}`}><span className="eyebrow-rule" />{children}</span>
}

function Hero() {
  return <section id="inicio" className="hero">
    <div className="container hero-grid">
      <div className="hero-copy">
        <Reveal><Eyebrow>SEGURANÇA ELETRÔNICA · INSTALAÇÕES · AUTOMAÇÃO</Eyebrow></Reveal>
        <Reveal delay={0.07}><h1>Tecnologia aplicada<br />à segurança de<br /><span>cada ambiente.</span></h1></Reveal>
        <Reveal delay={0.11}><p className="hero-lead">Projetos, instalação e manutenção em segurança eletrônica, climatização, elétrica e automação. Atendimento técnico para residências e empresas.</p></Reveal>
        <Reveal delay={0.16}><div className="hero-actions"><ButtonLink>Solicitar orçamento</ButtonLink><a href="#servicos" className="inline-arrow">Conhecer os serviços <ArrowRight size={18} /></a></div></Reveal>
        <Reveal delay={0.19}><div className="hero-specialties"><span>ATUAÇÃO</span><p>Segurança eletrônica <b>·</b> Climatização <b>·</b> Elétrica <b>·</b> Automação</p></div></Reveal>
      </div>
      <Reveal className="hero-media" delay={0.1}>
        <div className="hero-image-wrapper">
          <img src={IMAGES.hero} alt="Profissional da área técnica trabalhando em uma instalação elétrica" fetchPriority="high" />
          <div className="image-bottom-gradient" />
          <span className="hero-photo-caption">SOLUÇÕES PARA AMBIENTES RESIDENCIAIS E COMERCIAIS</span>
        </div>
        <div className="hero-media-label"><span className="media-label-mark" /> <span>Soluções técnicas para cada necessidade</span> <span>OS / TECNOLOGIA</span></div>
      </Reveal>
    </div>
    <a className="hero-scroll" href="#sobre"><ArrowDown size={15} /> Descubra a OS</a>
  </section>
}

function Specialties() {
  return <section className="specialties" aria-label="Áreas de atuação"><div className="container specialties-grid">
    {services.map((service) => {
      const Icon = serviceIcons[service.id]
      return <a href="#servicos" key={service.id} className="specialty-item">
        <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
        <span>{service.title}</span>
        <ArrowUpRight size={16} strokeWidth={1.6} className="specialty-arrow" aria-hidden="true" />
      </a>
    })}
  </div></section>
}

function About() {
  return <section id="sobre" className="section about-section"><div className="container about-grid">
    <Reveal className="about-image">
      <img loading="lazy" src={IMAGES.team} alt="Profissional atuando com tecnologia em ambiente técnico" />
      <div className="about-image-foot"><span>OS — SEGURANÇA & TECNOLOGIA</span><span>01 / SOBRE</span></div>
    </Reveal>
    <div className="about-copy"><Reveal><Eyebrow>SOBRE A OS</Eyebrow><h2>Um atendimento técnico que começa pela escuta.</h2><p>Na OS, segurança, climatização, elétrica e automação são tratadas como partes de uma mesma necessidade: ter ambientes que funcionem bem, com tranquilidade e praticidade.</p><p>Trabalhamos com uma abordagem consultiva para entender cada demanda e indicar soluções adequadas ao espaço, à rotina e ao objetivo de cada cliente.</p></Reveal>
      <Reveal delay={0.08}><div className="about-principles"><div><span>01</span><strong>Entender a necessidade</strong></div><div><span>02</span><strong>Planejar a solução</strong></div><div><span>03</span><strong>Executar com atenção</strong></div></div><a className="text-button" href="#contato">Apresente seu projeto <ArrowUpRight size={19} /></a></Reveal>
    </div>
  </div></section>
}

function Services({ onSelect }) {
  return <section id="servicos" className="section services-section"><div className="container">
    <Reveal className="section-header services-header">
      <div><Eyebrow>NOSSAS ESPECIALIDADES</Eyebrow><h2>Serviços para proteger<br /><span>e fazer funcionar.</span></h2></div>
      <p>Do monitoramento à automação, reunimos soluções técnicas para residências e empresas.</p>
    </Reveal>
    <div className="services-grid">
      {services.map((service, index) => {
        const Icon = serviceIcons[service.id]
        return <Reveal key={service.id} delay={index * 0.045} className="service-card-reveal">
          <article className="service-card">
            <div className="service-image"><img loading="lazy" src={IMAGES[service.id]} alt={service.imageAlt} /><span className="service-number">{service.number} / 04</span></div>
            <div className="service-info">
              <div className="service-title-line"><span className="service-icon"><Icon size={22} strokeWidth={1.7} /></span><h3>{service.title}</h3></div>
              <p>{service.short}</p>
              <a href="#visualizacao" onClick={() => onSelect(service.id)} className="service-more">Conhecer a solução <ArrowUpRight size={18} /></a>
            </div>
          </article>
        </Reveal>
      })}
    </div>
  </div></section>
}

function ModelExplorer({ selected, onSelect }) {
  const service = services.find((entry) => entry.id === selected) || services[0]
  return <section id="visualizacao" className="model-section"><div className="container model-layout">
    <div className="model-intro"><Reveal><Eyebrow>EQUIPAMENTOS E SOLUÇÕES</Eyebrow><h2>Conheça os equipamentos<br />e suas aplicações.</h2><p>Visualize modelos ilustrativos de equipamentos e entenda as soluções disponíveis para cada tipo de instalação.</p></Reveal>
      <div className="model-options" role="tablist" aria-label="Selecione a área de serviço">
        {services.map((entry) => <button type="button" key={entry.id} role="tab" aria-controls="model-panel" aria-selected={entry.id === selected}
          onClick={() => onSelect(entry.id)} className={`model-option ${entry.id === selected ? 'model-option-selected' : ''}`}>
          <span className="model-option-number">{entry.number}</span><span>{entry.title}</span><ArrowUpRight size={16} />
        </button>)}
      </div>
    </div>
    <Reveal className="model-visual">
      <div className="model-topline"><span>MODELO DE REFERÊNCIA</span><span>{service.number} / 04</span></div>
      <div id="model-panel" role="tabpanel" className="model-canvas" aria-label={`Visualização 3D de ${service.title}`}>
        <Service3D selected={selected}/>
      </div>
      <div className="model-meta"><span><MousePointer2 size={16} /> Arraste para girar</span><span>Representação ilustrativa, sem escala</span></div>
      <div className="model-description" key={service.id}><div><h3>{service.title}</h3><p>{service.full}</p></div><ul>{service.bullets.map((bullet) => <li key={bullet}><Check size={15} />{bullet}</li>)}</ul></div>
    </Reveal>
  </div></section>
}

function ProcessAndReviews() {
  return <section id="avaliacoes" className="section credibility-section"><div className="container">
    <Reveal className="section-header"><div><Eyebrow>CONFIANÇA NA PRÁTICA</Eyebrow><h2>Uma boa entrega começa<br /><span>antes da instalação.</span></h2></div><p>Projetos bem resolvidos dependem de orientação clara, planejamento e execução responsável.</p></Reveal>
    <div className="process-grid">
      {[{ number: '01', title: 'Conversa e diagnóstico', description: 'Entendemos o ambiente, a necessidade e o resultado que você espera.' }, { number: '02', title: 'Solução adequada', description: 'Apresentamos possibilidades técnicas de acordo com o tipo de projeto.' }, { number: '03', title: 'Instalação e orientação', description: 'O foco é entregar a solução com organização e explicar seu funcionamento.' }].map((item, index) => <Reveal delay={index * 0.05} key={item.number} className="process-item"><span>{item.number} / ETAPA</span><h3>{item.title}</h3><p>{item.description}</p></Reveal>)}
    </div>
    {reviews.length > 0 ? <div className="review-block"><h3>O que dizem nossos clientes</h3><div className="review-grid">{reviews.map((review) => <figure key={review.id} className="review"><blockquote>“{review.text}”</blockquote><figcaption><strong>{review.name}</strong> · {review.detail}</figcaption></figure>)}</div></div> : <div className="reviews-placeholder"><div><span>AVALIAÇÕES DE CLIENTES</span><h3>Confiança se comprova com experiências reais.</h3><p>Este espaço está reservado para depoimentos de clientes publicados com autorização.</p></div><ClipboardCheck size={39} strokeWidth={1.2} aria-hidden="true" /></div>}
  </div></section>
}

function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const [error, setError] = useState('')
  const update = (key) => (event) => { setForm(current => ({ ...current, [key]: event.target.value })); setError('') }
  const submit = (event) => {
    event.preventDefault()
    const name = form.name.trim()
    const phone = form.phone.replace(/\D/g, '')
    if (name.length < 2) { setError('Informe seu nome para continuar.'); return }
    if (phone.length < 10 || phone.length > 13) { setError('Informe um número de telefone com DDD válido.'); return }
    if (!form.service) { setError('Escolha o serviço de interesse.'); return }
    const message = [
      `Olá! Gostaria de solicitar um orçamento na ${SITE.name}.`,
      '',
      `*Nome:* ${name}`,
      `*Telefone:* ${form.phone.trim()}`,
      `*Serviço:* ${form.service}`,
      `*Detalhes:* ${form.message.trim() || 'Gostaria de conversar sobre as opções disponíveis.'}`,
    ].join('\n')
    window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer')
  }
  return <section className="contact-section" id="contato"><div className="container contact-layout">
    <Reveal className="contact-copy"><Eyebrow inverted>FALE COM A NOSSA EQUIPE</Eyebrow><h2>Vamos conversar<br />sobre o seu projeto?</h2><p>Conte qual serviço procura e o que precisa resolver. Com essas informações, começamos uma conversa mais objetiva.</p>
      <div className="contact-notes"><span><Check size={16} /> Atendimento direto pelo WhatsApp</span><span><Check size={16} /> Sem cadastro ou criação de conta</span></div>
      <div className="contact-decoration" aria-hidden="true"><span>OS</span><small>SEGURANÇA & TECNOLOGIA</small></div>
    </Reveal>
    <Reveal className="contact-form-wrap" delay={0.08}><div className="contact-form-header"><div><span>SOLICITAR ORÇAMENTO</span><h3>Conte o que você precisa.</h3></div><MessageCircle size={27} strokeWidth={1.6} aria-hidden="true" /></div>
      <form onSubmit={submit} noValidate>
        <div className="field"><label htmlFor="contact-name">Nome completo <span>*</span></label><input id="contact-name" name="name" autoComplete="name" required value={form.name} onChange={update('name')} placeholder="Seu nome" /></div>
        <div className="field"><label htmlFor="contact-phone">Telefone com DDD <span>*</span></label><input id="contact-phone" name="phone" autoComplete="tel" type="tel" inputMode="tel" required value={form.phone} onChange={update('phone')} placeholder="(00) 00000-0000" /></div>
        <div className="field"><label htmlFor="contact-service">Serviço de interesse <span>*</span></label><div className="select-field"><select id="contact-service" name="service" required value={form.service} onChange={update('service')}><option value="">Selecione um serviço</option>{services.map(service => <option key={service.id} value={service.title}>{service.title}</option>)}<option value="Orientação">Preciso de orientação</option></select><ChevronDown size={18} aria-hidden="true" /></div></div>
        <div className="field"><label htmlFor="contact-message">Descreva seu projeto <span className="optional-label">(opcional)</span></label><textarea id="contact-message" name="message" rows="3" value={form.message} onChange={update('message')} placeholder="Conte brevemente o que você precisa..." /></div>
        {error && <p role="alert" className="form-error">{error}</p>}
        <button type="submit" className="button button-primary form-submit"><span>Continuar pelo WhatsApp</span><ArrowUpRight size={18} /></button>
        <p className="form-notice">As informações preenchidas serão utilizadas para gerar sua mensagem. Este site não armazena os dados do formulário.</p>
      </form>
    </Reveal>
  </div></section>
}

function Footer() {
  return <footer className="footer"><div className="container">
    <div className="footer-main"><div><Brand light /><p>Soluções em segurança eletrônica, climatização, elétrica e automação.</p></div>
      <div className="footer-links"><strong>Navegação</strong>{NAV.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</div>
      <div className="footer-links"><strong>Especialidades</strong>{services.map(service => <a key={service.id} href="#servicos">{service.title}</a>)}</div>
      <div className="footer-inquiry"><strong>Tem um projeto em mente?</strong><a href="#contato">Solicite um orçamento <ArrowUpRight size={18} /></a>{SITE.email && <a href={`mailto:${SITE.email}`} className="footer-email"><Mail size={16} /> {SITE.email}</a>}</div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.</span><a href="#inicio">Voltar ao topo ↑</a></div>
  </div></footer>
}

export default function App() {
  const [selected, setSelected] = useState('security')
  return <>
    <Header />
    <main>
      <Hero />
      <Specialties />
      <About />
      <Services onSelect={setSelected} />
      <ModelExplorer selected={selected} onSelect={setSelected} />
      <ProcessAndReviews />
      <Contact />
    </main>
    <Footer />
    <a href="#contato" className="floating-contact" aria-label="Ir ao formulário de contato"><MessageCircle size={22} strokeWidth={1.8}/><span>Orçamento</span></a>
  </>
}

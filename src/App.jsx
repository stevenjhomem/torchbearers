import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

const MAIL_TO =
  'mailto:sjhomem@outlook.com,ivers.jesse@gmail.com,jkeyton77@gmail.com?subject=Torchbearers%20Data%20Discovery%20Call&body=I%20would%20love%20to%20book%20a%20time%20to%20discuss%20how%20Torchbearers%20Data%20might%20help%20us%20use%20AI%20well%20with%20the%20data%20and%20systems%20we%20already%20have.';

function StackIcon({ className = 'icon' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4 4 8l8 4 8-4-8-4Z" />
      <path d="m4 12 8 4 8-4" />
      <path d="m4 16 8 4 8-4" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="menu-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  );
}

function Nav() {
  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <div className="nav-inner">
        <a className="brand" href="#hero" aria-label="Torchbearers Data home">
          <span className="brand-mark" aria-hidden="true">
            <StackIcon />
          </span>
          <span>Torchbearers Data</span>
        </a>

        <div className="nav-actions">
          <div className="nav-links" aria-label="Section navigation">
            <a href="#approach">Approach</a>
            <a href="#engagement">Engagement</a>
            <a href="#team">Team</a>
          </div>
          <a className="button button-primary button-small" href={MAIL_TO}>
            Book a call
          </a>
          <details className="mobile-menu">
            <summary aria-label="Open navigation menu">
              <MenuIcon />
            </summary>
            <div className="mobile-panel">
              <a href="#approach">Approach</a>
              <a href="#engagement">Engagement</a>
              <a href="#team">Team</a>
            </div>
          </details>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="hero" aria-labelledby="hero-title">
      <div className="section-inner">
        <p className="eyebrow eyebrow-accent">
          Semantic and agentic data systems for small &amp; mid-market teams
        </p>
        <h1 id="hero-title">
          Your data is already valuable.
          <br />
          It just isn't usable yet.
        </h1>
        <p className="hero-copy">
          We're the data team you didn't hire. We build the governed data layer, semantic layer,
          and agentic interaction layer that let employees and customers ask better questions,
          trigger useful workflows, and trust the answers they get back.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href={MAIL_TO}>
            Book a discovery call
          </a>
          <a className="button button-ghost" href="#engagement">
            See an engagement <span aria-hidden="true">-&gt;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

const approachPoints = [
  {
    title: 'A single source of truth',
    description:
      'We build a custom semantic model that translates messy database tables into clear business concepts like customer lifetime value, real-time margin, and inventory risk, so your numbers stay accurate and consistent.',
  },
  {
    title: 'Talk to your data',
    description:
      'Through a secure LLM integration, leaders and teams can ask plain-English questions about performance, forecasts, bottlenecks, and growth trends, with answers grounded in your business logic.',
  },
  {
    title: 'Precision over guesswork',
    description:
      'Unlike generic AI, the system does not guess from vague context. It uses your semantic layer to pull real numbers from real data, giving you insights you can trust to run the business.',
  },
];

function Approach() {
  return (
    <section className="section approach-section section-bordered" id="approach" aria-labelledby="approach-title">
      <div className="section-inner">
        <p className="eyebrow">The approach</p>
        <h2 id="approach-title">Your data, empowered. Instant insights for smarter decisions.</h2>
        <p className="approach-lede">
          Most medium-sized businesses are sitting on a goldmine of data they can't actually use. The information is
          there, but it is trapped in complex systems or buried under technical bottlenecks. We bridge that gap by
          turning raw data into a governed conversational partner for your business.
        </p>

        <div className="approach-callout">
          <p className="eyebrow">The intelligence layer</p>
          <p>
            We provide a bespoke, end-to-end solution that gives non-technical leaders direct access to company
            data insights without needing to write a single line of code.
          </p>
        </div>

        <div className="approach-grid">
          {approachPoints.map((point) => (
            <article className="approach-card" key={point.title}>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </article>
          ))}
        </div>

        <p className="approach-close">Stop waiting for reports. Start leading with clarity.</p>
      </div>
    </section>
  );
}

const phases = [
  {
    number: '01',
    title: 'Data foundation',
    description:
      'Stand up the warehouse, pipelines, keys, timestamps, joins, and access patterns. This is the governed data layer every dashboard, model, and agent depends on.',
  },
  {
    number: '02',
    title: 'Semantic layer',
    description:
      'Define the metrics, entities, relationships, and business rules your company runs on. One shared semantic layer gives BI, apps, and AI agents the same source of truth.',
  },
  {
    number: '03',
    title: 'Internal agents',
    description:
      'Give employees governed ways to interact with the semantic layer through chat, workflow agents, and internal tools. They ask, analyze, decide, and act from trusted context.',
  },
  {
    number: '04',
    title: 'Customer agents',
    description:
      'Bring the same governed intelligence into your product: embedded analytics, customer-facing agents, and AI experiences that respect tenancy, permissions, and context.',
  },
];

function Engagement() {
  return (
    <section className="section section-alt section-bordered" id="engagement" aria-labelledby="engagement-title">
      <div className="section-inner">
        <p className="eyebrow">The engagement</p>
        <h2 id="engagement-title">Four phases. Start at any one.</h2>
        <p className="section-lede">
          We scope each engagement to where you actually are. Most clients start at phase one or two.
        </p>

        <div className="phase-list">
          {phases.map((phase) => (
            <article className="phase-row" key={phase.number}>
              <div className="phase-meta">
                <span className="phase-number">{phase.number}</span>
                <h3>{phase.title}</h3>
              </div>
              <p>{phase.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ToolsIcon() {
  return (
    <svg className="pillar-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 21h4l11-11a2.8 2.8 0 0 0-4-4L3 17v4Z" />
      <path d="m14 6 4 4" />
      <path d="M12 8 7 3 4 6l5 5" />
      <path d="M17 14 21 18l-3 3-4-4" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="pillar-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 5 6v5c0 4.4 2.9 8.3 7 10 4.1-1.7 7-5.6 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-5" />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg className="pillar-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16 8a5 5 0 1 0-4 4.9" />
      <path d="M14 14h7v3h-3v3h-3v-3h-1z" />
    </svg>
  );
}

const pillars = [
  {
    icon: <ToolsIcon />,
    title: 'We do the whole chain.',
    description:
      'Most boutique data shops stop at dashboards. We handle the data layer, semantic layer, agentic layer, and the interfaces where employees and customers actually use them.',
  },
  {
    icon: <ShieldIcon />,
    title: 'Governance from day one.',
    description:
      'Row-level security, versioned definitions, prompt boundaries, and audit trails are part of the system from the beginning, because agents need guardrails as much as they need data.',
  },
  {
    icon: <KeyIcon />,
    title: 'You own it. Forever.',
    description:
      'Open standards, your warehouse, your repo, your keys. Your semantic layer and agentic workflows should become company infrastructure, not a dependency on us.',
  },
];

function WhyUs() {
  return (
    <section className="section section-alt section-bordered-bottom" id="why" aria-labelledby="why-title">
      <div className="section-inner">
        <p className="eyebrow">Why us</p>
        <h2 id="why-title">Built by engineers who've done it in production.</h2>

        <div className="pillar-grid">
          {pillars.map((pillar) => (
            <article key={pillar.title}>
              {pillar.icon}
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const team = [
  {
    initials: 'JI',
    name: 'Jesse Ivers, PhD',
    role: 'AI/ML, Semantic Layers, Software Architecture',
    bio: 'PhD in biomedical engineering from the University of Arkansas, where he used machine learning to better understand cancer - building ML systems that interpreted optical microscopy data to characterize treatment response and cellular metabolism. Currently a data scientist at Walmart Global Tech building ML at retail scale.',
  },
  {
    initials: 'JK',
    name: 'Jesse Keyton, PhD',
    role: 'Machine learning & analytics',
    bio: "PhD in mathematics from the University of Arkansas (2020). Dissertation in commutative algebra and homogeneous liaison theory - the math of how algebraic objects link to each other, which turns out to be useful when you're designing how data entities link to each other. Currently a yield strategy engineer at ArcBest; previously taught mathematics at Spartanburg Methodist College and Liberty University.",
  },
  {
    initials: 'SH',
    name: 'Steven Homem M.S.',
    role: 'Software Architecture, Agentic Systems, Semantic Layers',
    bio: 'Software engineer at Lightcast building ETL and semantic infrastructure for workforce data. Formally trained in mathematics; previously security and platform engineering at Walmart Global Tech. Currently building multi-agent systems on AWS AgentCore that query semantic layers in production.',
  },
];

function Team() {
  return (
    <section className="section section-bordered-bottom" id="team" aria-labelledby="team-title">
      <div className="section-inner">
        <p className="eyebrow team-eyebrow">The team</p>
        <h2 className="visually-hidden" id="team-title">
          The team
        </h2>
        <p className="team-intro">
          We're software professionals who've spent the last decade researching hard problems and building
          production data systems - in retail, workforce analytics, logistics, and cancer research. We started
          Torchbearers because we kept watching companies underuse what they had already been given: the data,
          context, and hard-won knowledge inside their own business. Our work is to carry that forward - to help
          teams turn what is already theirs into something clear, governed, and useful.
        </p>

        <div className="team-list">
          {team.map((person) => (
            <article className="person-card" key={person.initials}>
              <div className="avatar" aria-hidden="true">
                {person.initials}
              </div>
              <div>
                <div className="person-heading">
                  <h3>{person.name}</h3>
                  <span>{person.role}</span>
                </div>
                <p>{person.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="cta section-alt" id="cta" aria-labelledby="cta-title">
      <div className="section-inner">
        <h2 id="cta-title">Let's see what your data could do.</h2>
        <p>
          Twenty minutes on a call. We'll map your current data setup, identify where a semantic layer
          and agentic workflows could help employees or customers, and tell you what an engagement would
          actually look like.
        </p>

        <a className="button button-primary cta-mail-button" href={MAIL_TO}>
          Book a call
        </a>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Approach />
        <Engagement />
        <WhyUs />
        <Team />
        <FinalCta />
      </main>
      <Analytics />
      <SpeedInsights />
    </>
  );
}

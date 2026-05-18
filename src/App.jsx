import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

const MAIL_TO =
  'mailto:hello@torchbearers.ai?subject=Torchbearers%20Discovery%20Call&body=I%20would%20love%20to%20book%20a%20time%20to%20discuss%20how%20Torchbearers%20might%20help%20us%20use%20AI%20well%20with%20the%20data%20and%20systems%20we%20already%20have.';

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
        <a className="brand" href="#hero" aria-label="Torchbearers home">
          <span className="brand-mark" aria-hidden="true">
            <StackIcon />
          </span>
          <span>Torchbearers</span>
        </a>

        <div className="nav-actions">
          <div className="nav-links" aria-label="Section navigation">
            <a href="#approach">Approach</a>
            <a href="#process">Process</a>
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
              <a href="#process">Process</a>
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
          <a className="button button-ghost" href="#process">
            See the process <span aria-hidden="true">-&gt;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

const approachPoints = [
  {
    title: 'Customer conversations',
    description:
      'Do calls, tickets, reviews, and emails keep telling you what customers need, but no one has time to turn those patterns into better service, sales, or training?',
  },
  {
    title: 'Employee know-how',
    description:
      'Do your best people know the right way to handle tricky situations, while new hires learn by shadowing, asking around, or guessing from old notes?',
  },
  {
    title: 'Messy operations',
    description:
      'Are the real steps for getting work done spread across spreadsheets, inboxes, task boards, documents, and someone\'s memory?',
  },
  {
    title: 'Sales and follow-up',
    description:
      'Are good objections, winning phrases, deal notes, and follow-up details getting captured somewhere, but never becoming a repeatable playbook?',
  },
  {
    title: 'Client coordination',
    description:
      'Do ten people work with the same client while notes, history, preferences, promises, and next steps live in different places?',
  },
  {
    title: 'Meetings and decisions',
    description:
      'Do useful context, decisions, and next steps disappear into meeting notes no one revisits when the work starts moving?',
  },
  {
    title: 'Standards and compliance',
    description:
      'Do people follow slightly different versions of the same process because the official policy and the real-world workflow are not in sync?',
  },
];

function Approach() {
  return (
    <section className="section approach-section section-bordered" id="approach" aria-labelledby="approach-title">
      <div className="section-inner">
        <p className="eyebrow">Our Approach</p>
        <h2 id="approach-title">Your best knowledge is probably already inside the business.</h2>
        <p className="approach-lede">
                  Most teams do not need more vague AI talk or disconnected AI products built for the general public.
                  They need a practical way to find what has already
                  being said, written, decided, repeated, and learned by your team.
        </p>

        <div className="approach-callout">
          <p className="eyebrow">The common problem</p>
          <p>
            The answers are there, but they are scattered across tools, conversations, files, and people.
            Torchbearers helps turn that raw material into training, standards, workflows, reporting, and
            AI systems your team can actually use.
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

        <p className="approach-close">
          If your team keeps saying, "we know this somewhere," that somewhere can become an agentic platform that is trained on your data.
        </p>
      </div>
    </section>
  );
}

const phases = [
  {
    number: '01',
    title: 'Foundational layer',
    description:
      'We start by asking the right questions and learning the business as a whole: what you need, how work gets done, where knowledge lives now, and what your people already know but have not had a good way to organize.',
  },
  {
    number: '02',
    title: 'Data layer',
    description:
      'Set up the secure data foundation: the systems, documents, notes, records, pipelines, permissions, and access patterns your dashboards, tools, and agents need to work from trusted information.',
  },
  {
    number: '03',
    title: 'Semantic layer',
    description:
      'Define the meanings, relationships, rules, terms, workflows, and business logic that make your information usable. This turns scattered data and knowledge into a shared language your team can trust.',
  },
  {
    number: '04',
    title: 'Agentic layer',
    description:
      'Build governed agents and interfaces on top of that foundation. These can support internal teams, customer-facing experiences, or both, with answers and actions grounded in your actual business context.',
  },
];

function Process() {
  return (
    <section className="section section-alt section-bordered" id="process" aria-labelledby="process-title">
      <div className="section-inner">
        <p className="eyebrow">The process</p>
        <h2 id="process-title">Four layers. Built around how your business actually works.</h2>
        <p className="section-lede">
          We begin by understanding the people, processes, and knowledge you already have. Then we build
          the technical layers that make that knowledge usable.
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
      'Open standards, your warehouse, your repo, your keys. Your semantic layer and agentic workflows should become company infrastructure, not a dependency on us. If you want support, we are happy to provide it, but you own the build and the data.',
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
    bio: 'PhD in biomedical engineering from the University of Arkansas, where he used machine learning to better understand cancer - training patented ML/DL systems that interpreted optical microscopy data to characterize treatment response and cellular metabolism. Drove MLOps forward while delivering fully productionized ML models at the largest retailer in the world. Now leading the charge at a rapid-growth company as they build out their first AI platforms and products.',
  },
  {
    initials: 'JK',
    name: 'Jesse Keyton, PhD',
    role: 'Machine learning & analytics',
    bio: "PhD in mathematics from the University of Arkansas, now working as both an educator and practitioner of mathematics. Spent three years building analytical tools and predictive models for pricing freight spot quotes at a publicly traded logistics company, directly supporting yield and operations leadership. Now an ML engineer at the same company, owning the full lifecycle of AI/ML applications from problem scoping through production and maintenance.",
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
          teams turn what is already theirs into something insightful, robust, and actionable.
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
          and agentic workflows could help employees or customers, and tell you what the process would
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
        <Process />
        <WhyUs />
        <Team />
        <FinalCta />
      </main>
      <Analytics />
      <SpeedInsights />
    </>
  );
}

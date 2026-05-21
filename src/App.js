import React from "react";
import PrivacyPolicy from "./PrivacyPolicy";

export default function App() {
  if (window.location.pathname === "/privacy-policy") {
    return <PrivacyPolicy />;
  }

  const bookingLink = "https://calendly.com/grahme-smarterstudentcoaching/30min";
  const qrCodeSrc = "/qr-code.png";

  const testimonials = [
    {
      quote:
        "Working with Grahme has completely changed our evenings. There’s no more stress or confusion about what needs to get done, and we’re not constantly chasing assignments across different platforms. My son now has a clear plan, stays on top of his work, and gets things done independently. His confidence is up, and we’ve seen a noticeable improvement in both his grades and overall attitude toward school.",
      meta: "Parent of a 9th grader",
    },
    {
      quote:
        "Working with Grahme didn’t just help me get organized. I actually know how to manage my time, keep track of my work, and stay ahead instead of falling behind. I feel more in control, less stressed, and my grades have improved because I’m more consistent.",
      meta: "10th grade student",
    },
    {
      quote:
        "School feels a lot easier now. I know what I need to do and when to do it, so I don’t get overwhelmed anymore. I get my work done faster, have more free time, and I’m doing better in my classes.",
      meta: "9th grade student",
    },
  ];

  const sessions = [
  "Understand the student and map the current reality",
  "Build a system that fits the student",
  "Build habits that actually stick"
];

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }

        body {
          margin: 0;
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background: linear-gradient(180deg, #f8fafc 0%, #ffffff 45%, #f8fafc 100%);
          color: #0f172a;
        }
        
        a { color: inherit; text-decoration: none; }
        
        .container {
          width: min(1120px, calc(100% - 48px));
          margin: 0 auto;
        }
        
        .nav {
          position: sticky;
          top: 0;
          z-index: 10;
          background: rgba(255,255,255,.86);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid #e2e8f0;
        }
        
        .nav-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 0;
          gap: 24px;
        }
        
        .brand {
          font-weight: 900;
          font-size: 1.35rem;
          letter-spacing: -.04em;
        }
        
        .nav-links {
          display: flex;
          gap: 18px;
          align-items: center;
          font-weight: 700;
          color: #334155;
          font-size: .95rem;
        }
        
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 22px;
          border-radius: 999px;
          font-weight: 800;
          background: #0f172a;
          color: white;
          box-shadow: 0 18px 40px rgba(15,23,42,.18);
        }
        
        .btn-light {
          background: white;
          color: #0f172a;
          border: 1px solid #dbe2ea;
          box-shadow: 0 10px 24px rgba(15,23,42,.06);
        }
        
        section { padding: 60px 0; }
        
        .hero {
          padding: 90px 0 40px;
        }
        
        .hero + section {
          padding-top: 20px;
        }
        
        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr .85fr;
          gap: 36px;
          align-items: center;
        }
        
        .eyebrow {
          display: inline-block;
          padding: 8px 14px;
          border-radius: 999px;
          background: #e0f2fe;
          color: #075985;
          font-size: .78rem;
          font-weight: 900;
          letter-spacing: .12em;
          text-transform: uppercase;
        }
        
        h1 {
          font-size: clamp(3rem, 6vw, 5rem);
          line-height: .95;
          letter-spacing: -.06em;
          margin: 18px 0 14px;
        }
        
        h2 {
          font-size: clamp(2.1rem, 4vw, 3.35rem);
          line-height: 1.03;
          letter-spacing: -.05em;
          margin: 10px 0 18px;
        }
        
        h3 {
          font-size: 1.35rem;
          margin: 0 0 12px;
          letter-spacing: -.03em;
        }
        
        .subhead {
          font-size: 1.3rem;
          line-height: 1.6;
          color: #334155;
          max-width: 720px;
        }
        
        .muted {
          color: #475569;
          line-height: 1.8;
          font-size: 1.05rem;
        }
        
        .hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 28px;
        }
        
        .hero-card,
        .card {
          background: rgba(255,255,255,.94);
          border: 1px solid #e2e8f0;
          border-radius: 28px;
          padding: 28px;
          box-shadow: 0 18px 48px rgba(15,23,42,.08);
        }
        
        .hero-card {
          min-height: 430px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background:
            radial-gradient(circle at top left, #dbeafe, transparent 35%),
            radial-gradient(circle at bottom right, #ddd6fe, transparent 32%),
            white;
        }
        
        .stat {
          font-size: 3rem;
          font-weight: 950;
          letter-spacing: -.06em;
          color: #0f172a;
        }
        
        .kicker {
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: .14em;
          font-size: .8rem;
          font-weight: 900;
        }
        
        .grid-2 {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }
        
        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }
        
        .system-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 40px;
        }
        
        .system-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 22px;
          box-shadow: 0 10px 24px rgba(15,23,42,.06);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        
        .system-icon {
          font-size: 1.6rem;
          margin-bottom: 10px;
        }
        
        .system-title {
          font-weight: 900;
          font-size: 1.1rem;
          margin-bottom: 6px;
          color: #0f172a;
        }
        
        .system-card .muted {
          font-size: 0.95rem;
          line-height: 1.6;
        }
        
        .problem-card {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 22px;
          padding: 22px;
          box-shadow: 0 12px 30px rgba(15,23,42,.05);
          color: #1e293b;
          line-height: 1.65;
          font-weight: 650;
        }
        
        .quote {
          margin-top: 12px;
          margin-bottom: 10px;
          padding: 18px 20px;
          border-left: 4px solid #93c5fd;
          background: rgba(255,255,255,.78);
          border-radius: 18px;
          color: #475569;
          font-style: italic;
          line-height: 1.75;
        }
        
        .quote-source {
          display: block;
          margin-top: 8px;
          font-size: .85rem;
          color: #64748b;
          font-style: normal;
          font-weight: 800;
        }
        
        .step-number {
          width: 46px;
          height: 46px;
          border-radius: 999px;
          background: #0f172a;
          color: white;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          margin-bottom: 16px;
        }
        
        ul {
          color: #475569;
          line-height: 1.9;
          padding-left: 20px;
        }
        
        .price {
          font-size: 1.8rem;
          font-weight: 950;
          letter-spacing: -.04em;
          margin: 10px 0;
        }
        
        .soft-box {
          padding: 20px;
          border-radius: 20px;
          background: #eff6ff;
          border: 1px solid #dbeafe;
          margin-top: 20px;
        }
        
        .testimonial {
          position: relative;
          padding-top: 54px;
        }
        
        .quote-mark {
          position: absolute;
          top: 16px;
          left: 24px;
          font-size: 2.2rem;
          font-weight: 950;
          color: #93c5fd;
        }
        
        .testimonial-text {
          color: #1e293b;
          line-height: 1.8;
          font-size: 1.02rem;
        }
        
        .testimonial-meta {
          margin-top: 18px;
          font-weight: 900;
          color: #64748b;
        }
        
        .tracker {
          display: grid;
          gap: 10px;
        }
        
        .tracker-row {
          display: grid;
          grid-template-columns: 1.3fr .9fr .8fr 1.2fr;
          gap: 10px;
        }
        
        .cell {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 12px 14px;
          color: #334155;
          font-size: .95rem;
          display: flex;
          align-items: center;
        }
        
        .head .cell {
          font-weight: 900;
          color: #0f172a;
          background: #f1f5f9;
        }
        
        .status-cell {
          background: #f8fafc;
        }
        
        .status-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 6px 12px;
          border-radius: 999px;
          font-size: .82rem;
          font-weight: 900;
          line-height: 1;
          white-space: nowrap;
        }
        
        .status-progress {
          background: #fff7ed;
          color: #9a3412;
          border: 1px solid #fdba74;
        }
        
        .status-needs-start {
          background: #fef2f2;
          color: #991b1b;
          border: 1px solid #fca5a5;
        }
        
        .status-complete {
          background: #ecfdf5;
          color: #166534;
          border: 1px solid #86efac;
        }
        
        .cta {
          background: linear-gradient(135deg, #0f172a, #1e293b);
          color: white;
          border-radius: 34px;
          padding: 44px;
          display: grid;
          grid-template-columns: 1.1fr .9fr;
          gap: 30px;
          align-items: center;
          box-shadow: 0 30px 80px rgba(15,23,42,.22);
        }
        
        .cta .muted { color: #cbd5e1; }
        
        .cta-card {
          background: white;
          color: #0f172a;
          border-radius: 26px;
          padding: 24px;
          max-width: 420px;
          justify-self: end;
        }
        
        .contact-item {
          padding: 14px 16px;
          border-radius: 16px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          color: #334155;
          font-weight: 750;
          margin-top: 10px;
        }        
        .footer {
          padding: 34px 0 54px;
          color: #64748b;
        }
        
        @media (max-width: 900px) {
          .hero-grid,
          .grid-2,
          .grid-3,
          .cta,
          .system-grid {
            grid-template-columns: 1fr;
          }
        
          .nav-inner {
            flex-direction: row;
            align-items: center;
            padding: 12px 0;
          }
        
          .nav .muted {
            display: none;
          }
        
          .brand {
            font-size: 1.1rem;
          }
        
          .nav-links a:not(.btn) {
            display: none;
          }
        
          .nav-links .btn {
            padding: 10px 14px;
            font-size: .85rem;
          }
        
          section {
            padding: 34px 0;
          }
        
          .hero {
            padding: 44px 0 20px;
          }
        
          .hero-grid {
            gap: 18px;
          }
        
          h1 {
            font-size: 2.5rem;
            line-height: .98;
          }
        
          h2 {
            font-size: 2rem;
            line-height: 1.08;
          }
        
          .subhead {
            font-size: 1.08rem;
            line-height: 1.45;
          }
        
          .muted {
            font-size: 1rem;
            line-height: 1.6;
          }
        
          .hero-card,
          .card,
          .problem-card,
          .system-card,
          .cta-card {
            padding: 20px;
            border-radius: 22px;
          }
        
          .hero-card {
            min-height: auto;
          }
        
          .hero-actions {
            flex-direction: column;
          }
        
          .hero-actions .btn {
            width: 100%;
          }
        
          .quote {
            padding: 16px;
            font-size: .95rem;
            line-height: 1.55;
          }
        
          .problem-card {
            line-height: 1.45;
            font-size: .98rem;
          }
        
          .testimonial-text {
            font-size: .96rem;
            line-height: 1.6;
          }
        
          .tracker {
            display: block;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            padding-bottom: 10px;
          }
          
          .tracker-row {
            display: grid;
            grid-template-columns: 160px 130px 90px 240px;
            gap: 10px;
            min-width: 660px;
          }
        
          .cta {
            padding: 24px;
            border-radius: 26px;
          }
        
          .footer {
            padding-bottom: 90px;
          }
        }
      `}</style>

      <div>
        <header className="nav">
          <div className="container nav-inner">
            <div>
              <div className="brand">Smarter Student Coaching</div>
              <div className="muted" style={{ fontSize: ".95rem", lineHeight: 1.4 }}>
                Helping students become independent, confident learners
              </div>
            </div>

            <nav className="nav-links">
              <a href="#how">How It Works</a>
              <a href="#investment">Investment</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#about">About</a>
              <a
  href={bookingLink}
  target="_blank"
  rel="noreferrer"
  className="btn"
>
  Book a Call
</a>
            </nav>
          </div>
        </header>

        <main>
          <section className="hero">
            <div className="container hero-grid">
              <div>
                <span className="eyebrow">Middle and High School Coaching</span>
                <h1>
                  Coaching students to manage school
                  <br />
                  with confidence and independence.
                </h1>
                <p className="subhead">
                  So they know what to do, when to do it, and how to get started.
                </p>
                <p className="muted">
                  Most students are not struggling because they cannot learn the material.
                  They are struggling because no one has ever shown them how to manage
                  everything that comes with school. I help students build systems for
                  planning, getting started, following through, and becoming more independent.
                </p>

                <div className="hero-actions">
                  <a href="#contact" className="btn">
                    Book a Free Parent Call
                  </a>
                  <a href="#how" className="btn btn-light">
                    See How It Works
                  </a>
                </div>

                <p className="quote">
                “Before working with Grahme, every night felt like a battle over missing assignments, late work, and stress. For the first time in years, school isn’t controlling our evenings. Our son knows what needs to get done, gets started without constant reminders, and feels more confident and independent. The change in our family has been enormous.”
                  <span className="quote-source">Parent of a 9th grader</span>
                </p>
              </div>

              <div className="hero-card">
                <div className="kicker">Why families reach out</div>
                <h3 style={{ fontSize: "2rem" }}>
                  Capable students often need a better system, not more pressure.
                </h3>
                <p className="muted">
                  This is not tutoring. It is coaching for how students manage school:
                  assignments, deadlines, planning, motivation, organization, and follow-through.
                </p>
                <div className="stat">The First 3 Weeks</div>
                <p className="muted">
                  We start with three weekly one on one sessions to build momentum, then continue
                  with monthly coaching and weekly email check-ins.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="container">
              <div className="grid-3">
                <div className="card">
                  <h3>No more nightly battles</h3>
                  <p className="muted">
                    Evenings feel calmer. Students know what to do, and parents don’t have to push every step.
                  </p>
                </div>

                <div className="card">
                  <h3>No more "I'll do it later"</h3>
                  <p className="muted">
                    Students learn how to get started and follow through without constant reminders.
                  </p>
                </div>

                <div className="card">
                  <h3>No more guessing what's missing</h3>
                  <p className="muted">
                    Clear systems for tracking assignments, deadlines, and priorities each week.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container">
              <div className="kicker">Is this your child?</div>
              <h2>Does this sound familiar?</h2>

              <div className="grid-2">
                <div className="problem-card">
                  Your child is capable, but school still feels like a struggle.
                </div>
                <div className="problem-card">
                  Homework gets delayed, rushed, or turns into a nightly battle.
                </div>
                <div className="problem-card">
                  They say, “I don’t know where to start” or “I’ll do it later.”
                </div>
                <div className="problem-card">
                  You find yourself constantly reminding them to stay on track.
                </div>
                <div className="problem-card">
                  They understand the material, but their performance is inconsistent.
                </div>
                <div className="problem-card">
                  Tests and bigger assignments do not reflect what they actually know.
                </div>
              </div>
            </div>
          </section>

          <section id="how">
  <div className="container">
    <div className="kicker">How It Works</div>
    <h2>A clear structure that builds independence over time</h2>
    <p className="muted">
      Coaching is designed as a semester or year-long partnership.
      We start with weekly sessions to build the system, then shift into
      monthly one-on-one meetings with weekly check-ins.
    </p>

    <div className="system-grid">
      <div className="system-card">
        <div className="system-icon">📅</div>
        <div className="system-title">Monthly coaching meetings</div>
        <div className="muted">
          45-minute sessions to build and refine your child’s system.
        </div>
      </div>

      <div className="system-card">
        <div className="system-icon">✅</div>
        <div className="system-title">Weekly check-ins</div>
        <div className="muted">
          Stay on track and prevent things from slipping through the cracks.
        </div>
      </div>

      <div className="system-card">
        <div className="system-icon">📊</div>
        <div className="system-title">Shared tracker</div>
        <div className="muted">
          See what’s coming up, what’s missing, and how things are going at any time.
        </div>
      </div>
    </div>

    <div className="grid-3" style={{ marginTop: "32px" }}>
  {sessions.map((session, index) => {
    const descriptions = [
      "We start by understanding the student’s strengths, challenges, routines, and what school currently feels like for them.",
      
      "Together, we create personalized systems for planning, organization, time management, and tracking schoolwork.",
      
      "Students learn practical strategies for getting started, following through, and becoming more independent over time."
    ];

    return (
      <div className="card" key={session}>
        <div className="step-number">{index + 1}</div>
        <h3>{session}</h3>
        <p className="muted">{descriptions[index]}</p>
      </div>
    );
  })}
</div>

    return (
      <div className="card" key={session}>
        <div className="step-number">{index + 1}</div>
        <h3>{session}</h3>
        <p className="muted">{descriptions[index]}</p>
      </div>
    );
  })}
</div>
    

    <p className="quote">
    “Working with Grahme completely changed how I handle school. I’m not constantly behind or overwhelmed anymore. I know how to manage my time, keep track of assignments, and actually get started without my parents reminding me about everything.”
      <span className="quote-source">10th grade student</span>
    </p>
  </div>
</section>

          <section id="investment">
            <div className="container">
              <div className="kicker">Investment</div>
              <h2>Structured support over time</h2>
              <p className="muted">
                Real change does not happen in a few sessions. Coaching is designed as
                a semester or year-long partnership so students have time to build systems,
                practice them, adjust, and become more independent.
              </p>

              <div className="grid-2">
                <div className="card">
                  <h3>Semester Commitment</h3>
                  <p className="muted">
                    Best for students who need structure through a defined stretch of the school year.
                  </p>
                  <ul>
                    <li>3 weekly kickoff sessions to start strong</li>
                    <li>Monthly one-on-one coaching after the first month</li>
                    <li>Weekly check-ins for accountability</li>
                    <li>Shared tracker for student and parent</li>
                  </ul>
                  <div className="soft-box">
                    <strong>Who this is for</strong>
                    <p className="muted" style={{ marginBottom: 0 }}>
                      A strong fit for students who are capable but overwhelmed,
                      inconsistent, behind on assignments, or struggling to manage a busy semester.
                    </p>
                  </div>
                </div>

                <div className="card">
                  <h3>Year-Long Commitment</h3>
                  <p className="muted">
                    Best for building long-term independence and consistency.
                  </p>
                  <ul>
                    <li>Everything in the semester program</li>
                    <li>Ongoing support across the full school year</li>
                    <li>Help navigating busy seasons, transitions, and setbacks</li>
                    <li>Designed for lasting habit change and student ownership</li>
                  </ul>
                  <div className="soft-box">
                    <strong>Who this is for</strong>
                    <p className="muted" style={{ marginBottom: 0 }}>
                      A strong fit for students who need a steady system across the year,
                      especially during transitions, heavier workloads, or repeated patterns
                      of procrastination and stress.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card" style={{ marginTop: "22px" }}>
                <h3>Monthly Investment</h3>
                <p className="muted">
                  Coaching is offered as a semester or year-long commitment, with monthly
                  pricing based on the level of support your student needs.
                </p>
                <div className="price">Starting at $250/month</div>
                <p className="muted" style={{ marginBottom: 0 }}>
                  Most families invest between $250 and $350 per month. We will talk
                  through the best fit during your parent call.
                </p>
              </div>

              <div className="card" style={{ marginTop: "22px" }}>
                <h3>Coaching vs. Tutoring</h3>
                <div className="grid-2">
                  <div>
                    <strong>Tutoring usually focuses on one subject</strong>
                    <p className="muted">
                      Tutoring can help when a student does not understand the material
                      in math, science, English, or another specific class.
                    </p>
                  </div>
                  <div>
                    <strong>Coaching focuses on how students manage school</strong>
                    <p className="muted">
                      Coaching helps students build systems for planning, starting work,
                      tracking assignments, following through, and becoming more independent.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container">
              <div className="kicker">Shared Tracker</div>
              <h2>A simple tool students and parents can both access</h2>
              <p className="muted">
                Students know what matters most this week, and parents can see progress
                without having to be the constant reminder system.
              </p>

              <div className="card">
                <div className="tracker">
                  <div className="tracker-row head">
                    <div className="cell">Focus</div>
                    <div className="cell">Status</div>
                    <div className="cell">Due</div>
                    <div className="cell">Notes</div>
                  </div>

                  <div className="tracker-row">
                    <div className="cell">Math test prep</div>
                    <div className="cell status-cell">
                      <span className="status-pill status-progress">In progress</span>
                    </div>
                    <div className="cell">Thu</div>
                    <div className="cell">Review guide Tuesday</div>
                  </div>

                  <div className="tracker-row">
                    <div className="cell">English essay outline</div>
                    <div className="cell status-cell">
                      <span className="status-pill status-needs-start">Needs start</span>
                    </div>
                    <div className="cell">Fri</div>
                    <div className="cell">15 minute work block today</div>
                  </div>

                  <div className="tracker-row">
                    <div className="cell">Science lab</div>
                    <div className="cell status-cell">
                      <span className="status-pill status-complete">Submitted</span>
                    </div>
                    <div className="cell">Done</div>
                    <div className="cell">Nice win this week</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="testimonials">
            <div className="container">
              <div className="kicker">Testimonials</div>
              <h2>What families and students notice</h2>

              <div className="grid-3">
                {testimonials.map((item) => (
                  <div className="card testimonial" key={item.meta}>
                    <div className="quote-mark">“</div>
                    <div className="testimonial-text">{item.quote}</div>
                    <div className="testimonial-meta">{item.meta}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="about">
            <div className="container">
              <div className="grid-2">
                <div className="card">
                  <div className="kicker">About Me</div>
                  <h2>Over 20 years guiding students toward greater independence and academic success</h2>
                  <p className="muted">
                    For over 20 years, I’ve worked closely with students as a teacher, advisor,
                    and coach, helping them navigate the academic and personal challenges that
                    come with growing independence.
                  </p>
                  <p className="muted">
                    Over time, one thing has become very clear: most students are not struggling
                    because they can’t learn the material. They’re struggling because no one has
                    shown them how to consistently manage everything that school demands, or
                    supported them long enough to turn those skills into lasting habits.
                  </p>
                  <p className="muted">
                    Real growth doesn’t happen from a single conversation, a planner, or a quick
                    organizational fix. It happens through continued support, accountability,
                    reflection, and follow-through over time.
                  </p>
                  <p className="muted">
                    The biggest changes happen when students build simple, repeatable systems
                    for planning, getting started, staying on track, and gradually taking ownership
                    of their work with someone consistently helping guide the process along the way.
                  </p>
                </div>

                <div className="card">
                  <div className="kicker">What I Focus On</div>
                  <h2>Building independence that actually lasts</h2>
                  <ul>
                    <li>Planning and organizing assignments across multiple classes</li>
                    <li>Getting started without procrastination</li>
                    <li>Following through consistently</li>
                    <li>Preparing for tests and larger assignments</li>
                    <li>Reducing stress for both students and parents</li>
                  </ul>

                  <p className="quote">
                    “School feels a lot easier now. I know what I need to do and when to do it,
                    so I don’t get overwhelmed anymore.”
                    <span className="quote-source">9th grade student</span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="contact">
            <div className="container">
              <div className="cta">
                <div>
                  <div className="kicker" style={{ color: "#93c5fd" }}>
                    Let’s Talk
                  </div>
                  <h2 style={{ color: "white" }}>Start with a short parent call</h2>
                  <p className="muted">
                    If this sounds like a fit for your child, the best next step is a short
                    conversation. We can talk through what is going on, what support might help,
                    and whether coaching makes sense.
                  </p>
                </div>

                <div className="cta-card">
                  <h3>Book a Parent Call</h3>
                  <p
  className="muted"
  style={{ color: "#1e293b", fontWeight: 500 }}
>
  Choose a time that works for you and share the biggest challenge your child is facing with school right now.
</p>
                  <a className="btn" href={bookingLink} target="_blank" rel="noreferrer">
                    Book a Free Parent Call
                  </a>
                
                  <div className="contact-item">Email: grahme@smarterstudentcoaching.com</div>
                  <div className="contact-item">Serving Durham and the Triangle</div>
                  <div className="contact-item">Operated by SmithWorksDurham LLC</div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
  <div
    className="container"
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "12px"
    }}
  >
    <div>© 2026 Smarter Student Coaching • Durham, NC</div>

    <a
      href="/privacy-policy"
      style={{
        color: "#64748b",
        textDecoration: "underline",
        fontWeight: 600
      }}
    >
      Privacy Policy
    </a>
  </div>
</footer>
      </div>
  </>
  );
}

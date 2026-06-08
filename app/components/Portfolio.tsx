'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    name: 'Peak Roofing Co.',
    industry: 'Roofing',
    html: `
<div style="font-family:Arial,sans-serif;background:#0D1B2A;min-height:100%;color:white;">
  <nav style="background:#0D1B2A;padding:16px 32px;display:flex;align-items:center;justify-content:space-between;border-bottom:3px solid #F97316;">
    <div style="font-size:22px;font-weight:900;letter-spacing:2px;color:white;">PEAK ROOFING CO.</div>
    <div style="display:flex;gap:24px;font-size:13px;color:#cbd5e1;">
      <span>Services</span><span>Gallery</span><span>About</span><span>Contact</span>
    </div>
    <div style="background:#F97316;color:white;padding:8px 18px;border-radius:4px;font-size:13px;font-weight:700;">
      (314) 555-0192
    </div>
  </nav>
  <div style="background:linear-gradient(135deg,#0D1B2A 0%,#1a2d42 100%);padding:60px 32px;text-align:center;position:relative;overflow:hidden;">
    <div style="position:absolute;top:0;right:0;width:300px;height:300px;background:#F97316;opacity:0.08;border-radius:50%;transform:translate(100px,-100px);"></div>
    <div style="display:inline-block;background:#F97316;color:white;padding:4px 16px;border-radius:20px;font-size:11px;font-weight:700;letter-spacing:2px;margin-bottom:16px;">LICENSED &amp; INSURED IN MISSOURI</div>
    <h1 style="font-size:48px;font-weight:900;margin:0 0 12px;line-height:1.1;">Expert Roofing You<br/><span style="color:#F97316;">Can Count On</span></h1>
    <p style="color:#94a3b8;font-size:15px;max-width:480px;margin:0 auto 28px;">Storm damage? Leak? New roof? We show up on time and get the job done right the first time.</p>
    <div style="display:flex;gap:12px;justify-content:center;">
      <div style="background:#F97316;color:white;padding:12px 28px;border-radius:4px;font-weight:700;font-size:15px;">Free Inspection</div>
      <div style="border:2px solid #F97316;color:#F97316;padding:12px 28px;border-radius:4px;font-weight:700;font-size:15px;">Our Work</div>
    </div>
    <div style="margin-top:24px;display:flex;gap:32px;justify-content:center;font-size:13px;color:#94a3b8;">
      <span>✓ 20+ Years Experience</span>
      <span>✓ Lifetime Warranty</span>
      <span>✓ Free Estimates</span>
    </div>
  </div>
  <div style="padding:40px 32px;background:#112031;">
    <h2 style="text-align:center;font-size:28px;font-weight:800;margin-bottom:28px;color:white;">Our Services</h2>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;">
      ${['Roof Replacement','Storm Damage','Gutters & Fascia'].map(s=>`
      <div style="background:#0D1B2A;border:1px solid #1e3a52;border-radius:8px;padding:20px;text-align:center;">
        <div style="font-size:28px;margin-bottom:8px;">🏠</div>
        <div style="font-weight:700;font-size:14px;color:white;">${s}</div>
        <div style="font-size:12px;color:#64748b;margin-top:4px;">Professional service</div>
      </div>`).join('')}
    </div>
  </div>
  <div style="background:#F97316;padding:24px 32px;text-align:center;">
    <div style="font-size:22px;font-weight:900;color:white;">📞 (314) 555-0192</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.8);margin-top:4px;">Available 7 days a week · Emergency service available</div>
  </div>
</div>`,
  },
  {
    name: 'Lakeview Eats',
    industry: 'Restaurant',
    html: `
<div style="font-family:Georgia,serif;background:#fdf6ec;min-height:100%;color:#2d1b0e;">
  <nav style="background:#7B1414;padding:16px 32px;display:flex;align-items:center;justify-content:space-between;">
    <div style="font-size:24px;font-weight:900;letter-spacing:1px;color:#fdf6ec;font-style:italic;">Lakeview Eats</div>
    <div style="display:flex;gap:24px;font-size:13px;color:rgba(253,246,236,0.8);">
      <span>Menu</span><span>Hours</span><span>Location</span><span>Reserve</span>
    </div>
  </nav>
  <div style="background:linear-gradient(180deg,#7B1414 0%,#5a0f0f 100%);padding:60px 32px;text-align:center;position:relative;overflow:hidden;">
    <div style="position:absolute;inset:0;background:url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><circle cx=%2250%22 cy=%2250%22 r=%2240%22 fill=%22none%22 stroke=%22rgba(255,255,255,0.05)%22 stroke-width=%221%22/></svg>') repeat;"></div>
    <div style="font-size:13px;color:#f9a825;letter-spacing:4px;font-weight:700;margin-bottom:12px;">EST. 2018 · CASUAL FINE DINING</div>
    <h1 style="font-size:52px;font-weight:900;color:#fdf6ec;margin:0 0 16px;line-height:1.1;font-style:italic;">Fresh Food.<br/>Real Flavors.</h1>
    <p style="color:rgba(253,246,236,0.75);font-size:15px;max-width:400px;margin:0 auto 28px;">Farm-to-table cuisine in the heart of Lakeview. Local ingredients, bold recipes.</p>
    <div style="background:#f9a825;color:#2d1b0e;display:inline-block;padding:12px 32px;border-radius:4px;font-weight:800;font-size:15px;">Reserve a Table</div>
  </div>
  <div style="padding:40px 32px;background:#fdf6ec;">
    <h2 style="text-align:center;font-size:28px;font-weight:800;margin-bottom:8px;color:#7B1414;font-style:italic;">Our Menu</h2>
    <p style="text-align:center;color:#8b6349;margin-bottom:24px;font-size:13px;">Seasonal selections · Updated weekly</p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
      ${[['Grilled Salmon','$26','Cedar plank, lemon herb butter'],['Ribeye 12oz','$42','House dry rub, roasted garlic'],['Mushroom Risotto','$22','Truffle oil, aged parmesan'],['Duck Confit','$34','Cherry reduction, root veggies']].map(([name,price,desc])=>`
      <div style="border:1px solid #e8d5b7;border-radius:8px;padding:16px;background:white;">
        <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
          <div style="font-weight:700;font-size:14px;">${name}</div>
          <div style="color:#7B1414;font-weight:800;font-size:14px;">${price}</div>
        </div>
        <div style="font-size:12px;color:#8b6349;">${desc}</div>
      </div>`).join('')}
    </div>
  </div>
  <div style="background:#2d1b0e;padding:24px 32px;display:grid;grid-template-columns:1fr 1fr;gap:16px;">
    <div style="text-align:center;border-right:1px solid rgba(255,255,255,0.1);padding-right:16px;">
      <div style="font-size:13px;color:#f9a825;font-weight:700;letter-spacing:2px;margin-bottom:8px;">HOURS</div>
      <div style="font-size:12px;color:rgba(253,246,236,0.7);line-height:1.8;">Mon–Thu: 11am–9pm<br/>Fri–Sat: 11am–11pm<br/>Sunday: Closed</div>
    </div>
    <div style="text-align:center;">
      <div style="font-size:13px;color:#f9a825;font-weight:700;letter-spacing:2px;margin-bottom:8px;">LOCATION</div>
      <div style="font-size:12px;color:rgba(253,246,236,0.7);line-height:1.8;">482 Lakeview Blvd<br/>St. Louis, MO 63110<br/>(314) 555-0471</div>
    </div>
  </div>
</div>`,
  },
  {
    name: 'Clarity Med Spa',
    industry: 'Medical Spa',
    html: `
<div style="font-family:'Trebuchet MS',sans-serif;background:#f8faf8;min-height:100%;color:#2c3e2d;">
  <nav style="background:white;padding:16px 32px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #e8ede8;">
    <div style="font-size:22px;font-weight:300;letter-spacing:4px;color:#4a7c59;text-transform:uppercase;">Clarity</div>
    <div style="display:flex;gap:24px;font-size:12px;color:#6b8c73;letter-spacing:2px;text-transform:uppercase;">
      <span>Services</span><span>About</span><span>Results</span><span>Book</span>
    </div>
  </nav>
  <div style="background:linear-gradient(160deg,#e8f0e9 0%,#f0f7f0 50%,#fafafa 100%);padding:60px 32px;text-align:center;">
    <div style="width:60px;height:2px;background:#4a7c59;margin:0 auto 20px;"></div>
    <div style="font-size:11px;letter-spacing:6px;color:#4a7c59;font-weight:600;text-transform:uppercase;margin-bottom:16px;">Med Spa &amp; Wellness</div>
    <h1 style="font-size:42px;font-weight:300;color:#2c3e2d;margin:0 0 16px;line-height:1.3;letter-spacing:1px;">Reveal Your<br/><em>Best Self</em></h1>
    <p style="color:#6b8c73;font-size:14px;max-width:380px;margin:0 auto 32px;line-height:1.8;">Luxury aesthetic treatments in a calm, clinical environment. Board-certified professionals. Natural results.</p>
    <div style="display:flex;gap:12px;justify-content:center;">
      <div style="background:#4a7c59;color:white;padding:12px 28px;border-radius:2px;font-size:13px;letter-spacing:2px;text-transform:uppercase;">Book Consultation</div>
      <div style="border:1px solid #4a7c59;color:#4a7c59;padding:12px 28px;border-radius:2px;font-size:13px;letter-spacing:2px;text-transform:uppercase;">Our Services</div>
    </div>
    <div style="width:60px;height:2px;background:#4a7c59;margin:32px auto 0;"></div>
  </div>
  <div style="padding:40px 32px;background:white;">
    <h2 style="text-align:center;font-size:22px;font-weight:300;letter-spacing:3px;text-transform:uppercase;color:#2c3e2d;margin-bottom:28px;">Signature Treatments</h2>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
      ${[['Botox & Fillers','From $299','Natural volume restoration'],['Laser Skin Resurfacing','From $450','Texture & tone improvement'],['HydraFacial','From $175','Deep cleanse & hydration'],['Body Contouring','From $599','Non-surgical fat reduction']].map(([name,price,desc])=>`
      <div style="border:1px solid #e8ede8;padding:20px;border-radius:4px;background:#f8faf8;">
        <div style="font-size:13px;font-weight:600;letter-spacing:1px;color:#2c3e2d;margin-bottom:4px;">${name}</div>
        <div style="font-size:16px;color:#4a7c59;font-weight:600;margin-bottom:4px;">${price}</div>
        <div style="font-size:11px;color:#6b8c73;letter-spacing:1px;">${desc}</div>
      </div>`).join('')}
    </div>
  </div>
  <div style="background:#4a7c59;padding:24px 32px;text-align:center;">
    <div style="font-size:18px;font-weight:300;color:white;letter-spacing:2px;">Ready to Begin Your Journey?</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.8);margin-top:6px;">(314) 555-0833 · clarity@medspa.com</div>
    <div style="margin-top:16px;display:inline-block;border:1px solid rgba(255,255,255,0.5);color:white;padding:10px 24px;border-radius:2px;font-size:12px;letter-spacing:2px;">SCHEDULE NOW</div>
  </div>
</div>`,
  },
  {
    name: 'Titan Fitness STL',
    industry: 'Gym & Fitness',
    html: `
<div style="font-family:Arial,sans-serif;background:#0a0a0a;min-height:100%;color:white;">
  <nav style="background:#111;padding:16px 32px;display:flex;align-items:center;justify-content:space-between;border-bottom:3px solid #FFD600;">
    <div style="font-size:22px;font-weight:900;letter-spacing:3px;color:white;">TITAN<span style="color:#FFD600;"> FITNESS</span></div>
    <div style="display:flex;gap:20px;font-size:12px;color:#aaa;letter-spacing:1px;text-transform:uppercase;">
      <span>Classes</span><span>Pricing</span><span>Trainers</span><span>Join</span>
    </div>
  </nav>
  <div style="background:linear-gradient(135deg,#111 0%,#1a1a1a 100%);padding:56px 32px;text-align:center;position:relative;overflow:hidden;">
    <div style="position:absolute;top:-40px;right:-40px;width:200px;height:200px;background:#FFD600;opacity:0.05;border-radius:50%;"></div>
    <div style="position:absolute;bottom:-20px;left:-20px;width:150px;height:150px;background:#FFD600;opacity:0.04;border-radius:50%;"></div>
    <div style="display:inline-block;background:#FFD600;color:#0a0a0a;padding:4px 16px;font-size:11px;font-weight:900;letter-spacing:3px;margin-bottom:16px;">STL'S #1 GYM</div>
    <h1 style="font-size:52px;font-weight:900;margin:0 0 12px;line-height:1;text-transform:uppercase;letter-spacing:2px;">No Excuses.<br/><span style="color:#FFD600;">Just Results.</span></h1>
    <p style="color:#888;font-size:14px;max-width:400px;margin:0 auto 28px;">Elite training. Expert coaches. A community that pushes you further than you thought possible.</p>
    <div style="display:flex;gap:12px;justify-content:center;">
      <div style="background:#FFD600;color:#0a0a0a;padding:12px 28px;border-radius:3px;font-weight:900;font-size:14px;letter-spacing:1px;text-transform:uppercase;">Start Free Trial</div>
      <div style="border:2px solid #FFD600;color:#FFD600;padding:12px 28px;border-radius:3px;font-weight:900;font-size:14px;letter-spacing:1px;text-transform:uppercase;">View Classes</div>
    </div>
  </div>
  <div style="padding:32px;background:#111;">
    <h2 style="text-align:center;font-size:22px;font-weight:900;letter-spacing:3px;text-transform:uppercase;margin-bottom:20px;color:#FFD600;">Class Schedule</h2>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
      ${[['6:00 AM','HIIT Blast','Coach Ray'],['9:00 AM','Strength & Power','Coach Dana'],['12:00 PM','Kickboxing','Coach Alex'],['5:30 PM','CrossFit WOD','Coach Mike'],['7:00 PM','Yoga Flow','Coach Sara'],['8:00 PM','Open Gym','Self-directed']].map(([time,cls,coach])=>`
      <div style="background:#1a1a1a;border:1px solid #222;border-radius:6px;padding:12px;border-top:2px solid #FFD600;">
        <div style="font-size:12px;color:#FFD600;font-weight:700;">${time}</div>
        <div style="font-size:13px;font-weight:700;margin:4px 0;">${cls}</div>
        <div style="font-size:11px;color:#666;">${coach}</div>
      </div>`).join('')}
    </div>
  </div>
  <div style="padding:24px 32px;background:#1a1a1a;display:grid;grid-template-columns:repeat(3,1fr);gap:16px;text-align:center;">
    ${[['$49/mo','Basic Access','Open gym + classes'],['$79/mo','Elite','+ Personal training 2x/mo'],['$129/mo','Premium','Unlimited everything']].map(([price,plan,desc])=>`
    <div style="background:#111;border:1px solid #333;border-radius:8px;padding:16px;">
      <div style="font-size:22px;font-weight:900;color:#FFD600;">${price}</div>
      <div style="font-size:13px;font-weight:700;margin:4px 0;">${plan}</div>
      <div style="font-size:11px;color:#666;">${desc}</div>
    </div>`).join('')}
  </div>
</div>`,
  },
  {
    name: 'Summit Real Estate',
    industry: 'Real Estate',
    html: `
<div style="font-family:Georgia,serif;background:#f5f3ef;min-height:100%;color:#1a1a1a;">
  <nav style="background:#1a1a1a;padding:16px 32px;display:flex;align-items:center;justify-content:space-between;">
    <div style="font-size:20px;font-weight:700;letter-spacing:2px;color:#D4AF37;text-transform:uppercase;">Summit <span style="font-weight:300;color:white;">Real Estate</span></div>
    <div style="display:flex;gap:20px;font-size:12px;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase;">
      <span>Buy</span><span>Sell</span><span>Agents</span><span>Contact</span>
    </div>
  </nav>
  <div style="background:linear-gradient(160deg,#1a1a1a 0%,#2d2d2d 100%);padding:52px 32px;text-align:center;">
    <div style="font-size:11px;letter-spacing:5px;color:#D4AF37;font-weight:600;text-transform:uppercase;margin-bottom:14px;">Premier Real Estate Group · St. Louis</div>
    <h1 style="font-size:44px;font-weight:700;color:white;margin:0 0 16px;line-height:1.2;">Find Your Place<br/><span style="color:#D4AF37;">to Call Home</span></h1>
    <p style="color:rgba(255,255,255,0.6);font-size:14px;max-width:380px;margin:0 auto 28px;line-height:1.7;">Trusted advisors in Missouri real estate. From first home to investment portfolio.</p>
    <div style="display:flex;gap:0;justify-content:center;max-width:400px;margin:0 auto;">
      <input style="flex:1;padding:12px 16px;border:none;border-radius:4px 0 0 4px;font-size:13px;background:white;" placeholder="Search by city, zip, or address"/>
      <div style="background:#D4AF37;color:#1a1a1a;padding:12px 20px;border-radius:0 4px 4px 0;font-weight:800;font-size:13px;cursor:pointer;">Search</div>
    </div>
  </div>
  <div style="padding:32px;background:#f5f3ef;">
    <h2 style="font-size:20px;font-weight:700;letter-spacing:1px;color:#1a1a1a;margin-bottom:20px;">Featured Listings</h2>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
      ${[['$385,000','4 bd · 2.5 ba · 2,200 sqft','14 Oak Ridge Dr','Webster Groves, MO'],['$549,000','5 bd · 3 ba · 3,100 sqft','8 Maple Creek Ln','Ladue, MO'],['$275,000','3 bd · 2 ba · 1,650 sqft','221 Elm St','Kirkwood, MO'],['$720,000','5 bd · 4 ba · 4,200 sqft','55 Summit View Dr','Chesterfield, MO']].map(([price,details,addr,city])=>`
      <div style="background:white;border-radius:8px;overflow:hidden;border:1px solid #e5e0d8;">
        <div style="background:linear-gradient(135deg,#2d2d2d,#1a1a1a);height:80px;display:flex;align-items:center;justify-content:center;">
          <span style="color:#D4AF37;font-size:24px;">🏠</span>
        </div>
        <div style="padding:12px;">
          <div style="font-size:16px;font-weight:800;color:#D4AF37;">${price}</div>
          <div style="font-size:11px;color:#666;margin:2px 0;">${details}</div>
          <div style="font-size:12px;font-weight:600;margin-top:4px;">${addr}</div>
          <div style="font-size:11px;color:#888;">${city}</div>
        </div>
      </div>`).join('')}
    </div>
  </div>
  <div style="background:#1a1a1a;padding:20px 32px;display:flex;align-items:center;justify-content:space-between;">
    <div>
      <div style="font-size:13px;font-weight:700;color:white;">James Sullivan, REALTOR®</div>
      <div style="font-size:11px;color:#888;margin-top:2px;">(314) 555-0244 · james@summitrealty.com</div>
    </div>
    <div style="background:#D4AF37;color:#1a1a1a;padding:8px 20px;border-radius:3px;font-size:12px;font-weight:800;">Contact Agent</div>
  </div>
</div>`,
  },
]

function BrowserFrame({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Browser chrome */}
      <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center gap-3">
        {/* Traffic lights */}
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        {/* URL bar */}
        <div className="flex-1 bg-white rounded border border-gray-200 px-3 py-1 text-xs text-gray-400 font-mono">
          {project.name.toLowerCase().replace(/\s+/g, '').replace(/[^a-z]/g, '')}.com
        </div>
      </div>

      {/* Scaled website preview */}
      <div className="relative overflow-hidden" style={{ height: '280px' }}>
        <div
          style={{
            width: '800px',
            transform: 'scale(0.35)',
            transformOrigin: 'top left',
            height: '800px',
            overflowY: 'hidden',
          }}
          dangerouslySetInnerHTML={{ __html: project.html }}
        />
      </div>

      {/* Card footer */}
      <div className="px-4 py-3 border-t border-gray-100 flex items-center justify-between">
        <div>
          <div className="font-dm font-semibold text-sm text-apex-black">{project.name}</div>
          <div className="text-xs text-gray-400 mt-0.5">{project.industry}</div>
        </div>
        <div className="px-2.5 py-1 bg-apex-red/10 text-apex-red text-xs font-dm font-semibold rounded">
          {project.industry}
        </div>
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="work" className="py-24 bg-apex-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-dm text-apex-red font-semibold text-sm uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="font-bebas text-5xl md:text-6xl text-apex-black mt-2">
            Recent Projects
          </h2>
          <p className="font-dm text-gray-500 mt-4 max-w-lg mx-auto">
            Every site is custom-designed for the business — no templates, no shortcuts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <BrowserFrame key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

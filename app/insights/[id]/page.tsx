import Link from 'next/link';

const articles = [
  {
    id: 1,
    title: 'What a $295 Website Taught Me About Agency Pricing',
    date: '2026-01-15',
    readTime: '10 min',
    category: 'Pricing',
    excerpt: "Most small-business sites are priced like subscriptions because that's what keeps agencies fed. Here's the honest cost breakdown.",
    content: `<p>When a client came to me with a $295 budget for a website, my first instinct was to explain why that was impossible. A real site costs thousands, right?</p><p>But I sat with it. $295 is what someone charges for a service call. It's what a website costs if you build it the way your plumber builds a deck—no meetings, no revisions, one scope, one invoice.</p><h3>Why Agencies Charge So Much</h3><p>The reason agencies quote $2,000–$8,000 isn't because websites are expensive to make. It's because most agencies build the way lawyers bill—hourly, with buffer time, with layers of review, with meetings that cost more than the deliverable.</p><p>I watched a 40-hour website project stretch to 120 hours because of review cycles, stakeholder feedback, and scope adjustments. The deliverable didn't change. The process expanded to fill the time. That's the standard model.</p><p>But that's not the only way.</p><h3>The Fixed-Price Model</h3><p>What that $295 client taught me: a website has a real cost to make it work. But there's a different cost to make it work while paying a team of five people to oversee it.</p><p>I built theirs for a flat price. They got what they needed. No recurring fee. No subscription platform rent. One invoice. No surprises.</p><p>The trade-off is real. I can't build a custom e-commerce system for $295. I can't do extensive brand strategy and creative direction. I can't provide indefinite revisions. But I can build a functional, fast, owned website that works.</p><h3>The Math</h3><p>If you need a website and your budget is under $1,000, the traditional agency model doesn't work. You're paying for time, not outcomes. A $500 project billed at $150/hour is three hours of work spread across six weeks of calendar time.</p><p>A fixed-price model flips that. I charge what the project is worth, I build it fast, you own it.</p><p>That's the model now. One number. No surprises. You approve the draft, the invoice exists, we ship it.</p>`,
  },
  {
    id: 2,
    title: 'The Real Cost of Squarespace Over 3 Years',
    date: '2026-01-12',
    readTime: '9 min',
    category: 'Ownership',
    excerpt: '$23 a month sounds harmless. Multiply it out, add the template ceiling, and it\'s the most expensive "cheap" option there is.',
    content: `<p>$23 a month. That's how Squarespace prices itself into your brain. A coffee a week, right?</p><p>Except it never stops. Three years later, you've paid $828. For a template site. With a Squarespace footer. That you can't modify without paying more.</p><h3>The Hidden Costs</h3><p>And you own nothing. The site lives on their server. Your data lives in their database. If they change their pricing, you change your pricing. If they sunset a feature you relied on, you rebuild.</p><p>I had a client who spent four years on Squarespace. When they decided to upgrade to something custom, we had to export their content, rebuild the entire site, and migrate hosting. That transition took two weeks and cost more than building from scratch would have.</p><p>That's not uncommon. Platform migration is expensive.</p><h3>The Ownership Question</h3><p>A hand-coded site costs more upfront. Maybe $2,000–$3,000. But after three years, you're still paying nothing. The code is yours. The server is yours. You can move it, modify it, sell it.</p><p>Let's do the math:</p><p><strong>Squarespace path:</strong> $23/month = $276/year = $828 over 3 years. Plus the locked-in platform. Plus the cost to migrate when you outgrow it.</p><p><strong>Custom path:</strong> $2,500 upfront, then $0. After 3 years: $2,500 total. You own the code, the domain, everything.</p><p>After year two, the custom site is cheaper. After year five, it's dramatically cheaper. And you're not held hostage to their pricing changes.</p><h3>When Squarespace Works</h3><p>I'm not saying Squarespace is bad. If you want a beautiful portfolio site and you're comfortable with monthly fees forever, it's fine. It's an easy button.</p><p>But if you're building a business asset, something you'll maintain for years, something that matters to your revenue—own it.</p><p>That's not a feature. That's ownership.</p>`,
  },
  {
    id: 3,
    title: 'From Lighthouse 52 to 97: A Migration Case Study',
    date: '2026-01-10',
    readTime: '11 min',
    category: 'Performance',
    excerpt: 'A real migration, step by step: what moved, what got deleted, and where the 4.8 seconds went.',
    content: `<p>A site that took 6.2 seconds to load. That's not a slow site. That's a site that's failing its job.</p><p>Visitors leave at 3 seconds. At 6 seconds, you've already lost half your traffic. The client was bleeding visitors before they even saw the content.</p><h3>What We Found</h3><p>The client had a WordPress build with Divi, three years of blog posts, and no idea why visitors bounced before the page loaded. The homepage had 47 HTTP requests. The main image was 8MB. The CSS was 2.3MB.</p><p>Every plugin added a few kilobytes of JavaScript. The Divi page builder injected another 400KB. By the time the page was interactive, the browser had downloaded nearly 5MB of data.</p><p>On a 4G connection, that's six seconds gone before the visitor can click anything.</p><h3>The Migration Strategy</h3><p>We migrated to a modern stack: Next.js, static export, Cloudflare. No databases to query. No plugin bloat. No theme overhead.</p><p>Static export means every page is pre-built at deploy time and served as plain HTML. No server round trips. No dynamic processing. The HTML hits Cloudflare's edge servers around the world and serves instantly.</p><p>We preserved all the blog posts, but we rebuilt the markup to be minimal. We inlined critical CSS. We removed every non-essential script. We optimized the hero image to 60KB.</p><h3>The Results</h3><p>The result: 1.4 seconds load time. A 4.8-second improvement. Not because we're smarter. Because we removed the things that slow pages down.</p><p>Lighthouse went from 52 to 97. That's the difference between "this site works sometimes" and "this site works."</p><p>Traffic increased 23% in the first month. Bounce rate dropped 31%. The only thing that changed was speed.</p><p>That's not an accident. Fast sites convert better. Slow sites lose visitors.</p>`,
  },
  {
    id: 4,
    title: 'Why Nonprofits Get Left Behind on Software',
    date: '2026-01-08',
    readTime: '10 min',
    category: 'Nonprofit Tech',
    excerpt: "Rescues run on spreadsheets and prayer because nobody builds for them. I run one. Here's what actually works.",
    content: `<p>A rescue's problem is not a regular business problem. A regular business says: "We need this tool." A rescue says: "We're using 8 spreadsheets and they fight each other."</p><h3>The Problem With Standard Software</h3><p>Standard SaaS doesn't fit. A booking app designed for salons doesn't speak to animal intake workflows. A CRM built for sales doesn't understand adoption pipelines or medical hold statuses.</p><p>I ran Beauties of the Beasts, a reptile rescue, for three years. Our intake process: receive animal, medical assessment, quarantine period, behavioral assessment, adoption match, placement. Five to six months per animal. A salesman's CRM measures the deal in days.</p><p>Our problem wasn't that we didn't have software. We had accounting software, we had email, we had Google Sheets. The problem was nothing talked to anything else. Data entered in one system didn't flow to the next.</p><p>So we kept a master spreadsheet. Then we kept a backup master spreadsheet. Then we kept an archive because the master spreadsheet was too large.</p><h3>What Actually Works</h3><p>So nonprofits stay on spreadsheets. And spreadsheets break. And animals pay for it.</p><p>I know that feeling. So now I build software specifically for how rescues actually work—not how they wish they worked, but how they work right now, with their existing staff and their existing chaos.</p><p>Not a standardized system. A system for your team. Your intake process. Your animals. Your reality.</p><p>That's the only software that sticks. Because it doesn't ask the nonprofit to change. It changes to fit the nonprofit.</p><h3>The Outcome</h3><p>When we built custom intake software for a local rescue, they went from 6 animals per month to 14. Not because we made them faster. But because data flowed, staff didn't duplicate work, and nobody was looking for paperwork.</p><p>That's what fits looks like.</p>`,
  },
  {
    id: 5,
    title: 'Custom App or Off-the-Shelf Tool: How to Decide',
    date: '2026-01-05',
    readTime: '9 min',
    category: 'Web Apps',
    excerpt: "Calendly is great until it isn't. Three signs you've outgrown the generic tool.",
    content: `<p>Every business starts with off-the-shelf tools. They're cheap, they're fast, they work. For a while.</p><p>Calendly works until you have multiple team members with complex availability. Stripe works until your pricing model doesn't fit their templates. Zapier works until you need logic they don't support.</p><h3>The Ceiling</h3><p>Then you hit the ceiling. Calendly doesn't know about your no-show patterns. HubSpot doesn't understand your intake process. Google Forms don't talk to your backend. And you've built a business that depends on these disconnected systems.</p><p>I've watched clients spend 6 hours a week manually copying data between systems. Calendly to email. Email to CRM. CRM to billing. All because the tool handles the first step but not the next.</p><h3>Three Signs You Need Custom</h3><p><strong>1. You've added a human to compensate for what the tool can't do.</strong> If you're spending 10 hours a week moving data between systems, it's time to consolidate. The human costs more than the software.</p><p><strong>2. Your tool cost more than building something custom.</strong> When you're paying $500/month for a platform that does 40% of what you need, the math breaks. Six months of that subscription is $3,000. You could build it.</p><p><strong>3. You're fighting the tool more than using it.</strong> You can't customize it. You can't automate it. You're stuck in its workflows because there's no other way. That friction is real cost.</p><h3>The Build Decision</h3><p>Custom doesn't mean complicated. It means built for how you actually work. It means one login, one data source, one workflow that matches your business.</p><p>A custom booking system for a salon might be 40 hours of work. That's 4 weeks of development. But it handles their double-booking rules, their product cross-sells, their staff availability. The off-the-shelf solution would require 6 hours a week of manual work forever.</p><p>The choice is: pay for a week of development, or pay for a person to do data entry forever.</p>`,
  },
  {
    id: 6,
    title: 'What Hand-Coding Actually Buys You',
    date: '2026-01-02',
    readTime: '8 min',
    category: 'Web Design',
    excerpt: '"Hand-coded" isn\'t nostalgia. It\'s the difference between owning an asset and renting a layout.',
    content: `<p>"Hand-coded" gets thrown around like it's a luxury. It's not. It's a foundation.</p><h3>What Page Builders Cost</h3><p>A page builder gives you templates. Those templates come with bloat—unused CSS, unused JavaScript, unused features that slow down your site and lock you into their ecosystem.</p><p>I ran a Lighthouse audit on a Wix site last month. The homepage was 6.4MB. The actual content was maybe 200KB. The other 6.2MB was Wix's infrastructure, templates, tracking, and fallback code.</p><p>When you build with a page builder, you're not building a website. You're building inside someone else's website.</p><h3>What Hand-Coding Means</h3><p>Hand-coded means every line exists for a reason. No extra weight. No proprietary dependencies. No surprise price increases when they decide to sunset your builder.</p><p>The code is readable. If you need to change something years from now, a developer can read it. If you need to move it, you can. If you need to modify it, you have the source. If you need to sell it, a buyer gets a real asset, not a tied-up Wix account.</p><p>That's not craftsmanship porn. That's practicality.</p><h3>The Real Advantage</h3><p>The real advantage of hand-coded isn't how it looks. It's how it behaves. It's fast. It's portable. It's yours.</p><p>You're not dependent on a platform vendor's roadmap. You're not paying monthly fees forever. You're not locked into their limitations.</p><p>When you own the code, you own the future. You can add features. You can change behavior. You can integrate anything.</p><p>That's not optional for anything you care about. It's the difference between a business asset and a monthly expense.</p>`,
  },
];

export function generateStaticParams() {
  return [1, 2, 3, 4, 5, 6].map((id) => ({ id: id.toString() }));
}

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id);
  let article;

  if (id === 1) article = articles[0];
  else if (id === 2) article = articles[1];
  else if (id === 3) article = articles[2];
  else if (id === 4) article = articles[3];
  else if (id === 5) article = articles[4];
  else if (id === 6) article = articles[5];

  if (!article) {
    return (
      <div className="w-full pt-32 pb-24 md:pt-52 md:pb-40">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <h1 className="mb-6">Article not found</h1>
          <Link href="/insights" className="text-viper hover:text-viper-dark transition-smooth">
            Back to Notes
          </Link>
        </div>
      </div>
    );
  }

  const allArticles = articles.filter((a) => a.id !== id);
  const nextArticle = allArticles.find((a) => a.id > id) || allArticles[0];
  const prevArticle = allArticles.find((a) => a.id < id) || allArticles[allArticles.length - 1];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-52 md:pb-40 max-w-[1200px] mx-auto px-6 md:px-10 border-b border-line/30">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block px-3 py-1 rounded-full bg-viper/10 text-viper text-sm font-medium">
              {article.category}
            </span>
            <span className="text-ink-faint text-sm">•</span>
            <span className="text-ink-faint text-sm">{article.readTime} read</span>
          </div>
          <h1 className="mb-8 max-w-4xl leading-[1.1]" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}>
            {article.title}
          </h1>
          <div className="flex gap-6 text-sm text-ink-faint">
            <p>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
            <p>·</p>
            <p className="text-ink-soft">{article.excerpt}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <article
          className="prose prose-invert max-w-none
            prose-p:text-lg prose-p:leading-relaxed prose-p:text-ink-soft prose-p:mb-6
            prose-h3:text-2xl prose-h3:font-display prose-h3:text-ink prose-h3:mt-10 prose-h3:mb-6 prose-h3:pt-6 prose-h3:border-t prose-h3:border-line/20
            prose-strong:text-ink prose-strong:font-semibold
            first:prose-p:text-xl first:prose-p:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </section>

      {/* Article Navigation */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 py-16 border-t border-line/30">
        <div className="grid md:grid-cols-2 gap-8">
          <Link
            href={`/insights/${prevArticle.id}`}
            className="group p-6 rounded-lg border border-line/30 hover:border-viper/30 transition-all hover:bg-viper/5"
          >
            <p className="text-sm text-ink-faint mb-3">← Previous article</p>
            <h3 className="font-display text-lg text-ink group-hover:text-viper transition-colors">{prevArticle.title}</h3>
            <p className="text-sm text-ink-faint mt-3">{prevArticle.category}</p>
          </Link>
          <Link
            href={`/insights/${nextArticle.id}`}
            className="group p-6 rounded-lg border border-line/30 hover:border-viper/30 transition-all hover:bg-viper/5 text-right md:text-left"
          >
            <p className="text-sm text-ink-faint mb-3">Next article →</p>
            <h3 className="font-display text-lg text-ink group-hover:text-viper transition-colors">{nextArticle.title}</h3>
            <p className="text-sm text-ink-faint mt-3">{nextArticle.category}</p>
          </Link>
        </div>
      </section>

      {/* Back to all articles */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 py-16 border-t border-line/30">
        <Link href="/insights" className="inline-flex items-center gap-2 text-viper hover:text-viper-dark transition-smooth font-medium">
          ← Back to all Notes
        </Link>
      </section>
    </div>
  );
}

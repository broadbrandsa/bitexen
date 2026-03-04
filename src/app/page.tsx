import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const pillars = [
  {
    title: "Digital-First",
    description:
      "Every touchpoint starts and ends in digital. We build natively for screens, not adapt traditional campaigns to them.",
  },
  {
    title: "Performance",
    description:
      "Measurable outcomes over vanity metrics. We architect campaigns around conversion, retention, and CPA.",
  },
  {
    title: "Creative Excellence",
    description:
      "Bold, distinctive creative that cuts through. In a saturated crypto market, differentiation is survival.",
  },
  {
    title: "Deep AI Integration",
    description:
      "AI embedded across our workflow — audience modelling, content generation, real-time optimisation, predictive analytics.",
  },
];

const budgetCards = [
  {
    label: "Working Media",
    amount: "R4,514,430",
    share: "75% of total",
    description:
      "DStv, Mediamark Audio & Digital, OnsideZA, SABC+, Polygon OOH, Paid Social, Programmatic, Google/YouTube, Influencer, Content/SEO, App Install.",
  },
  {
    label: "Production",
    amount: "R1,510,000",
    share: "25% of total",
    description:
      "Hero film 'The Promotion', fan card generator, AR experience, OOH creative, radio production, digital asset suite.",
  },
  {
    label: "Total Investment",
    amount: "R6,024,430",
    share: "12-week campaign",
    description:
      "Full-funnel campaign targeting 80–100M impressions, 50–80k app downloads, and 8–15k first trades.",
  },
];

const team = [
  { name: "Vincent Maher", role: "CEO" },
  { name: "Mike Elmira", role: "Head of Agency" },
  { name: "Shakier Groenewald", role: "Head of Sales & Client Ops, Cape Town" },
  { name: "Sabata Mofokeng", role: "Technology" },
  { name: "Nicole Proxenos", role: "Design" },
];

const mediaPartners = [
  { name: "DStv Media Sales", capability: "Linear TV, DStv Stream, CTV, Sport" },
  { name: "Mediamark / Kagiso", capability: "Radio (ECR + Jacaranda FM), Digital, Audio" },
  { name: "OnsideZA", capability: "SA's #1 sports podcast — 117k views/month" },
  { name: "SABC+", capability: "Free-to-air streaming, 1.8M registered users" },
  { name: "Polygon", capability: "National OOH and DOOH, Gauteng + KZN metros" },
];

const reachTargets = [
  { metric: "Total impressions", target: "80–100M" },
  { metric: "Video views (completed)", target: "10–15M" },
  { metric: "Radio reach", target: "3–4M listeners" },
  { metric: "OOH unique exposures", target: "2–3M" },
  { metric: "App downloads", target: "50,000–80,000" },
  { metric: "First trades", target: "8,000–15,000" },
  { metric: "Fan token purchases", target: "3,000–6,000" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="border-b border-border px-6 py-4 flex items-center justify-between sticky top-0 bg-background/95 backdrop-blur z-10">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-sm tracking-tight">Broadbrand</span>
          <span className="text-muted-foreground text-sm">×</span>
          <span className="font-semibold text-sm tracking-tight">Bitexen</span>
        </div>
        <Badge variant="secondary">SA Launch Proposal — March 2026</Badge>
      </header>

      {/* Hero */}
      <section className="px-6 py-24 md:py-36 max-w-5xl mx-auto">
        <Badge className="mb-6">South Africa Market Entry</Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
          The 12th Man<br />
          <span className="text-muted-foreground">just got promoted.</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
          Bitexen — Turkey&apos;s leading crypto exchange with 6M+ users — is entering South Africa,
          Africa&apos;s most crypto-active market. Broadbrand is the agency to take you there.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" asChild>
            <a href="mailto:mike@broadbrand.co.za">Contact Us to Proceed</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#opportunity">Read the Proposal</a>
          </Button>
        </div>
      </section>

      <Separator />

      {/* Reach Targets */}
      <section id="opportunity" className="px-6 py-20 max-w-5xl mx-auto">
        <Badge variant="outline" className="mb-4">Campaign Targets</Badge>
        <h2 className="text-3xl font-bold mb-10">What success looks like at 12 weeks</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {reachTargets.map((item) => (
            <div key={item.metric} className="border border-border rounded-lg p-4">
              <p className="text-2xl font-bold">{item.target}</p>
              <p className="text-sm text-muted-foreground mt-1">{item.metric}</p>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* Why Broadbrand */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <Badge variant="outline" className="mb-4">Why Broadbrand</Badge>
        <h2 className="text-3xl font-bold mb-4">
          A digital agency that operates like a software company.
        </h2>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          We don&apos;t adapt traditional campaigns for screens. We build natively for them.
          Everything we do is built on four pillars.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar) => (
            <Card key={pillar.title}>
              <CardHeader>
                <CardTitle className="text-lg">{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {pillar.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Campaign Concept */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <Badge variant="outline" className="mb-4">Creative Concept</Badge>
        <h2 className="text-3xl font-bold mb-4">The 12th Man</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl leading-relaxed">
          In football, the &quot;12th man&quot; is the crowd — fans who change the outcome through sheer
          force of will. Fan tokens make that influence literal. You vote. You decide. You&apos;re on
          the team sheet.
        </p>
        <blockquote className="border-l-4 border-primary pl-6 py-2 mb-10">
          <p className="text-2xl font-semibold italic">
            &quot;The 12th Man just got promoted.&quot;
          </p>
        </blockquote>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Phase A: Hype</CardTitle>
              <CardDescription>Weeks -4 to 0</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Teaser OOH and social. &quot;Something is changing in SA football.&quot; Fan card
              generator launches as an early-access tool. Build the waitlist.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Phase B: Launch</CardTitle>
              <CardDescription>Match Day</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Hero film drops on DStv during a live PSL broadcast. First governance vote opens.
              Stadium activations, physical fan cards, radio campaign begins.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Phase C: Sustain</CardTitle>
              <CardDescription>Weeks 7–12+</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Monthly governance votes. New fan card drops. Leaderboard rewards. Expansion to
              additional PSL clubs. Performance loop at full throttle.
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Budget */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <Badge variant="outline" className="mb-4">Budget Overview</Badge>
        <h2 className="text-3xl font-bold mb-10">R6,024,430 total investment</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {budgetCards.map((card) => (
            <Card key={card.label} className="flex flex-col">
              <CardHeader>
                <CardDescription>{card.label}</CardDescription>
                <CardTitle className="text-3xl">{card.amount}</CardTitle>
                <Badge variant="secondary" className="w-fit">{card.share}</Badge>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground flex-1">
                {card.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Media Partners */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <Badge variant="outline" className="mb-4">Media Partners</Badge>
        <h2 className="text-3xl font-bold mb-10">Who delivers the reach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mediaPartners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-start gap-4 border border-border rounded-lg p-5"
            >
              <div>
                <p className="font-semibold text-sm">{partner.name}</p>
                <p className="text-sm text-muted-foreground mt-1">{partner.capability}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* Team */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <Badge variant="outline" className="mb-4">The Team</Badge>
        <h2 className="text-3xl font-bold mb-10">Who will run this</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {team.map((member) => (
            <div key={member.name} className="border border-border rounded-lg p-4">
              <p className="font-semibold text-sm">{member.name}</p>
              <p className="text-xs text-muted-foreground mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* CTA */}
      <section className="px-6 py-24 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          The opportunity is clear.<br />The timing is right.
        </h2>
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
          Bitexen has the platform, fan token infrastructure, and proven Turkish playbook.
          Broadbrand has the SA market knowledge, media relationships, creative muscle, and
          technology stack to execute.
        </p>
        <Button size="lg" asChild>
          <a href="mailto:mike@broadbrand.co.za">Let&apos;s build this together</a>
        </Button>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8 text-center text-sm text-muted-foreground">
        <p>Broadbrand / Digital Solutions Group · March 2026</p>
        <p className="mt-1">Confidential proposal prepared for Bitexen.</p>
      </footer>
    </main>
  );
}

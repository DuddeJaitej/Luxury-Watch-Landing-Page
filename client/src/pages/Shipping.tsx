import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowLeft, Globe, Package, Truck, Shield } from 'lucide-react';

export default function Shipping() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-accent-foreground text-sm">C</span>
            </div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-lg tracking-tight">CHRONOS</span>
          </Link>
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src="../Assets/shipping-hero.webp"
          alt="Shipping"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container pb-12">
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-4xl md:text-5xl text-foreground mb-4">
              Shipping & Delivery
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              We ship your Chronos watch safely to anywhere in the world with full insurance and tracking.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-32">
        <div className="container">
          {/* Shipping Options */}
          <div className="mb-20">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-3xl mb-12">Shipping Options</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Truck,
                  title: 'Standard Worldwide',
                  desc: 'Free shipping to most countries. Delivery in 6-8 weeks.',
                  included: ['Full insurance', 'Tracking number', 'Signature required'],
                },
                {
                  icon: Package,
                  title: 'Express Delivery',
                  desc: 'Expedited shipping for faster delivery. 2-3 weeks worldwide.',
                  included: ['Full insurance', 'Priority handling', 'Tracking updates'],
                },
              ].map((option, i) => (
                <div key={i} className="bg-muted/30 rounded-lg p-8 space-y-6">
                  <option.icon className="w-8 h-8 text-accent" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                    <p className="text-muted-foreground">{option.desc}</p>
                  </div>
                  <div className="space-y-2">
                    {option.included.map((item, j) => (
                      <div key={j} className="flex gap-2 text-sm">
                        <span className="text-accent">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Packaging */}
          <div className="mb-20">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-3xl mb-8">Premium Packaging</h2>
            <div className="bg-gradient-to-br from-accent/5 to-transparent rounded-lg p-8 md:p-12 space-y-6">
              <p className="text-muted-foreground">
                Every Chronos watch is carefully packaged in our signature luxury presentation box with silk lining and protective cushioning.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">What's Included</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <span className="text-accent">•</span>
                      <span>Chronos luxury presentation box</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">•</span>
                      <span>Silk wrapping and protective cushioning</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">•</span>
                      <span>Certificate of authenticity</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">•</span>
                      <span>Warranty documentation</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">•</span>
                      <span>Care instruction booklet</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Protection</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <span className="text-accent">•</span>
                      <span>Full insurance coverage included</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">•</span>
                      <span>Signature required upon delivery</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">•</span>
                      <span>Real-time tracking</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">•</span>
                      <span>Discreet packaging</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">•</span>
                      <span>Damage claim support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Countries */}
          <div className="mb-20">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-3xl mb-8">We Ship Worldwide</h2>
            <div className="flex items-center gap-4 mb-8">
              <Globe className="w-8 h-8 text-accent" />
              <p className="text-muted-foreground">
                We deliver to over 180 countries. Customs and duties may apply in some regions.
              </p>
            </div>
            <div className="bg-muted/20 rounded-lg p-8">
              <h3 className="font-semibold mb-4">Popular Destinations</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                {[
                  'United States',
                  'United Kingdom',
                  'Canada',
                  'Australia',
                  'Germany',
                  'France',
                  'Japan',
                  'Singapore',
                  'UAE',
                  'Hong Kong',
                  'Switzerland',
                  'Monaco',
                ].map((country, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="text-accent">✓</span>
                    <span>{country}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="space-y-6">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-3xl mb-8">Shipping FAQs</h2>
            {[
              {
                q: 'How do I track my order?',
                a: 'You will receive a tracking number via email upon shipment. You can track your package in real-time through our shipping partner.',
              },
              {
                q: 'Is shipping insured?',
                a: 'Yes, all shipments include full insurance coverage at no additional cost. The watch is insured for its full retail value.',
              },
              {
                q: 'What if my watch is damaged during shipping?',
                a: 'Contact us immediately with photos of the damage. We will file a claim and replace your watch or provide a full refund.',
              },
              {
                q: 'Do you ship to my country?',
                a: 'We ship to most countries worldwide. Contact our customer service to confirm shipping availability to your location.',
              },
            ].map((item, i) => (
              <div key={i} className="border-b border-border pb-6 last:border-b-0">
                <h3 className="font-semibold mb-2">{item.q}</h3>
                <p className="text-muted-foreground text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/20 mt-20">
        <div className="container text-center">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-3xl mb-4">Questions About Shipping?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our customer service team is here to help with any shipping inquiries.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

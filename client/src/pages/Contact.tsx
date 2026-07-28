import { useState } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ContactModal } from '@/components/ContactModal';

export default function Contact() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

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
      <section className="relative bg-gradient-to-br from-accent/10 via-background to-background py-20">
        <div className="container">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-4xl md:text-5xl text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Have questions about your Chronos watch? We're here to help. Reach out to our customer service team.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-3xl mb-8">Contact Information</h2>
              </div>

              {[
                {
                  icon: Mail,
                  title: 'Email',
                  content: 'hello@chronos.watch',
                  desc: 'Response within 24 hours',
                },
                {
                  icon: Phone,
                  title: 'Phone',
                  content: '+41 44 123 4567',
                  desc: 'Monday - Friday, 9am - 6pm CET',
                },
                {
                  icon: MapPin,
                  title: 'Headquarters',
                  content: 'Zurich, Switzerland',
                  desc: 'By appointment only',
                },
                {
                  icon: Clock,
                  title: 'Business Hours',
                  content: 'Mon - Fri: 9am - 6pm CET',
                  desc: 'Sat - Sun: Closed',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <item.icon className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-foreground font-medium">{item.content}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}

              {/* Quick Links */}
              <div className="bg-muted/30 rounded-lg p-6 mt-8">
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <Link href="/warranty" className="text-accent hover:text-accent/80 transition-colors text-sm block">
                    → Warranty Information
                  </Link>
                  <Link href="/service" className="text-accent hover:text-accent/80 transition-colors text-sm block">
                    → Service & Maintenance
                  </Link>
                  <Link href="/shipping" className="text-accent hover:text-accent/80 transition-colors text-sm block">
                    → Shipping & Delivery
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-muted/20 rounded-lg p-8">
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-2xl mb-6">Send us a Message</h2>
              <Button
                onClick={() => setContactModalOpen(true)}
                size="lg"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-200"
              >
                Open Contact Form
              </Button>

              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="font-semibold mb-4">Other Ways to Connect</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground">For Sales Inquiries:</strong>
                    <br />
                    sales@chronos.watch
                  </p>
                  <p>
                    <strong className="text-foreground">For Technical Support:</strong>
                    <br />
                    support@chronos.watch
                  </p>
                  <p>
                    <strong className="text-foreground">For Warranty Claims:</strong>
                    <br />
                    warranty@chronos.watch
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20 pt-20 border-t border-border">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-3xl mb-12">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  q: 'How long does delivery take?',
                  a: 'Standard worldwide delivery takes 6-8 weeks. Express delivery options are available for 2-3 weeks.',
                },
                {
                  q: 'What is your warranty coverage?',
                  a: 'All Chronos watches come with a lifetime warranty covering manufacturing defects and mechanical issues.',
                },
                {
                  q: 'Can I customize my watch?',
                  a: 'Yes! We offer customization options for case color, strap material, and dial configurations.',
                },
                {
                  q: 'Do you offer international shipping?',
                  a: 'Yes, we ship to over 180 countries worldwide with full insurance coverage included.',
                },
                {
                  q: 'What is your return policy?',
                  a: 'We accept returns within 14 days of delivery if the watch is in original, unused condition.',
                },
                {
                  q: 'How do I schedule a service?',
                  a: 'Contact our service team at service@chronos.watch or call +41 44 123 4567 to schedule.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-muted/20 rounded-lg p-6">
                  <h3 className="font-semibold mb-3">{item.q}</h3>
                  <p className="text-sm text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
    </div>
  );
}

import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <Link href="/">
            <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-accent-foreground text-sm">C</span>
              </div>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-lg tracking-tight">CHRONOS</span>
            </a>
          </Link>
          <Link href="/">
            <a className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </a>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-muted/50 to-background py-20">
        <div className="container">
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-4xl md:text-5xl text-foreground mb-4">
            Terms & Conditions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Please read these terms carefully before making a purchase or using our services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-32">
        <div className="container max-w-3xl">
          <div className="space-y-12">
            {/* Last Updated */}
            <div className="text-sm text-muted-foreground">
              Last updated: July 2026
            </div>

            {/* Agreement to Terms */}
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-2xl mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground text-sm">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            {/* Use License */}
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-2xl mb-4">Use License</h2>
              <p className="text-muted-foreground text-sm mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on Chronos's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                <li>• Modifying or copying the materials</li>
                <li>• Using the materials for any commercial purpose or for any public display</li>
                <li>• Attempting to decompile or reverse engineer any software contained on the website</li>
                <li>• Removing any copyright or other proprietary notations from the materials</li>
                <li>• Transferring the materials to another person or "mirroring" the materials on any other server</li>
              </ul>
            </div>

            {/* Product Information */}
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-2xl mb-4">Product Information</h2>
              <p className="text-muted-foreground text-sm mb-4">
                We strive to provide accurate product descriptions and pricing on our website. However, we do not warrant that product descriptions, pricing, or other content of any materials on our website is accurate, complete, or error-free. If a product offered by Chronos is not as described, your sole remedy is to return it in unused condition.
              </p>
            </div>

            {/* Pricing and Availability */}
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-2xl mb-4">Pricing and Availability</h2>
              <p className="text-muted-foreground text-sm">
                All prices are subject to change without notice. We reserve the right to limit quantities and to discontinue any product. Products are subject to availability, and we reserve the right to discontinue any product at any time. Prices and availability are subject to change without notice.
              </p>
            </div>

            {/* Payment Terms */}
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-2xl mb-4">Payment Terms</h2>
              <p className="text-muted-foreground text-sm mb-4">
                Payment must be received before your order is shipped. We accept major credit cards, bank transfers, and other payment methods as specified during checkout. By submitting an order, you warrant that you are authorized to use the payment method provided.
              </p>
            </div>

            {/* Shipping and Delivery */}
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-2xl mb-4">Shipping and Delivery</h2>
              <p className="text-muted-foreground text-sm mb-4">
                We ship worldwide. Delivery times are estimates and not guaranteed. Risk of loss passes to you upon delivery to the carrier. Chronos is not responsible for any loss or damage to products in transit. All shipments include insurance coverage.
              </p>
            </div>

            {/* Returns and Refunds */}
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-2xl mb-4">Returns and Refunds</h2>
              <p className="text-muted-foreground text-sm mb-4">
                Watches may be returned within 14 days of delivery if they are in original, unused condition with all packaging and documentation. Custom orders and engraved watches are non-returnable. Refunds will be issued to the original payment method within 5-7 business days of receipt and inspection of the returned item.
              </p>
            </div>

            {/* Warranty Disclaimer */}
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-2xl mb-4">Warranty Disclaimer</h2>
              <p className="text-muted-foreground text-sm">
                All products are provided on an "as-is" basis. Chronos makes no other warranties, express or implied, and hereby disclaims all implied warranties, including any warranty of merchantability, fitness for a particular purpose, or non-infringement. See our Warranty page for details on our limited lifetime warranty.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-2xl mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground text-sm">
                In no event shall Chronos be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Chronos's website.
              </p>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-2xl mb-4">Intellectual Property Rights</h2>
              <p className="text-muted-foreground text-sm">
                All content on this website, including text, graphics, logos, images, and software, is the property of Chronos or its content suppliers and is protected by international copyright laws. Unauthorized reproduction or distribution is prohibited.
              </p>
            </div>

            {/* Governing Law */}
            <div className="bg-muted/30 rounded-lg p-8">
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-2xl mb-4">Governing Law</h2>
              <p className="text-muted-foreground text-sm">
                These terms and conditions are governed by and construed in accordance with the laws of Switzerland, and you irrevocably submit to the exclusive jurisdiction of the courts located in Zurich, Switzerland.
              </p>
            </div>

            {/* Contact */}
            <div className="text-center pt-8">
              <p className="text-muted-foreground text-sm mb-4">
                If you have any questions about these Terms & Conditions, please contact us at:
              </p>
              <p className="text-sm">
                <strong>Email:</strong> legal@chronos.watch
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

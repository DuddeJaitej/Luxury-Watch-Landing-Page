import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle } from 'lucide-react';

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      onOpenChange(false);
    }, 3000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md sm:max-w-lg border-0 shadow-2xl p-0 overflow-hidden">
        {!isSubmitted ? (
          <div className="bg-gradient-to-br from-background to-muted/20">
            <DialogHeader className="border-b border-border px-6 py-6">
              <DialogTitle style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-2xl">Get in Touch</DialogTitle>
              <p className="text-sm text-muted-foreground mt-2">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 px-6 py-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-specs-label text-accent">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background border-border focus:border-accent focus:ring-accent"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-specs-label text-accent">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background border-border focus:border-accent focus:ring-accent"
                />
              </div>

              {/* Subject Field */}
              <div className="space-y-2">
                <label htmlFor="subject" className="text-specs-label text-accent">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What is this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-background border-border focus:border-accent focus:ring-accent"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-specs-label text-accent">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us more..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="bg-background border-border focus:border-accent focus:ring-accent resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => onOpenChange(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-200"
                >
                  {isLoading ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </div>
            </form>
          </div>
        ) : (
          /* Success Message */
          <div className="bg-gradient-to-br from-accent/5 via-background to-background p-8 sm:p-12 text-center min-h-96 flex flex-col items-center justify-center">
            {/* Animated Success Icon */}
            <div className="mb-6 animate-scale-in">
              <div className="relative w-20 h-20 mx-auto">
                <div className="absolute inset-0 bg-accent/20 rounded-full animate-pulse" />
                <div className="absolute inset-2 bg-accent/10 rounded-full" />
                <CheckCircle className="w-20 h-20 text-accent relative z-10" />
              </div>
            </div>

            {/* Success Message */}
            <div className="space-y-3">
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-2xl text-foreground">Message Sent!</h3>
              <p className="text-muted-foreground max-w-sm">
                Thank you for reaching out. We've received your message and will get back to you within 24 hours.
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="mt-8 flex gap-2 justify-center">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <div className="w-2 h-2 bg-accent/50 rounded-full" />
              <div className="w-2 h-2 bg-accent/30 rounded-full" />
            </div>

            {/* Auto-close hint */}
            <p className="text-xs text-muted-foreground mt-6">
              Closing in a moment...
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

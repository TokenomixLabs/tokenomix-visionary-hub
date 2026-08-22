import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

/**
 * INTEGRATION SEAM — CONTACT CAPTURE
 *
 * There is currently NO contact endpoint in this project (no database table,
 * server function, email service or webhook). The form below is therefore
 * intentionally non-submitting: it never claims a message was sent.
 *
 * When a canonical endpoint exists, implement it here and flip
 * CONTACT_CAPTURE_CONNECTED to true, then wire real validation + submission.
 */
const CONTACT_CAPTURE_CONNECTED = false;

interface ContactProps {
  isDialog?: boolean;
}

const inputStyles =
  "bg-background/60 border-border text-foreground placeholder:text-muted-foreground focus-visible:border-accent/60";

export const Contact = ({ isDialog = false }: ContactProps) => {
  const containerClass = isDialog ? "" : "py-24 bg-surface/40 border-y border-border/60";
  const innerContainerClass = isDialog ? "" : "container mx-auto";
  const formContainerClass = isDialog ? "" : "max-w-2xl mx-auto";

  return (
    <div className={containerClass}>
      <div className={innerContainerClass}>
        <div className={formContainerClass}>
          {!isDialog && (
            <h2 className="mb-10 text-center font-display text-3xl font-semibold text-foreground">
              Get in <span className="text-gradient-value">touch</span>
            </h2>
          )}

          <div
            role="note"
            className="mb-6 rounded-sm border border-accent/30 bg-accent/5 px-4 py-3"
          >
            <p className="eyebrow">Inquiry channel opening shortly</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Contact capture is not connected yet, so nothing typed here is transmitted or stored.
              The channel will open once a canonical inquiry route is in place.
            </p>
          </div>

          <form
            aria-disabled="true"
            onSubmit={(event) => event.preventDefault()}
            className="space-y-5 opacity-70"
          >
            <fieldset disabled className="space-y-5 border-0 p-0">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="eyebrow block">
                    Name
                  </label>
                  <Input id="contact-name" placeholder="Your name" className={inputStyles} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="eyebrow block">
                    Email
                  </label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="you@domain.com"
                    className={inputStyles}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-subject" className="eyebrow block">
                  Subject
                </label>
                <Input
                  id="contact-subject"
                  placeholder="What is this about?"
                  className={inputStyles}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-message" className="eyebrow block">
                  Message
                </label>
                <Textarea
                  id="contact-message"
                  placeholder="Describe the system you are designing"
                  className={`${inputStyles} h-32`}
                />
              </div>
              <Button
                type="button"
                disabled
                aria-disabled="true"
                className="h-auto w-full bg-gradient-value py-4 font-display text-base text-primary-foreground"
              >
                {CONTACT_CAPTURE_CONNECTED ? "Send message" : "Inquiry channel not connected"}
              </Button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

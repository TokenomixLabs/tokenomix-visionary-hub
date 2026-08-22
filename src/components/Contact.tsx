import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

interface ContactProps {
  isDialog?: boolean;
}

const inputStyles =
  "bg-background/60 border-border text-foreground placeholder:text-muted-foreground focus-visible:border-accent/60";

export const Contact = ({ isDialog = false }: ContactProps) => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      console.log("Form submitted:", data);

      toast({
        title: "Message sent",
        description: "Thank you for your message. We'll get back to you soon.",
      });

      reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
      });
    }
  };

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
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="contact-name" className="eyebrow block">
                  Name
                </label>
                <Input
                  id="contact-name"
                  placeholder="Your name"
                  className={`${inputStyles} ${errors.name ? "border-destructive" : ""}`}
                  {...register("name")}
                />
                {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-email" className="eyebrow block">
                  Email
                </label>
                <Input
                  id="contact-email"
                  placeholder="you@domain.com"
                  type="email"
                  className={`${inputStyles} ${errors.email ? "border-destructive" : ""}`}
                  {...register("email")}
                />
                {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="contact-subject" className="eyebrow block">
                Subject
              </label>
              <Input
                id="contact-subject"
                placeholder="What is this about?"
                className={`${inputStyles} ${errors.subject ? "border-destructive" : ""}`}
                {...register("subject")}
              />
              {errors.subject && <p className="text-sm text-destructive">{errors.subject.message}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="contact-message" className="eyebrow block">
                Message
              </label>
              <Textarea
                id="contact-message"
                placeholder="Describe the system you are designing"
                className={`${inputStyles} h-32 ${errors.message ? "border-destructive" : ""}`}
                {...register("message")}
              />
              {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
            </div>
            <Button
              type="submit"
              className="h-auto w-full bg-gradient-value py-4 font-display text-base text-primary-foreground transition-all duration-300 hover:brightness-110"
            >
              Send message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

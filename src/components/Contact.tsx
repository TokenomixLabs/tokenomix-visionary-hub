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

const inputStyles = "bg-primary/50 border-neon-purple/20 text-white placeholder:text-gray-400 focus:border-neon-blue/50";

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
      // Here you would typically send the data to your backend
      console.log("Form submitted:", data);
      
      toast({
        title: "Message sent!",
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

  const containerClass = isDialog ? "" : "py-20 bg-primary bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-neon-purple/20 via-primary to-primary";
  const innerContainerClass = isDialog ? "" : "container mx-auto px-4";
  const formContainerClass = isDialog ? "" : "max-w-2xl mx-auto";

  return (
    <div id="contact" className={containerClass}>
      <div className={innerContainerClass}>
        <div className={formContainerClass}>
          {!isDialog && (
            <h2 className="text-4xl font-bold text-white text-center mb-12 font-orbitron">
              Get in <span className="text-neon-blue">Touch</span>
            </h2>
          )}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Input 
                  placeholder="Name" 
                  className={`${inputStyles} ${errors.name ? 'border-red-500' : ''}`}
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Input 
                  placeholder="Email" 
                  type="email" 
                  className={`${inputStyles} ${errors.email ? 'border-red-500' : ''}`}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <Input 
                placeholder="Subject" 
                className={`${inputStyles} ${errors.subject ? 'border-red-500' : ''}`}
                {...register("subject")}
              />
              {errors.subject && (
                <p className="text-red-500 text-sm">{errors.subject.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Textarea 
                placeholder="Message" 
                className={`${inputStyles} h-32 ${errors.message ? 'border-red-500' : ''}`}
                {...register("message")}
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>
            <Button 
              type="submit"
              className="w-full bg-neon-blue hover:bg-neon-purple text-white py-6 font-orbitron transition-all duration-300"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
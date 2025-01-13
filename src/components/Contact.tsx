import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-light/10 to-secondary-light/10">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">
            Get in Touch
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input placeholder="Name" className="bg-white" />
              <Input placeholder="Email" type="email" className="bg-white" />
            </div>
            <Input placeholder="Subject" className="bg-white" />
            <Textarea placeholder="Message" className="bg-white h-32" />
            <Button className="w-full bg-primary-light hover:bg-primary-dark text-white py-6">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
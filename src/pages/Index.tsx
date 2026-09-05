import { SystemHero } from "@/components/hero/SystemHero";
import { CategoryStatement } from "@/components/tokenomix/CategoryStatement";
import { ValueArchitecture } from "@/components/tokenomix/ValueArchitecture";
import { Incentives } from "@/components/tokenomix/Incentives";
import { Ownership } from "@/components/tokenomix/Ownership";
import { EconomicLayers } from "@/components/tokenomix/EconomicLayers";
import { DesignForBehavior } from "@/components/tokenomix/DesignForBehavior";
import { IntelligentEconomies } from "@/components/tokenomix/IntelligentEconomies";
import { Governance } from "@/components/tokenomix/Governance";
import { Research } from "@/components/tokenomix/Research";
import { Method } from "@/components/tokenomix/Method";
import { FinalStatement } from "@/components/tokenomix/FinalStatement";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

const Index = () => (
  <main className="min-h-screen bg-background">
    <SystemHero />
    <CategoryStatement />
    <ValueArchitecture />
    <Incentives />
    <Ownership />
    <EconomicLayers />
    <DesignForBehavior />
    <IntelligentEconomies />
    <Governance />
    <Research />
    <Method />
    <FinalStatement />
    <Footer />
    <BackToTop />
  </main>
);

export default Index;

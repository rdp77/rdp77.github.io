import { DashboardHero } from "@/components/sections/hero";
import { Dashboard } from "@/components/dashboard";
import { Container } from "@/components/ui/primitives";

export const metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <div className="dash">
      <DashboardHero />
      <Container className="py-12 md:py-16">
        <Dashboard />
      </Container>
    </div>
  );
}

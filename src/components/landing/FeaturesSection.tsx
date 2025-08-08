import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FeatureGroup = ({ title, points }: { title: string; points: string[] }) => (
  <Card className="h-full">
    <CardHeader>
      <CardTitle className="text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2 text-muted-foreground list-disc list-inside">
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const FeaturesSection = () => {
  return (
    <section id="features" className="container mx-auto py-16">
      <header className="mb-6">
        <h2 className="text-3xl font-semibold tracking-tight">Features</h2>
        <p className="text-muted-foreground mt-2 max-w-prose">
          Designed for field use—fast, clear, and standards-based.
        </p>
      </header>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        <FeatureGroup
          title="Home Inspection"
          points={[
            "Guided healthy housing checklist (HUD-aligned)",
            "Photo capture with embedded consent notes",
            "Geolocation with environmental overlays",
            "Multilingual workflows (EN/Traditional Chinese)",
          ]}
        />
        <FeatureGroup
          title="SDOH"
          points={[
            "Structured SDOH data collection",
            "Gravity Project & LOINC-coded elements",
            "Context notes and referrals",
            "Modular templates from editable CSV",
          ]}
        />
        <FeatureGroup
          title="Export / Integration"
          points={[
            "PDF reports with summary and photos",
            "HL7® FHIR® JSON export",
            "QR-code sharing for stateless handoff",
            "Clean JSON for analytics",
          ]}
        />
        <FeatureGroup
          title="Privacy"
          points={[
            "Stateless by default—no login required",
            "Local-only export unless opted-in",
            "Clear consent language in reports",
            "Future optional offline storage",
          ]}
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
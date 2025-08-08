import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { LucideIcon } from "lucide-react";
import { Home, Stethoscope, FileText, Shield } from "lucide-react";

const FeatureGroup = ({
  title,
  points,
  icon: Icon,
  accentVar = "health",
}: {
  title: string;
  points: string[];
  icon: LucideIcon;
  accentVar?: "health" | "navy" | "brand" | "brand-2";
}) => (
  <Card
    className="h-full border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elevated)] transition-shadow hover-scale"
    style={{ borderTopWidth: 4, borderColor: `hsl(var(--${accentVar}))` }}
  >
    <CardHeader className="space-y-1">
      <div className={`flex items-center gap-2`} style={{ color: `hsl(var(--${accentVar}))` }}>
        <Icon className="h-5 w-5" aria-hidden="true" />
        <CardTitle className="text-xl">{title}</CardTitle>
      </div>
      {title.includes("FHIR") && (
        <Badge variant="secondary" className="w-max">Standards: HL7® FHIR®</Badge>
      )}
    </CardHeader>
    <CardContent>
      <ul className="space-y-2 text-muted-foreground list-disc list-inside leading-relaxed">
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const FeaturesSection = () => {
  return (
    <section id="features" className="container mx-auto py-16 md:py-20 bg-[image:var(--pattern-soft)] bg-repeat">
      <header className="mb-6">
        <h2 className="text-3xl font-semibold tracking-tight">Features</h2>
        <p className="text-muted-foreground mt-2 max-w-prose leading-relaxed">
          Designed for field use—fast, clear, and standards-based.
        </p>
      </header>
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <FeatureGroup
          title="Home Inspection"
          icon={Home}
          accentVar="brand"
          points={[
            "Guided healthy housing checklist (HUD-aligned)",
            "Photo capture with embedded consent notes",
            "Geolocation with environmental overlays",
            "Multilingual workflows (EN/Traditional Chinese)",
          ]}
        />
        <FeatureGroup
          title="Social Determinants of Health (SDOH)"
          icon={Stethoscope}
          accentVar="health"
          points={[
            "Structured SDOH data collection",
            "Gravity Project & LOINC-coded elements",
            "Context notes and referrals",
            "Modular templates from editable CSV",
          ]}
        />
        <FeatureGroup
          title="Export / Integration"
          icon={FileText}
          accentVar="navy"
          points={[
            "PDF reports with summary and photos",
            "HL7® FHIR® JSON export",
            "QR-code sharing for stateless handoff",
            "Clean JSON for analytics",
          ]}
        />
        <FeatureGroup
          title="Privacy"
          icon={Shield}
          accentVar="brand-2"
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

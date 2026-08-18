import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { programs } from "@/data/programs";
import {
  ProgramHero,
  ProgramMedia,
  ProgramOverview,
  ProgramCompetencies,
  ProgramCurriculum,
  ProgramProjects,
  ProgramGenAI,
  ProgramCareerPrep,
  ProgramFAQ,
  ProgramFinalCTA
} from "@/components/programs/ProgramSections";

export default async function ProgramDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = programs[slug];

  if (!program) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground relative selection:bg-white/15 overflow-x-hidden">
      <Navbar />

      {/* Ambient background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[5%] left-[-10%] w-[600px] h-[600px] bg-white/[0.01] blur-[140px] rounded-full" />
        <div className="absolute top-[35%] right-[-10%] w-[700px] h-[700px] bg-white/[0.015] blur-[165px] rounded-full" />
        <div className="absolute top-[65%] left-[-10%] w-[600px] h-[600px] bg-white/[0.01] blur-[150px] rounded-full" />
      </div>

      <ProgramHero program={program} />
      <ProgramMedia program={program} />
      <ProgramOverview program={program} />
      <ProgramCompetencies program={program} />
      <ProgramCurriculum program={program} />
      <ProgramCareerPrep program={program} />
      <ProgramProjects program={program} />
      <ProgramGenAI program={program} />
      <ProgramFinalCTA program={program} />
      <ProgramFAQ program={program} />

      <Footer />
    </main>
  );
}

import { useLoaderData } from 'react-router-dom';
import {
  getAbout,
  getSite,
  listCareer,
  listProjects,
  listStack,
  type AboutSection,
  type CareerEntry,
  type Project,
  type SiteSettings,
  type StackCategory,
} from '@vierra/api-client';
import { BackgroundLayers } from '../components/chrome/BackgroundLayers';
import { CustomCursor } from '../components/chrome/CustomCursor';
import { Hud } from '../components/chrome/Hud';
import { HudCorners } from '../components/chrome/HudCorners';
import { SideNav } from '../components/chrome/SideNav';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Projects } from '../components/sections/Projects';
import { Stack } from '../components/sections/Stack';
import { Career } from '../components/sections/Career';
import { Contact } from '../components/sections/Contact';
import { Footer } from '../components/footer/Footer';

type LoaderData = {
  site: SiteSettings;
  projects: Project[];
  career: CareerEntry[];
  stack: StackCategory[];
  about: AboutSection;
};

export async function homeLoader(): Promise<LoaderData> {
  const [site, projects, career, stack, about] = await Promise.all([
    getSite(),
    listProjects(),
    listCareer(),
    listStack(),
    getAbout(),
  ]);
  return { site, projects, career, stack, about };
}

export function Home() {
  const { site, projects, career, stack, about } = useLoaderData() as LoaderData;

  return (
    <>
      <BackgroundLayers />
      <CustomCursor />
      <Hud />
      <HudCorners />
      <SideNav />
      <Hero site={site} />
      <About about={about} />
      <Projects projects={projects} />
      <Stack stack={stack} />
      <Career entries={career} />
      <Contact site={site} />
      <Footer site={site} />
    </>
  );
}

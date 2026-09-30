import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'

function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="About Me in React"
          description="My first React project, rebuilt from a plain HTML page."
          tech="React · Tailwind CSS"
          link="https://github.com/ingridmaeontario/CSIT340-Lab1-Ontario"
        />
        <ProjectCard
          year="2025"
          title="ArtSync"
          description="A project management app designed for artists to log, track, and share progress on artworks."
          tech="Kotlin · Android Studio · MySQL"
          link="https://github.com/ingridmaeontario/artsync"
        />
        <ProjectCard
          year="2025"
          title="Tuneify_Music_Player_Capstone"
          description="A Java OOP2 capstone project that lets users play and manage local audio files with a simple, user-friendly interface, showcasing core object-oriented programming concepts."
          tech="Java · kotlin "
          link="https://github.com/ingridmaeontario/tuneify"
        />
       
      </div>
    </section>
  )
}

export default ProjectsSection
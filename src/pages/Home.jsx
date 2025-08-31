import ThemeToggle from "../components/ThemeToggle.jsx";
import StarBackground from "@/components/StarBackground.jsx";
import Navbar from "@/components/Navbar.jsx";
import HeroSection from "@/components/HeroSection.jsx";
import AboutMeSection from "@/components/AboutMeSection.jsx";
import SkillsSection from "@/components/SkillsSection.jsx";
import ProjectSection from "@/components/ProjectSection.jsx";
import ContactSection from "@/components/ContactSection.jsx";
import Footer from "@/components/Footer.jsx";


export default function Home() {
    return(
        <>
            <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
                {/*ThemeToggle*/}
            <ThemeToggle/>

            {/*Background Effects*/}

                <StarBackground/>

            {/*Navabar*/}

              <Navbar/>
            {/*Main Content*/}

                <main>
                    <HeroSection/>
                    <AboutMeSection/>
                    <SkillsSection/>
                    <ProjectSection/>
                    <ContactSection/>

                </main>


            {/*Footer*/}
                <Footer/>
            </div>
        </>
    )
}
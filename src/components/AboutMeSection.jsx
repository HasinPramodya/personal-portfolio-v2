import {Code, User, Briefcase} from "lucide-react";
export default function AboutMeSection() {
    return (
        <>
            <section id={"about"} className={"py-24 px-4 relative"}>
                {" "}
                <div className={"container mx-auto max-w-5xl"}>
                    <h2 className={"text-3xl md:text-4xl font-bold mb-12 text-center"}>About  <span className={"text-primary"}>Me</span></h2>
                </div>

                <div className={"grid grid-cols-1 md:grid-cols-2 gap-12 items-center"}>
                    <div className={"space-y-6"}>
                      <h3 className={"text-2xl font-semibold"}>A Passionate Software Engineer </h3>
                      <p className={"text-muted-foreground"}>
                        I am a fresh graduate at SLIIT, with 2 years of professional experience in Software Engineering. I am a dynamic and fast-learning software developer with a strong academic background in Information Technology. Experienced in full-stack development with expertise in Java, MERN & MEAN stack.
                      </p>


                      <div className={"flex flex-col sm:flex-row gap-4 pt-4 justify-center"}>
                          <a href={"#contact"} className={"cosmic-button"}>{" "}Get In Touch</a>
                          <a href={"/Hasin-cv.pdf"} className={"px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"}>{" "}Download CV</a>
                      </div>
                    </div>
                    <div className={"grid grid-cols-1 gap-6"}>
                       <div className={"gradient-border p-6 card-hover"}>
                           <div className={"flex items-start gap-4"}>
                              <div className={"p-3 rounded-full bg-primary/10"}>
                                    <Code className={"h-6 w-6 text-primary"} />
                              </div>
                               <div className={"text-left"}>
                                   <h4 className={"font-semibold text-lg"}>Web Development</h4>
                                   <p className={"text-muted-foreground"}>
                                      Creating dynamic and responsive web applications using modern technologies like React, Node.js, and Express.
                                   </p>
                               </div>
                           </div>
                       </div>
                        <div className={"gradient-border p-6 card-hover"}>
                            <div className={"flex items-start gap-4"}>
                                <div className={"p-3 rounded-full bg-primary/10"}>
                                    <User className={"h-6 w-6 text-primary"} />
                                </div>
                                <div className={"text-left"}>
                                    <h4 className={"font-semibold text-lg"}>Software Testing</h4>
                                    <p className={"text-muted-foreground"}>
                                        Testing and debugging software applications to ensure quality and performance standards are met.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={"gradient-border p-6 card-hover"}>
                            <div className={"flex items-start gap-4"}>
                                <div className={"p-3 rounded-full bg-primary/10"}>
                                    <Briefcase className={"h-6 w-6 text-primary"} />
                                </div>
                                <div className={"text-left"}>
                                    <h4 className={"font-semibold text-lg"}>Project Management</h4>
                                    <p className={"text-muted-foreground"}>
                                        Project planning, execution, and management to ensure timely delivery and client satisfaction.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
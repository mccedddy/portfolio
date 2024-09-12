import React, { useEffect } from "react";
import WorkTile from "./WorkTile";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section
      className="w-full flex flex-col justify-center items-center p-4"
      data-aos="fade-up"
    >
      <h1 className="text-4xl font-bold m-4">ABOUT ME</h1>
      <h1 className="max-w-2xl text-textColor text-justify">
        I am a fresh graduate computer engineer specializing in website and web
        application development. I have expertise in both front-end and back-end
        development, with experience in SQL and NoSQL databases. Additionally, I
        have a background in game development using Unity and in designing
        embedded systems.
      </h1>
      <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="flex flex-col gap-4" data-aos="fade-up">
          <h1 className="text-center text-xl font-bold">CAREER</h1>
          <div data-aos="fade-up">
            <WorkTile
              type="work"
              role="Fullstack Developer Intern"
              company="Achieve Without Borders, Inc."
              date="Aug 2023 - Oct 2023"
              link="https://achievewithoutborders.com/"
              tags={["Odoo", "Python", "Flutter", "Git"]}
              work={[
                "Developed custom module for Odoo V16 and conducted benchmark tests.",
                "Followed Scrum methodology.",
                "Trained in web development using Flutter.",
                "Recognized for delivering consistently with team support, demonstrating potential for further growth through continued practice and skill development.",
              ]}
            />
          </div>
          <div data-aos="fade-up">
            <WorkTile
              type="work"
              role="Digital Marketing Intern"
              company="I-Map Websolutions, Inc."
              date="Aug 2022 - Sept 2022"
              link="https://www.imapwebsolutions.com/"
              tags={["Canva"]}
              work={[
                "Created publication materials for an e-commerce platform.",
                "Managed company files to ensure smooth business operations.",
              ]}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4" data-aos="fade-up">
          <h1 className="text-center text-xl font-bold">EDUCATION</h1>
          <div data-aos="fade-up">
            <WorkTile
              type="school"
              course="Bachelor of Science in Computer Engineering"
              school="Polytechnic University of the Philippines"
              grade="College"
              date="2020 - 2024"
              link="https://www.pup.edu.ph/"
            />
          </div>
          <div data-aos="fade-up">
            <WorkTile
              type="school"
              course="Science, Technology, Engineering, & Mathematics"
              school="University of Perpetual Help System DALTA - Molino"
              grade="Senior High School"
              date="2018 - 2020"
              link="https://perpetualdalta.edu.ph/"
            />
          </div>
          <div data-aos="fade-up">
            <WorkTile
              type="school"
              school="Divine Jesus Learning Center, Inc."
              grade="Junior High School"
              date="2014 - 2018"
              link="https://www.djlcinc.edu.ph/"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

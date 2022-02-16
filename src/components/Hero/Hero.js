import { React, useEffect, useRef } from 'react';
import { init } from "ityped";
import { motion } from "framer-motion";
import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';


export default function Header(props) {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Software Engineer",  "Self-taught"],
    });
  }, []);
  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            <br/>
            Hey there,
          </SectionTitle>
          <SectionText>

            <h2 style={{ fontWeight: "bold" }}>
              I'm Isaias Ponce.
            </h2>


            <span style={{ fontSize: "2rem", color: "crimson", fontWeight: "bold" }} ref={textRef}></span>

          </SectionText>
          
          <motion.div
            whileHover={{scale:1.18}}
            animation={{duration:3}}
          >
            <Button onClick={(e) => {
              e.preventDefault();
              window.open('/files/Isaias_Ponce_CV.pdf');
            }}>My Resume</Button>

          </motion.div>
        </LeftSection>
      </Section>
    </>
  );
}



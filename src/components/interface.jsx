import { motion } from "framer-motion";


const Section = (props) => {

    const { children } = props;

    return (< motion.section className="section"
        initial={{
            opacity: 0,
            y: 50,
        }}
        whileInView={{
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.6,
            },
        }}>

        {children}

    </motion.section>
    )
}

export const Interface = () => {


    return (<div className="Scontainer">

        <AboutSection onmousedown="return false" onselectstart="return false"/>

        <MeSection />

        <ProjetSection />

        <ContactSection />


    </div>

    )
}

const AboutSection = () => {

    return (

        <Section className="s1">
            <p className="number">Level-00</p>
            <h1> <span style={{ color: "blue" }}>Bonjour </span>je suis Antoine </h1>

            <motion.p className="subtitle"

                initial={{
                    opacity: 0,
                    y: 50,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 1,
                        delay: 1.5,
                    },
                }}>
                création de site internet dans les<br /> Hautes-Pyrénées

            </motion.p>

            <motion.p className="text00"
             initial={{
                opacity: 0,
                y: 50,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 1,
                    delay: 2,
                },
            }}
            
            
            >
            Développeur indépendant basé à Lourdes, je vous accompagne dans la création de votre site internet.
                
            </motion.p>

            <motion.button className="btnS1"
                initial={{
                    opacity: 0,
                    y: 50,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 1,
                        delay: 2.5,
                    },
                }}


            >
                me contacter

            </motion.button>

            <div class="container">
            <div class="icon-scroll"></div>
            </div>

        </Section>

    )

}

const MeSection = () => {

    return (

        <Section>
            <p className="number1">Level-01</p>
            <h1>Mes prestations </h1>

            <p>2</p>
           

        </Section>

    )

}

const ProjetSection = () => {

    return (

        <Section>
            <p className="number2"> Level-02</p>
            <h1>partie 3 </h1>

            <p>projet</p>

        </Section>

    )

}

const ContactSection = () => {

    return (

        <Section>
            <p className="number3"> Level-03</p>
            <h1>partie 4 </h1>

            <p>contact</p>

        </Section>

    )

}
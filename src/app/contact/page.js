import ContactCard from "../components/ContactCard";
import styles from "./contact.module.css";
import ContactForm from "../components/ContactForm";
const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact us!</h1>
        <ContactCard />
        <section className={styles.contact_section}>
          <h2>
            We&apos;d love to hear<span> from you</span>
          </h2>
          <ContactForm />
        </section>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.575380014371!2d-96.8142910256757!3d33.014968613383125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3e929e211197%3A0x12638de2592727d2!2sCG%20Infinity%2C%20Inc.!5e0!3m2!1sen!2sin!4v1714130235698!5m2!1sen!2sin"
        width={600}
        height={450}
        style={{border:0}}
        // allowfullscreen=""
        loading="lazy"
        className={styles.mapping}
        // referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};
export default Contact;

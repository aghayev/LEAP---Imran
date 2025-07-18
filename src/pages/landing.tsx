import { Header, Content, ContactForm } from "@/components/UI/Cms";
import { Footer } from "@/components/UI";
import { useSubmitForm } from "@/hooks/submitForm.hook";

const Landing: React.FC = () => {
  const { submitForm } = useSubmitForm();

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await submitForm({});
  };

  return (
    <>
      <Header />
      <Content />
      <ContactForm id="contact-form" onFormSubmit={handleFormSubmit}/>
      <Footer/>
    </>
  );
};

export default Landing;

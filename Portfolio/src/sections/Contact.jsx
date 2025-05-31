import { useState } from "react";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = (e) => {
    showAlertMessage("success", "Message sent! Redirecting...");
    // Let FormSubmit handle the form submission natively
  };

  return (
    <section className="relative flex items-center c-space section-spacing">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you're loking to build a new website, improve your existing
            platform, or bring a unique project to life, We are here to help
          </p>
        </div>
        <form
          className="w-full"
          action="https://formsubmit.co/blackbytenp@gmail.com"
          method="POST"
          onSubmit={handleSubmit}
        >
          {/* Honeypot field */}
          <input type="text" name="_honey" style={{ display: "none" }} />

          {/* Disable captcha */}
          <input type="hidden" name="_captcha" value="false" />

          {/* Redirect URL after submission (optional) */}
         

          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="Blackbytes"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="blackbytenp@gmail.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              autoComplete="off"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

import { useState } from "react";
import { Mail, Phone, MapPin, Github, Instagram, Facebook } from "lucide-react";
import Title from "../components/Title";

// Social media links
const socialLinks = [
  { href: "#", icon: Github, label: "GitHub" },
  { href: "#", icon: Mail, label: "Email" },
  {
    href: "#",
    icon: Instagram,
    label: "Instagram",
  },
  {
    href: "#",
    icon: Facebook,
    label: "Facebook",
  },
];

// Contact details
const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "stamariaecho@gmail.com",
    link: "mailto:stamariaecho@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "0907-401-5774",
    link: "tel:09074015774",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Laguna, Philippines",
    link: null,
  },
];

// Contact section displays contact info, social links, and a form
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    // Add actual submission logic here if needed
  };

  return (
    <section id="contact" className="w-full bg-theme text-theme py-16 px-6">
      <Title title="Contact Me" subtitle="I'd love to hear from you!" />
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 shadow-2xl rounded-xl overflow-hidden bg-muted/10 border border-theme">
        {/* Left: Contact Info and Social Links */}
        <div className="p-8 bg-theme">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted mb-8">
            Feel free to reach out via email, phone, or social media. I'm always
            open to discussing new projects or opportunities.
          </p>
          <ul className="space-y-6 mb-8">
            {contactDetails.map(({ icon: Icon, label, value, link }) => (
              <li className="flex items-start gap-4" key={label}>
                <Icon className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold">{label}</p>
                  {link ? (
                    <a
                      href={link}
                      className="text-muted hover:text-primary transition"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-muted">{value}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <div className="flex gap-4 pt-4 border-t border-theme">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 rounded-full bg-muted/40 text-muted hover:bg-primary hover:text-light transition"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        {/* Right: Contact Form */}
        <div className="p-8 bg-theme">
          <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-muted mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 bg-muted/20 border border-theme rounded-lg text-theme focus:ring-2 focus:ring-primary focus:border-primary transition"
              />
            </div>
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-muted mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 bg-muted/20 border border-theme rounded-lg text-theme focus:ring-2 focus:ring-primary focus:border-primary transition"
              />
            </div>
            {/* Subject Field */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-muted mb-2"
              >
                Subject (Optional)
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 bg-muted/20 border border-theme rounded-lg text-theme focus:ring-2 focus:ring-primary focus:border-primary transition"
              />
            </div>
            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-muted mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 bg-muted/20 border border-theme rounded-lg text-[#77779e] focus:ring-2 focus:ring-primary focus:border-primary transition resize-none"
              ></textarea>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-primary text-light font-semibold rounded-lg shadow-lg hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-50 transition-all duration-300"
              disabled={submitted}
            >
              {submitted ? "Message Sent!" : "Send Message"}
            </button>
          </form>
          {/* Success Message */}
          {submitted && (
            <div className="mt-4 text-green-400 font-semibold text-center">
              Thank you for reaching out! I'll get back to you soon.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;

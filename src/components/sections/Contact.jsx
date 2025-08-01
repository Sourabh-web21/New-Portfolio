import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useTheme } from "../../contexts/ThemeContext";
import { supabase } from "../../lib/supabase";
import Button from "../ui/Button";
import Card from "../ui/Card";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

const Contact = () => {
  const { isDark } = useTheme();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: zodResolver(contactSchema)
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "sourabh.agarwal2023@vitstudent.ac.in",
      href: "mailto:sourabh.agarwal2023@vitstudent.ac.in"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 80007 19607",
      href: "tel:+918000719607"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Chennai, India",
      href: "https://www.google.com/maps/@12.8387524,80.1540117,15z?entry=ttu&g_ep=EgoyMDI1MDcyNy4wIKXMDSoASAFQAw%3D%3D"
    }
  ];

  const onSubmit = async (data) => {
    try {
      setSubmitError(null);

      // Save to Supabase
      const { error } = await supabase
        .from('contacts')
        .insert([
          {
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) {
        throw error;
      }

      setIsSubmitted(true);
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      setSubmitError(`Failed to send message: ${error.message}. Please try again or contact me directly.`);
    }
  };

  return (
    <section id="contact" className={`py-20 transition-all duration-500 ${
      isDark
        ? 'bg-gradient-to-b from-slate-900/50 to-slate-800/50'
        : 'bg-gradient-to-b from-white to-gray-50'
    }`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className={`transition-all duration-500 ${
              isDark
                ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
            }`}>
              Get In Touch
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto transition-colors duration-500 ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            I'm open to internship opportunities and exciting projects. Let's connect and discuss how we can work together!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-2xl font-bold mb-8 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Let's Connect</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  className="flex items-center group"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className={`text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>{info.title}</div>
                    <div className={`transition-colors ${
                      isDark
                        ? 'text-white group-hover:text-blue-300'
                        : 'text-gray-900 group-hover:text-blue-600'
                    }`}>
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            <Card className="p-6">
              <h4 className={`text-lg font-semibold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>What I Bring</h4>
              <ul className={`space-y-3 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Fresh perspective and eagerness to learn
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Strong foundation in React and Python
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Experience with AI/ML and OpenCV
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Dedication to clean, efficient code
                </li>
              </ul>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className={`p-8 transition-all duration-300 ${
              isDark
                ? ''
                : 'shadow-2xl shadow-blue-100/50 bg-white/90 backdrop-blur-sm'
            }`}>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className={`text-2xl font-bold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>Message Sent!</h3>
                  <p className={`${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>Thank you for reaching out. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <>
                  {submitError && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center"
                    >
                      <AlertCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                      <p className="text-red-700 text-sm">{submitError}</p>
                    </motion.div>
                  )}
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Name *
                      </label>
                      <input
                        {...register("name")}
                        type="text"
                        className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                          isDark
                            ? 'bg-slate-700 border border-slate-600 text-white placeholder-gray-400'
                            : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500 shadow-sm'
                        }`}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Email *
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                          isDark
                            ? 'bg-slate-700 border border-slate-600 text-white placeholder-gray-400'
                            : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500 shadow-sm'
                        }`}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Subject *
                    </label>
                    <input
                      {...register("subject")}
                      type="text"
                      className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                        isDark
                          ? 'bg-slate-700 border border-slate-600 text-white placeholder-gray-400'
                          : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500 shadow-sm'
                      }`}
                      placeholder="Project discussion"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-400">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Message *
                    </label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none ${
                        isDark
                          ? 'bg-slate-700 border border-slate-600 text-white placeholder-gray-400'
                          : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500 shadow-sm'
                      }`}
                      placeholder="Tell me about your project..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      />
                    ) : (
                      <Send className="w-5 h-5 mr-2" />
                    )}
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
                </>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

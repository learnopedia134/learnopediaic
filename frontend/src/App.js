import { useState } from "react";
import "@/App.css";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MessageCircle, Globe, GraduationCap, BookOpen, Briefcase, Award, Mail, Phone, MapPin, Send } from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in learning more about Learnopedia's services for studying abroad.");
    window.open(`https://wa.me/919426875138?text=${message}`, '_blank');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await axios.post(`${API}/submit-lead`, formData);
      setSubmitStatus('success');
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold text-purple-600">Learnopedia</span>
          </div>
          <button
            onClick={handleWhatsApp}
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            data-testid="header-whatsapp-button"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp Us
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-purple-50 to-orange-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-testid="hero-content">
              <h1 className="text-5xl md:text-6xl font-bold text-purple-600 mb-6 leading-tight">
                Turn Your Global Dreams Into Reality
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                From scientific career mapping to visa approval—your complete, stress-free pathway from Surat to top universities in the UK, Latvia, and beyond.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleWhatsApp}
                  className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  data-testid="hero-whatsapp-button"
                >
                  <MessageCircle className="h-6 w-6" />
                  Get Free Consultation
                </button>
                <a
                  href="#contact"
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  data-testid="hero-contact-button"
                >
                  <Mail className="h-6 w-6" />
                  Contact Us
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31"
                alt="International Students"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-purple-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div data-testid="stat-students">
              <div className="text-5xl font-bold text-orange-400 mb-2">5000+</div>
              <div className="text-lg">Students Guided</div>
            </div>
            <div data-testid="stat-countries">
              <div className="text-5xl font-bold text-orange-400 mb-2">15+</div>
              <div className="text-lg">Countries</div>
            </div>
            <div data-testid="stat-universities">
              <div className="text-5xl font-bold text-orange-400 mb-2">200+</div>
              <div className="text-lg">Partner Universities</div>
            </div>
            <div data-testid="stat-success">
              <div className="text-5xl font-bold text-orange-400 mb-2">95%</div>
              <div className="text-lg">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white" id="services">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-purple-600 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive Solutions for Your Educational Journey</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Study Abroad */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105" data-testid="service-study-abroad">
              <img
                src="https://images.unsplash.com/photo-1759734353125-6913ba6c6804"
                alt="Study Abroad"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="h-10 w-10 text-orange-500" />
                  <h3 className="text-3xl font-bold text-purple-600">Overseas Education Consulting</h3>
                </div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Navigate your path to prestigious universities in the UK, Latvia, and other top destinations. We handle everything from university selection to visa approval, ensuring a smooth journey to your dream institution.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                    <span>University selection & application assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                    <span>Visa guidance & documentation support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                    <span>Scholarship & financial aid assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                    <span>Pre-departure orientation & support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Career Counseling */}
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105" data-testid="service-career-counseling">
              <img
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846"
                alt="Career Counseling"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="h-10 w-10 text-purple-600" />
                  <h3 className="text-3xl font-bold text-purple-600">Career Counselling & Assessment</h3>
                </div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Discover your true potential with our scientific career mapping and psychometric assessments. Get personalized guidance to choose the right path that aligns with your strengths and aspirations.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <span>Comprehensive psychometric assessments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <span>Scientific career mapping & planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <span>One-on-one expert counseling sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <span>Course & career pathway guidance</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Test Preparation */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105" data-testid="service-test-prep">
              <img
                src="https://images.pexels.com/photos/7683728/pexels-photo-7683728.jpeg"
                alt="Test Preparation"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="h-10 w-10 text-orange-500" />
                  <h3 className="text-3xl font-bold text-purple-600">Test Preparation & Language Training</h3>
                </div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Achieve your target scores with our expert-led preparation courses for IELTS, TOEFL, and other essential exams. Learn from experienced trainers like Dr. Imran Surti.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                    <span>IELTS Academic & General Training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                    <span>TOEFL & PTE preparation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                    <span>English language proficiency training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                    <span>Expert trainers with proven track record</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Upskilling */}
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105" data-testid="service-upskilling">
              <img
                src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc"
                alt="Upskilling Programs"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-10 w-10 text-purple-600" />
                  <h3 className="text-3xl font-bold text-purple-600">Upskilling & Placement Programs</h3>
                </div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Enhance your employability with certified skill development programs. We provide training, funding assistance, and placement support to help you secure your dream job.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <span>Industry-relevant certified programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <span>Funding & financial assistance support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <span>Job placement assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                    <span>Interview preparation & career support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-orange-50" id="testimonials">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-purple-600 mb-4">Student Success Stories</h2>
            <p className="text-xl text-gray-600">Hear from our happy students</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Taikhum Patel Testimonial */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300" data-testid="testimonial-taikhum">
              <div className="flex items-start gap-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1627556704353-016baeb12c79"
                  alt="Taikhum Patel"
                  className="w-20 h-20 rounded-full object-cover border-4 border-orange-500"
                />
                <div>
                  <h4 className="text-2xl font-bold text-purple-600">Taikhum Patel</h4>
                  <p className="text-gray-600">IELTS Student - MBA Aspirant</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "Right from the time I joined the coaching class of Dr. Imran Surti for IELTS Academic till I completed my training, I think I have enriched myself as an individual in terms of IELTS Academic preparation. Now, I am more than prepared to take the exam any time soon. Thanks to Imran Sir & Learnopedia for providing me with the formal training and the much required guidance for the same. This will help me tremendously to get an excellent Overall Band Score in IELTS exam and thereby I will be able to realize my dream of doing MBA abroad. A trusted name (Learnopedia) and a much recommended mentor/coach (Dr. Imran Surti)."
              </p>
            </div>

            {/* Malkesh Patel Testimonial */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300" data-testid="testimonial-malkesh">
              <div className="flex items-start gap-4 mb-6">
                <img
                  src="https://images.pexels.com/photos/6238120/pexels-photo-6238120.jpeg"
                  alt="Malkesh Patel"
                  className="w-20 h-20 rounded-full object-cover border-4 border-purple-600"
                />
                <div>
                  <h4 className="text-2xl font-bold text-purple-600">Malkesh Patel</h4>
                  <p className="text-gray-600">Career Assessment Student</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "I am glad to take the Career Assessment Test from Learnopedia Institute and Consultancy. The test helped me to bring clarity and gave me a structured understanding to choose my career pathway. I thank the Counsellor Dr. Imran Surti for giving me the right guidance at this important juncture of my career."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-white" id="contact">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-purple-600 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Take the first step towards your global dreams</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-orange-50 rounded-2xl shadow-xl p-8 md:p-12">
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg" data-testid="success-message">
                Thank you! We've received your message and will contact you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg" data-testid="error-message">
                Oops! Something went wrong. Please try again or contact us via WhatsApp.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                  placeholder="Enter your full name"
                  data-testid="form-name-input"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                  placeholder="your.email@example.com"
                  data-testid="form-email-input"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="phone">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                  placeholder="+91 98765 43210"
                  data-testid="form-phone-input"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                  placeholder="Tell us about your educational goals and how we can help..."
                  data-testid="form-message-input"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                data-testid="form-submit-button"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-300 text-center">
              <p className="text-gray-600 mb-4">Or reach us directly:</p>
              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                data-testid="form-whatsapp-button"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-600 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-8 w-8 text-orange-400" />
                <span className="text-2xl font-bold">Learnopedia</span>
              </div>
              <p className="text-purple-100">
                Empowering students to achieve their global education dreams through personalized guidance and expert support.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 text-orange-400">Contact Info</h4>
              <div className="space-y-3 text-purple-100">
                <div className="flex items-start gap-2">
                  <Phone className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span>+91 94268 75138</span>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span>office.learnopedia@gmail.com</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Surat, Gujarat, India</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 text-orange-400">Quick Links</h4>
              <ul className="space-y-2 text-purple-100">
                <li><a href="#services" className="hover:text-orange-400 transition-colors">Our Services</a></li>
                <li><a href="#testimonials" className="hover:text-orange-400 transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-orange-400 transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-500 mt-8 pt-8 text-center text-purple-100">
            <p>© 2025 Learnopedia. All rights reserved. Built with ❤️ for students worldwide.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 z-40"
        aria-label="Chat on WhatsApp"
        data-testid="floating-whatsapp-button"
      >
        <MessageCircle className="h-8 w-8" />
      </button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

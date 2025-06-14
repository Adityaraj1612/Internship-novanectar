import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1a253c] text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div>
              <h1 className="text-xl font-bold text-blue-400">NOVANECTAR</h1>
              <p className="text-lg font-semibold">SERVICESPVT .LTD.</p>
            </div>
          </div>
          <p className="text-sm mb-4">
            We’re just a message away if you need support or have any queries.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg text-white text-sm font-medium"
          >
            Contact With Us →
          </Link>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Links</h2>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/internship">Internship</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/events">Events</Link></li>
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Courses</h2>
          <ul className="space-y-2 text-sm">
            <li>Web Development</li>
            <li>Marketing</li>
            <li>UI UX Designer</li>
            <li>Data Science</li>
            <li>Python</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
          <p className="text-sm mb-2">Whatsapp: 8979891703</p>
          <p className="text-sm mb-2">
            Location: GMS Road, Dehradun, Uttarakhand, India
          </p>
          <p className="text-sm mb-4">Email: Info@Novanectar.Co.In</p>
          <div className="flex space-x-4">
            <a href="#"><FaFacebook className="text-xl hover:text-blue-500" /></a>
            <a href="#"><FaInstagram className="text-xl hover:text-pink-500" /></a>
            <a href="#"><FaTwitter className="text-xl hover:text-sky-400" /></a>
            <a href="#"><FaLinkedin className="text-xl hover:text-blue-700" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 
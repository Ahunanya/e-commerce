import React, { useState } from "react";
import { motion } from 'framer-motion';
import { DollarSign, Lock, Banknote, Menu, X } from "lucide-react"; 

export default function FashionLandingPage() {
  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/400x500?text=Image+Unavailable";
  };

  const [isOpen, setIsOpen] = useState(false);

  const imageWithFallback = (src) => `${src}?sig=${Math.floor(Math.random() * 1000)}`;

  const flyInVariants = (direction) => ({
    hidden: { opacity: 0, x: direction === 'left' ? -50 : 50 },
    visible: { opacity: 1, x: 0 },
  });

  const sections = [
    { id: 'hero', direction: 'center' },
    { id: 'trendy', direction: 'left' },
    { id: 'bestsellers', direction: 'right' },
    { id: 'discounts', direction: 'left' },
    { id: 'articles', direction: 'right' },
    { id: 'contact', direction: 'left' },
    { id: 'newsletter', direction: 'right' },
    { id: 'footer', direction: 'center' },
  ]; 

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Header */}
        <motion.header
      className="sticky top-0 bg-black text-white py-6 px-10 flex justify-between items-center shadow-lg z-50"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Logo */}
      <h1 className="text-2xl font-bold tracking-wide">Fashion Luxe</h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
        <a href="#trendy" className="hover:text-gray-400 transition">Trendy</a>
        <a href="#bestsellers" className="hover:text-gray-400 transition">Best Sellers</a>
        <a href="#discounts" className="hover:text-gray-400 transition">Discounts</a>
        <a href="#testimonials" className="hover:text-gray-400 transition">Testimonials</a>
        <a href="#articles" className="hover:text-gray-400 transition">Articles</a>
        <a href="#contact" className="hover:text-gray-400 transition">Contact</a>
      </nav>

      {/* Mobile Toggle Button */}
      <button
        className="md:hidden p-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 w-full bg-black flex flex-col items-center space-y-6 py-6 md:hidden"
        >
          <a href="#trendy" onClick={() => setIsOpen(false)} className="hover:text-gray-400 transition">Trendy</a>
          <a href="#bestsellers" onClick={() => setIsOpen(false)} className="hover:text-gray-400 transition">Best Sellers</a>
          <a href="#discounts" onClick={() => setIsOpen(false)} className="hover:text-gray-400 transition">Discounts</a>
          <a href="#testimonials" onClick={() => setIsOpen(false)} className="hover:text-gray-400 transition">Testimonials</a>
          <a href="#articles" onClick={() => setIsOpen(false)} className="hover:text-gray-400 transition">Articles</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-gray-400 transition">Contact</a>
        </motion.nav>
      )}
    </motion.header>
      {/* Hero Section */}

      <motion.section
  className="relative bg-gray-100 text-center py-28 px-6 bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1500&q=80')",
  }}
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, ease: 'easeOut' }}
>
  <h2 className="text-5xl font-extrabold mb-6 text-white drop-shadow-lg">
    Elevate Your Style
  </h2>
  <p className="max-w-xl mx-auto text-gray-200 mb-8 drop-shadow-lg">
    Discover the latest trends in fashion with our exclusive collection.
  </p>
  <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition">
    Shop Now
  </button>
</motion.section>


      {/* Trendy Clothes */}
     <motion.section
  className="py-20 px-6 md:px-20 max-w-6xl mx-auto"
  variants={{
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  }}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
>
        <h3 className="text-3xl font-bold text-center mb-12">Trendy Clothes</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {['https://images.unsplash.com/photo-1490481651871-ab68de25d43d','https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb','https://images.unsplash.com/photo-1541099649105-f69ad21f3246'].map((src, idx) => (
            <div key={idx} className="bg-gray-50 shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform">
              <img src={`${src}?auto=format&fit=crop&w=800&q=80`} onError={handleImageError} alt="Fashion Item" className="w-full h-80 object-cover" />
              <div className="p-6">
                <h4 className="text-lg font-semibold">Stylish Outfit {idx+1}</h4>
                <p className="text-gray-500 mt-2">$99.99</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Best Selling Items */}
      <motion.section
        id="bestsellers"
        className="py-20 px-10 bg-gray-100"
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h3 className="text-3xl font-bold text-center mb-12">Best Selling Items</h3>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            'https://images.unsplash.com/photo-1490481651871-ab68de25d43d',
            'https://images.unsplash.com/photo-1514995669114-6081e934b693',
            'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb',
            'https://images.unsplash.com/photo-1541099649105-f69ad21f3246'
          ].map((src, idx) => (
            <div key={idx} className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform">
              <img src={`${src}?auto=format&fit=crop&w=800&q=80`} onError={handleImageError} alt={`Best Seller ${idx+1}`} className="w-full h-72 object-cover" />
              <div className="p-6">
                <h4 className="text-lg font-semibold">Best Seller {idx+1}</h4>
                <p className="text-gray-500 mt-2">$79.99</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Price Slashes & Discounts */}
      <motion.section
        id="discounts"
        className="py-20 px-10 bg-white"
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h3 className="text-3xl font-bold text-center mb-12">Price Slashes & Discounts</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            'https://images.unsplash.com/photo-1483985988355-763728e1935b',
            'https://images.unsplash.com/photo-1490481651871-ab68de25d43d',
            'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c'
          ].map((src, idx) => (
            <div key={idx} className="bg-gray-50 shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform">
              <img src={`${src}?auto=format&fit=crop&w=800&q=80`} onError={handleImageError} alt={`Discount Item ${idx+1}`} className="w-full h-72 object-cover" />
              <div className="p-6">
                <h4 className="text-lg font-semibold">Discount Item {idx+1}</h4>
                <p className="text-gray-500 mt-2 line-through">$99.99</p>
                <p className="text-red-500 font-bold">$59.99</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Articles */}
      <motion.section
        id="articles"
        className="py-20 px-10 bg-white"
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h3 className="text-3xl font-bold text-center mb-12">Fashion Articles</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
             'https://images.unsplash.com/photo-1490481651871-ab68de25d43d',
            'https://images.unsplash.com/photo-1521575107034-e0fa0b594529',
            'https://images.unsplash.com/photo-1512436991641-6745cdb1723f'
          ].map((src, idx) => (
            <div key={idx} className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
              <img src={`${src}?auto=format&fit=crop&w=800&q=80`} onError={handleImageError} alt={`Article ${idx+1}`} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h4 className="text-xl font-semibold mb-4">Latest Trend {idx+1}</h4>
              <p className="text-gray-600">Stay updated with the latest styles and tips from the fashion world.</p>
              <button className="mt-4 text-black font-medium hover:underline">Read More</button>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Contact & Newsletter */}
      <motion.section
        id="contact"
        className="py-20 px-10 bg-gray-100"
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h3 className="text-3xl font-bold text-center mb-12">Contact Us</h3>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <form className="bg-white p-8 rounded-2xl shadow-md">
            <input type="text" placeholder="Your Name" className="w-full p-4 border border-gray-300 rounded-lg mb-4" />
            <input type="email" placeholder="Your Email" className="w-full p-4 border border-gray-300 rounded-lg mb-4" />
            <textarea placeholder="Your Message" rows="5" className="w-full p-4 border border-gray-300 rounded-lg mb-4"></textarea>
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition w-full">Send Message</button>
          </form>

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h4 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h4>
            <p className="text-gray-600 mb-4">Get the latest fashion news, trends, and exclusive offers straight to your inbox.</p>
            <input type="email" placeholder="Your Email" className="w-full p-4 border border-gray-300 rounded-lg mb-4" />
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition w-full">Subscribe</button>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
        <motion.footer
        id="contact"
        className="bg-black text-gray-400 py-10 px-10"
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h5 className="text-white text-lg font-bold mb-4">Fashion Luxe</h5>
            <p>Luxury fashion, delivered with style and elegance.</p>
          </div>
          <div>
            <h5 className="text-white text-lg font-bold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><a href="#trendy" className="hover:text-white">Trendy</a></li>
              <li><a href="#bestsellers" className="hover:text-white">Best Sellers</a></li>
              <li><a href="#discounts" className="hover:text-white">Discounts</a></li>
              <li><a href="#articles" className="hover:text-white">Articles</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white text-lg font-bold mb-4">Contact</h5>
            <p>Email: contact@fashionluxe.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
          <div>
            <h5 className="text-white text-lg font-bold mb-4">Follow Us</h5>
            <p>Instagram | Facebook | Twitter</p>
          </div>
        </div>
        <p className="text-center text-gray-600 mt-8">© {new Date().getFullYear()} Fashion Luxe. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}

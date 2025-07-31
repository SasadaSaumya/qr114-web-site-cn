import React, { useState, useRef, useEffect } from "react";

// Using a popular icon library.
import {
  FaApple,
  FaGooglePlay,
  FaBoxOpen,
  FaHome,
  FaMobileAlt,
  FaShoppingCart,
  FaHeadset,
  FaArrowUp,
  FaVideo,
  FaCheck,
} from "react-icons/fa";
import { SiHuawei, SiXiaomi } from "react-icons/si";

// --- COMPONENT & ASSET IMPORTS ---
import ModelViewer from "../components/ModelViewer";
import Footer from "../components/Footer";
import VideoModal from "../components/VideoModal"; // <-- IMPORT THE NEW MODAL

// This imports your local images correctly
import perspectiveImg from "../assets/Perspective.png";
import frontImg from "../assets/Front.png";
import rightImg from "../assets/Right.png";
import backImg from "../assets/Back.png";
import leftImg from "../assets/Left.png";
import topImg from "../assets/Top.png";
import boxImg from "../assets/Box.png";
import assemblyImg from "../assets/assmbly.png";
import batteryImg from "../assets/18650 2200 mAh x 2.png";
import templateImg from "../assets/Template for anchoring x 1.png";
import wipesImg from "../assets/Clean Wipes x 2.png";
import padImg from "../assets/3M  Double side Pad x 1.png";
import boltImg from "../assets/M12 Anchor Bolt x 2.png";

// Using external links for these as they were in the original screenshot context
const logoImg = "https://qr114.com/assets/logo-Cm2NHHDY.png";
const apkIconImg = "https://cdn-icons-png.flaticon.com/512/8263/8263246.png";

// --- Reusable Hooks & Components ---
// (useIntersectionObserver, AnimatedSection, SectionTitle, FaqItem... keep them as they are)
const useIntersectionObserver = (options) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, isVisible];
};

const AnimatedSection = ({ children, className = "", style = {} }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  return (
    <section
      ref={ref}
      className={`section-container ${className} ${isVisible ? "visible" : ""}`}
      style={style}
    >
      {children}
    </section>
  );
};

const SectionTitle = ({ children }) => (
  <h2 className="section-title">{children}</h2>
);

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="faq-item">
      <button
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span className={`faq-icon ${isOpen ? "open" : ""}`}></span>
      </button>
      <div
        ref={contentRef}
        className="faq-answer-wrapper"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

// --- Main Product Page Component ---
function ProductPage() {
  const [activeView, setActiveView] = useState("3D");
  const [isScrolled, setIsScrolled] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [modalVideo, setModalVideo] = useState({
    isOpen: false,
    url: "",
    title: "",
  }); // <-- NEW STATE FOR MODAL

  // --- Refs for smooth scrolling ---
  const topRef = useRef(null);
  const appRef = useRef(null);
  const productRef = useRef(null);
  const buyRef = useRef(null);
  const supportRef = useRef(null);

  // --- Data for sections ---
  const videoGuides = [
    {
      title: "App Installation Video",
      url: "https://www.sample-videos.com/video321/mp4/240/big_buck_bunny_240p_30mb.mp4",
    },
    {
      title: "Device Assembly Video",
      url: "https://www.sample-videos.com/video321/mp4/240/big_buck_bunny_240p_10mb.mp4",
    },
    {
      title: "Device Installation Video",
      url: "https://www.sample-videos.com/video321/mp4/240/big_buck_bunny_240p_10mb.mp4",
    },
  ];
  // (All other data arrays: productViews, orderIncludes, appStores, etc. remain the same)
  const productViews = {
    Perspective: perspectiveImg,
    Front: frontImg,
    Right: rightImg,
    Back: backImg,
    Left: leftImg,
    Top: topImg,
  };
  const orderIncludes = [
    "QR114 Device",
    "Control APP",
    "18650 2200 mAh x 2 Batteries",
    "Anchor Bolt & Template",
    "3M Double side Pad and Clean Wips",
  ];
  const appStores = [
    { name: "iOS App Store", icon: <FaApple size={32} /> },
    { name: "Google Play", icon: <FaGooglePlay size={32} /> },
    { name: "AppGallery", icon: <SiHuawei size={32} /> },
    { name: "Xiaomi Store", icon: <SiXiaomi size={32} /> },
    {
      name: "APK Download",
      icon: <img src={apkIconImg} alt="APK" className="apk-icon" />,
    },
  ];
  const boxContents = [
    { name: "QR114 Device x 1", img: perspectiveImg },
    { name: "18650 2200 mAh x 2", img: batteryImg },
    { name: "Anchoring Template x 1", img: templateImg },
    { name: "Clean Wipes x 2", img: wipesImg },
    { name: "3M Double-sided Pad x 1", img: padImg },
    { name: "M12 Anchor Bolt x 2", img: boltImg },
  ];
  const assemblyParts = [
    { num: 1, name: "Device" },
    { num: 2, name: "On / Off Switch" },
    { num: 3, name: "18650 Battery x 2" },
    { num: 4, name: "Battery Cover" },
    { num: 5, name: "Back Cover" },
  ];
  const faqData = [
    {
      question: "What is the battery life of the QR114?",
      answer:
        "The QR114 is designed for 24/7 non-stop operation. It comes with two high-capacity 18650 batteries and can be mains powered for continuous recitation.",
    },
    {
      question: "How do I control the device?",
      answer:
        "The device is fully controlled via our dedicated mobile app, available for iOS and Android. It connects using Bluetooth 5.3 for a stable and responsive experience.",
    },
    {
      question: "What content is pre-loaded on the device?",
      answer:
        "The device comes with 32GB of internal storage, pre-loaded with a wide selection of complete Quran recitations from various renowned Qaris. You can manage and select reciters through the app.",
    },
    {
      question: "Is the installation process difficult?",
      answer:
        "Not at all. We provide a complete mounting kit, including an anchoring template, 3M adhesive pad, and anchor bolts, to suit different wall types. We also have detailed video guides to walk you through the process.",
    },
  ];
  const navLinks = [
    { text: "Home", icon: <FaHome />, ref: topRef },
    { text: "APP", icon: <FaMobileAlt />, ref: appRef },
    { text: "Product", icon: <FaBoxOpen />, ref: productRef },
    { text: "Buy", icon: <FaShoppingCart />, ref: buyRef },
    { text: "Support", icon: <FaHeadset />, ref: supportRef },
  ];

  // --- HANDLERS FOR MODAL ---
  const openModal = (video) => {
    setModalVideo({ isOpen: true, url: video.url, title: video.title });
  };

  const closeModal = () => {
    setModalVideo({ isOpen: false, url: "", title: "" });
  };

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const globalStyles = `
    /* (All your existing globalStyles CSS remains here...) */
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
    :root { --primary-green: #009933; --dark-green: #007A29; --light-gray: #f0f0f0; --off-white: #f9f9f9; --text-dark: #2c3e50; --text-light: #555; --border-color: #e0e0e0; }
    html { scroll-behavior: smooth; }
    body { font-family: 'Poppins', sans-serif; color: var(--text-light); background-color: #ffffff; margin: 0; overflow-x: hidden; }
    .section-container { padding: 80px 20px; max-width: 1200px; margin: 0 auto; opacity: 0; transform: translateY(40px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; }
    .section-container.visible { opacity: 1; transform: translateY(0); }
    .section-title { font-size: 2.8rem; text-align: center; margin-bottom: 60px; color: var(--text-dark); font-weight: 700; position: relative; }
    .section-title::after { content: ''; display: block; width: 80px; height: 4px; background-color: var(--primary-green); margin: 15px auto 0; border-radius: 2px; }
    .hero-section { height: 100vh; min-height: 700px; position: relative; display: flex; background-color: var(--light-gray); margin: 20px; border-radius: 24px; overflow: hidden; }
    .hero-green-panel { width: 50%; background: var(--primary-green); display: flex; justify-content: center; align-items: center; }
    .hero-title-wrapper { text-align: center; color: white; transform: translateX(25%);}
    .hero-title { font-size: 8rem; font-weight: 800; margin: 0; line-height: 1; }
    .hero-gray-panel { width: 50%; position: relative; }
    .hero-center-logo { position: absolute; width: 100px; height: 100px; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 10; background: #fff; padding: 15px; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); display: flex; justify-content: center; align-items: center; }
    .hero-center-logo img { width: 100%; height: 100%; object-fit: contain; }
    .hero-nav { position: absolute; bottom: 40px; right: 60px; list-style: none; padding: 0; text-align: right; }
    .nav-item { color: var(--text-dark); display: flex; align-items: center; justify-content: flex-end; margin-bottom: 20px; font-size: 1.1rem; font-weight: 500; cursor: pointer; transition: all 0.3s ease; }
    .nav-item:hover { color: var(--primary-green); transform: translateX(-10px); }
    .nav-item svg { margin-left: 15px; transition: transform 0.3s ease; }
    .nav-item:hover svg { transform: scale(1.2); }
    .product-viewer-container { min-height: 450px; display: flex; justify-content: center; align-items: center; margin-bottom: 40px; }
    .product-image-main { max-width: 100%; height: auto; max-height: 450px; transition: opacity 0.4s; animation: fadeIn 0.5s; }
    .view-selector-grid { display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; }
    .view-selector { border: 2px solid var(--border-color); padding: 8px; border-radius: 12px; cursor: pointer; transition: all 0.3s; background-color: white; text-align: center; }
    .view-selector:hover { transform: translateY(-5px); box-shadow: 0 8px 20px rgba(0,0,0,0.08); }
    .view-selector.active { border-color: var(--primary-green); box-shadow: 0 5px 20px rgba(0, 153, 51, 0.25); }
    .view-selector img { width: 80px; height: 80px; object-fit: contain; display: block; }
    .view-selector p { margin: 8px 0 0; font-size: 0.8rem; color: var(--text-dark); font-weight: 500; }
    .app-store-grid { display: flex; justify-content: center; align-items: center; gap: 30px; flex-wrap: wrap; }
    .app-store-item { display: flex; flex-direction: column; align-items: center; gap: 15px; padding: 20px; min-width: 120px; transition: transform 0.3s ease; cursor: pointer; }
    .app-store-item:hover { transform: translateY(-10px); }
    .app-store-icon { color: var(--text-dark); }
    .apk-icon { width: 32px; height: 32px; }
    .app-store-item p { margin: 0; font-size: 0.9rem; text-align: center; color: var(--text-dark); }
    .feature-spec-grid { display: flex; gap: 60px; flex-wrap: wrap; }
    .feature-spec-item { flex: 1; min-width: 300px; }
    .feature-spec-item h3 { font-size: 1.8rem; padding-bottom: 10px; margin-bottom: 20px; color: var(--text-dark); border-bottom: 3px solid var(--primary-green); display: inline-block;}
    .feature-spec-item p { line-height: 1.8; }
    .box-image-wrapper { display: flex; justify-content: center; margin-bottom: 60px; }
    .box-image { max-width: min(500px, 90%); transition: transform 0.3s ease; }
    .box-image:hover { transform: scale(1.05); }
    .box-contents-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 40px; text-align: center; }
    .box-content-item img { height: 80px; margin-bottom: 15px; object-fit: contain; transition: transform 0.3s; }
    .box-content-item:hover img { transform: scale(1.1); }
    .box-content-item p { margin: 0; font-size: 0.9rem; font-weight: 500; color: var(--text-dark); }
    .assembly-grid { display: flex; align-items: center; gap: 60px; flex-wrap: wrap-reverse; }
    .assembly-diagram { flex: 1.5; text-align: center; min-width: 300px; }
    .assembly-diagram img { max-width: 100%; }
    .assembly-parts { flex: 1; min-width: 280px; }
    .assembly-part-item { display: flex; align-items: center; margin-bottom: 25px; }
    .assembly-part-num { width: 40px; height: 40px; min-width: 40px; border-radius: 50%; background-color: var(--text-dark); color: white; display: inline-flex; justify-content: center; align-items: center; margin-right: 20px; font-weight: bold; font-size: 1.2rem; }
    .assembly-part-name { font-size: 1.1rem; color: var(--text-dark); }
    .video-guides { margin-top: 60px; text-align: center; }
    .video-guides-grid { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; }
    .video-guide-btn { background-color: white; color: var(--primary-green); border: 2px solid var(--primary-green); padding: 12px 24px; border-radius: 30px; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 10px; transition: all 0.3s ease; text-decoration: none; }
    .video-guide-btn:hover { background-color: var(--primary-green); color: white; transform: translateY(-3px); box-shadow: 0 4px 10px rgba(0, 153, 51, 0.3); }
    .order-grid { display: flex; align-items: center; gap: 50px; }
    .order-image-column { flex: 1; min-width: 300px; }
    .order-product-image { max-width: 100%; border-radius: 16px; }
    .order-details-column { flex: 1; min-width: 300px; }
    .order-promotion-text { color: var(--primary-green); font-weight: 600; margin: 0 0 10px; }
    .order-price { font-size: 4rem; font-weight: 700; color: var(--text-dark); margin: 0 0 25px; }
    .order-includes-list { list-style: none; padding: 0; margin: 0 0 30px; }
    .order-includes-list li { margin-bottom: 12px; display: flex; align-items: center; gap: 10px; color: var(--text-light); }
    .order-includes-list .check-icon { color: var(--primary-green); }
    .order-controls { display: flex; align-items: center; gap: 20px; margin-bottom: 30px; }
    .qty-label { font-weight: 500; color: var(--text-light); }
    .qty-selector { display: flex; align-items: center; background-color: #f7f7f7; border-radius: 50px; padding: 5px; }
    .qty-btn { background: none; border: none; font-size: 1.2rem; font-weight: 600; padding: 5px 15px; cursor: pointer; color: var(--text-light); }
    .qty-input { width: 40px; text-align: center; border: none; font-size: 1.1rem; font-weight: 600; -moz-appearance: textfield; background: none; }
    .qty-input::-webkit-outer-spin-button, .qty-input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
    .buy-now-btn { background: var(--primary-green); color: white; border: none; padding: 16px 40px; border-radius: 50px; font-size: 1.1rem; font-weight: 600; cursor: pointer; transition: all 0.3s ease; }
    .buy-now-btn:hover { background-color: var(--dark-green); box-shadow: 0 10px 20px rgba(0, 153, 51, 0.2); transform: translateY(-3px); }
    .faq-container { max-width: 800px; margin: 0 auto; }
    .faq-item { border-bottom: 1px solid var(--border-color); }
    .faq-question { width: 100%; background: none; border: none; text-align: left; padding: 25px 0; font-size: 1.2rem; font-weight: 500; color: var(--text-dark); cursor: pointer; display: flex; justify-content: space-between; align-items: center; }
    .faq-icon { width: 14px; height: 14px; position: relative; transition: transform 0.3s ease-in-out; }
    .faq-icon::before, .faq-icon::after { content: ''; position: absolute; background-color: var(--text-dark); transition: transform 0.3s ease-in-out; }
    .faq-icon::before { top: 50%; left: 0; width: 100%; height: 2px; transform: translateY(-50%); }
    .faq-icon::after { top: 0; left: 50%; width: 2px; height: 100%; transform: translateX(-50%); }
    .faq-icon.open { transform: rotate(135deg); }
    .faq-answer-wrapper { overflow: hidden; transition: max-height 0.4s ease-in-out; }
    .faq-answer { padding: 0 0 25px; line-height: 1.8; }
    .faq-answer p { margin: 0; }
    .scroll-to-top { position: fixed; bottom: 30px; right: 30px; background-color: var(--primary-green); color: white; border: none; border-radius: 50%; width: 50px; height: 50px; display: flex; justify-content: center; align-items: center; cursor: pointer; box-shadow: 0 4px 12px rgba(0,0,0,0.2); opacity: 0; transform: translateY(100px); transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1); z-index: 1000; }
    .scroll-to-top.visible { opacity: 1; transform: translateY(0); }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @media (max-width: 1200px) { .hero-title-wrapper { transform: translateX(15%); } }
    @media (max-width: 992px) { .hero-section { flex-direction: column; height: auto; min-height: 0; margin: 10px; border-radius: 16px; } .hero-green-panel { width: 100%; min-height: 50vh; padding: 40px 20px;} .hero-gray-panel { width: 100%; padding: 60px 20px; display: flex; justify-content: center; align-items: center;} .hero-title-wrapper { transform: none; } .hero-title { font-size: 5rem; } .hero-center-logo { display: none; } .hero-nav { position: static; text-align: center; } .nav-item { justify-content: center; } .nav-item svg { display: none; } }
    @media (max-width: 768px) { .section-container { padding: 60px 15px; } .section-title { font-size: 2.2rem; } .view-selector img { width: 60px; height: 60px; } .view-selector p { font-size: 0.7rem; } .order-grid { flex-direction: column; text-align: center; } .order-details-column { display: flex; flex-direction: column; align-items: center; } .buy-now-btn { width: 100%; margin-top: 10px; } }
    @media (max-width: 480px) { .hero-title { font-size: 3.5rem; } .order-price { font-size: 3rem; } }
  `;

  return (
    <>
      <style>{globalStyles}</style>
      <div ref={topRef}>
        <header className="hero-section">
          {/* ... hero-section JSX ... */}
          <div className="hero-green-panel">
            <div className="hero-title-wrapper">
              <h1 className="hero-title">QR114</h1>
            </div>
          </div>
          <div className="hero-center-logo">
            <img src={logoImg} alt="Qaf Logo" />
          </div>
          <div className="hero-gray-panel">
            <ul className="hero-nav">
              {navLinks.map((link) => (
                <li
                  key={link.text}
                  className="nav-item"
                  onClick={() => scrollToSection(link.ref)}
                >
                  {link.text} {link.icon}
                </li>
              ))}
            </ul>
          </div>
        </header>

        <main>
          {/* ... other sections JSX ... */}
          <div ref={appRef} style={{ backgroundColor: "var(--off-white)" }}>
            <AnimatedSection>
              <SectionTitle>Find QR114 App in Your Favorite Store</SectionTitle>
              <div className="app-store-grid">
                {appStores.map((store) => (
                  <div key={store.name} className="app-store-item">
                    <div className="app-store-icon">{store.icon}</div>
                    <p>{store.name}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
          <div ref={productRef}>
            <AnimatedSection
              style={{ backgroundColor: "#ffffff", textAlign: "center" }}
            >
              <SectionTitle>Quran Reciter QR114</SectionTitle>
              <div className="product-viewer-container">
                {activeView === "3D" ? (
                  <ModelViewer />
                ) : (
                  <img
                    key={activeView}
                    src={productViews[activeView]}
                    alt={`QR114 - ${activeView} view`}
                    className="product-image-main"
                  />
                )}
              </div>
              <div className="view-selector-grid">
                {["3D", ...Object.keys(productViews)].map((view) => (
                  <div
                    key={view}
                    onClick={() => setActiveView(view)}
                    className={`view-selector ${
                      activeView === view ? "active" : ""
                    }`}
                  >
                    <img
                      src={view === "3D" ? perspectiveImg : productViews[view]}
                      alt={view}
                    />
                    <p>{view}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
          <AnimatedSection className="feature-spec-grid">
            <div className="feature-spec-item">
              <h3>Specification</h3>
              <p>
                Body text for whatever you'd like to say. Add main takeaway
                points, quotes, anecdotes, or even a very very short story. Body
                text for whatever you'd like to say. Add main takeaway points,
                quotes, anecdotes, or even a very very short story. Body text
                for whatever you'd like to say.
              </p>
            </div>
            <div className="feature-spec-item">
              <h3>Features</h3>
              <p>
                Body text for whatever you'd like to say. Add main takeaway
                points, quotes, anecdotes, or even a very very short story. Body
                text for whatever you'd like to say. Add main takeaway points,
                quotes, anecdotes, or even a very very short story. Body text
                for whatever you'd like to say.
              </p>
            </div>
          </AnimatedSection>
          <div style={{ backgroundColor: "var(--off-white)" }}>
            <AnimatedSection>
              <SectionTitle>Inside the Box</SectionTitle>
              <div className="box-image-wrapper">
                <img src={boxImg} alt="Product Box" className="box-image" />
              </div>
              <div className="box-contents-grid">
                {boxContents.map((item) => (
                  <div key={item.name} className="box-content-item">
                    <img src={item.img} alt={item.name} />
                    <p>{item.name}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <SectionTitle>Assembly</SectionTitle>
            <div className="assembly-grid">
              <div className="assembly-diagram">
                <img src={assemblyImg} alt="Assembly diagram" />
              </div>
              <div className="assembly-parts">
                {assemblyParts.map((part) => (
                  <div key={part.num} className="assembly-part-item">
                    <span className="assembly-part-num">{part.num}</span>
                    <span className="assembly-part-name">{part.name}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* === UPDATED VIDEO GUIDES SECTION === */}
            <div className="video-guides">
              <SectionTitle>Getting Started</SectionTitle>
              <div className="video-guides-grid">
                {videoGuides.map((guide) => (
                  <button
                    key={guide.title}
                    className="video-guide-btn"
                    onClick={() => openModal(guide)}
                  >
                    <FaVideo /> {guide.title}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <div ref={buyRef}>
            <AnimatedSection>
              <div className="order-grid">
                <div className="order-image-column">
                  <img
                    src={perspectiveImg}
                    alt="QR114 Device"
                    className="order-product-image"
                  />
                </div>
                <div className="order-details-column">
                  <p className="order-promotion-text">Promotion</p>
                  <div className="order-price">$50.00</div>
                  <ul className="order-includes-list">
                    {orderIncludes.map((item) => (
                      <li key={item}>
                        <FaCheck className="check-icon" /> {item}
                      </li>
                    ))}
                  </ul>
                  <div className="order-controls">
                    <span className="qty-label">Qty:</span>
                    <div className="qty-selector">
                      <button
                        className="qty-btn"
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        className="qty-input"
                        value={quantity}
                        onChange={(e) =>
                          setQuantity(
                            Math.max(1, parseInt(e.target.value) || 1)
                          )
                        }
                      />
                      <button
                        className="qty-btn"
                        onClick={() => setQuantity((q) => q + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button className="buy-now-btn">Buy Now</button>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div ref={supportRef} style={{ backgroundColor: "var(--off-white)" }}>
            <AnimatedSection>
              <SectionTitle>FAQ</SectionTitle>
              <div className="faq-container">
                {faqData.map((faq, index) => (
                  <FaqItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </main>

        <Footer />

        <button
          className={`scroll-to-top ${isScrolled ? "visible" : ""}`}
          onClick={() => scrollToSection(topRef)}
          aria-label="Scroll to top"
        >
          <FaArrowUp size={22} />
        </button>
      </div>

      {/* === RENDER THE MODAL HERE === */}
      <VideoModal
        isOpen={modalVideo.isOpen}
        onClose={closeModal}
        videoUrl={modalVideo.url}
        title={modalVideo.title}
      />
    </>
  );
}

export default ProductPage;

import React, { useState, useRef, useEffect, Suspense } from "react";
import { useTranslation } from "react-i18next";
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
} from "react-icons/fa";
import {
  RiRestartFill,
  RiBattery2ChargeFill,
  RiSoundModuleFill,
  RiWifiFill,
  RiUserStarFill,
} from "react-icons/ri";
import {
  BsShieldShaded,
  BsCardChecklist,
  BsMemory,
  BsGlobe,
  BsDroplet,
} from "react-icons/bs";
import { TbRulerMeasure, TbTruckDelivery } from "react-icons/tb";
import { SiHuawei, SiXiaomi } from "react-icons/si";

// --- CSS & COMPONENT IMPORTS ---
import "../css/ProductPage.css";
import ModelViewer from "../components/ModelViewer";
import Footer from "../components/Footer";
import VideoModal from "../components/VideoModal";
import DistributorForm from "../components/DistributorForm";

// --- ASSET IMPORTS ---
import perspectiveImg from "../assets/Perspective.png";
import frontImg from "../assets/Front.png";
import rightImg from "../assets/Right.png";
import backImg from "../assets/Back.png";
import leftImg from "../assets/Left.png";
import topImg from "../assets/Top.png";
import boxImg from "../assets/Box.png";
import batteryReplacementDiagram from "../assets/assmbly.png";
import batteryImg from "../assets/18650 2200 mAh x 2.png";
import templateImg from "../assets/Template for anchoring x 1.png";
import wipesImg from "../assets/Clean Wipes x 2.png";
import padImg from "../assets/3M  Double side Pad x 1.png";
import boltImg from "../assets/M12 Anchor Bolt x 2.png";
import logoText from "../assets/qr114_test_logo.png";
import logoImg from "../assets/logo.png";
import appInstallVideo from "../assets/videos/Isntall_op1.mp4";
import assemblyVideo from "../assets/videos/Assembly.mp4";
import deviceInstallVideo from "../assets/videos/Install_oop2.mp4";

// --- I18N-READY DATA ---
const videoGuides = [
  { titleKey: "assemblySection.video1", url: appInstallVideo },
  { titleKey: "assemblySection.video2", url: assemblyVideo },
  { titleKey: "assemblySection.video3", url: deviceInstallVideo },
];
const productViews = {
  Perspective: { key: "productViews.perspective", img: perspectiveImg },
  Front: { key: "productViews.front", img: frontImg },
  Right: { key: "productViews.right", img: rightImg },
  Back: { key: "productViews.back", img: backImg },
  Left: { key: "productViews.left", img: leftImg },
  Top: { key: "productViews.top", img: topImg },
};
const appStores = [
  { nameKey: "appSection.ios", icon: <FaApple size={32} /> },
  { nameKey: "appSection.google", icon: <FaGooglePlay size={32} /> },
  { nameKey: "appSection.huawei", icon: <SiHuawei size={32} /> },
  { nameKey: "appSection.xiaomi", icon: <SiXiaomi size={32} /> },
];
const boxContents = [
  { nameKey: "boxSection.item1", img: perspectiveImg },
  { nameKey: "boxSection.item2", img: batteryImg },
  { nameKey: "boxSection.item3", img: templateImg },
  { nameKey: "boxSection.item4", img: wipesImg },
  { nameKey: "boxSection.item5", img: padImg },
  { nameKey: "boxSection.item6", img: boltImg },
];
const batteryParts = [
  { num: 1, nameKey: "assemblySection.parts.device" },
  { num: 2, nameKey: "assemblySection.parts.switch" },
  { num: 3, nameKey: "assemblySection.parts.battery" },
  { num: 4, nameKey: "assemblySection.parts.batteryCover" },
  { num: 5, nameKey: "assemblySection.parts.backCover" },
];
const faqData = [
  { questionKey: "faqSection.q1", answerKey: "faqSection.a1" },
  { questionKey: "faqSection.q2", answerKey: "faqSection.a2" },
  { questionKey: "faqSection.q3", answerKey: "faqSection.a3" },
  { questionKey: "faqSection.q4", answerKey: "faqSection.a4" },
];

const features = [
  {
    titleKey: "features.audio.title",
    pointsKey: "features.audio.points",
    icon: <RiSoundModuleFill />,
  },
  {
    titleKey: "features.power.title",
    pointsKey: "features.power.points",
    icon: <RiBattery2ChargeFill />,
  },
  {
    titleKey: "features.smart.title",
    pointsKey: "features.smart.points",
    icon: <RiWifiFill />,
  },
  {
    titleKey: "features.ux.title",
    pointsKey: "features.ux.points",
    icon: <RiUserStarFill />,
  },
];

const specifications = [
  {
    titleKey: "specifications.compliance.title",
    pointsKey: "specifications.compliance.points",
    icon: <BsCardChecklist />,
  },
  {
    titleKey: "specifications.memory.title",
    pointsKey: "specifications.memory.points",
    icon: <BsMemory />,
  },
  {
    titleKey: "specifications.connectivity.title",
    pointsKey: "specifications.connectivity.points",
    icon: <RiWifiFill />,
  },
  {
    titleKey: "specifications.languages.title",
    pointsKey: "specifications.languages.points",
    icon: <BsGlobe />,
  },
  {
    titleKey: "specifications.solar.title",
    pointsKey: "specifications.solar.points",
    icon: <BsShieldShaded />,
  },
  {
    titleKey: "specifications.waterproofing.title",
    pointsKey: "specifications.waterproofing.points",
    icon: <BsDroplet />,
  },
  {
    titleKey: "specifications.dimensions.title",
    pointsKey: "specifications.dimensions.points",
    icon: <TbRulerMeasure />,
  },
  {
    titleKey: "specifications.shipping.title",
    pointsKey: "specifications.shipping.points",
    icon: <TbTruckDelivery />,
  },
];

// --- REUSABLE & SECTIONAL COMPONENTS ---

const useIntersectionObserver = (options) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, options);
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => currentRef && observer.unobserve(currentRef);
  }, [options]);
  return [ref, isVisible];
};

const AnimatedSection = ({ children, className = "", id = "" }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  return (
    <section
      ref={ref}
      id={id}
      className={`section-container ${className} ${isVisible ? "visible" : ""}`}
    >
      {children}
    </section>
  );
};

const SectionTitle = ({ children }) => (
  <h2 className="section-title">{children}</h2>
);

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const languages = [
    { code: "en", name: "English" },
    { code: "zh", name: "中文" },
  ];
  return (
    <div className="language-switcher">
      <select
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        className="language-switcher-select"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

const HeroSection = ({ navLinks, scrollToSection }) => {
  const { t } = useTranslation();
  return (
    <header className="hero-section">
      <div className="hero-green-panel">
        <div className="hero-mobile-header" style={{backgroundColor: "#ffffff", width: "130px", padding: "10px", borderRadius: "10px"}}>
          <img src={logoImg} alt="QR114 Logo" className="hero-mobile-logo" />
          <img
            src={logoText}
            alt="QR114 Text Logo"
            className="hero-mobile-logo-text"
            style={{ width: "100px", height: "auto" }}
          />
        </div>
      </div>
      <div className="hero-center-logo">
        <img src={logoImg} alt="QR114 Product Logo" />
        <img src={logoText} alt="QR114 Text Logo" />
      </div>
      <div className="hero-gray-panel">
        <ul className="hero-nav">
          {navLinks.map((link) => (
            <li key={link.textKey} className="nav-item">
              <a
                href={`#${link.id}`}
                onClick={(e) => {
                  if (link.ref) {
                    e.preventDefault();
                    scrollToSection(link.ref);
                  }
                }}
              >
                {t(link.textKey)} {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

const ProductViewer = ({ activeView, setActiveView }) => {
  const { t } = useTranslation();
  return (
    <AnimatedSection className="product-viewer-section">
      <SectionTitle>{t("productTitle")}</SectionTitle>
      <div className="product-viewer-container">
        {activeView === "3D" ? (
          <ModelViewer />
        ) : (
          <img
            key={activeView}
            src={productViews[activeView].img}
            alt={`${t("productTitle")} - ${t(productViews[activeView].key)}`}
            className="product-image-main"
          />
        )}
      </div>
      <div className="view-selector-grid">
        {Object.keys(productViews).map((view) => (
          <div
            key={view}
            onClick={() => setActiveView(view)}
            className={`view-selector ${activeView === view ? "active" : ""}`}
          >
            <img src={productViews[view].img} alt={t(productViews[view].key)} />
            <p>{t(productViews[view].key)}</p>
          </div>
        ))}
        <div
          onClick={() => setActiveView("3D")}
          className={`view-selector ${activeView === "3D" ? "active" : ""}`}
        >
          <img src={perspectiveImg} alt={t("productViews.threeD")} />
          <p>{t("productViews.threeD")}</p>
        </div>
      </div>
    </AnimatedSection>
  );
};

const SpecAccordionItem = ({ title, points, icon, startOpen = false }) => {
  const [isOpen, setIsOpen] = useState(startOpen);
  const contentRef = useRef(null);

  return (
    <div className="spec-accordion-item">
      <button
        className="spec-accordion-header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="spec-accordion-icon-title">
          <span className="spec-icon">{icon}</span>
          <h4 className="spec-accordion-title">{title}</h4>
        </span>
        <span
          className={`spec-accordion-plus-icon ${isOpen ? "open" : ""}`}
        ></span>
      </button>
      <div
        ref={contentRef}
        className="spec-accordion-content-wrapper"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <div className="spec-accordion-content">
          <ul>
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const FeatureSpecSection = () => {
  const { t } = useTranslation();
  return (
    <AnimatedSection className="feature-spec-grid-section">
      <div className="feature-spec-grid">
        <div className="feature-spec-item">
          <h3>{t("featureSection.title")}</h3>
          <div className="spec-accordion">
            {features.map((feature, index) => (
              <SpecAccordionItem
                key={feature.titleKey}
                title={t(feature.titleKey)}
                points={t(feature.pointsKey, { returnObjects: true })}
                icon={feature.icon}
                startOpen={index === 0}
              />
            ))}
          </div>
        </div>
        <div className="feature-spec-item">
          <h3>{t("specSection.title")}</h3>
          <div className="spec-accordion">
            {specifications.map((spec, index) => (
              <SpecAccordionItem
                key={spec.titleKey}
                title={t(spec.titleKey)}
                points={t(spec.pointsKey, { returnObjects: true })}
                icon={spec.icon}
                startOpen={index === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

const AppSection = () => {
  const { t } = useTranslation();
  return (
    <AnimatedSection>
      <SectionTitle>{t("appSection.title")}</SectionTitle>
      <div className="app-store-grid">
        {appStores.map((store) => (
          <div key={store.nameKey} className="app-store-item" onClick={() => window.open("https://play.google.com/store/apps/details?id=com.astrivix.qr114", "_blank")}>
            <div className="app-store-icon">{store.icon}</div>
            <p>{t(store.nameKey)}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

const BoxContentsSection = () => {
  const { t } = useTranslation();
  return (
    <AnimatedSection>
      <SectionTitle>{t("boxSection.title")}</SectionTitle>
      <div className="box-image-wrapper">
        <img src={boxImg} alt={t("boxSection.title")} className="box-image" />
      </div>
      <div className="box-contents-grid">
        {boxContents.map((item) => (
          <div key={item.nameKey} className="box-content-item">
            <img src={item.img} alt={t(item.nameKey)} />
            <p>{t(item.nameKey)}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

const AssemblySection = ({ openModal }) => {
  const { t } = useTranslation();
  return (
    <AnimatedSection id="assembly">
      <SectionTitle>{t("assemblySection.batteryReplacementTitle")}</SectionTitle>
      <div className="battery-replacement-diagram">
        <img
          src={batteryReplacementDiagram}
          alt={t("assemblySection.batteryReplacementTitle")}
        />
      </div>
      <div className="battery-parts-legend">
        {batteryParts.map((part) => (
          <div key={part.num} className="battery-part-item">
            <span className="battery-part-num">{part.num}</span>
            <span className="battery-part-name">{t(part.nameKey)}</span>
          </div>
        ))}
      </div>
      <div className="video-guides">
        <SectionTitle>{t("assemblySection.gettingStartedTitle")}</SectionTitle>
        <div className="video-guides-grid">
          {videoGuides.map((guide) => (
            <button
              key={guide.titleKey}
              className="video-guide-btn"
              onClick={() => openModal(guide)}
            >
              <FaVideo /> {t(guide.titleKey)}
            </button>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

const DistributorSection = () => {
  const { t } = useTranslation();
  return (
    <AnimatedSection className="distributor-section" id="buy">
      <SectionTitle>{t("distributorSection.title")}</SectionTitle>
      <div className="distributor-content">
        <div className="distributor-image">
          <img src={perspectiveImg} alt="QR114 Product" />
        </div>
        <div className="distributor-form-container">
          <p className="contact-us-subtitle">{t("distributorSection.subtitle")}</p>
          <DistributorForm />
        </div>
      </div>
    </AnimatedSection>
  );
};

const FaqSection = () => {
  const { t } = useTranslation();
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
  return (
    <AnimatedSection>
      <SectionTitle>{t("faqSection.title")}</SectionTitle>
      <div className="faq-container">
        {faqData.map((faq, index) => (
          <FaqItem
            key={index}
            question={t(faq.questionKey)}
            answer={t(faq.answerKey)}
          />
        ))}
      </div>
    </AnimatedSection>
  );
};

const FinePrintSection = () => {
  const { t } = useTranslation();
  return (
    <div className="after-footer-section">
      <div className="fine-print-content">
        <h1>{t("privacyPolicy.title")}</h1>
        <p>{t("privacyPolicy.intro.p1")}</p>
        <p>{t("privacyPolicy.intro.p2")}</p>

        <h2>{t("privacyPolicy.interpretation.title")}</h2>
        <h3>{t("privacyPolicy.interpretation.subtitle")}</h3>
        <p>{t("privacyPolicy.interpretation.p1")}</p>

        <h3>{t("privacyPolicy.definitions.subtitle")}</h3>
        <p>{t("privacyPolicy.definitions.p1")}</p>
        <ul>
          {t("privacyPolicy.definitions.list", { returnObjects: true }).map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>

        <h2>{t("privacyPolicy.collecting.title")}</h2>
        <h3>{t("privacyPolicy.collecting.typesTitle")}</h3>
        <h4>{t("privacyPolicy.collecting.personalData.title")}</h4>
        <p>{t("privacyPolicy.collecting.personalData.p1")}</p>
        <ul>
          {t("privacyPolicy.collecting.personalData.list", { returnObjects: true }).map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h4>{t("privacyPolicy.collecting.usageData.title")}</h4>
        <p>{t("privacyPolicy.collecting.usageData.p1")}</p>
        <p>{t("privacyPolicy.collecting.usageData.p2")}</p>
        <p>{t("privacyPolicy.collecting.usageData.p3")}</p>
        <p>{t("privacyPolicy.collecting.usageData.p4")}</p>

        <h3>{t("privacyPolicy.collecting.appInfo.title")}</h3>
        <p>{t("privacyPolicy.collecting.appInfo.p1")}</p>
        <ul>
          <li>{t("privacyPolicy.collecting.appInfo.list.0")}</li>
        </ul>
        <p>{t("privacyPolicy.collecting.appInfo.p2")}</p>
        <p>{t("privacyPolicy.collecting.appInfo.p3")}</p>

        <h2>{t("privacyPolicy.use.title")}</h2>
        <p>{t("privacyPolicy.use.p1")}</p>
        <ul>
          {t("privacyPolicy.use.list1", { returnObjects: true }).map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>

        <p>{t("privacyPolicy.use.p2")}</p>
        <ul>
          {t("privacyPolicy.use.list2", { returnObjects: true }).map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>

        <h2>{t("privacyPolicy.retention.title")}</h2>
        <p>{t("privacyPolicy.retention.p1")}</p>
        <p>{t("privacyPolicy.retention.p2")}</p>

        <h2>{t("privacyPolicy.transfer.title")}</h2>
        <p>{t("privacyPolicy.transfer.p1")}</p>
        <p>{t("privacyPolicy.transfer.p2")}</p>
        <p>{t("privacyPolicy.transfer.p3")}</p>

        <h2>{t("privacyPolicy.delete.title")}</h2>
        <p>{t("privacyPolicy.delete.p1")}</p>
        <p>{t("privacyPolicy.delete.p2")}</p>
        <p>{t("privacyPolicy.delete.p3")}</p>
        <p>{t("privacyPolicy.delete.p4")}</p>

        <h2>{t("privacyPolicy.disclosure.title")}</h2>
        <h3>{t("privacyPolicy.disclosure.transactions.title")}</h3>
        <p>{t("privacyPolicy.disclosure.transactions.p1")}</p>
        <h3>{t("privacyPolicy.disclosure.lawEnforcement.title")}</h3>
        <p>{t("privacyPolicy.disclosure.lawEnforcement.p1")}</p>
        <h3>{t("privacyPolicy.disclosure.other.title")}</h3>
        <p>{t("privacyPolicy.disclosure.other.p1")}</p>
        <ul>
          {t("privacyPolicy.disclosure.other.list", { returnObjects: true }).map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2>{t("privacyPolicy.security.title")}</h2>
        <p>{t("privacyPolicy.security.p1")}</p>

        <h2>{t("privacyPolicy.children.title")}</h2>
        <p>{t("privacyPolicy.children.p1")}</p>
        <p>{t("privacyPolicy.children.p2")}</p>

        <h2>{t("privacyPolicy.links.title")}</h2>
        <p>{t("privacyPolicy.links.p1")}</p>
        <p>{t("privacyPolicy.links.p2")}</p>

        <h2>{t("privacyPolicy.changes.title")}</h2>
        <p>{t("privacyPolicy.changes.p1")}</p>
        <p>{t("privacyPolicy.changes.p2")}</p>
        <p>{t("privacyPolicy.changes.p3")}</p>

        <h2>{t("privacyPolicy.contact.title")}</h2>
        <p>{t("privacyPolicy.contact.p1")}</p>
        <ul>
          <li dangerouslySetInnerHTML={{ __html: t("privacyPolicy.contact.list.0") }}/>
          <li dangerouslySetInnerHTML={{ __html: t("privacyPolicy.contact.list.1") }}/>
        </ul>
      </div>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
function ProductPage() {
  const { t, i18n } = useTranslation();
  const [activeView, setActiveView] = useState("Perspective");
  const [isScrolled, setIsScrolled] = useState(false);
  const [modalVideo, setModalVideo] = useState({
    isOpen: false,
    url: "",
    title: "",
  });

  const topRef = useRef(null);
  const appRef = useRef(null);
  const productRef = useRef(null);
  const supportRef = useRef(null);
  const assemblyRef = useRef(null);

  const navLinks = [
    { textKey: "nav.home", icon: <FaHome />, ref: topRef, id: "home" },
    { textKey: "nav.product", icon: <FaBoxOpen />, ref: productRef, id: "product" },
    { textKey: "nav.app", icon: <FaMobileAlt />, ref: appRef, id: "app" },
    { textKey: "nav.assembly", icon: <RiRestartFill />, ref: assemblyRef, id: "assembly" },
    { textKey: "nav.buy", icon: <FaShoppingCart />, ref: null, id: "buy" },
    { textKey: "nav.support", icon: <FaHeadset />, ref: supportRef, id: "support" },
  ];

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  const openModal = (video) => {
    setModalVideo({ isOpen: true, url: video.url, title: t(video.titleKey) });
  };
  const closeModal = () => setModalVideo({ isOpen: false, url: "", title: "" });
  const scrollToSection = (ref) =>
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    const targetRef = navLinks.find((link) => link.id === hash)?.ref;
    if (targetRef?.current) {
      setTimeout(() => scrollToSection(targetRef), 100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <LanguageSwitcher />
      <div ref={topRef} id="home">
        <HeroSection navLinks={navLinks} scrollToSection={scrollToSection} />
      </div>
      <main>
        <div ref={productRef}>
          <ProductViewer
            activeView={activeView}
            setActiveView={setActiveView}
          />
        </div>
        <FeatureSpecSection />
        <div className="bg-off-white cohesive-section">
          <div ref={appRef}>
            <AppSection />
          </div>
          <BoxContentsSection />
        </div>
        <div ref={assemblyRef}>
          <AssemblySection openModal={openModal} />
        </div>
        <DistributorSection />
        <div className="bg-off-white cohesive-section">
          <div ref={supportRef}>
            <FaqSection />
          </div>
        </div>
      </main>
      <Footer />
      <FinePrintSection />
      <button
        className={`scroll-to-top ${isScrolled ? "visible" : ""}`}
        onClick={() => scrollToSection(topRef)}
        aria-label={t("scrollToTop")}
      >
        <FaArrowUp size={22} />
      </button>
      <VideoModal
        isOpen={modalVideo.isOpen}
        onClose={closeModal}
        videoUrl={modalVideo.url}
        title={modalVideo.title}
      />
    </>
  );
}

export default function ProductPageWrapper() {
  const { t } = useTranslation();
  return (
    <Suspense fallback={<div className="loading-fallback">{t("loading")}</div>}>
      <ProductPage />
    </Suspense>
  );
}
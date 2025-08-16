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
// NEW ICONS IMPORTED
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
import apkIconImg from "../assets/apk.png";
import logoImg from "../assets/logo.png";
import appInstallVideo from "../assets/videos/Isntall_op1.mp4";
import assemblyVideo from "../assets/videos/Assembly.mp4";
import deviceInstallVideo from "../assets/videos/Install_oop2.mp4";

// --- DATA ---
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
  { num: 1, name: "Device" },
  { num: 2, name: "On / Off Switch" },
  { num: 3, name: "18650 Battery x 2" },
  { num: 4, name: "Battery Cover" },
  { num: 5, name: "Back Cover" },
];
const faqData = [
  { questionKey: "faqSection.q1", answerKey: "faqSection.a1" },
  { questionKey: "faqSection.q2", answerKey: "faqSection.a2" },
  { questionKey: "faqSection.q3", answerKey: "faqSection.a3" },
  { questionKey: "faqSection.q4", answerKey: "faqSection.a4" },
];

// DATA with ICONS for the new accordion
const features = [
  {
    title: "Audio Excellence",
    points: [
      "Authentic Recitations: 6 certified Qaris",
      "Sound: 3W HD speaker",
      "Crystal-Clear Playback: Advanced noise reduction",
    ],
    icon: <RiSoundModuleFill />,
  },
  {
    title: "Power & Durability",
    points: [
      "Solar Charging: 2-hour sun exposure = 12 hours playback",
      "Backup Power: 4400mAh Li-ion battery (72 hours continuous use)",
      "Weather Resistance: IPX5 certified (rain/sand/dust proof)",
      "Military-Grade Shell: Shock-absorbent ABS polymer",
    ],
    icon: <RiBattery2ChargeFill />,
  },
  {
    title: "Smart Connectivity",
    points: [
      "Bluetooth 5.3: Seamless pairing (30m range)",
      "App Control: Select verses, reciters, and adjust volume",
    ],
    icon: <RiWifiFill />,
  },
  {
    title: "User Experience",
    points: [
      "Intuitive Interface: Via App",
      "Portable Design: 435g weight, 165x200x48mm",
      "Lifetime Updates: Free firmware upgrades",
    ],
    icon: <RiUserStarFill />,
  },
];
const specifications = [
  {
    title: "Compliance",
    points: ["SASO SIRC, CITC, PIPL, RoHS, Halal Certified"],
    icon: <BsCardChecklist />,
  },
  { title: "Memory", points: ["32GB internal"], icon: <BsMemory /> },
  {
    title: "Connectivity",
    points: ["Bluetooth 5.3 @ 1 MBPS"],
    icon: <RiWifiFill />,
  },
  {
    title: "Languages",
    points: ["English, Arabic, Chinese, Turkish, Bahasa Malay, Indonesia"],
    icon: <BsGlobe />,
  },
  {
    title: "Solar System",
    points: ["Built-In 6V / 5W"],
    icon: <BsShieldShaded />,
  },
  {
    title: "Waterproofing",
    points: ["IPX5 (Rain/dust proof)"],
    icon: <BsDroplet />,
  },
  {
    title: "Dimensions & Weight",
    points: [
      "Device: 165x200x48 mm",
      "Packing: 210x240x68 mm",
      "Net Weight: 435g +/- 1%",
      "Gross Weight: 650g +/- 1%",
    ],
    icon: <TbRulerMeasure />,
  },
  {
    title: "Shipping",
    points: ["Master Carton: 10 Sets"],
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
          <img src={logoImg} alt="QR114 Logo"  className="hero-mobile-logo" />
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
            alt={`${t("productTitle")} - ${t(
              productViews[activeView].key
            )} view`}
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
          <img src={perspectiveImg} alt="3D View" />
          <p>3D</p>
        </div>
      </div>
    </AnimatedSection>
  );
};

// ================================================================
// === NEW & IMPROVED FEATURE/SPEC ACCORDION SECTION ===
// ================================================================

const SpecAccordionItem = ({
  categoryTitle,
  points,
  icon,
  startOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(startOpen);
  const contentRef = useRef(null);

  const renderDetailList = (items) => (
    <ul>
      {items.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  );

  return (
    <div className="spec-accordion-item">
      <button
        className="spec-accordion-header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="spec-accordion-icon-title">
          <span className="spec-icon">{icon}</span>
          <h4 className="spec-accordion-title">{categoryTitle}</h4>
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
        <div className="spec-accordion-content">{renderDetailList(points)}</div>
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
                key={feature.title}
                categoryTitle={feature.title}
                points={feature.points}
                icon={feature.icon}
                startOpen={index === 0} // Open the first item by default
              />
            ))}
          </div>
        </div>
        <div className="feature-spec-item">
          <h3>{t("specSection.title")}</h3>
          <div className="spec-accordion">
            {specifications.map((spec, index) => (
              <SpecAccordionItem
                key={spec.title}
                categoryTitle={spec.title}
                points={spec.points}
                icon={spec.icon}
                startOpen={index === 0} // Open the first item by default
              />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

// ================================================================

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
      <SectionTitle>Battery Replacement</SectionTitle>
      <div className="battery-replacement-diagram">
        <img
          src={batteryReplacementDiagram}
          alt="Battery Replacement Diagram"
        />
      </div>
      <div className="battery-parts-legend">
        {batteryParts.map((part) => (
          <div key={part.num} className="battery-part-item">
            <span className="battery-part-num">{part.num}</span>
            <span className="battery-part-name">{part.name}</span>
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
              onClick={() => {
                openModal(guide)
                console.log("Test");
              }
              }
            >
              <FaVideo /> {t(guide.titleKey)}
            </button>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

const DistributorSection = () => (
  <AnimatedSection className="distributor-section" id="buy">
    <SectionTitle>Want to become a Distributor</SectionTitle>
    <div className="distributor-content">
      <div className="distributor-image">
        <img src={perspectiveImg} alt="QR114 Product" />
      </div>
      <div className="distributor-form-container">
        <p className="contact-us-subtitle">Contact Us</p>
        <DistributorForm />
      </div>
    </div>
  </AnimatedSection>
);

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

const FinePrintSection = () => (
  <div className="after-footer-section">
    <div className="fine-print-content">
      <p>
            This Privacy Policy describes Our policies and procedures on the
            collection, use and disclosure of Your information when You use the
            Service and tells You about Your privacy rights and how the law
            protects You.
          </p>
          <p>
            We use Your Personal data to provide and improve the Service. By
            using the Service, You agree to the collection and use of
            information in accordance with this Privacy Policy. This Privacy
            Policy has been created with the help of the Privacy Policy
            Generator.
          </p>

          <h2>Interpretation and Definitions</h2>
          <h3>Interpretation</h3>
          <p>
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions. The following definitions
            shall have the same meaning regardless of whether they appear in
            singular or in plural.
          </p>

          <h3>Definitions</h3>
          <p>For the purposes of this Privacy Policy:</p>
          <ul>
            <li>
              <strong>Account</strong> means a unique account created for You to
              access our Service or parts of our Service.
            </li>
            <li>
              <strong>Affiliate</strong> means an entity that controls, is
              controlled by or is under common control with a party, where
              "control" means ownership of 50% or more of the shares, equity
              interest or other securities entitled to vote for election of
              directors or other managing authority.
            </li>
            <li>
              <strong>Application</strong> refers to QR114, the software program
              provided by the Company.
            </li>
            <li>
              <strong>Company</strong> (referred to as either "the Company",
              "We", "Us" or "Our" in this Agreement) refers to RAOSS HK COMPANY
              LIMITED, UNIT B, ON 9/F, THOMSON COMMERCIAL BUILDING, NO. 8,
              THOMSON ROAD, WAN CHAI, HONG KONG.
            </li>
            <li>
              <strong>Country</strong> refers to: China
            </li>
            <li>
              <strong>Device</strong> means any device that can access the
              Service such as a computer, a cellphone or a digital tablet.
            </li>
            <li>
              <strong>Personal Data</strong> is any information that relates to
              an identified or identifiable individual.
            </li>
            <li>
              <strong>Service</strong> refers to the Application.
            </li>
            <li>
              <strong>Service Provider</strong> means any natural or legal
              person who processes the data on behalf of the Company. It refers
              to third-party companies or individuals employed by the Company to
              facilitate the Service, to provide the Service on behalf of the
              Company, to perform services related to the Service or to assist
              the Company in analyzing how the Service is used.
            </li>
            <li>
              <strong>Usage Data</strong> refers to data collected
              automatically, either generated by the use of the Service or from
              the Service infrastructure itself (for example, the duration of a
              page visit).
            </li>
            <li>
              <strong>You</strong> means the individual accessing or using the
              Service, or the company, or other legal entity on behalf of which
              such individual is accessing or using the Service, as applicable.
            </li>
          </ul>

          <h2>Collecting and Using Your Personal Data</h2>
          <h3>Types of Data Collected</h3>
          <h4>Personal Data</h4>
          <p>
            While using Our Service, We may ask You to provide Us with certain
            personally identifiable information that can be used to contact or
            identify You. Personally identifiable information may include, but
            is not limited to:
          </p>
          <ul>
            <li>Email address</li>
            <li>Usage Data</li>
          </ul>

          <h4>Usage Data</h4>
          <p>Usage Data is collected automatically when using the Service.</p>
          <p>
            Usage Data may include information such as Your Device's Internet
            Protocol address (e.g. IP address), browser type, browser version,
            the pages of our Service that You visit, the time and date of Your
            visit, the time spent on those pages, unique device identifiers and
            other diagnostic data.
          </p>
          <p>
            When You access the Service by or through a mobile device, We may
            collect certain information automatically, including, but not
            limited to, the type of mobile device You use, Your mobile device
            unique ID, the IP address of Your mobile device, Your mobile
            operating system, the type of mobile Internet browser You use,
            unique device identifiers and other diagnostic data.
          </p>
          <p>
            We may also collect information that Your browser sends whenever You
            visit our Service or when You access the Service by or through a
            mobile device.
          </p>

          <h3>Information Collected while Using the Application</h3>
          <p>
            While using Our Application, in order to provide features of Our
            Application, We may collect, with Your prior permission:
          </p>
          <ul>
            <li>Information regarding your location</li>
          </ul>
          <p>
            We use this information to provide features of Our Service, to
            improve and customize Our Service. The information may be uploaded
            to the Company's servers and/or a Service Provider's server or it
            may be simply stored on Your device.
          </p>
          <p>
            You can enable or disable access to this information at any time,
            through Your Device settings.
          </p>

          <h2>Use of Your Personal Data</h2>
          <p>The Company may use Personal Data for the following purposes:</p>
          <ul>
            <li>
              <strong>To provide and maintain our Service</strong>, including to
              monitor the usage of our Service.
            </li>
            <li>
              <strong>To manage Your Account:</strong> to manage Your
              registration as a user of the Service. The Personal Data You
              provide can give You access to different functionalities of the
              Service that are available to You as a registered user.
            </li>
            <li>
              <strong>For the performance of a contract:</strong> the
              development, compliance and undertaking of the purchase contract
              for the products, items or services You have purchased or of any
              other contract with Us through the Service.
            </li>
            <li>
              <strong>To contact You:</strong> To contact You by email,
              telephone calls, SMS, or other equivalent forms of electronic
              communication, such as a mobile application's push notifications
              regarding updates or informative communications related to the
              functionalities, products or contracted services, including the
              security updates, when necessary or reasonable for their
              implementation.
            </li>
            <li>
              <strong>To provide You</strong> with news, special offers and
              general information about other goods, services and events which
              we offer that are similar to those that you have already purchased
              or enquired about unless You have opted not to receive such
              information.
            </li>
            <li>
              <strong>To manage Your requests:</strong> To attend and manage
              Your requests to Us.
            </li>
            <li>
              <strong>For business transfers:</strong> We may use Your
              information to evaluate or conduct a merger, divestiture,
              restructuring, reorganization, dissolution, or other sale or
              transfer of some or all of Our assets, whether as a going concern
              or as part of bankruptcy, liquidation, or similar proceeding, in
              which Personal Data held by Us about our Service users is among
              the assets transferred.
            </li>
            <li>
              <strong>For other purposes:</strong> We may use Your information
              for other purposes, such as data analysis, identifying usage
              trends, determining the effectiveness of our promotional campaigns
              and to evaluate and improve our Service, products, services,
              marketing and your experience.
            </li>
          </ul>

          <p>
            We may share Your personal information in the following situations:
          </p>
          <ul>
            <li>
              <strong>With Service Providers:</strong> We may share Your
              personal information with Service Providers to monitor and analyze
              the use of our Service, to contact You.
            </li>
            <li>
              <strong>For business transfers:</strong> We may share or transfer
              Your personal information in connection with, or during
              negotiations of, any merger, sale of Company assets, financing, or
              acquisition of all or a portion of Our business to another
              company.
            </li>
            <li>
              <strong>With Affiliates:</strong> We may share Your information
              with Our affiliates, in which case we will require those
              affiliates to honor this Privacy Policy. Affiliates include Our
              parent company and any other subsidiaries, joint venture partners
              or other companies that We control or that are under common
              control with Us.
            </li>
            <li>
              <strong>With business partners:</strong> We may share Your
              information with Our business partners to offer You certain
              products, services or promotions.
            </li>
            <li>
              <strong>With other users:</strong> when You share personal
              information or otherwise interact in the public areas with other
              users, such information may be viewed by all users and may be
              publicly distributed outside.
            </li>
            <li>
              <strong>With Your consent:</strong> We may disclose Your personal
              information for any other purpose with Your consent.
            </li>
          </ul>

          <h2>Retention of Your Personal Data</h2>
          <p>
            The Company will retain Your Personal Data only for as long as is
            necessary for the purposes set out in this Privacy Policy. We will
            retain and use Your Personal Data to the extent necessary to comply
            with our legal obligations (for example, if we are required to
            retain your data to comply with applicable laws), resolve disputes,
            and enforce our legal agreements and policies.
          </p>
          <p>
            The Company will also retain Usage Data for internal analysis
            purposes. Usage Data is generally retained for a shorter period of
            time, except when this data is used to strengthen the security or to
            improve the functionality of Our Service, or We are legally
            obligated to retain this data for longer time periods.
          </p>

          <h2>Transfer of Your Personal Data</h2>
          <p>
            Your information, including Personal Data, is processed at the
            Company's operating offices and in any other places where the
            parties involved in the processing are located. It means that this
            information may be transferred to — and maintained on — computers
            located outside of Your state, province, country or other
            governmental jurisdiction where the data protection laws may differ
            than those from Your jurisdiction.
          </p>
          <p>
            Your consent to this Privacy Policy followed by Your submission of
            such information represents Your agreement to that transfer.
          </p>
          <p>
            The Company will take all steps reasonably necessary to ensure that
            Your data is treated securely and in accordance with this Privacy
            Policy and no transfer of Your Personal Data will take place to an
            organization or a country unless there are adequate controls in
            place including the security of Your data and other personal
            information.
          </p>

          <h2>Delete Your Personal Data</h2>
          <p>
            You have the right to delete or request that We assist in deleting
            the Personal Data that We have collected about You.
          </p>
          <p>
            Our Service may give You the ability to delete certain information
            about You from within the Service.
          </p>
          <p>
            You may update, amend, or delete Your information at any time by
            signing in to Your Account, if you have one, and visiting the
            account settings section that allows you to manage Your personal
            information. You may also contact Us to request access to, correct,
            or delete any personal information that You have provided to Us.
          </p>
          <p>
            Please note, however, that We may need to retain certain information
            when we have a legal obligation or lawful basis to do so.
          </p>

          <h2>Disclosure of Your Personal Data</h2>
          <h3>Business Transactions</h3>
          <p>
            If the Company is involved in a merger, acquisition or asset sale,
            Your Personal Data may be transferred. We will provide notice before
            Your Personal Data is transferred and becomes subject to a different
            Privacy Policy.
          </p>
          <h3>Law enforcement</h3>
          <p>
            Under certain circumstances, the Company may be required to disclose
            Your Personal Data if required to do so by law or in response to
            valid requests by public authorities (e.g. a court or a government
            agency).
          </p>
          <h3>Other legal requirements</h3>
          <p>
            The Company may disclose Your Personal Data in the good faith belief
            that such action is necessary to:
          </p>
          <ul>
            <li>Comply with a legal obligation</li>
            <li>Protect and defend the rights or property of the Company</li>
            <li>
              Prevent or investigate possible wrongdoing in connection with the
              Service
            </li>
            <li>
              Protect the personal safety of Users of the Service or the public
            </li>
            <li>Protect against legal liability</li>
          </ul>

          <h2>Security of Your Personal Data</h2>
          <p>
            The security of Your Personal Data is important to Us, but remember
            that no method of transmission over the Internet, or method of
            electronic storage is 100% secure. While We strive to use
            commercially acceptable means to protect Your Personal Data, We
            cannot guarantee its absolute security.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            Our Service does not address anyone under the age of 13. We do not
            knowingly collect personally identifiable information from anyone
            under the age of 13. If You are a parent or guardian and You are
            aware that Your child has provided Us with Personal Data, please
            contact Us. If We become aware that We have collected Personal Data
            from anyone under the age of 13 without verification of parental
            consent, We take steps to remove that information from Our servers.
          </p>
          <p>
            If We need to rely on consent as a legal basis for processing Your
            information and Your country requires consent from a parent, We may
            require Your parent's consent before We collect and use that
            information.
          </p>

          <h2>Links to Other Websites</h2>
          <p>
            Our Service may contain links to other websites that are not
            operated by Us. If You click on a third party link, You will be
            directed to that third party's site. We strongly advise You to
            review the Privacy Policy of every site you visit.
          </p>
          <p>
            We have no control over and assume no responsibility for the
            content, privacy policies or practices of any third party sites or
            services.
          </p>

          <h2>Changes to this Privacy Policy</h2>
          <p>
            We may update Our Privacy Policy from time to time. We will notify
            You of any changes by posting the new Privacy Policy on this page.
          </p>
          <p>
            We will let You know via email and/or a prominent notice on Our
            Service, prior to the change becoming effective and update the "Last
            updated" date at the top of this Privacy Policy.
          </p>
          <p>
            You are advised to review this Privacy Policy periodically for any
            changes. Changes to this Privacy Policy are effective when they are
            posted on this page.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, You can contact
            us:
          </p>
          <ul>
            <li>
              By email: <a href="mailto:admin@raoss.com">admin@raoss.com</a>
            </li>
            <li>
              By visiting this page on our website:{" "}
              <a
                href="https://qr114.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://qr114.com/
              </a>
            </li>
          </ul>
    </div>
  </div>
);

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
    {
      textKey: "nav.product",
      icon: <FaBoxOpen />,
      ref: productRef,
      id: "product",
    },
    { textKey: "nav.app", icon: <FaMobileAlt />, ref: appRef, id: "app" },
    {
      textKey: "Getting Started",
      icon: <RiRestartFill />,
      ref: assemblyRef,
      id: "assembly",
    },
    { textKey: "Distributor", icon: <FaShoppingCart />, ref: null, id: "buy" },
    { textKey: "FAQ", icon: <FaHeadset />, ref: supportRef, id: "support" },
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
  }, [navLinks]);

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
        aria-label="Scroll to top"
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
  return (
    <Suspense fallback={<div className="loading-fallback">Loading...</div>}>
      <ProductPage />
    </Suspense>
  );
}

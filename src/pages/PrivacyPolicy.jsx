// src/pages/PrivacyPolicy.js (or wherever you saved it)

import React from 'react';
import { useTranslation } from 'react-i18next'; // 1. Import the hook
import Footer from '../components/Footer';

const LegalPageStyles = `
  // ... your CSS styles remain exactly the same ...
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
  
  body {
    font-family: 'Poppins', sans-serif;
    background-color: #f9f9f9;
    margin: 0;
  }
  .legal-container { max-width: 900px; margin: 0 auto; padding: 40px 20px; }
  .legal-hero { background-color: #009933; color: white; padding: 60px 40px; border-radius: 16px; margin-bottom: 40px; text-align: center; }
  .legal-hero h1 { font-size: 3rem; font-weight: 700; margin: 0 0 10px; }
  .legal-hero p { font-size: 1rem; opacity: 0.9; margin: 0; }
  .legal-content { background-color: #ffffff; padding: 40px; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.07); color: #555; line-height: 1.8; }
  .legal-content h2 { font-size: 1.8rem; color: #2c3e50; margin-top: 40px; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid #f0f0f0; }
  .legal-content h3 { font-size: 1.4rem; color: #2c3e50; margin-top: 30px; margin-bottom: 15px; }
  .legal-content h2:first-of-type { margin-top: 0; }
  .legal-content p, .legal-content li { font-size: 1rem; margin-bottom: 15px; }
  .legal-content ul { list-style-type: disc; padding-left: 25px; }
  .legal-content a { color: #009933; font-weight: 600; text-decoration: none; }
  .legal-content a:hover { text-decoration: underline; }
  @media(max-width: 768px) {
    .legal-hero h1 { font-size: 2.2rem; }
    .legal-content { padding: 25px; }
  }
`;

function PrivacyPolicy() {
  const { t } = useTranslation(); // 2. Initialize the translation function

  return (
    <>
      <style>{LegalPageStyles}</style>
      <div className="legal-container">
        {/* --- 3. Replace all hardcoded text below --- */}
        <div className="legal-hero">
          <h1>{t("privacyPolicy.title")}</h1>
          <p>{t("privacyPolicy.lastUpdated")}</p> {/* New key needed for this */}
        </div>

        <div className="legal-content">
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
            <li dangerouslySetInnerHTML={{ __html: t("privacyPolicy.contact.list.0") }} />
            <li dangerouslySetInnerHTML={{ __html: t("privacyPolicy.contact.list.1") }} />
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
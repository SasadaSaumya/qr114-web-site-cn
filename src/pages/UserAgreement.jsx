// src/pages/UserAgreement.js

import React from "react";
import { useTranslation, Trans } from "react-i18next"; // 1. Import hooks
import Footer from "../components/Footer";

const LegalPageStyles = `
  // ... your CSS styles remain exactly the same ...
`;

function UserAgreement() {
  const { t } = useTranslation(); // 2. Initialize translation function

  return (
    <>
      <style>{LegalPageStyles}</style>
      <div className="legal-container">
        {/* --- 3. Replace all hardcoded text below --- */}
        <div className="legal-hero">
          <h1>{t("userAgreement.title")}</h1>
          <p>{t("userAgreement.lastUpdated")}</p>
        </div>

        <div className="legal-content">
          <h2>{t("userAgreement.introduction.title")}</h2>
          <p
            dangerouslySetInnerHTML={{
              __html: t("userAgreement.introduction.p1"),
            }}
          />
          <p>
            <Trans i18nKey="userAgreement.introduction.p2">
              <strong>
                By creating an account, or by accessing or using the Service,
                you acknowledge that you have read, understood, and agree to be
                bound by these Terms and our{" "}
                <a href="/privacy-policy">Privacy Policy</a>, which is
                incorporated herein by reference.
              </strong>{" "}
              If you do not agree to these Terms, you may not access or use the
              Service.
            </Trans>
          </p>

          <h2>{t("userAgreement.accounts.title")}</h2>
          <p>{t("userAgreement.accounts.p1")}</p>
          <ul>
            {t("userAgreement.accounts.list", { returnObjects: true }).map(
              (item, i) => (
                <li key={i}>{item}</li>
              )
            )}
          </ul>
          <p>{t("userAgreement.accounts.p2")}</p>

          <h2>{t("userAgreement.intellectualProperty.title")}</h2>
          <p>{t("userAgreement.intellectualProperty.p1")}</p>
          <p>{t("userAgreement.intellectualProperty.p2")}</p>

          <h2>{t("userAgreement.permittedUse.title")}</h2>
          <p>{t("userAgreement.permittedUse.p1")}</p>
          <p>{t("userAgreement.permittedUse.p2")}</p>
          <ul>
            {t("userAgreement.permittedUse.list", { returnObjects: true }).map(
              (item, i) => (
                <li key={i}>{item}</li>
              )
            )}
          </ul>

          <h2>{t("userAgreement.termination.title")}</h2>
          <p>{t("userAgreement.termination.p1")}</p>
          <p>{t("userAgreement.termination.p2")}</p>

          <h2>{t("userAgreement.disclaimer.title")}</h2>
          <p
            dangerouslySetInnerHTML={{
              __html: t("userAgreement.disclaimer.p1"),
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: t("userAgreement.disclaimer.p2"),
            }}
          />

          <h2>{t("userAgreement.governingLaw.title")}</h2>
          <p>{t("userAgreement.governingLaw.p1")}</p>
          <p>{t("userAgreement.governingLaw.p2")}</p>

          <h2>{t("userAgreement.changes.title")}</h2>
          <p>{t("userAgreement.changes.p1")}</p>
          <p>{t("userAgreement.changes.p2")}</p>

          <h2>{t("userAgreement.contact.title")}</h2>
          <p>{t("userAgreement.contact.p1")}</p>
          <ul>
            {t("userAgreement.contact.list", { returnObjects: true }).map(
              (item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
              )
            )}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserAgreement;

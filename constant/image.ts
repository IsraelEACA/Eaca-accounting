import { StaticImageData } from "next/image";

import LogoImage from "@/public/logo.svg";
import BannerImage from "@/public/banner-img.svg";

// services Icons
import TaxAccounting from "@/public/tax-accounting.svg";
import PayrollServices from "@/public/payroll.svg";
import Bookeeping from "@/public/bookeeping.svg";
import BusinessFormation from "@/public/business-formation.svg";
import Compliance from "@/public/compliance.svg";
import BusinessConsulting from "@/public/business-consulting.svg";
import ManagementReports from "@/public/management-reports.svg";
import TaxPlanning from "@/public/tax-planning.svg";

// about us images
import AboutFounder from "@/public/about-founder.svg";

// professional value exports
import Precision from "@/public/precision.svg";
import Dedication from "@/public/dedication.svg";
import Reliability from "@/public/reliability.svg";
import Excellence from "@/public/excellence.svg";

// contact us Images
import ContactBanner from "@/public/contact-us-image.jpg";

interface ImageData {
  LogoImage: StaticImageData;
  BannerImage: StaticImageData;

  // services imports
  TaxAccounting: StaticImageData;
  PayrollServices: StaticImageData;
  Bookeeping: StaticImageData;
  BusinessFormation: StaticImageData;
  Compliance: StaticImageData;
  BusinessConsulting: StaticImageData;
  ManagementReports: StaticImageData;
  TaxPlanning: StaticImageData;

  // about us images
  AboutFounder: StaticImageData;

  // professional Image
  Precision: StaticImageData;
  Dedication: StaticImageData;
  Reliability: StaticImageData;
  Excellence: StaticImageData;

  // contact us image imports
  ContactBanner: StaticImageData;
}

export const EacaImages: ImageData = {
  LogoImage,
  BannerImage,
  // services imports
  TaxAccounting,
  PayrollServices,
  Bookeeping,
  BusinessFormation,
  Compliance,
  BusinessConsulting,
  ManagementReports,
  TaxPlanning,

  // about us images
  AboutFounder,

  // professional image imports
  Precision,
  Dedication,
  Reliability,
  Excellence,

  // contact us images
  ContactBanner,
};

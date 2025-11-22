import { StaticImageData } from "next/image";

import LogoImage from "@/public/logo.svg";
import BannerImage from "@/public/banner-img.svg";
import AccountBanner from "@/public/images/account-banner.svg";

// professional value exports
import Reliability from "@/public/reliability.svg";
import Excellence from "@/public/excellence.svg";

// new image Imports
import Precision from "@/public/precision.svg";
import Dedication from "@/public/dedication.svg";
import AboutImage from "@/public/images/aboutImage.svg";
import ContactBanner from "@/public/contact-us-image.jpg";

// services imports
import Bookeeping from "@/public/images/bookeeping.svg";
import Accounting from "@/public/images/accounting.svg";
import TaxPlanning from "@/public/images/tax-planning.svg";
import OutSourced from "@/public/images/outsourced.svg";
import Management from "@/public/images/management.svg";
import Digital from "@/public/images/digital.svg";

// who we work with
import FinancialServices from "@/public/images/finance-services.svg";
import HighGrowth from "@/public/images/high-growth.svg";
import PropertyDevelopers from "@/public/images/property-developer.svg";
import Manufacturing from "@/public/images/construction.svg";
import Consultancy from "@/public/images/consultancy.svg";
import ManagementServices from "@/public/images/management.svg";

interface ImageData {
  LogoImage: StaticImageData;
  BannerImage: StaticImageData;
  AccountBanner: StaticImageData;
  Precision: StaticImageData;
  Dedication: StaticImageData;
  Reliability: StaticImageData;
  Excellence: StaticImageData;

  // contact us image imports
  ContactBanner: StaticImageData;

  // new images
  AboutImage: StaticImageData;
  Bookeeping: StaticImageData;
  Accounting: StaticImageData;
  TaxPlanning: StaticImageData;
  OutSourced: StaticImageData;
  Management: StaticImageData;
  Digital: StaticImageData;

  // who we work with
  FinancialServices: StaticImageData;
  HighGrowth: StaticImageData;
  PropertyDevelopers: StaticImageData;
  Manufacturing: StaticImageData;
  Consultancy: StaticImageData;
  ManagementServices: StaticImageData;
}

export const EacaImages: ImageData = {
  LogoImage,
  BannerImage,
  AccountBanner,
  // professional image imports
  Precision,
  Dedication,
  Reliability,
  Excellence,

  // contact us images
  ContactBanner,

  // new images
  AboutImage,
  Bookeeping,
  Accounting,
  TaxPlanning,
  OutSourced,
  Management,
  Digital,

  // who we work with
  FinancialServices,
  HighGrowth,
  PropertyDevelopers,
  Manufacturing,
  Consultancy,
  ManagementServices,
};

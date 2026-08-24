export const site = {
  name: "Jack Ferrence",
  legalName: "Jack Ferrence Web Design",
  tagline: "Websites for California service companies.",
  description:
    "Fast websites and Google Business Profile and Yelp setup for owner-operated service companies across California, based in Newport Beach.",
  url: "https://jackferrence.com",
  phoneDisplay: "(949) 414-6804",
  phoneHref: "tel:+19494146804",
  email: "hello@jackferrence.com",
  emailHref: "mailto:hello@jackferrence.com",
  supportEmail: "support@jackferrence.com",
  supportEmailHref: "mailto:support@jackferrence.com",
  location: "Newport Beach, California",
  linkedin: "https://www.linkedin.com/in/jack-ferrence-765610210/",
  googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLScNWcDu4L2TNBYOOZdFvP2TlDUY98LfwZBtBvWBPH9XkJ2jRw/viewform",
  serviceAreas: [
    "California",
    "Newport Beach",
    "Orange County",
    "Coastal Southern California",
  ],
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/process/", label: "Process" },
  { href: "/services/", label: "Pricing" },
  { href: "/about/", label: "About" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact/", label: "Contact" },
];

export const packages = [
  {
    name: "One-page website",
    timeline: "2 weeks",
    price: "$1,200",
    note: "A focused site that makes the business clear and gets the call.",
    includes: ["All copywriting", "Domain setup", "Business email setup", "2 rounds of revisions"],
  },
  {
    name: "Three-page website",
    timeline: "2 weeks",
    price: "$1,900",
    note: "More room for the work, the proof, and the service details buyers need.",
    includes: ["All copywriting", "Domain setup", "Business email setup", "2 rounds of revisions"],
    featured: true,
  },
  {
    name: "Five-page website",
    timeline: "2 weeks",
    price: "$2,500",
    note: "A complete local presence for businesses with several valuable services.",
    includes: ["All copywriting", "Domain setup", "Business email setup", "2 rounds of revisions"],
  },
];

export const additionalServices = [
  { name: "Google Business Profile setup", price: "$500", detail: "Claiming or clean setup, categories, services, description, photos, hours, and core profile fields. Customers are 2.7x more likely to consider a business reputable when it has a complete Business Profile on Search and Maps (Google).", timing: "3 days after admin access" },
  { name: "Yelp profile setup", price: "$500", detail: "Claiming or clean setup, categories, services, hours, photos, and core profile fields on Yelp. 44% of consumers refer to Yelp for business reviews (BrightLocal, 2026). Review requests are Google only—Yelp prohibits soliciting reviews and filters out ones it flags as solicited.", timing: "3 days after admin access" },
  { name: "Google + Yelp together", price: "$750", detail: "Both profiles set up together at a bundled rate, with verification handled separately by the business owner.", timing: "3 days after admin access" },
];

export const extraServicePage = { name: "Extra service page", price: "$300", detail: "A targeted landing page for one additional service, built to match the main site.", timing: "3 days" };

export const demos = [
  {
    trade: "Painting contractor",
    package: "Five-page package",
    name: "Cardinal Painting Co.",
    kicker: "The prep is why it still looks good in year eight.",
    theme: "sand",
    url: "/demos/cardinal-painting/",
  },
  {
    trade: "Plumbing",
    package: "Five-page package",
    name: "Redline Plumbing & Drain",
    kicker: "A real number before the work starts.",
    theme: "blue",
    url: "/demos/redline-plumbing/",
  },
  {
    trade: "HVAC contractor",
    package: "Five-page package",
    name: "Westline Air",
    kicker: "Clear options when comfort cannot wait.",
    theme: "orange",
    url: "/demos/westline-air/",
  },
];

export const otherDemos = [
  { name: "Stonecrop Landscape", url: "/demos/stonecrop-landscape/" },
  { name: "Cobalt Pool Care", url: "/demos/cobalt-pool/" },
  { name: "Harbor Point Marine", url: "/demos/harbor-point/" },
];

export const demoFaqs = [
  {
    question: "What exactly is the free demo?",
    answer:
      "Jack creates a personalized website direction using details about your business, services, service area, and brand. You see the messaging, page structure, and customer path before deciding whether to spend anything.",
  },
  {
    question: "Is there really no commitment?",
    answer:
      "Yes. You review the demo, then decide whether a paid build makes sense. Requesting or receiving the demo does not obligate you to hire Jack.",
  },
  {
    question: "How quickly will I receive it?",
    answer:
      "Jack delivers the demo in under seven days after he has the information and materials needed to start.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "Your business name, services, service area, current website if you have one, and what you want the new site to help customers do. Existing logos and photos help but are not required to begin.",
  },
  {
    question: "Do I have to get on a call?",
    answer: "No. Request a demo and Jack will have it built before you ever talk.",
    linkText: "Request a Demo (10 minutes)",
    linkHref: site.googleFormUrl,
  },
];

export const faqs = [
  {
    question: "Do I need to write the website copy?",
    answer:
      "No. Copywriting is included. Jack gets the raw details from one short call and your intake, writes the site, and sends it to you for approval. You do not start with a blank document.",
  },
  {
    question: "What do you need from me?",
    answer:
      "Your services, service area, phone number, any pricing you want shown, and the photos or logo you already have.",
  },
  {
    question: "Will I own the site and domain?",
    answer:
      "Yes. The domain is registered in your name, and the finished site is yours. If you ever cancel a care plan, the site transfers to an account you control. There is no proprietary website builder lock-in.",
  },
  {
    question: "Can you guarantee where I rank on Google?",
    answer:
      "No honest provider can guarantee a ranking. The work covers a technically sound site, clear local service content, and a correctly set up Google Business Profile—the foundation needed to compete locally. That foundation matters for AI answers too: 58% of ChatGPT's results for local-intent prompts are business websites, and directories account for only 15% (BrightLocal). No site, no citation.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Choose a monthly care plan if you want Jack to handle updates and keep an eye on the site, or request changes as needed at $110 per hour, one-hour minimum. Either way, you still have a person you can reach.",
  },
  {
    question: "How does payment work?",
    answer:
      "Projects are booked with 50% up front. The remaining 50% is due after you approve the finished site and before launch. Any service under $500 is paid in full up front. Monthly care starts only after the site is live.",
  },
];

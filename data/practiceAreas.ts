export interface PracticeItem {
    title: string;
    slug: string;
    shortDescription: string;
    longDescription?: string;
    services?: string[];
}

export interface PracticeCategory {
    title: string;
    items: PracticeItem[];
}

export const practiceAreasData: PracticeCategory[] = [
    {
        title: "Civil & Property Disputes",
        items: [
            {
                title: "Property & Real Estate Disputes",
                slug: "property-real-estate-law",
                shortDescription: "Expert legal counsel for property disputes, real estate transactions, and land rights.",
                longDescription: "Our firm provides comprehensive legal assistance in all matters related to property and real estate. From drafting and vetting sale deeds to resolving complex title disputes and navigating regulatory compliance, our dedicated team ensures your real estate investments are legally sound and protected.",
                services: [
                    "Title Verification and Due Diligence",
                    "Drafting and Registration of Sale Deeds",
                    "Lease and Leave & License Agreements",
                    "Property Dispute Resolution and Litigation",
                    "RERA Compliance and Disputes"
                ]
            },
            {
                title: "Divorce & Family Disputes",
                slug: "family-matrimonial-law",
                shortDescription: "Compassionate representation in divorce, child custody, and family disputes.",
                longDescription: "We understand that family disputes are emotionally taxing. Our experienced legal practitioners offer sensitive, strategic, and confidential counsel for matrimonial disputes, including contested and mutual consent divorces, child custody battles, alimony, and domestic violence matters.",
                services: [
                    "Mutual Consent and Contested Divorce",
                    "Child Custody and Visitation Rights",
                    "Maintenance and Alimony Claims",
                    "Restitution of Conjugal Rights",
                    "Domestic Violence Cases"
                ]
            },
            {
                title: "Breach of Contract & Enforcement",
                slug: "contract-law",
                shortDescription: "Drafting, reviewing, and enforcing commercial and civil contracts.",
                longDescription: "Contracts form the bedrock of any transaction. We excel in drafting airtight agreements tailored to your specific needs and enforcing your rights in the event of a breach. Our proactive approach minimizes legal risks and safeguards your interests.",
                services: [
                    "Drafting and Vetting of Commercial Agreements",
                    "Breach of Contract Litigation",
                    "Specific Performance Suits",
                    "Non-Disclosure and Confidentiality Agreements",
                    "Partnership and Joint Venture Agreements"
                ]
            },
            {
                title: "Consumer Fraud & Corporate Negligence",
                slug: "consumer-protection-law",
                shortDescription: "Defending consumer rights against unfair trade practices and deficient services.",
                longDescription: "Consumers are often vulnerable to corporate negligence or deceptive practices. We vigorously advocate for consumer rights before district, state, and national consumer dispute redressal commissions, ensuring you receive appropriate compensation for defective goods or service deficiencies.",
                services: [
                    "Filing Consumer Complaints",
                    "Deficiency in Service Claims",
                    "Medical Negligence Cases",
                    "Unfair Trade Practices Litigation",
                    "Appeals before State and National Commissions"
                ]
            },
            {
                title: "Debt Recovery & Cheque Bounce",
                slug: "recovery-money-matters",
                shortDescription: "Efficient legal strategies for debt recovery and financial disputes.",
                longDescription: "Recovering outstanding dues can be challenging. We employ aggressive and legally sound strategies to recover commercial debts, unpaid invoices, and friendly loans through civil suits, summary procedures, and insolvency mechanisms.",
                services: [
                    "Summary Suits for Recovery (Order 37 CPC)",
                    "Cheque Bounce Cases (Section 138 NI Act)",
                    "Commercial Suit for Recovery",
                    "Insolvency Petitions for Corporate Debt",
                    "Arbitration for Debt Recovery"
                ]
            },
            {
                title: "Eviction & Tenancy Dispute Resolution",
                slug: "landlord-tenancy-law",
                shortDescription: "Resolving rent disputes, eviction matters, and lease agreements.",
                longDescription: "We provide comprehensive assistance to both landlords and tenants in disputes arising from lease agreements, non-payment of rent, illegal occupation, and eviction proceedings under applicable state rent control acts and general property laws.",
                services: [
                    "Eviction Suits and Proceedings",
                    "Rent Recovery Litigation",
                    "Drafting and Vetting of Lease Agreements",
                    "Disputes over Security Deposits",
                    "Rent Control Act Compliance"
                ]
            },
            {
                title: "Ancestral Property & Inheritance",
                slug: "succession-inheritance-law",
                shortDescription: "Legal assistance in wills, probates, and ancestral property partitions.",
                longDescription: "Navigating inheritance and succession can be legally and emotionally complex. We offer expert counsel on the drafting of wills, obtaining probate and succession certificates, and resolving disputes related to the partition of ancestral and joint family properties.",
                services: [
                    "Drafting and Registration of Wills",
                    "Obtaining Probate and Letters of Administration",
                    "Succession and Legal Heir Certificates",
                    "Partition Suits for Joint Properties",
                    "Family Settlement Agreements"
                ]
            },
            {
                title: "Civil Litigation & Appeals",
                slug: "civil-litigation-appeals",
                shortDescription: "Robust representation in civil courts, high courts, and the Supreme Court.",
                longDescription: "Our core strength lies in civil litigation. We provide formidable representation across all judicial forums, from trial courts to the Supreme Court of India, handling complex civil disputes, injunctions, and appellate proceedings with strategic precision.",
                services: [
                    "Original Civil Suits and Injunctions",
                    "First and Second Appeals",
                    "Writ Petitions in High Courts",
                    "Special Leave Petitions in Supreme Court",
                    "Execution Petitions and Decrees"
                ]
            }
        ]
    },
    {
        title: "Criminal Defense & Investigations",
        items: [
            {
                title: "FIR Quashing & Police Investigations",
                slug: "fir-police-proceedings",
                shortDescription: "Strategic counsel during police investigations, FIR registration, and quashing.",
                longDescription: "Early legal intervention is critical in criminal matters. We guide clients through the complexities of police investigations, assisting in the registration of FIRs or seeking their quashing before the High Court when filed maliciously or frivolously.",
                services: [
                    "Assistance in FIR Registration",
                    "Quashing of FIRs under Section 482 CrPC",
                    "Counsel during Police Interrogations",
                    "Challenging Illegal Arrests or Detentions",
                    "Filing Protests against Closure Reports"
                ]
            },
            {
                title: "Anticipatory Bail & Immediate Release",
                slug: "bail-anticipatory-bail",
                shortDescription: "Securing liberty through regular, anticipatory, and transit bail applications.",
                longDescription: "Liberty is a fundamental right. We possess extensive experience in securing anticipatory bail for apprehended arrests and regular bail for individuals already in custody, presenting compelling arguments before Sessions Courts and High Courts.",
                services: [
                    "Anticipatory Bail Applications",
                    "Regular Bail and Default Bail Applications",
                    "Transit Bail Counsel",
                    "Cancellation of Bail Proceedings",
                    "Appeals against Bail Rejection"
                ]
            },
            {
                title: "Defense Against Serious Criminal Charges",
                slug: "trial-criminal-defense",
                shortDescription: "Vigorous defense in criminal trials involving complex penal offenses.",
                longDescription: "A robust defense requires meticulous preparation and aggressive courtroom advocacy. We defend individuals accused of serious penal offenses, thoroughly cross-examining witnesses, challenging forensic evidence, and ensuring a fair trial.",
                services: [
                    "Defense in IPC Offenses",
                    "Cross-Examination of Prosecution Witnesses",
                    "Discharge Applications before Framing of Charges",
                    "Filing of Written Arguments",
                    "Expert Evidence and Forensic Analysis"
                ]
            },
            {
                title: "White-Collar & Financial Fraud Defense",
                slug: "white-collar-economic-offences",
                shortDescription: "Defending corporate and individual clients in financial fraud and scam cases.",
                longDescription: "White-collar crimes involve complex financial transactions. We represent clients investigated by specialized agencies like the ED, CBI, EOW, and SFIO for offenses related to money laundering, corporate fraud, corruption, and financial irregularities.",
                services: [
                    "PMLA (Money Laundering) Defense",
                    "Representation before SEBI, SFIO, and ED",
                    "Defense in Bank Fraud and CBI Cases",
                    "Cheating, Forgery, and Embezzlement",
                    "Prevention of Corruption Act Matters"
                ]
            },
            {
                title: "Cyber Fraud & Digital Crime Defense",
                slug: "cyber-crimes",
                shortDescription: "Legal recourse and defense against digital fraud, data theft, and cyber bullying.",
                longDescription: "In the digital age, cybercrimes are rapidly evolving. We assist victims of phishing, identity theft, and data breaches to initiate legal action, while also providing defense counsel for individuals accused under the Information Technology Act.",
                services: [
                    "Filing Cyber Crime Complaints",
                    "Data Privacy and Breach Counseling",
                    "Defending IT Act Violations",
                    "Online Fraud and Phishing Recovery",
                    "Cyber Stalking and Defamation Relief"
                ]
            },
            {
                title: "NDPS & Narcotics Offense Defense",
                slug: "drug-specialised-offences",
                shortDescription: "Counsel and representation in NDPS, customs, and specialized criminal acts.",
                longDescription: "Offenses under specialized statutes like the NDPS Act require highly nuanced legal knowledge. We provide rigorous defense strategies, challenging procedural lapses in search, seizure, and sampling to protect the rights of the accused.",
                services: [
                    "Defense in NDPS (Narcotics) Cases",
                    "Customs and Smuggling Violations",
                    "Arms Act Offenses",
                    "Organized Crime (MCOCA/UAPA) Defense",
                    "Challenging Procedural Lapses"
                ]
            },
            {
                title: "Director Liability & Corporate Crime",
                slug: "corporate-criminal-liability",
                shortDescription: "Advising directors and companies facing criminal charges or statutory violations.",
                longDescription: "Corporations and their directors can face criminal liability for statutory non-compliance or vicarious liability. We formulate defensive strategies to shield key managerial personnel from unwarranted criminal prosecution and mitigate corporate risk.",
                services: [
                    "Defense of Directors and Key Managerial Personnel",
                    "Vicarious Liability Defense",
                    "Statutory Non-Compliance Penalties",
                    "Cheque Bounce (Sec 138) Corporate Defense",
                    "Workplace Negligence Cases"
                ]
            },
            {
                title: "Defense in 498A & Domestic Violence",
                slug: "domestic-violence-dowry-cases",
                shortDescription: "Sensitive handling of Section 498A, dowry harassment, and DV cases.",
                longDescription: "Matrimonial disputes frequently escalate into criminal cases. We provide balanced legal counsel, representing victims seeking protection and maintenance under the DV Act, or defending individuals against false accusations of dowry harassment and cruelty.",
                services: [
                    "Filing and Contesting Domestic Violence Complaints",
                    "Defense in Section 498A IPC (Cruelty) Cases",
                    "Dowry Prohibition Act Defense",
                    "Seeking Protection and Residence Orders",
                    "Mediation in Escalated Matrimonial Disputes"
                ]
            },
            {
                title: "Conviction Appeals & Sentence Suspension",
                slug: "criminal-appeals-revisions",
                shortDescription: "Challenging convictions and arbitrary orders before higher appellate courts.",
                longDescription: "A conviction is not always final. We meticulously review trial records to identify legal errors and file robust criminal appeals and revision petitions before the High Court and Supreme Court to overturn convictions or modify sentences.",
                services: [
                    "Filing Criminal Appeals in High Courts",
                    "Revision Petitions against Interlocutory Orders",
                    "Appeals to the Supreme Court of India",
                    "Suspension of Sentence Applications",
                    "Parole and Furlough Pleas"
                ]
            }
        ]
    },
    {
        title: "Corporate Liability & Commercial Counsel",
        items: [
            {
                title: "Strategic Corporate Entity Structuring",
                slug: "company-formation-structuring",
                shortDescription: "Legal advisory for business incorporation, restructuring, and joint ventures.",
                longDescription: "Establishing a strong legal foundation is crucial for any business. We assist domestic and international clients with entity selection, incorporation of private and public limited companies, LLPs, and the drafting of essential foundational documents like MoA and AoA.",
                services: [
                    "Incorporation of Companies and LLPs",
                    "Drafting Memorandum and Articles of Association",
                    "Founders and Co-founders Agreements",
                    "Corporate Restructuring Advisory",
                    "Foreign Direct Investment (FDI) Compliance"
                ]
            },
            {
                title: "Statutory Risk & Compliance Protection",
                slug: "corporate-compliance-governance",
                shortDescription: "Ensuring adherence to MCA regulations, SEBI guidelines, and corporate laws.",
                longDescription: "Navigating India's complex regulatory landscape requires continuous vigilance. We provide ongoing advisory services to ensure total compliance with the Companies Act, SEBI regulations, FEMA guidelines, and sector-specific laws, mitigating legal risks for directors.",
                services: [
                    "Companies Act Compliance and Filings",
                    "Board Advisory and Secretarial Audits",
                    "SEBI and FEMA Regulatory Compliance",
                    "Director and Officer Liability Counseling",
                    "Corporate Governance Frameworks"
                ]
            },
            {
                title: "Airtight Commercial Contract Drafting",
                slug: "commercial-contracts-agreements",
                shortDescription: "Drafting and negotiating complex commercial agreements and vendor contracts.",
                longDescription: "Clear, enforceable contracts protect your commercial interests. We draft, review, and negotiate an extensive array of business agreements, ensuring clarity of rights and obligations while securing robust exit and dispute resolution mechanisms.",
                services: [
                    "Vendor, Supplier, and Distribution Agreements",
                    "Franchise and Licensing Agreements",
                    "Service Level Agreements (SLAs)",
                    "Master Service Agreements (MSAs)",
                    "Non-Compete and Non-Solicitation Clauses"
                ]
            },
            {
                title: "Employment Disputes & Tribunal Defense",
                slug: "employment-labour-law",
                shortDescription: "Advising on HR policies, employee disputes, and labour statutory compliance.",
                longDescription: "Managing a workforce involves navigating strict labor regulations. We assist businesses in formulating HR policies, drafting employment contracts, ensuring compliance with labor codes, and representing management in employment disputes and tribunal proceedings.",
                services: [
                    "Drafting Employment Contracts and HR Policies",
                    "ESOP Structuring and Implementation",
                    "Prevention of Sexual Harassment (POSH) Compliance",
                    "Termination, Retrenchment, and Severance",
                    "Representation before Labour Courts and Tribunals"
                ]
            },
            {
                title: "M&A Due Diligence & Deal Structuring",
                slug: "mergers-acquisitions",
                shortDescription: "End-to-end legal support for acquisitions, mergers, and takeovers.",
                longDescription: "Corporate transactions require meticulous planning. We facilitate M&A deals by conducting comprehensive legal due diligence, structuring transactions for optimal efficiency, and drafting definitive agreements such as Share Purchase and Business Transfer Agreements.",
                services: [
                    "Legal Due Diligence",
                    "Drafting Term Sheets and MoUs",
                    "Share Purchase Agreements (SPA)",
                    "Business Transfer Agreements (BTA)",
                    "Regulatory Approvals (CCI, SEBI, NCLT)"
                ]
            },
            {
                title: "Insolvency Resolution & IBC Litigation",
                slug: "insolvency-bankruptcy-ibc",
                shortDescription: "Strategic counsel for creditors and debtors under the IBC framework.",
                longDescription: "The Insolvency and Bankruptcy Code (IBC) provides rapid resolution for corporate sickness. We represent financial creditors, operational creditors, and corporate debtors before the NCLT in initiating or defending corporate insolvency resolution processes (CIRP).",
                services: [
                    "Filing Claims before the Resolution Professional",
                    "Representation before NCLT and NCLAT",
                    "Initiation of CIRP by Financial/Operational Creditors",
                    "Defense against Insolvency Petitions",
                    "Advisory on Resolution Plans and Liquidation"
                ]
            },
            {
                title: "IP Infringement Defense & Protection",
                slug: "intellectual-property-law",
                shortDescription: "Registration, protection, and enforcement of trademarks, copyrights, and patents.",
                longDescription: "Your intellectual property is a valuable asset that must be shielded from infringement. We offer end-to-end IP services, from filing trademark applications and copyright registrations to vigorously prosecuting or defending IP infringement suits in courts.",
                services: [
                    "Trademark Registration and Prosecution",
                    "Copyright and Design Registration",
                    "IP Infringement and Passing Off Suits",
                    "Cease and Desist Notices",
                    "IP Assignment and Licensing Agreements"
                ]
            },
            {
                title: "High-Stakes Commercial Arbitration",
                slug: "arbitration-commercial-litigation",
                shortDescription: "Resolving high-stakes commercial disputes through arbitration and commercial courts.",
                longDescription: "Alternative dispute resolution often saves time and resources. We are highly proficient in handling complex domestic and international commercial arbitrations, as well as litigating business disputes before specialized Commercial Courts.",
                services: [
                    "Domestic and International Arbitration",
                    "Appointment of Arbitrators via High Court",
                    "Challenging and Enforcing Arbitral Awards",
                    "Interim Relief Measures (Section 9)",
                    "Representation in Commercial Courts"
                ]
            },
            {
                title: "Startup Protection & Investment Advisory",
                slug: "startup-investment-advisory",
                shortDescription: "Legal guidance for early-stage startups, funding rounds, and term sheets.",
                longDescription: "Startups require agile yet robust legal support. We advise emerging enterprises on the right corporate structures, protect their intellectual property, and guide them smoothly through Seed, Series A, and subsequent funding rounds.",
                services: [
                    "Startup Structuring and Registration",
                    "Review and Negotiation of Term Sheets",
                    "Shareholders’ Agreements (SHA)",
                    "Convertible Notes and SAFE Agreements",
                    "Regulatory Sandbox Advisory"
                ]
            }
        ]
    }
];

export const getAllPracticeItems = (): PracticeItem[] => {
    return practiceAreasData.flatMap(category => category.items);
};

export const getPracticeItemBySlug = (slug: string): PracticeItem | undefined => {
    return getAllPracticeItems().find(item => item.slug === slug);
};

export const getPracticeCategoryBySlug = (slug: string): string | undefined => {
    const category = practiceAreasData.find(cat => cat.items.some(item => item.slug === slug));
    return category?.title;
};

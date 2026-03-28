const fs = require('fs');
let content = fs.readFileSync('data/practiceAreas.ts', 'utf8');

const replacements = {
  'title: "Civil Law"': 'title: "Civil & Property Disputes"',
  'title: "Property & Real Estate Law"': 'title: "Property & Real Estate Disputes"',
  'title: "Family & Matrimonial Law"': 'title: "Divorce & Family Disputes"',
  'title: "Contract Law"': 'title: "Breach of Contract & Enforcement"',
  'title: "Consumer Protection Law"': 'title: "Consumer Fraud & Corporate Negligence"',
  'title: "Recovery & Money Matters"': 'title: "Debt Recovery & Cheque Bounce"',
  'title: "Landlord & Tenancy Law"': 'title: "Eviction & Tenancy Dispute Resolution"',
  'title: "Succession & Inheritance Law"': 'title: "Ancestral Property & Inheritance"',
  'title: "Civil Litigation & Appeals"': 'title: "Civil Litigation & Appeals"',
  
  'title: "Criminal Law"': 'title: "Criminal Defense & Investigations"',
  'title: "FIR & Police Proceedings"': 'title: "FIR Quashing & Police Investigations"',
  'title: "Bail & Anticipatory Bail"': 'title: "Anticipatory Bail & Immediate Release"',
  'title: "Trial & Criminal Defense"': 'title: "Defense Against Serious Criminal Charges"',
  'title: "White Collar & Economic Offences"': 'title: "White-Collar & Financial Fraud Defense"',
  'title: "Cyber Crimes"': 'title: "Cyber Fraud & Digital Crime Defense"',
  'title: "Drug & Specialised Offences"': 'title: "NDPS & Narcotics Offense Defense"',
  'title: "Corporate Criminal Liability"': 'title: "Director Liability & Corporate Crime"',
  'title: "Domestic Violence & Dowry Cases"': 'title: "Defense in 498A & Domestic Violence"',
  'title: "Criminal Appeals & Revisions"': 'title: "Conviction Appeals & Sentence Suspension"',
  
  'title: "Corporate & Commercial Law"': 'title: "Corporate Liability & Commercial Counsel"',
  'title: "Company Formation & Structuring"': 'title: "Strategic Corporate Entity Structuring"',
  'title: "Corporate Compliance & Governance"': 'title: "Statutory Risk & Compliance Protection"',
  'title: "Commercial Contracts & Agreements"': 'title: "Airtight Commercial Contract Drafting"',
  'title: "Employment & Labour Law"': 'title: "Employment Disputes & Tribunal Defense"',
  'title: "Mergers & Acquisitions (M&A)"': 'title: "M&A Due Diligence & Deal Structuring"',
  'title: "Insolvency & Bankruptcy (IBC)"': 'title: "Insolvency Resolution & IBC Litigation"',
  'title: "Intellectual Property Law"': 'title: "IP Infringement Defense & Protection"',
  'title: "Arbitration & Commercial Litigation"': 'title: "High-Stakes Commercial Arbitration"',
  'title: "Startup & Investment Advisory"': 'title: "Startup Protection & Investment Advisory"'
};

for (const [key, val] of Object.entries(replacements)) {
  content = content.replace(key, val);
}

fs.writeFileSync('data/practiceAreas.ts', content);
console.log('✅ Updated data/practiceAreas.ts with problem-based framing.');

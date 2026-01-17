import React from "react";

const companies = [
  {
    id: 1,
    name: "OpenAI",
    email: "contact@openai.com",
    logo: "/openai.png",
  },
  {
    id: 2,
    name: "Google",
    email: "support@google.com",
    logo: "/google-color.png",
  },
  {
    id: 3,
    name: "Cursor",
    email: "hello@cursor.com",
    logo: "/cursor.png",
  },
  {
    id: 4,
    name: "AWS",
    email: "info@aws.com",
    logo: "/aws-color.png",
  },
  {
    id: 5,
    name: "Apple",
    email: "support@apple.com",
    logo: "/apple.png",
  },
  {
    id: 6,
    name: "Microsoft",
    email: "support@microsoft.com",
    logo: "/microsoft-color.png",
  },
  {
    id: 7,
    name: "Meta",
    email: "support@meta.com",
    logo: "/meta-color.png",
  },
  {
    id: 8,
    name: "Perplexity",
    email: "info@perplexity.com",
    logo: "/perplexity-color.png",
  },
  {
    id: 9,
    name: "Grok",
    email: "tech@grok.com",
    logo: "/grok.png",
  },
  {
    id: 10,
    name: "Eleven Labs",
    email: "support@elevenlabs.com",
    logo: "/elevenlabs.png",
  },
  {
    id: 11,
    name: "Figma",
    email: "help@figma.com",
    logo: "/figma-color.png",
  },
  {
    id: 12,
    name: "Github",
    email: "support@github.com",
    logo: "/github.png",
  },
  {
    id: 13,
    name: "Greptile",
    email: "info@greptile.com",
    logo: "/greptile-color.png",
  },
  {
    id: 14,
    name: "Lovable",
    email: "tech@lovable.com",
    logo: "/lovable-color.png",
  },
  {
    id: 15,
    name: "Notion",
    email: "support@notion.com",
    logo: "/notion.png",
  },
  {
    id: 16,
    name: "V0",
    email: "info@vercel.com",
    logo: "/v0.png",
  },
];

const ComboBox = () => {
  return (
    <div
      style={{ fontFamily: "var(--font-geist-sans)" }}
      className="flex items-start justify-center w-full h-full bg-[#f6f6f6]"
    >
      <div className="flex flex-col items-center justify-center w-full h-full border">
        <input
          type="text"
          className="outline-neutral-300 w-[25%] px-4 py-2 shadow-sm rounded-lg bg-white mb-1.5"
          placeholder="Search companies..."
        />
        <div className="w-[25%] h-100 border rounded-lg border-neutral-200 bg-white shadow-sm">
          <div className="w-full h-[88%] overflow-y-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {companies.map((company) => (
              <CompanyInfo
                key={company.id}
                name={company.name}
                email={company.email}
                logo={company.logo}
              />
            ))}
          </div>
          <div className="w-full h-[12%] bg-[#f6f6f6] rounded-b-lg border-t border-t-neutral-200 flex items-center justify-start px-4 cursor-pointer">
            {/* <div className="w-6 h-6 rounded-full border"> */}
            <span className="mr-2 w-5 h-5 rounded-full border flex items-center justify-center">
              <span className="mb-0.5 mr-[0.4px]">+</span>
            </span>
            {/* </div> */}

            <span>Create company</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComboBox;

type CompanyInfoProps = {
  name: string;
  email: string;
  logo: React.ReactNode;
};

const CompanyInfo = ({ name, email, logo }: CompanyInfoProps) => {
  return (
    <div className="w-full px-4 py-1.5 flex items-center justify-between hover:bg-[#f6f6f6]">
      <div className="flex items-center justify-center">
        <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-black mr-2">
          <img className="w-4 h-4 bg-cover" src={logo} alt="img" />
        </div>
        <span className="text-sm">{name}</span>
      </div>
      <div className="text-neutral-500 text-sm">{email}</div>
    </div>
  );
};

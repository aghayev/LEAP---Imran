import React from "react";

type SocialLinkProps = {
  name?: string;
  rule?: boolean;
  d: string;
};
  
export const SocialLink: React.FC<SocialLinkProps> = ({ name, rule, d })  => {
  return (
    <a
    href="#"
    className="text-gray-400 hover:text-white transition duration-300"
  >
    <span className="sr-only">{name}</span>
    <svg
      className="h-6 w-6"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule={rule ? "evenodd" : undefined}
        d={d}
        clipRule={rule ? "evenodd" : undefined}
      />
    </svg>
  </a>
  );
}

export default SocialLink
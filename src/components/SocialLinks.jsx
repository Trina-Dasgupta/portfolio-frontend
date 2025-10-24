import Link from "next/link";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

export default function SocialLinks() {
  const socials = [
    {
      name: "Email",
      icon: <TfiEmail className="size-4" />,
      userName: "trinadasgupta.official@gmail.com",
      link: "mailto:trinadasgupta.official@gmail.com",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="size-4" />,
      userName: "Trina-Dasgupta",
      link: "https://github.com/Trina-Dasgupta",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="size-4" />,
      userName: "in/trina-dasgupta-b9636224a",
      link: "https://www.linkedin.com/in/trina-dasgupta-b9636224a",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="size-4" />,
      userName: "Trina-Dasgupta.dev",
      link: "https://instagram.com/Trina-Dasgupta.dev",
    },
    {
      name: "Discord",
      icon: <FaDiscord className="size-4" />,
      userName: "Trina-Dasgupta",
      link: "https://discord.com/users/1352502889490288653",
    },
  ];

  return (
    <>
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 cursor-pointer"
        >
          {social.icon}
          <p className="hover:text-blue-400">{social.userName}</p>
        </Link>
      ))}
    </>
  );
}
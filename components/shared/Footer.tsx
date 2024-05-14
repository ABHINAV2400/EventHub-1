import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="wrapper flex-center flex-between p-5 text-center sm:flex-row">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/assets/images/confetti.png"
            alt="EventHub logo"
            width={40}
            height={40}
          />
          <span className="ml-3 tracking-wide font-bold text-2xl">EventHub</span> 
        </Link>

        <p className="text-sm sm:text-base">2024 EventHub. All Rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

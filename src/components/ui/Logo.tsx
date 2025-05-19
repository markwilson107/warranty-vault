import warrantyVault from "@/assets/warranty-vault.svg";
import Link from "next/link";

function Logo({ white, size = "small" }: { white?: boolean; size?: "small" | "large" }) {
  return (
    <Link href="/" className={`flex items-center ${white ? "text-white" : ""}`}>
      <img
        src={warrantyVault.src}
        alt="Warranty Vault"
        className={`${size === "small" ? "h-6 sm:h-8" : "h-10"} ${white ? "brightness-0 invert" : ""}`}
      />
      <div className={`ml-2 font-bold ${size === "small" ? "text-base" : "text-xl"}`}>Warranty Vault</div>
    </Link>
  );
}

export default Logo;

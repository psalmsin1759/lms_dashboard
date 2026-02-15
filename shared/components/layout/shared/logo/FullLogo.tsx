"use client";

import Image from "next/image";

const FullLogo = () => {
  return (
    <div className="flex justify-center items-center gap-2">
     
      <Image
        src="/images/logos/logo-icon.svg"
        alt="logo"
        width={40}
        height={40}
        className="block rtl:scale-x-[-1]"
      />
      <h2 className="text-xl">Dashboard</h2>
    </div>
  );
};

export default FullLogo;

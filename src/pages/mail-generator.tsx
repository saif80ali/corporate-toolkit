import React from "react";
import Image from "next/image";

export default function AIMailGenerator() {
  return (
    <div>
      <Image src="/coming-soon.svg" alt="Coming Soon" className="mx-auto" width={400} height={250} />
    </div>
  );
}

AIMailGenerator.getInitialProps = async () => {
  return { title: "AI Mail Generator" };
};

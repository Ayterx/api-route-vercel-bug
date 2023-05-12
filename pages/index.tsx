import { GetStaticProps } from "next";

import Link from "next/link";

export const getStaticProps: GetStaticProps = ({ locale }) => {
  return {
    props: {
      locale,
    },
  };
};

export default function Page({ locale }: { locale: string }) {
  return (
    <div>
      locale: {locale}
      <hr />
      {locale === "ar" ? (
        <Link href="/" locale="en">
          To English
        </Link>
      ) : (
        <Link href="/" locale="ar">
          To Arabic
        </Link>
      )}
    </div>
  );
}

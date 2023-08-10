import ProviderWrapper from "@/redux/ProviderWrapper";
import "../styles/global.scss";
import { Inter, Noto_Sans_JP } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const notoSansJP = Noto_Sans_JP({ subsets: ["latin"]})

export const metadata = {
  title: "Criador README",
  description: "Crie seu README de forma prática e rápida!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${notoSansJP.className} ${inter.className}`}>
        <ProviderWrapper>{children}</ProviderWrapper>
      </body>
    </html>
  );
}

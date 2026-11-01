import HomePage from "@/components/pages/home-page";
import { languageAlternates } from "@/lib/site";

export const metadata = { alternates: languageAlternates("/", "en") };

export default function Page() {
  return <HomePage />;
}

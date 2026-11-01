import AssetsPage from "@/components/pages/assets-page";
import { productMetadata } from "@/lib/site";
import { getToolkit } from "@/lib/toolkits";
import { translate } from "@/lib/translate";

const toolkit = getToolkit("rn-typed-assets");
export const metadata = productMetadata(toolkit, translate(toolkit.description, "ko"), "ko");

export default function Page() {
  return <AssetsPage locale="ko" />;
}

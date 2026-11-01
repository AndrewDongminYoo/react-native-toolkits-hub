import NewarchPage from "@/components/pages/newarch-page";
import { productMetadata } from "@/lib/site";
import { getToolkit } from "@/lib/toolkits";
import { translate } from "@/lib/translate";

const toolkit = getToolkit("rn-newarch-ready");
export const metadata = productMetadata(toolkit, translate(toolkit.description, "ko"), "ko");

export default function Page() {
  return <NewarchPage locale="ko" />;
}

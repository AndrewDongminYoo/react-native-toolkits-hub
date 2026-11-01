import DesignPage from "@/components/pages/design-page";
import { productMetadata } from "@/lib/site";
import { getToolkit } from "@/lib/toolkits";
import { translate } from "@/lib/translate";

const toolkit = getToolkit("design-to-nativewind");
export const metadata = productMetadata(toolkit, translate(toolkit.description, "ko"), "ko");

export default function Page() {
  return <DesignPage locale="ko" />;
}

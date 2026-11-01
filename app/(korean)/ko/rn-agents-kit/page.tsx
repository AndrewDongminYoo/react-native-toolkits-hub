import AgentsPage from "@/components/pages/agents-page";
import { productMetadata } from "@/lib/site";
import { getToolkit } from "@/lib/toolkits";
import { translate } from "@/lib/translate";

const toolkit = getToolkit("rn-agents-kit");
export const metadata = productMetadata(toolkit, translate(toolkit.description, "ko"), "ko");

export default function Page() {
  return <AgentsPage locale="ko" />;
}

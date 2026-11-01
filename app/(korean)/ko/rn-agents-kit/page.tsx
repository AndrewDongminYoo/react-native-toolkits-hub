import AgentsPage, { metadataFor } from "@/components/pages/agents-page";

export const metadata = metadataFor("ko");

export default function Page() {
  return <AgentsPage locale="ko" />;
}

import { Content } from "./Content";
import Layout from "@/components/Layout";

import { ConfigContextProvider } from "@/lib/configContext";

export function CalendarContent() {
  return (
    <ConfigContextProvider>
      <Layout>
        <Content />
      </Layout>
    </ConfigContextProvider>
  );
}

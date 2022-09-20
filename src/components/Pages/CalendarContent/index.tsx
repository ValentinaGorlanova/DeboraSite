import { Content } from "./Content";
import Layout from "@/components/Layout";

import { ConfigContextProvider } from "@/lib/configContext";
import { CalendarContextProvider } from "@/lib/CalendarContext";

export function CalendarContent() {
  return (
    <ConfigContextProvider>
      <Layout>
        <CalendarContextProvider>
          <Content />
        </CalendarContextProvider>
      </Layout>
    </ConfigContextProvider>
  );
}

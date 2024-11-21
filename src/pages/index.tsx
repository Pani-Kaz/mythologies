import DefaultLayout from "@/layouts/default";
import { HomepageIntroduction } from "@/layouts/pages/home_page/Introduction";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <HomepageIntroduction />
    </DefaultLayout>
  );
}

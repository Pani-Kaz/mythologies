import DefaultLayout from "@/layouts/default";
import { HomepageAboutTo } from "@/layouts/pages/home_page/about_to";
import { HomepageIntroduction } from "@/layouts/pages/home_page/Introduction";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <HomepageIntroduction />
      <HomepageAboutTo />
    </DefaultLayout>
  );
}

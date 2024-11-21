import DefaultLayout from "@/layouts/default";
import { HomepageAboutTo } from "@/layouts/pages/home_page/about_to";
import { HomepageIntroduction } from "@/layouts/pages/home_page/Introduction";
import { HomePageMythologyAztec } from "@/layouts/pages/home_page/mythologies/aztec";
import { HomePageMythologyGreek } from "@/layouts/pages/home_page/mythologies/greek";
import { HomePageMythologyInca } from "@/layouts/pages/home_page/mythologies/inca";
import { HomePageMythologyMayan } from "@/layouts/pages/home_page/mythologies/mayan";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <HomepageIntroduction />
      <HomepageAboutTo />
      <section className="flex justify-center w-full">
        <div className="w-[80%] flex flex-col gap-4 max-lg:w-full">
          <HomePageMythologyAztec />
          <HomePageMythologyInca />
          <HomePageMythologyMayan />
          <HomePageMythologyGreek />
        </div>
      </section>
    </DefaultLayout>
  );
}

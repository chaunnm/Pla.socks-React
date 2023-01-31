import React from "react";
import Slider from "../components/Home/Slider";
import BestSeller from "../components/Home/BestSeller/index";
import Vouchers from "../components/Home/Vouchers/index";
import ComingSoon from "../components/Home/ComingSoon/index";
import Interest from "../components/Home/Interest/index";
import RecentReview from "../components/Home/RecentReview/index";
import Banner from "../components/Home/Banner/index";
import MainLayout from "../layouts";
import Feedbacks from "../components/Home/Feedbacks";
import RecentBlogs from "../components/Home/RecentBlogs";

export default function Home() {
  return (
    <>
      <MainLayout>
        <Slider />
        <Vouchers />
        <BestSeller />
        <ComingSoon />
        <Banner url="https://i.imgur.com/9Q2pzsp.png" />
        <Interest />
        <RecentReview />
        <Feedbacks />
        <RecentBlogs />
      </MainLayout>
    </>
  );
}

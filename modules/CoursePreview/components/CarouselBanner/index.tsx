import Layout, { Header } from "@common/components/Layout";
import React from "react";
import Image from "next/image";
import Unit1Banner from "@public/images/unit1-banner.jpg";
import Button from "antd/lib/button";
import BackArrow from "@common/components/Icons/BackArrow";
import ForwardArrow from "@common/components/Icons/ForwardArrow";
import { useRouter } from "next/router";

interface CarouselBannerProps {
  unit?: number | string;
  title?: string;
}

const CarouselBanner = ({
  unit = 0,
  title = "Untitled",
}: CarouselBannerProps) => {
  const router = useRouter();
  const slug = router?.query?.slug;

  const handleStartClick = () => {
    router.push(`/courses/view/${slug}`);
  };
  const handleBackArrowClick = () => {
    // router.push("/courses/unit2");
  };
  const handleForwardArrowClick = () => {
    // router.push("/courses/unit3");
  };

  return (
    <div className="carousel-banner-container">
      <div className="banner-container">
        <Image
          src={Unit1Banner}
          alt="unit1-banner.jpg"
          placeholder="blur"
          height={452}
          width={1920}
        />
      </div>

      <div className="bg-filter" />

      <div className="bg-description-container">
        <div className="unit-label">{`Unit ${unit}`}</div>

        <div className="title-container">
          <div className="back-icon" onClick={handleBackArrowClick}>
            <BackArrow width="3.6rem" height="4.3rem" fill="#8F949D" />
          </div>
          <span className="title">{title}</span>
          <div className="forward-icon" onClick={handleForwardArrowClick}>
            <ForwardArrow width="3.6rem" height="4.3rem" fill="#8F949D" />
          </div>
        </div>

        <Button
          onClick={handleStartClick}
          htmlType="submit"
          type="primary"
          className="start-btn"
        >
          Start Lesson
        </Button>
      </div>
    </div>
  );
};

export default CarouselBanner;

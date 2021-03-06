import Layout, { Header } from "@common/components/Layout";
import React from "react";
import CarouselBanner from "./components/CarouselBanner";
import CourseTabs from "@common/components/CourseTabs";

interface CoursePreviewProps {
  coursePreviewData: any;
  courseComments: any;
  courseDownloadableFiles: any;
}

const CoursePreview = ({
  coursePreviewData,
  courseComments,
  courseDownloadableFiles,
}: CoursePreviewProps) => {
  const {
    id,
    unit,
    title,
    description,
    progress,
    objectives,
    topicsCount,
    instructor,
    prevSlug,
    nextSlug,
    isLocked,
  } = coursePreviewData;

  const unitDetailsProps = {
    instructorAvatar: instructor?.avatar?.url,
    instructorName: instructor?.name,
    topicsCount,
    progress,
    description,
    objectives,
  };

  const unitQandAProps = {
    courseId: id,
    courseComments: courseComments,
  };
  const unitDownloadableFilesProps = {
    courseDownloadableFiles: courseDownloadableFiles ?? [],
  };
  return (
    <Layout header={<Header title={"Header"} />}>
      <div className="course-preview-container">
        <CarouselBanner
          unit={unit}
          title={title}
          prevSlug={prevSlug}
          nextSlug={nextSlug}
          isLocked={false} //isLocked
        />

        <div className={"course-tabs-container"}>
          <CourseTabs
            unitDetailsProps={unitDetailsProps}
            unitQandAProps={unitQandAProps}
            unitDownloadableFilesProps={unitDownloadableFilesProps}
          />
        </div>
      </div>
    </Layout>
  );
};

export default CoursePreview;

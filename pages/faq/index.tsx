import FAQ from "@modules/FAQ";
import axios from "axios";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

interface QandAType {
  question: string;
  answer: string;
}
interface TopicType {
  title: string;
  faqs: QandAType[];
}

interface FaqDataType {
  unit: string;
  title: string;
  topics: TopicType[];
}

interface AllFaqDataType {
  data: FaqDataType[];
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { data: allFaqData }: AllFaqDataType = await axios.get(
    `${process.env.API_URL}/units?_locale=${ctx?.locale ?? "en"}`
  );

  console.log(allFaqData);
  const sortedAllFaqDatas = allFaqData.sort((a, b) => {
    if (a?.unit > b?.unit) {
      return 1;
    }
    if (a?.unit < b?.unit) {
      return -1;
    }
    return 0;
  });

  const allFaqsData = sortedAllFaqDatas.map((faqData) => {
    const faqUnit = faqData?.unit;
    const faqTitle = faqData?.title;
    const faqTopics = faqData?.topics;

    const isUnitMissing = !faqUnit;
    if (isUnitMissing) {
      return null;
    }
    return {
      unit: faqUnit ?? 0,
      title: faqTitle,
      topics: faqTopics,
    };
  });

  return {
    props: { allFaqsData },
  };
};

const FaqPage = ({
  allFaqsData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <FAQ allFaqsData={allFaqsData} />;
};
export default FaqPage;

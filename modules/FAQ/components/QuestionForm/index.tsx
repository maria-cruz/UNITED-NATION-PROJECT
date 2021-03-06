import React, { useState, VFC } from "react";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Button from "antd/lib/button";
import Select from "antd/lib/select";
import axios from "axios";
import SuccessMessage from "@common/components/SuccessMessage";
import { FaqsProps } from "modules/FAQ/types";
import useTranslation from "next-translate/useTranslation";

interface QuestionProps {
  email: string;
  topic: string;
  sampleQuestion: string;
}
interface FaqUnitProps {
  faqData: FaqsProps;
}

const QuestionForm: VFC<FaqUnitProps> = ({ faqData }) => {
  const { t } = useTranslation("faq");

  const description = {
    description: `${t("successMessageDescription")}`,
  };
  const [questionForm] = Form.useForm();
  const [isVisibleText, setIsVisibleText] = useState(false);
  const topics = faqData?.topics ?? [];
  const handleFormSubmit = (value: QuestionProps) => {
    axios
      .post(`${process.env.API_URL}/question-inquiries`, {
        email: value.email,
        subject: value.topic,
        question: value.sampleQuestion,
      })

      .then((data) => console.log(data, "success"))
      .then((res) => {
        setIsVisibleText(true);
        setTimeout(() => {
          setIsVisibleText(false);
        }, 5000);
      })
      .then((res) => {
        questionForm.resetFields();
      })
      .catch((err) => console.error(err));
  };

  return (
    <section className="form-section-container">
      <div className="form-wrapper">
        <div className="text-container">
          <div className="_subheading-label">{t("haveAQuestion")}</div>
        </div>
        {isVisibleText ? (
          <SuccessMessage {...description} />
        ) : (
          <Form
            className="inquiry-form-wrapper"
            layout={"vertical"}
            form={questionForm}
            name="nest-messages"
            onFinish={handleFormSubmit}
          >
            <div className="upper-input-container">
              <Form.Item
                className="email-container"
                rules={[
                  {
                    required: true,
                    message: `${t("emailValidation")}`,
                  },
                  {
                    type: "email",
                    message: `${t("notValidEmail")}`,
                  },
                ]}
                name="email"
                label={t("email")}
              >
                <Input className="form-input" />
              </Form.Item>
              <Form.Item
                label={t("topic")}
                name="topic"
                className="dropdown-menu"
              >
                <Select className="form-select">
                  <Select.Option value="All Topics">
                    {t("allTopics")}
                  </Select.Option>
                  {topics.map((topic, index: number) => {
                    const topicTitle = topic.title ?? "";
                    return (
                      <Select.Option value={topicTitle} key={index}>
                        {topicTitle}
                      </Select.Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </div>
            <Form.Item
              name="sampleQuestion"
              className="question-container"
              label={t("question")}
            >
              <Input.TextArea className="question-input" />
            </Form.Item>
            <Form.Item noStyle>
              <Button type="primary" htmlType="submit" className="form-btn">
                {t("submitQuestion")}
              </Button>
            </Form.Item>
          </Form>
        )}
      </div>
    </section>
  );
};

export default QuestionForm;

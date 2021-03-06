import React from "react";
import classNames from "classnames";
import CheckCircleOutline from "@common/components/Icons/CheckCircleOutline";
import LockedIcon from "@common/components/Icons/Locked";
import ParamLink from "@common/components/ParamLink";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

interface PostAssessmentProps {
  id: number;
  isCompleted?: boolean;
  isLocked?: boolean;
}
const PostAssessment = ({
  id = 0,
  isCompleted = false,
  isLocked = true,
}: PostAssessmentProps) => {
  const { t } = useTranslation("courses-view");
  const router = useRouter();
  const currentTopicId = router?.query?.topic;
  const currentTabType = router?.query?.tab;
  const isActive = currentTopicId === `${id}` && currentTabType === "post";

  return (
    <ParamLink query={{ topic: `${id}`, tab: "post" }} shallow>
      <div
        className={classNames(
          "session-panel-item",
          { active: isActive },
          { completed: isCompleted }
        )}
      >
        {isLocked ? (
          <div className="locked-icon">
            <LockedIcon />
          </div>
        ) : (
          <div className="icon">
            <CheckCircleOutline />
          </div>
        )}
        <div className="text">{t("postAssessment")}</div>
      </div>
    </ParamLink>
  );
};

export default PostAssessment;

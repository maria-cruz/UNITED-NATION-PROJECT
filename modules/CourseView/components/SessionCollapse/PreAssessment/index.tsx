import React from "react";
import classNames from "classnames";
import CheckCircleOutline from "@common/components/Icons/CheckCircleOutline";
import LockedIcon from "@common/components/Icons/Locked";
import ParamLink from "@common/components/ParamLink";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

interface PreAssessmentProps {
  id?: number;
  isCompleted?: boolean;
  isLocked?: boolean;
}
const PreAssessment = ({
  id = 0,
  isCompleted = false,
  isLocked = true,
}: PreAssessmentProps) => {
  const { t } = useTranslation("courses-view");
  const router = useRouter();
  const currentTopicId = router?.query?.topic;
  const currentTabType = router?.query?.tab;
  const isActive = currentTopicId === `${id}` && currentTabType === "pre";

  return (
    <ParamLink query={{ topic: `${id}`, tab: "pre" }} shallow>
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

        <div className="text">{t("preAssessment")}</div>
      </div>
    </ParamLink>
  );
};

export default PreAssessment;

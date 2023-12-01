import { CheckboxGroup, Checkbox } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

function DesktopFilters() {
  const { t } = useTranslation();

  return (
    <div>
      {/* ============================== Education Level ============================== */}
      <CheckboxGroup color="success">
        <h3 className="font-semibold text-lg">{t("education_levels.title")}</h3>
        <Checkbox className="check-button" value="KG">
          {t("education_levels.KG")}
        </Checkbox>
        <Checkbox className="check-button">
          <p classNames="text-red-500"> {t("education_levels.primary")}</p>
        </Checkbox>
        <Checkbox className="check-button" value="mid_level">
          {t("education_levels.mid_level")}
        </Checkbox>
        <Checkbox className="check-button" value="secondary">
          {t("education_levels.secondary")}
        </Checkbox>
        <Checkbox className="check-button" value="general">
          {t("education_levels.general")}
        </Checkbox>
      </CheckboxGroup>
      {/* ============================== Grade ============================== */}
      <CheckboxGroup color="success" className="mt-5">
        <h3 className="font-semibold text-lg">{t("grades.title")}</h3>
        <Checkbox className="check-button" value="grade_one">
          {t("grades.grade_one")}
        </Checkbox>
        <Checkbox className="check-button" value="grade_two">
          {t("grades.grade_two")}
        </Checkbox>
        <Checkbox className="check-button" value="grade_three">
          {t("grades.grade_three")}
        </Checkbox>
        <Checkbox className="check-button" value="grade_four">
          {t("grades.grade_four")}
        </Checkbox>
        <Checkbox className="check-button" value="grade_five">
          {t("grades.grade_five")}
        </Checkbox>
        <Checkbox className="check-button" value="KG">
          {t("grades.grade_six")}
        </Checkbox>
      </CheckboxGroup>
      {/* ============================== Education Type ============================== */}
      <CheckboxGroup color="success" className="mt-5">
        <h3 className="font-semibold text-lg">{t("education_type.title")}</h3>
        <Checkbox className="check-button" value="general">
          {t("education_type.general")}
        </Checkbox>{" "}
        <Checkbox className="check-button" value="azhar">
          {t("education_type.azhar")}
        </Checkbox>
      </CheckboxGroup>
    </div>
  );
}

export default DesktopFilters;

import { Radio, RadioGroup } from "@nextui-org/radio";
import { Button } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import * as solarIcons from "solar-icon-set";
import { Accordion, AccordionBody } from "@material-tailwind/react";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";

import { useEffect, useState } from "react";
function DesktopFilters({ updateFilters }) {
  const { t } = useTranslation();

  const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);
  const [openAcc1, setOpenAcc1] = useState(false);
  const [filtersOptions, setFiltersOptions] = useState([]);

  function getFilterValue(value) {
    if (filtersOptions.includes(value)) {
      const idx = filtersOptions.indexOf(value);
      filtersOptions.splice(idx, 1);
      setFiltersOptions((prev) => [...prev]);
    } else {
      setFiltersOptions((prev) => [...prev, value]);
    }
  }
  useEffect(() => {
    let toString = "";
    filtersOptions.forEach((item) => {
      toString += item;
    });
    updateFilters(toString);
  }, [filtersOptions]);
  return (
    <div className="block lg:hidden">
      <Accordion open={openAcc1}>
        {" "}
        <Button onClick={handleOpenAcc1} className="w-full bg-[#28D8AE] rounded-lg my-2 text-white text-base">
          <solarIcons.Filter size={22} /> Filters
        </Button>
        <AccordionBody>
          <div>
            {/* ============================== Education Level ==============================
            <CheckboxGroup color="success">
              <h3 className="font-semibold text-lg">{t("education_levels.title")}</h3>
              <div className="flex flex-wrap gap-3">
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
              </div>
            </CheckboxGroup> */}
            {/* ============================== price Type ============================== */}
            <CheckboxGroup color="success" className="mt-5">
              <h3 className="font-semibold text-lg">price</h3>
              <div className="flex flex-wrap gap-3">
                <Checkbox onClick={() => getFilterValue("&price=0")} className="check-button" value={0}>
                  free
                </Checkbox>{" "}
                <Checkbox onClick={() => getFilterValue("&price=1")} className="check-button" value={1}>
                  paid
                </Checkbox>
              </div>
            </CheckboxGroup>
            {/* ============================== Grade ============================== */}
            <CheckboxGroup color="success" className="mt-5">
              <h3 className="font-semibold text-lg">{t("grades.title")}</h3>
              <div className="flex flex-wrap gap-3">
                <Checkbox onClick={() => getFilterValue("&grade=grade_one")} className="check-button" value="grade_one">
                  {t("grades.grade_one")}
                </Checkbox>
                <Checkbox onClick={() => getFilterValue("&grade=grade_two")} className="check-button" value="grade_two">
                  {t("grades.grade_two")}
                </Checkbox>
                <Checkbox onClick={() => getFilterValue("&grade=grade_three")} className="check-button" value="grade_three">
                  {t("grades.grade_three")}
                </Checkbox>
                <Checkbox onClick={() => getFilterValue("&grade=grade_four")} className="check-button" value="grade_four">
                  {t("grades.grade_four")}
                </Checkbox>
                <Checkbox onClick={() => getFilterValue("&grade=grade_five")} className="check-button" value="grade_five">
                  {t("grades.grade_five")}
                </Checkbox>
                <Checkbox onClick={() => getFilterValue("&grade=grade_six")} className="check-button" value="KG">
                  {t("grades.grade_six")}
                </Checkbox>
              </div>
            </CheckboxGroup>
            {/* ============================== Education Type ============================== */}
            <CheckboxGroup color="success" className="mt-5">
              <h3 className="font-semibold text-lg">{t("education_type.title")}</h3>
              <div className="flex flex-wrap gap-3">
                <Checkbox onClick={() => getFilterValue("&educationType=general")} className="check-button" value="general">
                  {t("education_type.general")}
                </Checkbox>{" "}
                <Checkbox onClick={() => getFilterValue("&educationType=azhar")} className="check-button" value="azhar">
                  {t("education_type.azhar")}
                </Checkbox>
              </div>
            </CheckboxGroup>{" "}
          </div>{" "}
        </AccordionBody>
      </Accordion>
    </div>
  );
}

export default DesktopFilters;

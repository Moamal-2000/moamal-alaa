import NumberedHeading from "@/components/Shared/NumberedHeading/NumberedHeading";
import { getContributionData } from "@/lib/contributions";
import s from "./ContributionsSection.module.scss";
import ContributionWrapper from "./ContributionWrapper";
import Panels from "./Panels/Panels";
import TabList from "./TabList/TabList";

const ContributionsSection = ({ contributions = [] }) => {
  const contribItems = getContributionData(contributions);

  return (
    <ContributionWrapper>
      <NumberedHeading number="02" title="Where I Have Contributed" />

      <div className={s.wrapper}>
        <TabList contribItems={contribItems} />
        <Panels contribItems={contribItems} />
      </div>
    </ContributionWrapper>
  );
};

export default ContributionsSection;

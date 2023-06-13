import React from "react";
import JobCard from "./JobCard";

const JobCardContainer = () => {
  return (
    <div className="flex flex-col p-10 items-center  justify-center w-[1873px] h-[798px] bg-[#D8D8D8]">
      <div className="flex flex-row gap-[84px] pb-[49px]">
        <JobCard
          jobTitle="UX UI Designer"
          jobCardOuter="h-[320px] w-[830px] border border-[#DADEDF] rounded-lg border-solid px-[24px] py-[16px] "
          jobCardInner="flex gap-[8px]"
          jobCardImage="h-[48px] w-[48px] rounded-md"
          jobcardDetails="pb-[24px]"
          buttonWrapper="pt-[24px]"
          buttonDetails="h-[40px] rounded-lg w-[118px] text-[#FAFAFA] bg-[#1597E4] font-medium text-base"
          titleProperties="font-normal text-2xl"
          locationDetails="font-normal text-base  text-[#646464]"
          subtitleProperties="font-normal text-base"
          buttonText="Apply Now"
          informationProperties="font-normal text-base text-[#212427]"
        />
        <JobCard
          jobTitle="Developer"
          jobCardOuter="h-[320px] w-[830px] border border-[#DADEDF] rounded-lg border-solid px-[24px] py-[16px] "
          jobCardInner="flex gap-[8px]"
          jobCardImage="h-[48px] w-[48px] rounded-md"
          jobcardDetails="pb-[24px]"
          buttonWrapper="pt-[24px]"
          buttonDetails="h-[40px] rounded-lg w-[147px] text-[#1597E4] bg-[#FFFFFF] font-medium text-base border border-[#1597E4]"
          titleProperties="font-normal text-2xl"
          locationDetails="font-normal text-base  text-[#646464]"
          subtitleProperties="font-normal text-base"
          buttonText="External Apply"
          informationProperties="font-normal text-base text-[#212427]"
        />
      </div>
      <div className="flex flex-row   gap-[84px]">
        <JobCard
          jobTitle="Interaction Designer"
          jobCardOuter="h-[320px] w-[830px] border border-[#DADEDF] rounded-lg border-solid px-[24px] py-[16px] "
          jobCardInner="flex gap-[8px]"
          jobCardImage="h-[48px] w-[48px] rounded-md"
          jobcardDetails="pb-[24px]"
          buttonWrapper="pt-[24px]"
          buttonDetails="h-[40px] rounded-lg w-[147px] text-[#1597E4] bg-[#FFFFFF] font-medium text-base border border-[#1597E4]"
          titleProperties="font-normal text-2xl"
          locationDetails="font-normal text-base  text-[#646464]"
          subtitleProperties="font-normal text-base"
          buttonText="External Apply"
          informationProperties="font-normal text-base text-[#212427]"
        />
        <JobCard
          jobTitle="SEO Analyst"
          jobCardOuter="h-[320px] w-[830px] border border-[#DADEDF] rounded-lg border-solid px-[24px] py-[16px] "
          jobCardInner="flex gap-[8px]"
          jobCardImage="h-[48px] w-[48px] rounded-md"
          jobcardDetails="pb-[24px]"
          buttonWrapper="pt-[24px]"
          buttonDetails="h-[40px] rounded-lg w-[118px] text-[#FAFAFA] bg-[#1597E4] font-medium text-base"
          titleProperties="font-normal text-2xl"
          locationDetails="font-normal text-base  text-[#646464]"
          subtitleProperties="font-normal text-base"
          informationProperties="font-normal text-base text-[#212427]"
          buttonText="Apply Now"
        />
      </div>
    </div>
  );
};

export default JobCardContainer;

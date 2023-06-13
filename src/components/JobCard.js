import React from "react";
import { twMerge } from "tailwind-merge";

const JobCard = ({
  jobCardOuter,
  jobCardInner,
  jobCardImage,
  jobcardDetails,
  buttonWrapper,
  buttonDetails,
  titleProperties,
  subtitleProperties,
  informationProperties,
  locationDetails,
  buttonText,
  jobTitle,
}) => {
  return (
    <div className={twMerge(jobCardOuter, "bg-[#FFFFFF]")}>
      <div className={twMerge(jobCardInner, "flex")}>
        <div>
          <img
            className={twMerge(jobCardImage)}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_4rLJmb8e6pERIO00yeoAJWVn4GJb9irNeHIeyXq&s"
          />
        </div>
        <div>
          <div className={twMerge(jobcardDetails)}>
            <h2 className={twMerge(titleProperties)}>{jobTitle}</h2>
            <h2 className={twMerge(subtitleProperties)}>
              Great Vibes - Information Technology
            </h2>
            <h2 className={twMerge(locationDetails)}>
              Chennai, Tamilnadu, India (In-office)
            </h2>
          </div>
          <div className={twMerge("space-y-[8px]")}>
            <h3 className={twMerge(informationProperties)}>
              Part-Time (9.00 am - 5.00 pm IST)
            </h3>
            <h3 className={twMerge(informationProperties)}>
              Experience (1 - 2 years)
            </h3>
            <h3 className={twMerge(informationProperties)}>
              INR (₹) 30,000 - 50,000 / Month
            </h3>
            <h3 className={twMerge(informationProperties)}>51-200 employees</h3>
          </div>
          <div className={twMerge(buttonWrapper)}>
            <button className={twMerge(buttonDetails)}>{buttonText}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;

import React from "react";
import PageSetup from "../../components/page/pageSetup";
import PageHeading from "../../components/pageHeading/pageHeading";
import PageSubHeading from "../../components/pageHeading/pageSubHeading";
import ResponsiveBodyText from "../../components/text/responsiveBodyText";
import { Box } from "@chakra-ui/react";
import SequencedScrollAnimated from "../../components/scrollAnimated/sequencedScrollAnimated";

function Credits() {
  return (
    <PageSetup>
      <PageHeading>Credits</PageHeading>
      <Box display="flex" flexDirection="column" gap="4">
        <SequencedScrollAnimated>
          <Box>
            <PageSubHeading>Website made by James Gaunt</PageSubHeading>
            <ResponsiveBodyText marginTop="4">
              Thanks to Max and Isaac for providing feedback on the website
            </ResponsiveBodyText>
          </Box>
          <Box>
            <PageSubHeading>Framework and UI Library</PageSubHeading>
            <ResponsiveBodyText marginTop="4">
              React JS + Chakra UI
            </ResponsiveBodyText>
          </Box>
          <Box>
            <PageSubHeading>Images</PageSubHeading>
            <ResponsiveBodyText marginTop="4">
              Pixabay + Unsplash
            </ResponsiveBodyText>
          </Box>
          <Box display="flex" flexDirection="column" gap="4">
            <PageSubHeading>Bibliography</PageSubHeading>
            <ResponsiveBodyText>
              City Of Irvine. (2023, March 23). City Of Irvine. Retrieved from
              How to be a smart consumer:
              https://www.cityofirvine.org/environmental-programs/how-be-smart-consumer
            </ResponsiveBodyText>
            <ResponsiveBodyText>
              Government Of Western Australia. (2023, March 23). Six ways to be
              a smart shopper. Retrieved from Government Of Western Australia:
              https://www.commerce.wa.gov.au/consumer-protection/six-ways-be-smart-shopper
            </ResponsiveBodyText>
            <ResponsiveBodyText>
              YL, M. L. (2023, March 23). The Money Magnet. Retrieved from How
              to be a smart consumer?:
              https://the-money-magnet.com/2015/05/how-to-be-a-smart-consumer.html/
            </ResponsiveBodyText>
            <ResponsiveBodyText>
              Cruze, R. (2023, June 7). Ramsey. Retrieved from How to Set
              FInancial Goals:
              https://www.ramseysolutions.com/personal-growth/setting-financial-goals
            </ResponsiveBodyText>
            <ResponsiveBodyText>
              Hays. (2023, June 7). Hays. Retrieved from Tips to become more
              successful at work:
              https://www.hays.com.au/career-advice/career-development/tips-to-be-more-successful-at-work
            </ResponsiveBodyText>
            <ResponsiveBodyText>
              Kuligowski, K. (2023, June 7). Business News Daily. Retrieved from
              Tips for Creating a Great Resume:
              https://www.businessnewsdaily.com/3207-resume-writing-tips.html
            </ResponsiveBodyText>
            <ResponsiveBodyText>
              Lucidchart. (2023, June 7). Lucidchart. Retrieved from 7 steps of
              the decision-making process:
              https://www.lucidchart.com/blog/decision-making-process-steps
            </ResponsiveBodyText>
            <ResponsiveBodyText>
              My Future. (2023, June 7). My Future. Retrieved from Job interview
              tips:
              https://myfuture.edu.au/career-articles/details/job-interview-tips
            </ResponsiveBodyText>
            <ResponsiveBodyText>
              Novo Resume. (2023, June 7). Novo Resume. Retrieved from 35+
              Essential Job Search Tips for 2023:
              https://novoresume.com/career-blog/job-search-tips
            </ResponsiveBodyText>
          </Box>
        </SequencedScrollAnimated>
      </Box>
    </PageSetup>
  );
}

export default Credits;

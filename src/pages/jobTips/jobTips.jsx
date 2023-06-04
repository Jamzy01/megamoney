import React from "react";
import PageSetup from "../../components/page/pageSetup";
import PageHeading from "../../components/pageHeading/pageHeading";
import PageSubHeading from "../../components/pageHeading/pageSubHeading";
import {
  Box,
  HStack,
  Image,
  OrderedList,
  Text,
  UnorderedList,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

import selfExamine from "./assets/infoBackgrounds/jobChoosing/selfExamine.jpg";
import longTermPlan from "./assets/infoBackgrounds/jobChoosing/longTermPlan.jpg";
import considerWants from "./assets/infoBackgrounds/jobChoosing/considerWants.jpg";

import shortResume from "./assets/infoBackgrounds/resumeWriting/shortResume.jpg";
import highlightSkills from "./assets/infoBackgrounds/resumeWriting/highlightSkills.jpg";
import externalLinks from "./assets/infoBackgrounds/resumeWriting/externalLinks.jpg";

import professionalAttire from "./assets/infoBackgrounds/interview/professionalAttire.jpg";
import beEngaged from "./assets/infoBackgrounds/interview/beEngaged.jpg";
import confused from "./assets/infoBackgrounds/interview/confused.jpg";

import change from "./assets/infoBackgrounds/job/change.jpg";
import bookshelf from "./assets/infoBackgrounds/job/bookshelf.jpg";
import friendship from "./assets/infoBackgrounds/job/friendship.jpg";

function SubTip({ title, desc, bgImage }) {
  return (
    <Box
      className="sub-tip"
      display="flex"
      flexDirection="column"
      gap="4"
      flex={1}
      justifyContent="center"
      alignItems="center"
      padding="8"
      shadow="sm"
      textAlign="center"
      position="relative"
      borderRadius="md"
      overflow="clip"
    >
      <Image
        position="absolute"
        src={bgImage}
        zIndex={-1}
        width="100%"
        height="100%"
        objectFit="cover"
        filter={useColorModeValue(
          "brightness(130%) blur(5px)",
          "contrast(75%) brightness(55%) blur(2px)"
        )}
        opacity={useColorModeValue(0.3, 1)}
      />
      <Text
        maxWidth="80%"
        fontWeight="500"
        fontSize={{ base: "md", sm: "md", lg: "lg" }}
      >
        {title}
      </Text>
      <Text fontSize={{ base: "sm", sm: "sm", lg: "md" }}>{desc}</Text>
    </Box>
  );
}

function JobTips() {
  return (
    <PageSetup>
      <PageHeading>Job Tips</PageHeading>
      <Box marginTop="16" display="flex" flexDirection="column" gap="4">
        <PageSubHeading
          bg={useColorModeValue("blackAlpha.50", "blue.700")}
          padding="4"
          borderRadius="md"
          shadow="sm"
        >
          1. Choose Your Job
        </PageSubHeading>
        <Box
          display="flex"
          flexDirection={{ base: "column", sm: "column", xl: "row" }}
          gap="4"
        >
          <SubTip
            title="Consider your interests, strengths and weaknesses"
            desc="Think to yourself, what do I like doing, what am I good at?
            Think about your strengths and weaknesses, and base your job search around that and you will
            find yourself with doing work that is easy and/or enjoyable"
            bgImage={selfExamine}
          />
          <SubTip
            title="Analyse your long term goals"
            desc="Do you have long term plan in mind? If so, consider how and if this job fits into that plan.
            If you want to see yourself as the manager of a business in 10 years, ask your self, what path will get me there?"
            bgImage={longTermPlan}
          />
          <SubTip
            title="Ask yourself what you want"
            desc="Some want a job with high pay, some want a flexible job, some want an easy job, some want a busy job to keep themselves occupied, some want a good work life balance.
            It is important that you realise what you want, and what you need."
            bgImage={considerWants}
          />
        </Box>
        <PageSubHeading
          bg={useColorModeValue("blackAlpha.50", "blue.700")}
          padding="4"
          borderRadius="md"
          shadow="sm"
        >
          2. The Resume
        </PageSubHeading>
        <Box
          display="flex"
          flexDirection={{ base: "column", sm: "column", xl: "row" }}
          gap="4"
        >
          <SubTip
            title="Keep it short, and keep it on topic and keep it relevant"
            desc="The more you say, the less people remember. Unless provided with good reason, a shorter resume would be easier to digest and more engaging. Also make sure not to use the same resume for each job, or you will find yourself including irrelevant information."
            bgImage={shortResume}
          />
          <SubTip
            title="Highlight your skills"
            desc="Employers are not only interested in your past work experience, they are interested in your skills and beliefs. If you believe you work well with other people, then put that in.
            Avoid twisting the truth although, or you will only give yourself headaches at a later date."
            bgImage={highlightSkills}
          />
          <SubTip
            title="Include external links about you"
            desc="Whilst it is important you keep your resume short, if an employer wants more information having external links such as linkedin will provide extra information if needed.
            You will need to make sure that your online presence is professional if you do this."
            bgImage={externalLinks}
          />
        </Box>
        <PageSubHeading
          bg={useColorModeValue("blackAlpha.50", "blue.700")}
          padding="4"
          borderRadius="md"
          shadow="sm"
        >
          3. The Interview
        </PageSubHeading>
        <Box
          display="flex"
          flexDirection={{ base: "column", sm: "column", xl: "row" }}
          gap="4"
        >
          <SubTip
            title="Dress professionally"
            desc="Many people will judge you as soon as they see what you wear, often even perceiving you to be more intelligent if you wear formal attire.
            You always want to make a good first impression, and this is one way to do that."
            bgImage={professionalAttire}
          />
          <SubTip
            title="Have questions and be engaged"
            desc="Asking questions will give the impression that you are engaged and interested in the job. It will also make the life of your employer easier as they may find themselves unsure of what to say."
            bgImage={beEngaged}
          />
          <SubTip
            title="Tell the truth"
            desc="Exaggerations and straight up lies will come back to haunt you one day, possibly even in that interview. It may also be incredibly obvious that you are bending the truth and will not give a good first impression."
            bgImage={confused}
          />
        </Box>
        <PageSubHeading
          bg={useColorModeValue("blackAlpha.50", "blue.700")}
          padding="4"
          borderRadius="md"
          shadow="sm"
        >
          4. The Job
        </PageSubHeading>
        <Box
          display="flex"
          flexDirection={{ base: "column", sm: "column", xl: "row" }}
          gap="4"
        >
          <SubTip
            title="Try to be adaptable and open to change"
            desc="Sometimes change can be difficult in a workplace, although showing that you are capable of facing challenges and working as a team."
            bgImage={change}
          />
          <SubTip
            title="Display strong organizational skills"
            desc="A strong set of organizational and time management skills will boost your productivity whilst also showing that you take pride in your work and are reliable."
            bgImage={bookshelf}
          />
          <SubTip
            title="Make friendships and be a team player"
            desc="Undoubtedly, you won't be leaving your workplace any time soon which is why it is crucial that you build friendships with your colleagues and strive to be a respectful and easy to work with."
            bgImage={friendship}
          />
        </Box>
      </Box>
    </PageSetup>
  );
}

export default JobTips;

import { site } from "./site";

export const schedulePage = {
  title: "Schedule a Free Consultation | i3Developers Lafayette, LA",
  description:
    "Schedule a free discovery call with i3Developers, a Lafayette web design, SEO, and digital marketing agency. Pick a time that works for you.",
  eyebrow: "Schedule",
  heading: "Choose a time to talk about the project.",
  lead:
    "Pick a 30-minute slot. Bring a few notes about what the website should do next, and the team can walk through priorities, timeline, and a rough scope.",
  steps: [
    {
      title: "Pick a time",
      text: "Use the calendar below to select a 30-minute slot that fits your schedule. Same-week and next-day availability is common."
    },
    {
      title: "Share the basics",
      text: "Current website URL, top services you want visibility for, and any examples of work you admire help the team prep smarter."
    },
    {
      title: "Walk through priorities",
      text: "The call covers goals, audience, search opportunity, and what a better website should produce. No hard pitch, just clear next steps."
    }
  ],
  faqs: [
    {
      question: "Is the consultation really free?",
      answer:
        "Yes. The first 30-minute discovery call is free with no obligation. It is a chance to understand your goals and see if the team is a good fit."
    },
    {
      question: "What should I prepare before the call?",
      answer:
        "Have your current website URL handy, know which services or products drive the most business, and bring any examples of websites you like. A rough budget range or timeline helps too."
    },
    {
      question: "Can I schedule for someone else in my company?",
      answer:
        "Absolutely. Just include their name and role in the scheduling form so the team knows who to expect on the call."
    },
    {
      question: "What if none of these times work?",
      answer:
        `Call i3Developers directly at ${site.phone} or visit the contact page. The team can often accommodate times outside the calendar's default availability.`
    }
  ]
};

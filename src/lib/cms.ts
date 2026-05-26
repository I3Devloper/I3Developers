import { services } from "@/data/services";
import { caseStudies } from "@/data/proof";

export const cms = {
  async getServices() {
    return services;
  },
  async getCaseStudies() {
    return caseStudies;
  }
};

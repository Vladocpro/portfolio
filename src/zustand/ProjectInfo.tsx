import create from "zustand";
import {projects} from "../constants";

interface ProjectStore {
   title: string;
   description: string;
   github?: string;
   website?: string;
   demoAccount: boolean;
   setProjectData: (payload: ProjectPayload) => void;
}

export interface ProjectPayload{
   title: string;
   description: string;
   github?: string;
   website?: string;
   demoAccount: boolean;
}

const useProjectData = create<ProjectStore>((set) => ({
   title: projects.ecommerce.title,
   description: projects.ecommerce.description,
   github: projects.ecommerce.github,
   website: projects.ecommerce.website,
   demoAccount: true,
   setProjectData: (payload: ProjectPayload) => {
      set({
         title: payload.title,
         description: payload.description,
         github: payload.github,
         website: payload.website,
         demoAccount: payload.demoAccount
      })
   }
}));

export default useProjectData;

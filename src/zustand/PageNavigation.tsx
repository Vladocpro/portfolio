import create from "zustand";

interface ActiveSectionStore {
   activeSection: string;
   setActiveSection: (payload: string) => void;
}


const useActiveSection = create<ActiveSectionStore>((set) => ({
   activeSection: "about",
   setActiveSection: (payload: string) => {
      set({activeSection: payload})
   },
}));

export default useActiveSection;

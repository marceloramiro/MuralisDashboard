export interface Entrant {
  name: string;
  course: string;
  state: string;
  city: string;
}

export const createEntrant = async (entrant: Entrant) => {
  return Promise.resolve({ data: entrant });
};

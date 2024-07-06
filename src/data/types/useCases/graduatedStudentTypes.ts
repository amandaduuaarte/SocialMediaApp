export namespace TGraduatedStudent {
    export type Params = {
      id: number;
      email: string;
    };
  
    export type Response = {
      id: number;
      data: {
        isGraduated: boolean;
        daysForGraduation: number;
      };
    };
  }
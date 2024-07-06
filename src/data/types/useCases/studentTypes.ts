export namespace TStudent {
    export type Params = {
      name: string;
      email: string;
      age: number;
      class: string;
    };
  
    export type RemoveStudentParams = {
      id: number;
      email: string;
    };
  
    export type GetStudent = {
      id: number;
      name: string;
    };
  
    export type Response = {
      body: {
        id: number;
        token: string;
        message?: string;
      };
    };
  }
  
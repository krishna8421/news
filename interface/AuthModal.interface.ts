export interface IAuthModal {
  value: boolean;
  type: IAuthModalType;
}

export type IAuthModalType = "login" | "register" | "close";

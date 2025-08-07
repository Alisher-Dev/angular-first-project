//headers
export interface INavigate {
  to: string;
  title: string;
}

//product list btn
export interface IButtonList {
  id: number;
  text: string;
  active: boolean;
  prod: IButtonActive;
}

export interface IButtonActive {
  title: string;
  desc: string;
  link: string;
  banner: string;
}

//trust content
export interface IContentTrust {
  title: string;
  desc: string;
}

//news commnet
export interface IComment {
  title: string;
  desc: string;
  avatar: string;
  name: string;
  position: string;
}

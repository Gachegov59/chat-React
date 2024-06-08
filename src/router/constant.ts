class RoutesConstant {
  BASE!: string;
  LOGIN!: string;
  ERROR!: string;

  constructor() {
    this.BASE = '/';
    this.LOGIN = '/login';
    this.ERROR = '*';
  }
}

export default new RoutesConstant();

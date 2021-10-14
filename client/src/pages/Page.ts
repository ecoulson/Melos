import PageType from "./PageType";

export default abstract class Page<T extends {} = {}> {
  private pageType: PageType;
  private pageProps: T;

  constructor(type: PageType, props: T) {
    this.pageType = type;
    this.pageProps = props;
  }

  get type() {
    return this.pageType;
  }

  get props(): T {
    return this.pageProps
  }
}

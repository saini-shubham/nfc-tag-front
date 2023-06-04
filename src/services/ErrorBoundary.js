
const retryPageLoading = () => {
    const pageHasAlreadyBeenForceRefreshed = JSON.parse(
      window.localStorage.getItem(PageHasBeenForceRefreshed) || "false"
    ) as boolean;
  
    if (!pageHasAlreadyBeenForceRefreshed) {
      window.localStorage.setItem(PageHasBeenForceRefreshed, "true");
      return window.location.reload();
    } else {
      window.localStorage.setItem(PageHasBeenForceRefreshed, "false");
    }
  };
  
  interface ErrorBoundaryProps {
    children: React.ReactNode;
  }
  export class ErrorBoundary extends React.Component<ErrorBoundaryProps, { hasError: boolean }> {
    constructor(props: Readonly<ErrorBoundaryProps>) {
      super(props);
      this.state = { hasError: false };
    }
    componentDidCatch(error: unknown, info: unknown) {
      retryPageLoading();
      this.setState({ hasError: true });
      console.log(error, info);
    }
    render() {
      if (this.state.hasError) {
        return <>Your error component</>;
      }
      return this.props.children;
    }
  }
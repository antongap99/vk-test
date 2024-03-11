import {
    Component, ReactNode, Suspense,
} from 'react';
import style from './ErrorBoundary.module.css';
import {PageError} from "../../../../Widget/PageError";


interface ErrorBoundaryProps {
	className?: string;
	children: ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    static getDerivedStateFromError(error: Error) {
	    console.log(error)
        return { hasError: true };
    }

    componentDidCatch(error: Error) {
        console.log('error', error);
    }

    render() {
        const { hasError } = this.state;
        const {  children } = this.props;

        if (hasError) {
            return (
                <Suspense fallback="...loading">
                    <PageError />
                </Suspense>
            );
        }

        return <div className={style.ErrorBoundary}>{children}</div>;
    }
}

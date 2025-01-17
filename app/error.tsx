'use client';

interface Props {
    error: Error;
    reset: () => void;
}
const ErrorPage = ({ error, reset }: Props) => {
    console.log('Error: ', error);

    return (
        <>
            <div>An unexpected error has occurred.</div>
            <p>Error: {error.message}</p>
            <button onClick={() => reset()} className="btn">Retry</button>
        </>
    )
}

export default ErrorPage



/* 

-> when an unexpected error occur at production app then a page displayed which display a msg: "Application error", to customize this 
page we can create this error.tsx file and write custom msg
-> Inside this component we should access the error which occurred and reset function to retry the process or action.
-> Next js automatically pass the error object and reset function to this component.
-> In real application we should log this error using logging service so instead of logging it to server that is only visible to client
we should log it somewhere permanent so we can go and identify the issue. there are multiple logging service available like sentry.
-> we can have error pages or error files at different level of application route. currently we have error file inside app directory 
and this can catch any error in any pages of our application we can also create custom error page for specific part of our application.
for ex we can create error.tsx inside users folder and this error.tsx file is going to catch all error under users folder.

-> normally we just create one error page at app route directory.

-> we cannot capture error from RootLayout(layout.tsx) so we have to create a separate file for layout.tsx called 'global-error.tsx' 
inside app folder ut normally we don't need this file.

*/
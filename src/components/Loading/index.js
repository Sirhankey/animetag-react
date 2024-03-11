import React from 'react';
import { Spinner } from 'reactstrap';

const LoadingSpinner = (isLoading) => {

    return isLoading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Spinner color="primary" style={{ width: '3rem', height: '3rem' }} />
        </div>
    ) : null;
};

export default LoadingSpinner;

import { useState, useEffect } from "react";
import CircleLoader from "react-spinners/CircleLoader";

function Spinner() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
    };

    return (
        <div style={containerStyle}>
            {loading && (
                <div className="flexspinner">
                    <CircleLoader
                        color="#FF0000"
                        loading={loading}
                        margin={2}
                        size={50}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                    <div className="bg-danger mt-3  p-2 rounded text-white">
                        <h5>Loading...</h5>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Spinner;

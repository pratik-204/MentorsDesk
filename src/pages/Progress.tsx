import React from "react";


function Progress() {
    return(
        <div>
            <h2>This is your Progress</h2>
            <div style={{ width: "100%", background: "#eee", borderRadius: "10px", marginTop: "20px" }}>
                <div style={{ width: "70%", background: "#4caf50", padding: "10px,", borderRadius: "10px", color: "white" }}>
                70% complete
                </div>
            </div>
        </div>
    );
}

export default Progress;
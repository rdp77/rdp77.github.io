import React from "react";

const HardwareMaintenanceManagement: React.FC = () => {
    return (
        <div>
            <h2>Hardware Maintenance Management</h2>
            <p>
                This application aims to perform management of Hardware with a special method to do prediction.
                prediction, the prediction methods used are MTBF (Mean Time Between Failure) and MTTR (Mean Time To
                Repair). So that this application can predict when the time they are damaged since the first check
                and when it is time to repair when damage occurs. This application also uses QR Code to detect
                MTBF and MTTR along with analytics of the hardware used.
            </p>
            <p>
                <b>Laravel Framework</b> is the first choice for the development process, because they are powerful,
                easy and fast. As for mobile itself, it uses <b>Flutter Framework</b>, and the last one uses <b>REST
                API</b>.
            </p>
            <h4>Tech Stacks :</h4>
            <ul>
                <li>- Laravel Framework</li>
                <li>- MySQL</li>
                <li>- Rest API</li>
                <li>- Flutter</li>
                <li>- Laragon for Local Development</li>
            </ul>
        </div>
    );
};

export default HardwareMaintenanceManagement;

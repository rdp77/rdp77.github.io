import React from "react";

const FarmerDistribution: React.FC = () => {
    return (
        <div>
            <h2>Farmer Distribution</h2>
            <p>
                This application aims to introduce raw materials and suppliers that have been registered for farmers.
                so that farmers can find out what raw materials are needed for planting and where they can sell them at
                high prices based on recommended suppliers. where they can sell at high prices based on recommended
                suppliers.
            </p>
            <p>
                This application is made with 2 versions, namely Back End and Mobile, where the Back End uses the <b>Laravel
                Framework</b> and for mobile using <b>Flutter</b>, while for communication they use <b>REST API</b> so
                that data can be synchronized between mobile and backend. so that data can be synchronized
                between mobile and backend.
            </p>
            <h4>Tech Stacks :</h4>
            <ul>
                <li>- Laravel Framework</li>
                <li>- MySQL</li>
                <li>- Flutter</li>
                <li>- Laragon for Local Development</li>
            </ul>
        </div>
    );
};

export default FarmerDistribution;

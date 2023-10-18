import React from "react";

interface FilterButtonsProps {
    categories: string[];
    filterKey: string;
    onFilterChange: (key: string) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({categories, filterKey, onFilterChange}) => {
    const handleFilterButtonClick = (category: string) => {
        onFilterChange(category);
    };

    const renderedFilterButtons = categories.map((category) => (
        <div key={category} className="btn-group mouse-hover">
            <label data-text={category} className={filterKey === category ? "glitch-effect" : ""}>
                <input
                    type="radio"
                    name="fl_radio"
                    value={`.${category}`}
                    onClick={() => handleFilterButtonClick(category)}
                />
                {category}
            </label>
        </div>
    ));

    return <>
        <div className="filter-menu">
            <div className="filters">
                <div className="btn-group mouse-hover">
                    <label data-text="All" className={filterKey === "*" ? "glitch-effect" : ""}>
                        <input
                            type="radio"
                            name="fl_radio"
                            value=".box-item"
                            onClick={() => handleFilterButtonClick("*")}
                        />
                        All
                    </label>
                </div>
                {renderedFilterButtons}
            </div>
        </div>
    </>;
};

export default FilterButtons;

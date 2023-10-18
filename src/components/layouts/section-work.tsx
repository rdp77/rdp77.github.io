'use client'

import React, {useEffect, useRef, useState} from "react";
import Isotope from "isotope-layout";
import {portfolioData, uniqueCategories} from "@/data/portfolio";
import PortfolioSection from "@/components/layouts/section-portfolio";
import FilterButtons from "@/components/filtered-button";

export default function WorkSection() {
    // init one ref to store the future isotope object
    const isotope = useRef<Isotope | null>();
    // store the filter keyword in a state
    const [filterKey, setFilterKey] = useState("*");

    useEffect(() => {
        if (typeof window !== "undefined") {
            const Isotope = require("isotope-layout");
            isotope.current = new Isotope(".section.works .box-items", {
                itemSelector: ".box-item",
            });
        }

        return () => {
            if (isotope.current) {
                isotope.current.destroy();
            }
        };
    }, []);

    // handling filter key change
    useEffect(() => {
        if (filterKey === "*") isotope.current?.arrange({filter: `*`});
        else isotope.current?.arrange({filter: `.${filterKey}`});
    }, [filterKey]);

    const categories = uniqueCategories.filter((category) => !category.includes(' '));

    return (
        <div className="section works" data-scroll-target="true">
            <div className="content">
                <FilterButtons categories={categories} filterKey={filterKey} onFilterChange={setFilterKey}/>
                <PortfolioSection portfolioData={portfolioData}/>
                <div className="clear"></div>
            </div>
        </div>
    );
}

import React from "react";
import { Customers } from "./Customers";
import { Header } from "./Header";
import { HeroCarousel } from "./HeroCarousel";
import { Testimonials } from "./Testimonials";
import { TopCourses } from "./TopCourses";

export function HomePage() {
    return (
        <div className="px-10">
            <Header />
            <HeroCarousel className="pt-6" />
            <Customers customers={customers} />
            <TopCourses
                categoriesInfo={categoriesInfo}
                coursesInCategory={coursesInCategory}
            />
            <Testimonials />
        </div>
    );
}

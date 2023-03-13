import React from "react"
import './discount.css'

export const Discount = () => {
    return (
        <section className="discount">
            <div className="inside_discount">
            
                <div className="section_1">
                    <div className="caption-xl">
                        <p>10%</p>
                        <p>-</p>
                        <h3>Discount on your first order.</h3>
                    </div>

                </div>
                <div className="section_2">
                    <div className="caption-xxl">
                        <h3>Your Skin Will Thank You.</h3>
                        <p>-</p>
                        <p>Start your skincare today.</p>
                    </div>
                    <div className="inside_section_2">
                        <p>Shop Soaps →</p>
                    </div>
                </div>
               
            </div>
        </section>
    );
};
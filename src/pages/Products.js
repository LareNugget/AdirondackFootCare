import React from 'react';

const classes = {
    container: 'container mx-auto h-full mt-2 overflow-y-auto',
    heading: 'h-8 w-11/12 md:w-1/2 lg:w-1/3 bg-green-900 text-white text-xs items-center text-center mx-auto mt-4 md:mt-8 pt-2',
    bioCard: "m-4 lg:h-1/3 flex flex-col lg:flex-row bg-green-900",
    bioDescription: "container p-4 text-white text-xs md:text-xs lg:text-sm xl:text-md",  
};

function Products() {
    return (
        <div className={classes.container}>
            <div className={classes.bioContainer}>
                <div className={classes.heading} style={{fontFamily: 'CortisaProLight', fontWeight: 'bold', letterSpacing: '2px', borderRadius: '10px', border: '2px solid black'}}>
                    Podiatry Products Available Purchase!
                </div>
                
                {/* Custom Orthotics */}
                <div className={classes.bioCard} style={{borderRadius: '20px', border: '2px solid white', backgroundColor: 'rgba(0, 0, 0, 0.75)'}}>
                    Custom Orthotics
                </div>

                {/* Support Braces */}
                <div className={classes.bioCard} style={{borderRadius: '20px', border: '2px solid white', backgroundColor: 'rgba(0, 0, 0, 0.75)'}}>

                </div>

                {/* Dolorclast */}
                <div className={classes.bioCard} style={{borderRadius: '20px', border: '2px solid white', backgroundColor: 'rgba(0, 0, 0, 0.75)'}}>
                </div>

            </div>
        </div>
    )
}

export default Products;

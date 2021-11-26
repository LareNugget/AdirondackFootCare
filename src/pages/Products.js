import React from 'react';

const classes = {
    container: 'container mx-auto h-full overflow-y-auto',
    bioContainer: 'container mx-auto h-5/6 w-5/6 mt-2 overflow-y-auto',
    heading: 'h-12 w-full bg-black text-white text-center text-xs md:text-xs lg:text-xl md:pt-4 lg:pt-2 mb-2 mt-2 pt-4',
    bioCard: "mb-2 w-full md:h-1/6 flex flex-col md:flex-row",
    bioNameplate: "w-full h-1/3 md:w-1/3 md:h-full ",
    bioDescription: "w-full h-full md:w-2/3 p-4 text-white text-xs md:text-sm lg:text-md xl:text-sm", 
};

function Products() {
    return (
        <div className={classes.container}>
            <div className={classes.bioContainer}>
                <div className={classes.heading} style={{fontFamily: 'CortisaProLight', fontWeight: 'bold', letterSpacing: '2px', borderRadius: '10px', border: '2px solid lightgreen'}}>
                    Podiatry Products We Sell!
                </div>
                
                {/* Custom Orthotics */}
                <div className={classes.bioCard} style={{borderRadius: '20px', border: '2px solid white', backgroundColor: 'rgba(0, 0, 0, 0.75)'}}>

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

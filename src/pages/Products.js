import React from 'react';

const classes = {
    container: 'container mx-auto h-full pt-16 overflow-y-auto text-center',
    heading: 'h-8 w-4/5 md:w-2/3 bg-green-900 text-white text-xs items-center text-center mx-auto mt-4 md:mt-8 pt-2 mb-2',
    infoCard: "w-4/5 m-2 xl:w-1/3 h-24 bg-green-900 inline-flex bg-green-600",
};

function Products() {
    return (
        <div className={classes.container}>
            <div className={classes.bioContainer}>
                <div className={classes.heading} style={{fontFamily: 'CortisaProLight', fontWeight: 'bold', letterSpacing: '2px', borderRadius: '10px', border: '2px solid black'}}>
                    Products available for purchase!
                </div>
                
                <div className={classes.infoCard} style={{borderRadius: '10px', border: '2px solid black', fontFamily: 'CortisaProLight', fontWeight: 'bold', letterSpacing: '2px'}}>
                    <div className='h-full w-1/3 p-1'>
                    </div>
                    <div className='h-full w-2/3 text-center'>
                        <div className='mt-6 text-white text-xs lg:text-sm lg:mt-4'>
                            Creams
                        </div>
                    </div>
                </div>

                <div className={classes.infoCard} style={{borderRadius: '10px', border: '2px solid black', fontFamily: 'CortisaProLight', fontWeight: 'bold', letterSpacing: '2px'}}>
                    <div className='h-full w-1/3 p-1'>
                    </div>
                    <div className='h-full w-2/3 text-center'>
                        <div className='mt-6 text-white text-xs lg:text-sm lg:mt-4'>
                            Balms
                        </div>
                    </div>
                </div>

                <div className={classes.infoCard} style={{borderRadius: '10px', border: '2px solid black', fontFamily: 'CortisaProLight', fontWeight: 'bold', letterSpacing: '2px'}}>
                    <div className='h-full w-1/3 p-1'>
                    </div>
                    <div className='h-full w-2/3 text-center'>
                        <div className='mt-6 text-white text-xs lg:text-sm lg:mt-4'>
                            Gels
                        </div>
                    </div>
                </div>

                <div className={classes.infoCard} style={{borderRadius: '10px', border: '2px solid black', fontFamily: 'CortisaProLight', fontWeight: 'bold', letterSpacing: '2px'}}>
                    <div className='h-full w-1/3 p-1'>
                    </div>
                    <div className='h-full w-2/3 text-center'>
                        <div className='mt-6 text-white text-xs lg:text-sm lg:mt-4'>
                            Wraps
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;

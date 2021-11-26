import React from 'react';
import staff_galluzzo from '../images/staff_galluzzo.jpg';

const classes = {
    container: 'container mx-auto h-full pt-4 overflow-y-auto',

    bioContainer: 'container mx-auto h-5/6 mt-2 overflow-y-auto',

    heading: 'h-16 bg-black text-white text-center text-xs md:text-xs lg:text-xl px-1 py-6 mx-4 md:mx-48 md:py-5',

    bioCard: "mb-2 md:h-1/3 flex flex-col md:flex-row",
    bioNameplate: "w-full h-1/3 md:w-1/3 md:h-full",
    bioDescription: "container p-4 text-white text-xs md:text-sm lg:text-md xl:text-lg", 
}

function Staff() {
    return (
        <div className={classes.container}>
            <div className={classes.heading} style={{fontFamily: 'CortisaProLight', fontWeight: 'bold', letterSpacing: '2px', borderRadius: '10px', border: '2px solid lightgreen'}}>
                Meet our doctors {'&'} staff members!
            </div>

            <div className={classes.bioContainer}>
                
                {/* Dr. Salvatore Galluzzo */}
                <div className={classes.bioCard} style={{borderRadius: '20px', border: '2px solid white', backgroundColor: 'rgba(0, 0, 0, 0.75)'}}>
                    <div className={classes.bioNameplate} >
                        <div className="h-3/4 w-full text-center align-middle">
                            <div className="h-1 md:h-3" />
                            <img className="h-5/6 mx-auto mb-2" src={staff_galluzzo} alt="" style={{borderRadius: '10px', border: '2px solid lightgreen'}} />
                        </div>
                        <div className="h-1/4 w-full text-center font-bold text-white text-xs md:text-sm lg:text-lg" style={{fontFamily: 'CortisaProLight', letterSpacing: '2px'}}>
                            <p>
                                Dr. Salvatore Galluzzo
                            </p>
                            <p className="text-xs" style={{opacity: '60%', letterSpacing: '5px'}}>
                                Podiatrist {'&'} Owner
                            </p>
                        </div>
                    </div>

                    <div className={classes.bioDescription} style={{fontFamily: 'Helvetica', fontWeight: 'bold', letterSpacing: '1px'}}>
                        <div className="inline-block md:mt-12 lg:md-12">
                            Dr. Salvatore Galluzzo is the owner of Adirondack Foot Care. After graduating from the New York College of Podiatric Medicine in 1986, 
                            Dr. Galluzzo practiced out of ------- in Waterford, New York before opening Adirondack Foot Care in Clifton Park in 1991.
                            In addition to the many patients he's seen in the office, Dr. G has also spent more than 25 years performing podiatric surgeries!
                        </div>
                    </div>
                </div>

                {/* Dr. Douglas Mason */}
                <div className={classes.bioCard} style={{borderRadius: '20px', border: '2px solid white', backgroundColor: 'rgba(0, 0, 0, 0.75)'}}>
                    <div className={classes.bioNameplate} >
                        <div className="h-3/4 w-full text-center align-middle">
                            <div className="h-1 md:h-3" />
                            <img className="h-5/6 mx-auto mb-2" src={staff_galluzzo} alt="" style={{borderRadius: '10px', border: '2px solid lightgreen'}} />
                        </div>
                        <div className="h-1/4 w-full text-center font-bold text-white text-xs md:text-sm lg:text-lg" style={{fontFamily: 'CortisaProLight', letterSpacing: '2px'}}>
                            <p>
                                Dr. Douglas Mason
                            </p>
                            <p className="text-xs" style={{opacity: '60%', letterSpacing: '5px'}}>
                                Podiatrist
                            </p>
                        </div>
                    </div>

                    <div className={classes.bioDescription} style={{fontFamily: 'Helvetica', fontWeight: 'bold', letterSpacing: '1px'}}>
                        <div className="inline-block md:mt-12 lg:md-12">
                            Dr. Salvatore Galluzzo is the owner of Adirondack Foot Care. After graduating from the New York College of Podiatric Medicine in 1986, 
                            Dr. Galluzzo practiced out of ------- in Waterford, New York before opening Adirondack Foot Care in Clifton Park in 1991.
                            In addition to the many patients he's seen in the office, Dr. G has also spent more than 25 years performing podiatric surgeries!
                        </div>
                    </div>
                </div>

                {/* Candida */}
                <div className={classes.bioCard} style={{borderRadius: '20px', border: '2px solid white', backgroundColor: 'rgba(0, 0, 0, 0.75)'}}>
                    <div className={classes.bioNameplate} >
                        <div className="h-3/4 w-full text-center align-middle">
                            <div className="h-1 md:h-3" />
                            <img className="h-5/6 mx-auto mb-2" src={staff_galluzzo} alt="" style={{borderRadius: '10px', border: '2px solid lightgreen'}} />
                        </div>
                        <div className="h-1/4 w-full text-center font-bold text-white text-xs md:text-sm lg:text-lg" style={{fontFamily: 'CortisaProLight', letterSpacing: '2px'}}>
                            <p>
                                Candida
                            </p>
                            <p className="text-xs" style={{opacity: '60%', letterSpacing: '5px'}}>
                                Office Manager
                            </p>
                        </div>
                    </div>

                    <div className={classes.bioDescription} style={{fontFamily: 'Helvetica', fontWeight: 'bold', letterSpacing: '1px'}}>
                        <div className="inline-block md:mt-12 lg:md-12">
                            Candida has been with Adirondack Foot Care for over 10 years. All four of her boys went to Shen. She loves the outdoors,
                            hiking, camping, kayaking in the Adirondacks. She loves spending time with her kids and her grandchild. Candida is always available to the patients
                            here at Adirondack Foot Care and takes pride in the service we provide to each and everyone. Her direct email is chanley@adirondackfootcare.com
                        </div>

                    </div>
                </div>

                {/* Mark */}
                <div className={classes.bioCard} style={{borderRadius: '20px', border: '2px solid white', backgroundColor: 'rgba(0, 0, 0, 0.75)'}}>
                    <div className={classes.bioNameplate} >
                        <div className="h-3/4 w-full text-center align-middle">
                            <div className="h-1 md:h-3" />
                            <img className="h-5/6 mx-auto mb-2" src={staff_galluzzo} alt="" style={{borderRadius: '10px', border: '2px solid lightgreen'}} />
                        </div>
                        <div className="h-1/4 w-full text-center font-bold text-white text-xs md:text-sm lg:text-lg" style={{fontFamily: 'CortisaProLight', letterSpacing: '2px'}}>
                            <p>
                                Brittany
                            </p>
                            <p className="text-xs" style={{opacity: '60%', letterSpacing: '5px'}}>
                                Secretary
                            </p>
                        </div>
                    </div>

                    <div className={classes.bioDescription} style={{fontFamily: 'Helvetica', fontWeight: 'bold', letterSpacing: '1px'}}>
                        <div className="inline-block md:mt-12 lg:md-12">
                            Brittany has been with Adirondack Foot Care since June of 2020. She has a young daughter she calls Em. Brittany loves 
                            spending time and energy with her daughter, as well as enjoying her family. She is the first face you see when visiting 
                            Adirondack Foot Care, with a smile on her face and a willingness to help in every way she can. Her direct email is byork@adirondackfootcare.com
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Staff;

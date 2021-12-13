import React from 'react';
import staff_galluzzo from '../images/staff_galluzzo.jpg';
import staff_mason from '../images/staff_mason.jpg';
import staff_candida from '../images/staff_candida.jpg';
import staff_mark from '../images/staff_mark.jpg';

const classes = {
    container: 'container mx-auto h-full pt-4 overflow-y-auto',

    bioContainer: 'container mx-auto h-5/6 mt-2 overflow-y-auto',

    heading: 'h-16 bg-black text-white text-center text-xs md:text-xs lg:text-xl px-1 py-6 mx-4 md:mx-48 md:py-5',

    bioCard: "mb-2 md:h-1/3 flex flex-col md:flex-row",
    bioDescription: "container p-4 text-white text-xs md:text-sm lg:text-md xl:text-lg", 
}

function Staff() {
    return (
        <div className={classes.container}>
            <div className={classes.heading} style={{fontFamily: 'CortisaProLight', fontWeight: 'bold', letterSpacing: '2px', borderRadius: '10px', border: '2px solid lightgreen'}}>
                Meet our doctors {'&'} staff members!
            </div>

            <div className={classes.bioContainer}>

                {/* Salvatore Galluzzo */}
                <div className={classes.bioCard} style={{borderRadius: '20px', border: '2px solid white', backgroundColor: 'rgba(0, 0, 0, 0.95)'}}>

                    <div className="w-1/2 mx-auto md:h-full md:w-1/3">
                        <img className="h-5/6 mx-auto mt-5" src={staff_galluzzo} alt="" style={{borderRadius: '10px', border: '2px solid lightgreen'}} />
                    </div>
                        

                    <div className={classes.bioDescription} style={{fontFamily: 'Helvetica', fontWeight: 'bold', letterSpacing: '1px'}}>
                        <div className="h-1/8 md:mt-4 md:text-left text-center font-bold text-white" style={{fontFamily: 'CortisaProLight', letterSpacing: '2px'}}>
                            <p className="md:text-xl">
                                Dr. Salvatore Galluzzo
                            </p>
                            <p className="md:text-md" style={{opacity: '60%', letterSpacing: '5px'}}>
                                Podiatrist {'&'} Owner
                            </p>
                        </div>
                        <div className="inline-block pt-4 text-sm">
                            Salvatore Galluzzo, DPM graduated from New York College of Podiatric Medicine in 1986.
                            His education and past work experiences have helped him evolve into one of the most
                            renowned doctors of podiatric medicine in the Capital District of NY. He is a member of the
                            American Podiatric Medical Association.
                            Dr. Galluzzo's experience and kind-hearted nature make patients feel comfortable and at
                            ease. He strives to earn your trust right from the start. He's practiced podiatric medicine for
                            over 30 years, so rest assured you are in the best care.
                            Dr. Galluzzo is also a Delegate of the Northeast Division of NYSPMA.
                        </div>
                    </div>
                </div>

                {/* Dr Mason */}
                <div className={classes.bioCard} style={{borderRadius: '20px', border: '2px solid white', backgroundColor: 'rgba(0, 0, 0, 0.9)'}}>

                    <div className="w-1/2 mx-auto md:h-full md:w-1/3">
                        <img className="h-5/6 mx-auto mt-5" src={staff_mason} alt="" style={{borderRadius: '10px', border: '2px solid lightgreen'}} />
                    </div>
                        

                    <div className={classes.bioDescription} style={{fontFamily: 'Helvetica', fontWeight: 'bold', letterSpacing: '1px'}}>
                        <div className="h-1/8 md:mt-10 md:text-left text-center font-bold text-white" style={{fontFamily: 'CortisaProLight', letterSpacing: '2px'}}>
                            <p className="md:text-xl">
                                Dr. Douglas Mason
                            </p>
                            <p className="md:text-md" style={{opacity: '60%', letterSpacing: '5px'}}>
                                Podiatrist
                            </p>
                        </div>
                        <div className="inline-block pt-4 text-sm">
                            Doug Mason DPM has been with Adirondack Foot Care since 2013, he has since gone on to
                            work for both Adirondack Foot Care and Albany Podiatry. In both offices he a true asset with his
                            surgical expertise and his genuine care for the patients/relationships he builds. Dr Mason
                            covers the entire Capital District as a Home Visit podiatry Care professional. He resides in
                            Clifton Park with his family whom he takes great pride in. A former runner, triathlete, and
                            springboard diver, Dr Mason has also coached diving at both high school and collegiate levels.
                            In his free time, Dr. Mason enjoys cooking and serving as a local youth group leader.
                        </div>
                    </div>
                </div>

                {/* Candida */}
                <div className={classes.bioCard} style={{borderRadius: '20px', border: '2px solid white', backgroundColor: 'rgba(0, 0, 0, 0.9)'}}>

                    <div className="w-1/2 mx-auto md:h-full md:w-1/3">
                        <img className="h-5/6 mx-auto mt-5" src={staff_candida} alt="" style={{borderRadius: '10px', border: '2px solid lightgreen'}} />
                    </div>
                        

                    <div className={classes.bioDescription} style={{fontFamily: 'Helvetica', fontWeight: 'bold', letterSpacing: '1px'}}>
                        <div className="h-1/8 md:mt-10 md:text-left text-center font-bold text-white" style={{fontFamily: 'CortisaProLight', letterSpacing: '2px'}}>
                            <p className="md:text-2xl">
                                Candida
                            </p>
                            <p className="md:text-lg" style={{opacity: '60%', letterSpacing: '5px'}}>
                                Office Manager
                            </p>
                        </div>
                        <div className="inline-block pt-4 text-sm">
                            Candida has been with Adirondack Foot Care for over 10 years. All four of her boys went to
                            Shen. She loves the outdoors, hiking, camping, kayaking in the Adirondacks. She loves spending
                            time with her kids and her grandchild. Candida is always available to the patients here at
                            Adirondack Foot Care and takes pride in the service we provide to each and everyone. Her
                            direct email is chanley@adirondackfootcare.com
                        </div>
                    </div>
                </div>

                {/* Mark */}
                <div className={classes.bioCard} style={{borderRadius: '20px', border: '2px solid white', backgroundColor: 'rgba(0, 0, 0, 0.9)'}}>

                    <div className="w-1/2 mx-auto md:h-full md:w-1/3">
                        <img className="h-5/6 mx-auto mt-5" src={staff_mark} alt="" style={{borderRadius: '10px', border: '2px solid lightgreen'}} />
                    </div>
                        

                    <div className={classes.bioDescription} style={{fontFamily: 'Helvetica', fontWeight: 'bold', letterSpacing: '1px'}}>
                        <div className="h-1/8 md:mt-10 md:text-left text-center font-bold text-white" style={{fontFamily: 'CortisaProLight', letterSpacing: '2px'}}>
                            <p className="md:text-2xl">
                                Mark
                            </p>
                            <p className="md:text-lg" style={{opacity: '60%', letterSpacing: '5px'}}>
                                Secretary
                            </p>
                        </div>
                        <div className="inline-block pt-4 text-sm">
                            Mark is new to the office but has experience in the medical field. You may have seen him at Wellnow in Clifton Park! 
                            Mark is a Shen graduate and lives locally with his family. 
                            In his free time, he likes to get out and play golf! 
                            He is a great addition to the Adirondack Foot Care team. 
                            Please help us welcome him!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Staff;

import React from 'react';
import './team.css';
import teamdata from './teamData';

const Team = () => {
    return (
        <>
            <section className='container'>
                <div className='row '>
                    <div className='col-md-6 col-sm-2 col-lg-12'>
                        <h2 className='text-black text-center my-5'>Meet Our Team Members</h2>
                    </div>
                    {
                        teamdata.map((values) => {
                            return (
                                <>
                                    {/* <div className='card'>
                                        <div className='shadow card 
                                d-flex 
                                justify-content-center
                                align-items-center p-3 bg-dark rounded-lg
                               
                                '>
                                            <div className='person-img'>
                                                <img src={values.image} className='img-fluid rounded-circle' alt='img1' />
                                            </div>
                                            <div className='person-name my-2'>
                                                <h3 className='text-white'>{values.fname}</h3>
                                            </div>
                                            <div className='info'>
                                                <h6 className='text-white'>{values.designation}</h6>
                                            </div>
                                            <div className='social-icons my-2'>
                                                <a href='#' className='text-white'>
                                                    <i class="fa fa-brands fa-linkedin p-2"></i>
                                                </a>
                                                <a href='#' className='text-white'>
                                                    <i class="fa fa-brands fa-twitter p-2"></i>
                                                </a>
                                                <a href='#' className='text-white'>
                                                    <i class="fa fa-brands fa-github p-2"></i>
                                                </a>
                                            </div>
                                            <button type='button' className='btn btn-secondary btn-lg btn-block'>View Profile</button>
                                        </div>
                                    </div> */}

                                    <div class="col-12 col-sm-8 col-md-6 col-lg-4">
                                        <div class="card mb-5">
                                            <img class="card-img-top bg-dark" src={values.back} alt="Bologna" />
                                            <div class="card-body text-center">
                                                <img class="avatar rounded-circle" src={values.image} alt="Bologna" />
                                                <h4 class="card-title">{values.fname}</h4>
                                                <h6 class="card-subtitle mb-1 text-muted">{values.designation} </h6>
                                                <h9 class="card-subtitle mb-2 text-bold">{values.Batch}</h9>
                                                <p class="card-text">{values.Company} </p>
                                                <div className='social-icons my-2'>
                                                <a href='#' className='text-dark'>
                                                    <i class="fa fa-brands fa-linkedin p-2"></i>
                                                </a>
                                                <a href='#' className='text-dark'>
                                                    <i class="fa fa-brands fa-twitter p-2"></i>
                                                </a>
                                                <a href='#' className='text-dark'>
                                                    <i class="fa fa-brands fa-github p-2"></i>
                                                </a>
                                            </div>
                                            </div>
                                        </div>
                                    </div>


                                </>

                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Team;

/*



*/
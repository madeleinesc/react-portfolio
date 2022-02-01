import React from 'react';
// project images
import moodvies from '../assets/moodvies.png';
import bookClub from '../assets/bookwasbetter.png';
import noteTaker from '../assets/notetaker.png';
import workScheduler from '../assets/workday.png';
import weather from '../assets/weatherdashboard.png';
import textEditor from '../assets/JATE.png';

const Projects = () => {
    return (
        <div className="container p-3">
            <div className="row">
                <div className="col-md-6">
                    <a target="_blank" href="https://rhjeffries.github.io/ideal-telegram/" ><img src={moodvies} alt="moodvies app" className="project-img img-fluid"  /></a>
                    <br />
                    <br />
                    <p className="lead text-start">
                        Moodvies - 2021
                    </p>
                    <a target="_blank" href="https://github.com/RHJeffries/ideal-telegram" className="project-links text-start" data-aos="fade-up"><p>
                        An app that helps you choose movies based on your current mood. Click on the image to view the live project or
                        click here for the project repo.
                    </p></a>
                    <br />
                    <br />
                </div>

                <div className="col-md-6"></div>

                <div className="col-md-6"></div>

                <div className="col-md-6">
                    <a target="_blank" href="https://the-book-was-better-book-club.herokuapp.com/"><img src={bookClub} className="project-img img-fluid" /></a>
                    <br />
                    <br />
                    <p className="lead text-start" >
                        The Book Was Better - 2021
                    </p>
                    <a target="_blank" href="https://github.com/madeleinesc/The-Book-Was-Better" className="project-links text-start" data-aos="fade-up"><p>
                        A book club that reads books based solely on whether they have been turned into movies. Click on the image to
                        view the live project or click here for the project repo.
                    </p></a>
                    <br />
                    <br />
                </div>

                <div className="col-md-6">
                    <a target="_blank" href="https://immense-bastion-97694.herokuapp.com/"><img src={noteTaker} alt="note taker app" className="project-img img-fluid" /></a>
                    <br />
                    <br />
                    <p className="lead text-start" >
                        Note Taker - 2021
                    </p>
                    <a target="_blank" href="https://github.com/madeleinesc/note-taker-app" className="project-links text-start" data-aos="fade-up"><p>
                        Note Taker is an application that can be used to write and save notes. Click on the image to view the live
                        project or click here for the project repo.
                    </p></a>
                    <br />
                    <br />
                </div>

                <div className="col-md-6"></div>

                <div className="col-md-6"></div>

                <div className="col-md-6">
                    <a target="_blank" href="https://madeleinesc.github.io/work-day-scheduler/"><img src={workScheduler} className="project-img img-fluid"  /></a>
                    <br />
                    <br />
                    <p className="lead text-start" >
                        Work Scheduler - 2021
                    </p>
                    <a target="_blank" href="https://github.com/madeleinesc/work-day-scheduler" className="project-links text-start" data-aos="fade-up"><p>
                        A daily scheduler that changes color based on the time of day. Click on the image to view the live project or
                        click here for the project repo.
                    </p></a>
                    <br />
                    <br />
                </div>

                <div className="col-md-6">
                    <a target="_blank" href="https://madeleinesc.github.io/weather-dashboard/"><img src={weather} alt="weather app" className="project-img img-fluid"  /></a>
                    <br />
                    <br />
                    <p className="lead text-start" >
                        Weather Dashboard - 2021
                    </p>
                    <a target="_blank" href="https://github.com/madeleinesc/weather-dashboard" className="project-links text-start" data-aos="fade-up"><p>
                        A 5 day weather dashboard wherein you can search for any city in the world and get not just the daily weather but also the next 5 days of forcast too.
                    </p></a>
                    <br />
                    <br />
                </div>

                <div className="col-md-6"></div>

                <div className="col-md-6"></div>


                <div className="col-md-6">
                    <a target="_blank" href="https://tranquil-waters-73039.herokuapp.com/"><img src={textEditor} className="project-img img-fluid"  /></a>
                    <br />
                    <br />
                    <p className="lead text-start" >
                        PWA Text Editor - 2022
                    </p>
                    <a target="_blank" href="https://github.com/madeleinesc/PWA-Text-Editor" className="project-links text-start" ><p>
                        A simple, downloadable text editor wherein you can write in notes and use offline.
                    </p></a>
                    <br />
                    <br />
                </div>

            </div>
        </div>
    )
}

export default Projects
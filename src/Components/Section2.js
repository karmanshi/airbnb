import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";
import './Section2.scss';
import Container from 'react-bootstrap/Container';
import { isMobile } from 'react-device-detect';

export const Section2 = () => {
    const [state, setState] = useState({
        IsPaused: false,
        IsInside: false,
        IsPlaying: false,
        IsLastPage: false,
        PageSize: (isMobile ? 12 : 6),
        CurrentPageIndex: 1,
        Items: [
            { id: 'v1', video: '/videos/1.mp4', image: '/images/1.jpeg', rating: 4, ratingCount: 50, country: 'United States', comments: 'excellent feedback1', price: 1000 },
            { id: 'v2', video: '/videos/2.mp4', image: '/images/2.jpeg', rating: 4.9, ratingCount: 100, country: 'India', comments: 'excellent feedback2', price: 2000 },
            { id: 'v3', video: '/videos/3.mp4', image: '/images/3.jpeg', rating: 4.7, ratingCount: 150, country: 'United States', comments: 'excellent feedback3', price: 3000 },
            { id: 'v4', video: '/videos/4.mp4', image: '/images/5.png', rating: 5, ratingCount: 500, country: 'India', comments: 'excellent feedback12', price: 4000 },
            { id: 'v5', video: '/videos/5.mp4', image: '/images/6.jpeg', rating: 6.2, ratingCount: 350, country: 'United States', comments: 'excellent feedback4', price: 5000 },
            { id: 'v6', video: '/videos/6.mp4', image: '/images/7.jpeg', rating: 3, ratingCount: 250, country: 'United States', comments: 'excellent feedback5', price: 6000 },
            { id: 'v7', video: '/videos/1.mp4', image: '/images/8.jpeg', rating: 4.5, ratingCount: 520, country: 'United States', comments: 'excellent feedback6', price: 7000 },
            { id: 'v8', video: '/videos/2.mp4', image: '/images/9.jpeg', rating: 8, ratingCount: 51, country: 'United States', comments: 'excellent feedback7', price: 8000 },
            { id: 'v9', video: '/videos/3.mp4', image: '/images/10.jpeg', rating: 9, ratingCount: 53, country: 'United States', comments: 'excellent feedback8', price: 9000 },
            { id: 'v10', video: '/videos/4.mp4', image: '/images/11.jpeg', rating: 2.4, ratingCount: 320, country: 'India', comments: 'excellent feedback9', price: 10000 },
            { id: 'v11', video: '/videos/5.mp4', image: '/images/12.jpeg', rating: 4.5, ratingCount: 240, country: 'United States', comments: 'excellent feedback10', price: 11000 },
            { id: 'v12', video: '/videos/6.mp4', image: '/images/13.jpeg', rating: 4.3, ratingCount: 560, country: 'United States', comments: 'excellent feedback11', price: 12000 }

        ],
        arrPage: []
    })
    const paginate = (page_number) => {       
        const arrPage = state.Items.slice((page_number - 1) * state.PageSize, page_number * state.PageSize)
        setState({ ...state, IsLastPage: (state.CurrentPageIndex === Math.ceil(state.Items.length / state.PageSize) ? true : false), arrPage: arrPage })
    }

    useEffect(() => {
        paginate(state.CurrentPageIndex)
    }, []);
    useEffect(() => {
        paginate(state.CurrentPageIndex)
    }, [state.CurrentPageIndex]);
    const Previuos = () => {
        if (state.CurrentPageIndex === 1) {
            setState(prevState => {
                return { ...prevState, CurrentPageIndex: state.CurrentPageIndex + 1 }
            });
        }
        else if (state.CurrentPageIndex === Math.ceil(state.Items.length / state.PageSize)) {
            setState(prevState => {
                return { ...prevState, CurrentPageIndex: 1 }
            });
        }
        else {
            setState(prevState => {
                return { ...prevState, CurrentPageIndex: state.CurrentPageIndex - 1 }
            });
        }

    }
    const Next = () => {
        if (state.CurrentPageIndex === 1) {
            setState(prevState => {
                return { ...prevState, CurrentPageIndex: state.CurrentPageIndex + 1 }
            });
        }
        else if (state.CurrentPageIndex === Math.ceil(state.Items.length / state.PageSize)) {
            setState(prevState => {
                return { ...prevState, CurrentPageIndex: 1 }
            });
        }
    }
    const OnMouseOver = (id) => {

        let clip = document.querySelector("." + id)
        clip.classList.remove('d-none')
        let img = document.getElementsByClassName("img-" + id)
        for (let i = 0; i < img.length; i++) {
            img[i].className += ' d-none'
        }
        clip.play();
        let PauseButton = document.querySelector(".button-pause-" + id)
        PauseButton.classList.remove('d-none')

        setState(prevState => {
            return { ...prevState, IsPlaying: true, IsInside: true }
        });
    }
    const OnMouseOut = (id) => {
        let clip = document.querySelector("." + id)
        clip.classList.add('d-none')       
        Array.from(document.querySelectorAll(".img-" + id)).forEach((el) => el.classList.remove('d-none'));       
        clip.pause();
        let PauseButton = document.querySelector(".button-pause-" + id)
        PauseButton.classList.add('d-none')
        let PlayButton = document.querySelector(".button-play-" + id)
        PlayButton.classList.add('d-none')
        setState(prevState => {
            return { ...prevState, IsPlaying: false, IsInside: false }
        });      

    }
    const OnPauseClick = (id) => {        
        let clip = document.querySelector("." + id)       
        clip.pause();

        let PauseButton = document.querySelector(".button-pause-" + id)
        PauseButton.classList.add('d-none')
        let PlayButton = document.querySelector(".button-play-" + id)
        PlayButton.classList.remove('d-none')

        setState(prevState => {
            return { ...prevState, IsPlaying: false }
        });      

    }
    const OnPlayClick = (id) => {       
        let clip = document.querySelector("." + id)       
        clip.play();
        let PlayButton = document.querySelector(".button-play-" + id)
        PlayButton.classList.add('d-none')
        let PauseButton = document.querySelector(".button-pause-" + id)
        PauseButton.classList.remove('d-none')
        setState(prevState => {
            return { ...prevState, IsPlaying: true }
        }); 
    }
    return (
        <Container style={{ marginLeft: '50px', marginRight: '0px', maxWidth: 'calc(100% - 50px)' }}>
            <br></br>
            <div className="_y0ndqr">Plan a trip with help from local Hosts around the world</div>
            <div style={{ textAlign: 'right', paddingRight: '20px' }}>
                <a aria-label={"Plan a trip with help from local Hosts around the world; Show (" + state.Items.length + ")"} href="/s/all?refinement_paths%5B%5D=%2Fplaylists%2F51161&amp;flexible_trip_lengths%5B%5D=one_week&amp;rank_mode=default&amp;click_referer=t%3ASEE_ALL%7Csid%3Af652e16d-af10-4b6c-aa7b-40e63ff4de0d%7Cst%3AEXPERIENCES_SELECTED_TAGS_GROUPING&amp;listing_tags%5B%5D=Tag%3A6951&amp;last_search_session_id=f652e16d-af10-4b6c-aa7b-40e63ff4de0d&amp;search_type=unknown" className="_1sikdxcl">Show ({state.Items.length})</a>
                <button onClick={() => Previuos()} aria-label="Previous" type="button" className={"_6x132n " + (isMobile ? 'd-none' : '')}><span className="_e296pg"><div className="_a7a5sx"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'currentColor', strokeWidth: 5.333333333333333, overflow: 'visible' }} aria-hidden="true" role="presentation" focusable="false"><g fill="none"><path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path></g></svg></div></span></button>
                <button onClick={() => Next()} aria-label="Next" type="button" className={"_6x132n " + (isMobile ? 'd-none' : '')}><span className="_e296pg"><div className="_a7a5sx"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'currentColor', strokeWidth: 5.333333333333333, overflow: 'visible' }} aria-hidden="true" role="presentation" focusable="false"><g fill="none"><path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path></g></svg></div></span></button>
            </div>
            <div className="main d-flex flex-row flex-nowrap example" style={{ width: '100%', overflow: 'scroll' }}>

                {

                    state.arrPage.map((item, index) => {
                        return (

                            <Card key={item.id} className="text-white" style={{ border: 0, padding: '0', minWidth: '225px', minHeight: '390px' }} onMouseOver={() => { OnMouseOver(item.id); }} onMouseOut={() => { OnMouseOut(item.id); }}>
                                <video className={item.id + " d-none"} src={item.video}

                                    type="video/mp4" muted
                                    loop style={{ border: 'solid', width: '225px', height: '280px', borderRadius: 20 }}>
                                </video>
                                <Card.Img className={'img-' + item.id} src={item.image} alt="Card image" style={{ height: '280px' }} />
                                <Card.ImgOverlay className={'img-' + item.id}>
                                </Card.ImgOverlay>
                                <Card.Footer className="text-muted">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><ReactStars count={1} size={24} activeColor="#00000" /></td>
                                                <td> {item.rating}
                                                    ({item.ratingCount})
                                                    ·
                                                    {item.country}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    {item.comments} <br></br>
                                    <strong>From ₹{item.price.toLocaleString()}</strong>/person
                                </Card.Footer>
                                <div style={{ position: "absolute", top: 30, right: '30px' }}>
                                    <button aria-label="Save this Experience" type="button" className="b1vr1agd vlzgbic dir dir-ltr"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'rgba(0, 0, 0, 0.5)', height: '24px', width: '24px', stroke: 'var(--f-mkcy-f)', strokeWidth: 2, overflow: 'visible' }}><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path></svg></button>
                                </div>
                                <div style={{ position: "absolute", bottom: 120, left: '30px' }}>



                                    <button onClick={() => { OnPauseClick(item.id); }} aria-label="Pause Plan The Perfect New York Vacation" type="button" className={"d-none vhemoww dir dir-ltr button-pause-" + item.id}><span className="iluxpwe dir dir-ltr"><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', height: '14px', width: '14px', fill: 'var(--f-mkcy-f)' }} aria-hidden="true" role="presentation" focusable="false"><path d="M13 1v14H9V1zM7 1v14H3V1z"></path></svg></span></button>

                                    <button onClick={() => { OnPlayClick(item.id); }} aria-label="Play Plan The Perfect New York Vacation" type="button" className={"d-none vhemoww dir dir-ltr  button-play-" + item.id}><span className="iluxpwe dir dir-ltr"><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '14px', width: '14px', fill: 'var(--f-mkcy-f)' }}><path d="m4.504 1.0074c-.2305-.134-.5-.171-.7585-.103-.2136.05621-.4026.18157-.5375.35651-.1348.17494-.208.3896-.208.61049v12.2595c.0003.1758.0468.3485.135.5006s.2149.2783.3674.3659c.1524.0876.3253.1335.5011.1331052.1759-.0005052.3485-.0472052.5005-.1356052l10.5075-6.13c.1505-.0884.2753-.2145.362-.3659.0867-.1515.1324002-.3229.1324002-.4975 0-.1745-.0455002-.346-.1321002-.4975-.0866-.1514-.2114-.2777-.3618-.3661z"></path></svg></span></button>


                                </div>
                            </Card>

                        );
                    })}
            </div>
        </Container>
    )
}

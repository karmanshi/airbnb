import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './Section1.scss';
export const Section1 = () => {
  const [state, setState] = useState({ IsLastPage: false, PageSize: 9, CurrentPageIndex: 1, Items: ['Great for groups', 'Family-friendly', 'Animals', 'Arts & Writing', 'Baking', 'Cooking', 'Dance', 'Drinks', 'Entertainment', 'Fitness', 'History & culture', 'Magic', 'Music', 'Social impact', 'Wellness', 'Olympians & Paralympians', 'Designed for accessibility'], arrPage: [] })
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
    setState(prevState => {
      return { ...prevState, CurrentPageIndex: state.CurrentPageIndex - 1 }
    });
  }
  const Next = () => {
    setState(prevState => {
      return { ...prevState, CurrentPageIndex: state.CurrentPageIndex + 1 }
    });

  }

  return (
    <Container id="container1" style={{ marginLeft: '50px', marginRight: '0px', maxWidth: 'calc(100% - 50px)' }} >
      <div className="_1cng36x" style={{ paddingBottom: '40px' }}>New this Week</div>
      <div className="main d-flex flex-row flex-nowrap example" style={{ width: '100%', overflow: 'scroll' }}>
        <Card className="text-white" style={{ border: 0, minWidth: '325px' }}>
          <Card.Img src="images/img1.webp" alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title className="heading1">Collection</Card.Title>
            <Card.Text className="heading">
              Most popular around the world
            </Card.Text>
            <div style={{ position: "absolute", bottom: 35, paddingLeft: '20px' }}>
              <button className='button'>Show All</button>
            </div>
          </Card.ImgOverlay>
        </Card>
        <Card className="text-white" style={{ border: 0, minWidth: '325px' }}>
          <Card.Img src="images/img2.webp" alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title className="heading1">Collection</Card.Title>
            <Card.Text className="heading">
              Great for team building
            </Card.Text>
            <div style={{ position: "absolute", bottom: 35, paddingLeft: '20px' }}>
              <button className='button'>Show All</button>
            </div>
          </Card.ImgOverlay>
        </Card>
        <Card className="text-white" style={{ border: 0, minWidth: '325px' }}>
          <Card.Img src="images/img3.webp" alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title className="heading1">Collection</Card.Title>
            <Card.Text className="heading">
              Fun for the family
            </Card.Text>
            <div style={{ position: "absolute", bottom: 35, paddingLeft: '20px' }}>
              <button className='button'>Show All</button>
            </div>
          </Card.ImgOverlay>
        </Card>
      </div>      
      <div className="d-flex flex-row flex-nowrap example" style={{ width: '100%', overflow: 'scroll', paddingTop: '20px' }}>
        <button className='button1' style={{ width: 'auto', whiteSpace: 'nowrap' }}>Dates</button>
        <button className='button1' style={{ width: 'auto', whiteSpace: 'nowrap' }}>Group size</button>
        <button className='button1' style={{ width: 'auto', whiteSpace: 'nowrap' }}>More filters</button>
        <button onClick={() => Previuos()} aria-label="Previous" type="button" className={"_6x132n " + (state.CurrentPageIndex === 1 ? 'd-none' : '')}><span className="_e296pg"><div className="_a7a5sx"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'currentColor', strokeWidth: 5.333333333333333, overflow: 'visible' }} aria-hidden="true" role="presentation" focusable="false"><g fill="none"><path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path></g></svg></div></span></button>

        {

          state.arrPage.map((item, index) => (

            <button key={index} className='item' style={{ width: 'auto', whiteSpace: 'nowrap' }}>
              {item}
            </button>

          ))}

        <button onClick={() => Next()} aria-label="Next" type="button" className={"_6x132n " + (state.IsLastPage ? 'd-none' : '')}><span className="_e296pg"><div className="_a7a5sx"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'currentColor', strokeWidth: 5.333333333333333, overflow: 'visible' }} aria-hidden="true" role="presentation" focusable="false"><g fill="none"><path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path></g></svg></div></span></button>
      </div>
    </Container>
  )
}

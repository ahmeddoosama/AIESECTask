import React , { Component } from 'react';

import InfiniteScroll from "react-infinite-scroll-component";
import EdiText from 'react-editext'
import axios from 'axios';

import { Card, Row, Col } from "react-bootstrap";

// Imort Styled Component
import { CardSection, TileDesc, Span, CardFooter } from './style.js';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [],
        hasMore: true
    };
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    axios
    .get("https://api-staging.aiesec.org/v2/opportunities", {
      params: {
        access_token:
          "dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c"
      }
    })
    .then(response => {
      this.setState({ 
        data: [...this.state.data, ...response.data.data]
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  onSave = val => {
    console.log('Edited Value -> ', val)
  }

  render() {
    return (
      <CardSection>
        <InfiniteScroll
          dataLength={this.state.data.length}
          next={this.fetchData}
          hasMore={this.state.hasMore}
          loader={<h4>Loading...</h4>}
        >
          {this.state.data.map((item, index) => (
            <div className="container">
              <Card>
                  <a href="#">
                    <Row>
                        <Col md={2}>
                          <Card.Img src={item.profile_photo_urls.original} alt="Card image" />
                        </Col>
                        <Col md={10}>
                          <Card.Body>
                            <Card.Title>
                            <EdiText
                              type="text"
                              value={item.title}
                              onSave={this.onSave}
                            />
                            </Card.Title>
                            <TileDesc>
                                <Span>{item.status}</Span>
                                <Span className="dots"></Span>
                                <Span>10 Feb 2020</Span>
                                <Span className="dots"></Span>
                                <Span>6 weeks</Span>
                            </TileDesc>
                            <CardFooter>
                                <div className="company-name">
                                    <img className="company-logo" src={item.profile_photo_urls.original} alt="Myself My World Bursa image" />
                                    <TileDesc className="com-name">{item.title}</TileDesc>
                                </div>

                                <div className="counter">
                                    <TileDesc><i className="fa fa-user"></i>  {item.applications_count}</TileDesc>
                                </div>
                            </CardFooter>
                          </Card.Body>
                        </Col>
                    </Row>
                  </a>
              </Card>
            </div>
          ))}
        </InfiniteScroll>
    </CardSection>
    )
  }
}

export default Cards;